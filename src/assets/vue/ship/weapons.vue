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
        :items="ship.weapons.list"
        :search="search"
        hide-actions
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name | capitalize }}</td>
            <td>{{ props.item.hardpoints }} </td>
            <td>{{ props.item.power }}</td>
            <td>{{ props.item.storage }}</td>
            <td>{{ props.item.cost | currency}}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <div>
            <detail-row-weapon :weapon="props.item"></detail-row-weapon>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        search: "",
        fields: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Hardpoints',
            align: 'left',
            sortable: true,
            value: 'hardpoints'
          },
          {
            text: 'Power',
            align: 'left',
            sortable: true,
            value: 'power'
          },
          {
            text: 'Storage',
            align: 'left',
            sortable: true,
            value: 'storage'
          },
          {
            text: 'Cost',
            align: 'left',
            sortable: true,
            value: 'cost'
          }
        ],
        ship: this.$bsFactory.cloneShip(),
			}
    },
  }
</script>