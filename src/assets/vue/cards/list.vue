<template>
	<f7-page>
    <f7-block>
      <f7-block-title class="content-center-text bottom-border small-caps">Card List</f7-block-title>
      <div class="data-table">
        <vuetable
          ref="cardstable"
          :api-mode="false"
          :data="sortedCards"
          :fields="fields"
          detail-row-component="detail-row-card"
          @vuetable:row-clicked="onExpandRow"
        >
        </vuetable>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        fields: [
          'name',
          'rarity'
        ],
        cards: this.$bsFactory.getTemplate("cards"),
			}
    },
    computed: {
      sortedCards() {
        return this.cards.cards.sort(function(a,b) { return (a.name > b.name) ? 1 : ( (a.name < b.name) ? -1 : 0); })
      }
    },
		methods: {
      onExpandRow (data, event) {
        let index = this.$refs.cardstable.visibleDetailRows.indexOf(data.id)
        this.$refs.cardstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.cardstable.showDetailRow(data.id)
        }
      }
		}
  }
</script>