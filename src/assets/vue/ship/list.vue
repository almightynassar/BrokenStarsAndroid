<template>
	<f7-page>
    <f7-block>
      <f7-block-title>Ship List</f7-block-title>
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
          track-by="name"
          detail-row-component="detail-row-ship-summary"
        >
          <template slot="hull" scope="props">
            {{ props.rowData.getHull() }}
          </template>
          <template slot="expand" scope="props">
            <f7-button fill color="blue" v-on:click="onExpandRow(props.rowData.name)"><f7-icon color="white" material="expand_more"></f7-icon></f7-button>
          </template>
        </vuetable>
      </div>
    </f7-block>
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
      onExpandRow (id) {
        let index = this.$refs.shipsummarytable.visibleDetailRows.indexOf(id)
        this.$refs.shipsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.shipsummarytable.showDetailRow(id)
        }
      }
    },
    created() {
      this.ships = this.fullShipList
    }
  }
</script>