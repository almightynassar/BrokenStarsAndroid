<template>
  <f7-block>
    <div class="data-table">
      <vuetable
        ref="shipsummarytable"
        :api-mode="false"
        :data="ships"
        :fields="fields"
        track-by="uuid"
        detail-row-component="detail-row-ship-summary"
      >
        <template slot="details" scope="props" @click="onExpandRow(props.rowData.uuid)">
          <p><strong>{{ props.rowData.name }}</strong></p>
          <p><em>{{ props.rowData.getRank() }} {{ props.rowData.getHull() }}</em></p>
        </template>
        <template slot="expand" scope="props">
          <f7-buttons>
            <f7-button fill color="red" v-on:click="onDeleteConfirm(props.rowData.uuid)"><f7-icon color="white" material="delete"></f7-icon></f7-button>
            <f7-button :href="'/ship/view/'+props.rowData.uuid"><f7-icon material="chevron_right"></f7-icon></f7-button>
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
        fullShipList: [],
        fields: [
          {
            name: '__slot:details',
            title: 'Details'
          },
          {
            name: '__slot:expand',
            title: 'Actions'
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
      /**
       * Load ships from the database
       */
      loadShips() {
        this.fullShipList = []
        let store = this.$bsFactory.getShipStore()
        let resultSet = store.getAll()
        let self = this
        resultSet.onsuccess = function() {
          if (resultSet.result && resultSet.result.constructor === Array) {
            for(var x = 0; x < resultSet.result.length; x++) {
              let tempShip = self.$bsFactory.cloneShip()
              tempShip.hydrate(resultSet.result[x])
              self.fullShipList.push( tempShip )
            }
          }
          self.fullShipList.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
          })
          self.ships = self.fullShipList
        }
        resultSet.onerror = function() {
          console.error( 'Cannot load existing ships from the database' );
        }
      },
      /**
       * Reset the table and inject the new ship information
       */
      updateTable() {
        this.$refs.shipsummarytable.resetData()
        this.$refs.shipsummarytable.setData(this.ships)
      },
      /**
       * Expands our Detail Row
       */
      onExpandRow (uuid) {
        let index = this.$refs.shipsummarytable.visibleDetailRows.indexOf(uuid)
        this.$refs.shipsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.shipsummarytable.showDetailRow(uuid)
        }
      },
      /**
       * Triggers the deletion process
       */
      onDeleteConfirm(uuid) {
        let self = this
        this.$f7.confirm(
            'Are you sure you want to delete?',
            function() { self.onDeleteRow(uuid) }
        )
      },
      onDeleteRow(uuid) {
        let self = this
        let store = this.$bsFactory.getShipStore()
        let resultSet = store.delete(uuid)
        resultSet.onsuccess = function() {
          self.$f7.alert("Ship: "+uuid+" has been deleted" )
        };
        resultSet.onerror = function() {
          self.$f7.alert("ERROR: "+uuid+" could not be deleted" )
        };
        this.loadShips()
      }
    },
    created() {
      this.loadShips()
    },
    beforeUpdate() {
      this.loadShips()
    }
  }
</script>