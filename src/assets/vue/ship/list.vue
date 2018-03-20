<template>
  <v-card flat>
    <v-card-text>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
      <v-data-table
        :headers="fields"
        :items="ships"
        :search="search"
        hide-actions
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name | capitalize }}</td>
            <td>{{ props.item.getRank() }} </td>
            <td>{{ props.item.getHull() }}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <div>
            <detail-row-ship-summary :ship="props.item"></detail-row-ship-summary>
            <v-dialog v-model="dialog" persistent>
              <v-btn dark color="red" slot="activator"><v-icon color="white">delete</v-icon> Delete</v-btn>
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete?</v-card-title>
                <v-card-text>This will permanently delete the ship from the system.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" flat @click.native="dialog = false">No</v-btn>
                  <v-btn color="green darken-1" flat @click.native="onDeleteRow(props.item.uuid)">Yes</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn dark color="blue" :to="'/ship/view/'+props.item.uuid"><v-icon color="white">keyboard_arrow_right</v-icon> View</v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
    <v-snackbar
      :timeout="3000"
      color="error"
      :vertical="true"
      v-model="snackbar.error"
    >
      ERROR: Ship was not deleted
      <v-btn flat @click.native="snackbar.error = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar
      :timeout="3000"
      color="success"
      :vertical="true"
      v-model="snackbar.success"
    >
      Ship was deleted
      <v-btn flat @click.native="snackbar.success = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        search: "",
        dialog: false,
        ships: [],
        fullShipList: [],
        fields: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Rank',
            align: 'left',
            sortable: true,
            value: 'rank'
          },
          {
            text: 'Hull',
            align: 'left',
            sortable: true,
            value: 'hull'
          }
        ],
        snackbar: {
          error: false,
          success: false
        },
      }
    },
    methods: {
      /**
       * Load ships from the database
       */
      loadShips() {
        this.fullShipList = []
        let store = this.$bsFactory.getStore('ship')
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
       * Triggers the deletion process
       */
      onDeleteRow(uuid) {
        let self = this
        let store = this.$bsFactory.getStore('store')
        let resultSet = store.delete(uuid)
        resultSet.onsuccess = function() {
            self.snackbar.success = true
        };
        resultSet.onerror = function() {
            self.snackbar.error = true
        };
        this.loadShips()
        this.dialog = false
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