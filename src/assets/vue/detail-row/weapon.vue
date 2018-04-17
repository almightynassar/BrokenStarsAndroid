<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Name</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.name }}</div>
      <div><strong>Storage</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.storage }}</div>
      <div><strong>Power</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.power }}</div>
      <div><strong>Damage</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.damage }}</div>
      <div><strong>Range</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.range }}/{{weapon.range*2}}/{{(weapon.range*2)*2}}</div>
      <div><strong>Rate of Fire</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.rof }}</div>
      <div><strong>Hardpoints</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.hardpoints }}</div>
      <div><strong>Cost</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.cost | currency }}</div>
      <div><strong>Description</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ weapon.description }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      weapon: {
        type: Object,
        required: true
      }
    }
  }
</script>
