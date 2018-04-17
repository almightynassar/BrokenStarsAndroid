<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Name</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ fitting.name }}</div>
      <div><strong>Storage</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ fitting.storage }}</div>
      <div><strong>Power</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ fitting.power }}</div>
      <div><strong>Crew</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ fitting.crew }}</div>
      <div><strong>Cost</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ fitting.cost | currency }}</div>
      <div><strong>Description</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ fitting.description }}</div>
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
