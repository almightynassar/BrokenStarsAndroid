<template>
  <v-card raised>
    <v-card-text>
      <p>We are using the Savage Worlds ruleset, so you should check out those rulebooks. The following table is provided as a reference only. Each rule has an associated category type (which is searchable):</p>
      <v-switch
        label='Action'
        v-model="flags.action"
      ></v-switch>
      <p><em>{{ rules.getDescription('action') }}</em></p>
      <v-switch
        label='Core'
        v-model="flags.core"
      ></v-switch>
      <p><em>{{ rules.getDescription('core') }}</em></p>
      <v-switch
        label='Skills'
        v-model="flags.skills"
      ></v-switch>
      <p><em>{{ rules.getDescription('skills') }}</em></p>
      <v-switch
        label='Status'
        v-model="flags.status"
      ></v-switch>
      <p><em>{{ rules.getDescription('status') }}</em></p>
      <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
        ></v-text-field>
        <v-data-table
            :headers="fields"
            :items="rules.getList(flags)"
            :search="search"
            hide-actions
            item-key="name"
        >
            <template slot="items" slot-scope="props">
                <tr>
                  <td><h3>{{ props.item.name | capitalize }}</h3></td>
                  <td><h3>{{ props.item.type | capitalize }}</h3></td>
                </tr>
                <tr>
                  <td colspan="2">{{ props.item.rule }}</td>
                </tr>
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
            sortable: true,
            value: 'name'
          },
          {
            text: 'Type',
            sortable: false,
            value: 'type'
          },
        ],
        flags: {
          action: true,
          core: true,
          skills: true,
          status: true
        },
        rules: this.$bsFactory.getTemplate('rules'),
      }
    }
  }
</script>