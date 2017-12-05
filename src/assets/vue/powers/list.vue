<template>
  <f7-block>
    <div class="data-table">
      <vuetable
        ref="powersummarytable"
        :api-mode="false"
        :data="powers"
        :fields="fields"
        track-by="name"
        detail-row-component="detail-row-power-summary"
      >
        <template slot="details" scope="props">
            <div @click="onExpandRow(props.rowData, {name: '__slot:details'}, $event)">
                <p><strong>{{ props.rowData.name }}</strong></p>
                <p><em>{{ props.rowData.art | capitalize }} - {{ props.rowData.form | capitalize }}</em></p>
            </div>
        </template>
        <template slot="expand" scope="props">
          <f7-buttons>
            <f7-button fill color="red" v-on:click="onDeleteConfirm(props.rowData.name)"><f7-icon color="white" material="delete"></f7-icon></f7-button>
          </f7-buttons>
        </template>
      </vuetable>
    </div>
  </f7-block>
</template>
<script>
  export default {
    data() {
      return {
        powers: [],
        fullPowerList: [],
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
      powers: {
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
      loadPowers() {
        this.fullPowerList = []
        let store = this.$bsFactory.getPowerStore()
        let resultSet = store.getAll()
        let self = this
        resultSet.onsuccess = function() {
          if (resultSet.result && resultSet.result.constructor === Array) {
            for(var x = 0; x < resultSet.result.length; x++) {
              let tempPower = Object.assign({}, resultSet.result[x])
              self.fullPowerList.push( tempPower )
            }
          }
          self.fullPowerList.sort(function(a,b) {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
          })
          self.powers = self.fullPowerList
        }
        resultSet.onerror = function() {
          console.error( 'Cannot load existing powers from the database' );
        }
      },
      /**
       * Reset the table and inject the new powerinformation
       */
      updateTable() {
        this.$refs.powersummarytable.resetData()
        this.$refs.powersummarytable.setData(this.powers)
      },
      /**
       * Expands our Detail Row
       */
      onExpandRow (data, field, event) {
        let uuid = data.name
        let index = this.$refs.powersummarytable.visibleDetailRows.indexOf(uuid)
        this.$refs.powersummarytable.visibleDetailRows = []
        if (index == -1) {
            this.$refs.powersummarytable.showDetailRow(uuid)
        }
      },
      /**
       * Triggers the deletion process
       */
      onDeleteConfirm(name) {
        let self = this
        this.$f7.confirm(
            'Are you sure you want to delete?',
            function() { self.onDeleteRow(name) }
        )
      },
      onDeleteRow(name) {
        let self = this
        let store = this.$bsFactory.getPowerStore()
        let resultSet = store.delete(name)
        resultSet.onsuccess = function() {
            self.$f7.alert(name+" has been deleted" )
        };
        resultSet.onerror = function() {
            self.$f7.alert( "ERROR: "+name+" was not deleted" )
        };
        this.loadPowers()
      }
    },
    created() {
      this.loadPowers()
    },
    beforeUpdate() {
      this.loadPowers()
    }
  }
</script>