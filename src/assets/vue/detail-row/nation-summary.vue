<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Name</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.name }}</div>
      <div><strong>Status</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.governance.status | capitalize }} <help-generic :popover="'status-details'">{{ regions.governance.government.status[nation.governance.status] }}</help-generic></div>
      <div><strong>Government</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.governance.source | capitalize}} <help-generic :popover="'governance-source-details'">{{ regions.governance.government.source[nation.governance.source ]}}</help-generic> {{ nation.governance.structure | capitalize}} <help-generic :popover="'governance-structure-details'">{{ regions.governance.government.structure[nation.governance.structure ]}}</help-generic></div>
      <div><strong>Description</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.description }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      nation: {
        type: Object,
        required: true
      }
    },
    data() {
			return {
				regions: this.$bsFactory.getTemplate('regions'),
			}
    },
  }
</script>
