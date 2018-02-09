<template>
    <v-card flat>
        <v-card-text>
            <v-text-field
                label="Cards to Generate"
                v-model="generate"
                hint="Number of cards in the Loot pack"
                type="number"
            ></v-text-field>
            <!-- LOOT -->
            <div v-if="lootIndex > 0">
                <card :card="loot[lootIndex - 1]"></card>
                <p style="text-align: center; display: grid;">
                    <v-btn style="grid-column-start: 1; grid-column-end: 2;" :disabled="lootIndex <= 1" v-on:click="prevCrate"><v-icon>keyboard_arrow_left</v-icon></v-btn>
                    <span style="grid-column-start: 3; grid-column-end: 4;">{{lootIndex}} / {{loot.length}}</span>
                    <v-btn style="grid-column-start: 5; grid-column-end: 6;" :disabled="lootIndex >= loot.length" v-on:click="nextCrate"><v-icon>keyboard_arrow_right</v-icon></v-btn>
                </p>
            </div>
            <v-btn dark color="blue" v-on:click="lootCrate"><v-icon>refresh</v-icon> Roll Pack</v-btn>
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
              if (this.lootIndex >= 1) {
                  this.lootIndex += 1
              }
          }
    }
}
</script>