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
      >
        <template slot="hull" scope="props">
          {{ props.rowData.getHull() }}
        </template>
        <template slot="view" scope="props">
          <f7-link :href="'/ship/view/'+props.rowIndex"><f7-icon color="blue" material="open_in_browser"></f7-icon></f7-link>
        </template>
        <template slot="delete" scope="props">
          <f7-button big fill color="red" v-on:click="onDeleteClick(props.rowData.name)"><f7-icon color="white" material="delete"></f7-icon></f7-button>
        </template>
        <template slot="expand" scope="props">
          <f7-button fill color="blue" v-on:click="onExpandRow(props.rowData.name)"><f7-icon color="white" material="expand_more"></f7-icon></f7-button>
        </template>
      </vuetable>
    </div>
  </f7-page>
</template>
<script>
  import VueShipView from './view.vue'
  export default {
    components: {
      'vue-ship-view': VueShipView
    },
    data() {
      return {
        ships: this.$bsFactory.getShips(),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
        fields: [
          'name',
          {
            name: '__slot:view',
            title: 'View',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          },
          {
            name: '__slot:delete',
            title: 'Delete',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          },
          {
            name: '__slot:expand',
            title: 'Expand',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ]
      }
    },
    methods: {
      onDeleteClick(name) {
        this.$bsFactory.deleteShip(name)
      },
      formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onExpandRow (id) {
        let index = this.$refs.shipsummarytable.visibleDetailRows.indexOf(id)
        this.$refs.shipsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.shipsummarytable.showDetailRow(id)
        }
      }
    }
  }
</script>