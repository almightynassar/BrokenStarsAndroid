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
        :items="ship.fittings.list"
        :search="search"
        hide-actions
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name | capitalize }}</td>
            <td>{{ props.item.crew }} </td>
            <td>{{ props.item.power }}</td>
            <td>{{ props.item.storage }}</td>
            <td>{{ props.item.cost | currency}}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <div>
            <detail-row-fitting :fitting="props.item"></detail-row-fitting>
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
            text: 'Crew',
            align: 'left',
            sortable: true,
            value: 'crew'
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