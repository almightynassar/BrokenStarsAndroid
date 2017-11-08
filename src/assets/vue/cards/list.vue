<template>
	<f7-page>
    <f7-block>
      <f7-block-title>Card List</f7-block-title>
      <div class="data-table">
        <vuetable
          ref="cardstable"
          :api-mode="false"
          :data="sortedCards"
          :fields="fields"
          detail-row-component="detail-row-card"
        >
          <template slot="expand" scope="props">
            <f7-button v-on:click="onExpandRow(props.rowData.id)"><f7-icon material="expand_more"></f7-icon></f7-button>
          </template>
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
          {
            name: '__slot:expand',
            title: 'Expand',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ],
        cards: this.$bsFactory.getTemplate("cards"),
			}
    },
    computed: {
      sortedCards() {
        return this.cards.cards.sort(function(a,b) { return a.name > b.name})
      }
    },
		methods: {
      onExpandRow (id) {
        let index = this.$refs.cardstable.visibleDetailRows.indexOf(id)
        this.$refs.cardstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.cardstable.showDetailRow(id)
        }
      }
		}
  }
</script>