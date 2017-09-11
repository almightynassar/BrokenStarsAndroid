<template>
	<f7-page>
    <div class="data-table">
      <vuetable
        ref="shipsummarytable"
        :api-mode="false"
        :data="ships"
        :fields="fields"
        track-by="name"
        detail-row-component="detail-row-ship-summary"
        @vuetable:row-clicked="onRowClicked"
      >
        <template slot="hull" scope="props">
          {{ props.rowData.getHull() }}
        </template>
        <template slot="cost" scope="props">
          {{ formatNumber( props.rowData.getCost() ) }}
        </template>
      </vuetable>
    </div>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        ships: this.$bsFactory.getShips(),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
        fields: [
          'name',
          {
            name: '__slot:hull',
            title: 'Hull',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          },
          {
            name: '__slot:cost',
            title: 'Cost',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ]
      }
    },
    methods: {
      // onClick(name) {
      //   this.$bsFactory.deleteShip(name)
      // },
      formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onRowClicked (data, field, event) {
        let index = this.$refs.shipsummarytable.visibleDetailRows.indexOf(data.name)
        this.$refs.shipsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.shipsummarytable.showDetailRow(data.name)
        }
      }
    }
  }
</script>