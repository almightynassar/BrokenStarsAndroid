<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Name</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.name }}</div>
      <div><strong>Status</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.governance.status | capitalize }}</div>
      <div><strong>Government</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.governance.source | capitalize}} {{ nation.governance.structure | capitalize}}</div>
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
    }
  }
</script>
