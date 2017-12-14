<template>
    <f7-block inset>
        <f7-block-title class="content-center-text bottom-border small-caps">Loot Manager</f7-block-title>
        <p><input type="number" v-model="generate" /></p>
        <!-- LOOT -->
        <div v-if="lootIndex > 0">
            <card :card="loot[lootIndex - 1]"></card>
            <p style="text-align: center; display: grid;">
                <f7-button style="grid-column-start: 1; grid-column-end: 2;" :disabled="lootIndex <= 1" v-on:click="prevCrate"><f7-icon color="blue" material="keyboard_arrow_left"></f7-icon></f7-button>
                <span style="grid-column-start: 3; grid-column-end: 4;">{{lootIndex}} / {{loot.length}}</span>
                <f7-button style="grid-column-start: 5; grid-column-end: 6;" :disabled="lootIndex >= loot.length" v-on:click="nextCrate"><f7-icon color="blue" material="keyboard_arrow_right"></f7-icon></f7-button>
            </p>
        </div>
        <f7-button big fill color="blue" v-on:click="lootCrate"><f7-icon color="white" material="refresh"></f7-icon></f7-button>
    </f7-block>
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
            generate: 1,
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