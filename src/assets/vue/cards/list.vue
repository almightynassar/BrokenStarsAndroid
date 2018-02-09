<template>
  <v-card flat>
    <v-card-text>
      <p>This deck has:</p>
      <ul class="proper-list">
        <li>{{statistics.copper}} unique Copper cards</li>
        <li>{{statistics.silver}} unique Silver cards</li>
        <li>{{statistics.gold}} unique Gold cards</li>
        <li>{{statistics.platinum}} unique Platinum cards</li>
      </ul>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
      <v-data-table
        :headers="fields"
        :items="sortedCards"
        :search="search"
        hide-actions
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.rarity | capitalize }}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <detail-row-card :card="props.item"></detail-row-card>
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
            text: 'Rarity',
            align: 'left',
            sortable: true,
            value: 'rarity'
          },
        ],
        cards: this.$bsFactory.getTemplate("cards"),
			}
    },
    computed: {
      statistics() {
        return this.cards.statistics();
      },
      sortedCards() {
        return this.cards.cards.sort(function(a,b) { return (a.name > b.name) ? 1 : ( (a.name < b.name) ? -1 : 0); })
      }
    },
  }
</script>