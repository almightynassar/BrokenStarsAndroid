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
        :items="sectors"
        :search="search"
        hide-actions
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name }}</td>
            <td>{{ regions.nations.get(props.item.control).name }} ({{ props.item.control | uppercase }})</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <detail-row-sector-summary :sector="props.item"></detail-row-sector-summary>
          <v-btn dark color="blue" :to="'/regions/sector/view/'+props.item.x+'/'+props.item.y"><v-icon color="white">keyboard_arrow_right</v-icon> View</v-btn>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        search: '',
        sectors: [],
        regions: this.$bsFactory.getTemplate('regions'),
        fields: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Control',
            align: 'left',
            sortable: true,
            value: 'control'
          },
        ],
      }
    },
    created() {
      this.sectors = this.regions.sectors
    }
  }
</script>