<template>
    <v-card flat>
        <v-card-text>
            <v-text-field
                label="Cards to Generate"
                v-model="generate"
                hint="Number of cards in the Loot pack"
                type="number"
            ></v-text-field>
            <v-btn dark color="blue" v-on:click="lootCrate"><v-icon>refresh</v-icon> Roll Pack</v-btn>
            <v-snackbar
                :timeout="3000"
                color="error"
                :vertical="true"
                v-model="snackbar.error"
            >
                ERROR: Card could not be saved to your hand
                <v-btn flat @click.native="snackbar.error = false">Close</v-btn>
            </v-snackbar>
            <v-snackbar
                :timeout="3000"
                color="success"
                :vertical="true"
                v-model="snackbar.success"
            >
                Card was saved to your hand
                <v-btn flat @click.native="snackbar.success = false">Close</v-btn>
            </v-snackbar>
            <!-- LOOT -->
            <div v-if="lootIndex > 0">
                <card :card="loot[lootIndex - 1]"></card>
                <p style="text-align: center; display: grid;">
                    <v-btn style="grid-column-start: 1; grid-column-end: 2;" :disabled="lootIndex <= 1" v-on:click="prevCrate"><v-icon>keyboard_arrow_left</v-icon></v-btn>
                    <span style="grid-column-start: 2; grid-column-end: 3;">{{lootIndex}} / {{loot.length}}</span>
                    <v-btn style="grid-column-start: 3; grid-column-end: 4;" dark color="blue" v-on:click="saveToHand(lootIndex)"><v-icon>save</v-icon> Save</v-btn>
                    <v-btn style="grid-column-start: 4; grid-column-end: 5;" :disabled="lootIndex >= loot.length" v-on:click="nextCrate"><v-icon>keyboard_arrow_right</v-icon></v-btn>
                </p>
            </div>
        </v-card-text>
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
            loot: [],
            generate: 3,
            lootIndex: 0,
            snackbar: {
                error: false,
                success: false
            },
		}
	},
    methods: {
		lootCrate() {
            this.loot = [];
            if (this.generate > 0) {
                this.loot = this.cards.grab(this.generate)
            }
            this.lootIndex = (this.loot.length > 0) ? 1 : 0;
          },
          prevCrate() {
              if (this.lootIndex >= 1) {
                  this.lootIndex -= 1
              }
          },
          nextCrate() {
              if (this.lootIndex <= this.loot.length) {
                  this.lootIndex += 1
              }
          },
          saveToHand(index) {
              let store = this.$bsFactory.getStore('card')
              let card = this.loot[index - 1]
              let data = { id: card.id }
              let resultSet = store.put(data);
              let self = this;
              resultSet.onsuccess = function() {
                self.loot.splice(index - 1, 1)
                self.lootIndex = (index > self.loot.length) ? self.loot.length : index
                self.snackbar.success = true
              };
              resultSet.onerror = function() {
                self.snackbar.error = true
              };
          }
    }
}
</script>