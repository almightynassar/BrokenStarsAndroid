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
        :items="powers"
        :search="search"
        hide-actions
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name | capitalize }}</td>
            <td>{{ props.item.art | capitalize }}</td>
            <td>{{ props.item.form | capitalize }}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <div>
            <detail-row-power-summary :power="props.item"></detail-row-power-summary>
            <v-dialog v-model="dialog" persistent>
              <v-btn dark d-block color="red" slot="activator"><v-icon color="white">delete</v-icon> Delete</v-btn>
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete?</v-card-title>
                <v-card-text>This will permanently delete the power from the system.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" flat @click.native="dialog = false">No</v-btn>
                  <v-btn color="green darken-1" flat @click.native="onDeleteRow(props.item.name)">Yes</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
      ERROR: Power was not deleted
      <v-btn flat @click.native="snackbar.error = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar
      :timeout="3000"
      color="success"
      :vertical="true"
      v-model="snackbar.success"
    >
      Power was deleted
      <v-btn flat @click.native="snackbar.success = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        search: "",
        powers: [],
        fullPowerList: [],
        fields: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Art',
            align: 'left',
            sortable: true,
            value: 'art'
          },
          {
            text: 'Form',
            align: 'left',
            sortable: true,
            value: 'form'
          }
        ],
        snackbar: {
          error: false,
          success: false
        },
        dialog: false
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
       * Triggers the deletion process
       */
      onDeleteRow(name) {
        let self = this
        let store = this.$bsFactory.getPowerStore()
        let resultSet = store.delete(name)
        resultSet.onsuccess = function() {
            self.snackbar.success = true
        };
        resultSet.onerror = function() {
            self.snackbar.error = true
        };
        this.loadPowers()
        this.dialog = false
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