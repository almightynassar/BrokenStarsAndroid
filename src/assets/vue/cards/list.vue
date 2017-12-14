<template>
  <f7-block>
    <f7-block-title class="content-center-text bottom-border small-caps">Card List</f7-block-title>
    <p>This deck has:</p>
    <ul>
      <li>{{statistics.copper}} unique Copper cards</li>
      <li>{{statistics.silver}} unique Silver cards</li>
      <li>{{statistics.gold}} unique Gold cards</li>
      <li>{{statistics.platinum}} unique Platinum cards</li>
    </ul>
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
      statistics() {
        return this.cards.statistics();
      },
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