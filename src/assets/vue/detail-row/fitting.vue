<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div>
        <div><strong>Name</strong></div>
        <div class="pull-right">{{ fitting.name }}</div>
      </div>
      <div>
        <div><strong>Storage</strong></div>
        <div class="pull-right">{{ fitting.storage }}</div>
      </div>
      <div>
        <div><strong>Power</strong></div>
        <div class="pull-right">{{ fitting.power }}</div>
      </div>
      <div>
        <div><strong>Crew</strong></div>
        <div class="pull-right">{{ fitting.crew }}</div>
      </div>
      <div>
        <div><strong>Cost</strong></div>
        <div class="pull-right">{{ fitting.cost | currency }}</div>
      </div>
      <div>
        <div><strong>Description</strong></div>
        <div class="pull-right">{{ fitting.description }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      fitting: {
        type: Object,
        required: true
      }
    }
  }
</script>
