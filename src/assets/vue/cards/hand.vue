<template>
    <v-card flat>
        <v-card-text>
            <v-alert :value="hand.length > 3" color="error" icon="warning">
                You currently exceed the maximum allowed hand number. Discard down to 3 cards before the start of your next session.
            </v-alert>
            <v-alert :value="hand.length == 0" color="error" icon="warning">
                There are no cards in your hand. Open a loot box and add some cards.
            </v-alert>
            <div v-if="handIndex > 0">
                <card :card="hand[handIndex - 1]"></card>
                <p style="text-align: center; display: grid;">
                    <v-btn style="grid-column-start: 1; grid-column-end: 2;" :disabled="handIndex <= 1" v-on:click="prevCard"><v-icon>keyboard_arrow_left</v-icon></v-btn>
                    <span style="grid-column-start: 2; grid-column-end: 3;">{{handIndex}} / {{hand.length}}</span>
                    <v-btn style="grid-column-start: 3; grid-column-end: 4;" dark color="blue" v-on:click="play(handIndex)"><v-icon>save</v-icon> Play</v-btn>
                    <v-btn style="grid-column-start: 4; grid-column-end: 5;" :disabled="handIndex >= hand.length" v-on:click="nextCard"><v-icon>keyboard_arrow_right</v-icon></v-btn>
                </p>
            </div>
        </v-card-text>
        <v-snackbar
            :timeout="3000"
            color="error"
            :vertical="true"
            v-model="snackbar.error"
        >
            ERROR: Card could not be played / discarded
            <v-btn flat @click.native="snackbar.error = false">Close</v-btn>
        </v-snackbar>
        <v-snackbar
            :timeout="3000"
            color="success"
            :vertical="true"
            v-model="snackbar.success"
        >
            Card was played / discarded
            <v-btn flat @click.native="snackbar.success = false">Close</v-btn>
        </v-snackbar>
    </v-card>
</template>
<script>
import Card from '../cards/card.vue'
export default {
    components: {
        Card
    },
	data() {
		return {
            cards: this.$bsFactory.getTemplate("cards"),
            fullHandList: [],
            hand: [],
            handIndex: 0,
            snackbar: {
                error: false,
                success: false
            },
		}
	},
    methods: {
      /**
       * Load hand from the database
       */
      loadHand() {
        this.fullHandList = []
        let store = this.$bsFactory.getStore('card')
        let resultSet = store.getAll()
        let self = this
        resultSet.onsuccess = function() {
          if (resultSet.result && resultSet.result.constructor === Array) {
            for(var x = 0; x < resultSet.result.length; x++) {
              let tempCard = Object.assign({}, self.cards.search(resultSet.result[x].id))
              tempCard.uuid = resultSet.result[x].uuid
              self.fullHandList.push( tempCard )
            }
          }
          self.fullHandList.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
          })
          self.hand = self.fullHandList
          self.handIndex = (self.handIndex > self.fullHandList.length) ? self.fullHandList.length : (( self.fullHandList.length > 0 ) ? ((self.handIndex > 0) ? self.handIndex : 1) : 0)
        }
        resultSet.onerror = function() {
          console.error( 'Cannot load existing card hand from the database' );
        }
        console.log('Hand has been loaded')
      },
      play(index) {
        let self = this
        let card = this.hand[index - 1]
        let store = this.$bsFactory.getStore('card')
        let resultSet = store.delete(card.uuid)
        resultSet.onsuccess = function() {
            self.loadHand()
            self.snackbar.success = true
        }
        resultSet.onerror = function() {
            self.snackbar.error = true
        }
      },
      prevCard() {
        if (this.handIndex >= 1) {
            this.handIndex -= 1
        }
      },
      nextCard() {
        if (this.handIndex < this.hand.length) {
            this.handIndex += 1
        }
      },
    },
    mounted() {
      this.loadHand()
    }
}
</script>