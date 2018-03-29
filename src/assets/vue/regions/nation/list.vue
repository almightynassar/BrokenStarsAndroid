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
        :items="nations"
        :search="search"
        hide-actions
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name }}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <detail-row-nation-summary :nation="props.item"></detail-row-nation-summary>
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
        nations: [],
        regions: this.$bsFactory.getTemplate('regions'),
        fields: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
        ],
      }
    },
    created() {
      this.nations = this.regions.nations.makeArray()
    }
  }
</script>