<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div>
        <div><strong>Name</strong></div>
        <div class="pull-right">{{ nation.name }}</div>
      </div>
      <div>
        <div><strong>Status</strong></div>
        <div class="pull-right">{{ nation.governance.status | capitalize }}</div>
      </div>
      <div>
        <div><strong>Government</strong></div>
        <div class="pull-right">{{ nation.governance.source | capitalize}} {{ nation.governance.structure | capitalize}}</div>
      </div>
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
