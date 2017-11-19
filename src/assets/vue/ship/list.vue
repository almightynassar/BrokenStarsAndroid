<template>
  <f7-block>
    <f7-block inset form>
      <!-- Text Input -->
      <input type="text" v-model="search" v-on:input="updateShips()" placeholder="Search" />
      <!-- <div class="custom-radio custom-radio-inline">
        <input id="option-owner" type="radio" v-model="option" value="owner" checked="checked">
        <label for="option-owner">Owner</label>
      </div> -->
      <!-- <div class="custom-radio custom-radio-inline">
        <input id="option-trade" type="radio" v-model="option" value="trade">
        <label for="option-trade">Trade</label>
      </div> -->
    </f7-block>
    <div class="data-table">
      <vuetable
        ref="shipsummarytable"
        :api-mode="false"
        :data="ships"
        :fields="fields"
        track-by="uuid"
        detail-row-component="detail-row-ship-summary"
      >
        <template slot="hull" scope="props">
          {{ props.rowData.getHull() }}
        </template>
        <template slot="expand" scope="props">
          <f7-buttons>
            <f7-button fill color="red" v-on:click="onDeleteRow(props.rowData.uuid)"><f7-icon color="white" material="delete"></f7-icon></f7-button>
            <f7-button :href="'/ship/view/'+props.rowData.uuid"><f7-icon material="open_in_browser"></f7-icon></f7-button>
            <f7-button v-on:click="onExpandRow(props.rowData.uuid)"><f7-icon material="expand_more"></f7-icon></f7-button>
          </f7-buttons>
        </template>
      </vuetable>
    </div>
  </f7-block>
</template>
<script>
  import VueShipView from './view.vue'
  export default {
    components: {
      'vue-ship-view': VueShipView
    },
    data() {
      return {
        search: "",
        ships: [],
        fullShipList: this.$bsFactory.getShips(),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
        fields: [
          'name',
          {
            name: '__slot:expand',
            title: 'Expand',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ]
      }
    },
    watch: {
      ships: {
        handler(value) {
          this.updateTable()
        },
        deep: true
      }
    },
    methods: {
      updateTable() {
        // Reset everything
        this.$refs.shipsummarytable.resetData()
        // Set our data
        this.$refs.shipsummarytable.setData(this.ships)
      },
      updateShips() {
        let tempShips = []
        for (var index = 0; index < this.fullShipList.length; index++) {
          let name = this.fullShipList[index].name.toLowerCase()
          if ( name.includes(this.search.toLowerCase()) || (this.search == "")) {
            tempShips.push(this.fullShipList[index])
          }
        }
        this.ships = tempShips
      },
      formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onExpandRow (uuid) {
        let index = this.$refs.shipsummarytable.visibleDetailRows.indexOf(uuid)
        this.$refs.shipsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.shipsummarytable.showDetailRow(uuid)
        }
      },
      onDeleteRow(uuid) {
        this.$bsFactory.deleteShip(uuid)
      }
    },
    created() {
      this.ships = this.fullShipList
    }
  }
</script>