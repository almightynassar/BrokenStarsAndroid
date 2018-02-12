<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div>
        <div><strong>Name</strong></div>
        <div class="pull-right">{{ weapon.name }}</div>
      </div>
      <div>
        <div><strong>Storage</strong></div>
        <div class="pull-right">{{ weapon.storage }}</div>
      </div>
      <div>
        <div><strong>Power</strong></div>
        <div class="pull-right">{{ weapon.power }}</div>
      </div>
      <div>
        <div><strong>Damage</strong></div>
        <div class="pull-right">{{ weapon.damage }}</div>
      </div>
      <div>
        <div><strong>Range</strong></div>
        <div class="pull-right">{{ weapon.range }}/{{weapon.range*2}}/{{(weapon.range*2)*2}}</div>
      </div>
      <div>
        <div><strong>Rate of Fire</strong></div>
        <div class="pull-right">{{ weapon.rof }}</div>
      </div>
      <div>
        <div><strong>Hardpoints</strong></div>
        <div class="pull-right">{{ weapon.hardpoints }}</div>
      </div>
      <div>
        <div><strong>Cost</strong></div>
        <div class="pull-right">{{ weapon.cost | currency }}</div>
      </div>
      <div>
        <div><strong>Description</strong></div>
        <div class="pull-right">{{ weapon.description }}</div>
      </div>
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
