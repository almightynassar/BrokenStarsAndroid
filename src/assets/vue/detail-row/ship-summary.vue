<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Cargo Capacity</strong> <help-ship help="storage-total"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getBulk() + ship.getBulkUsed() }} units (<em>{{ (ship.getBulk() + ship.getBulkUsed()) * 100 }} tons</em>)</div>
      <div><strong>Crew</strong>  <help-ship help="crew"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getCrew() }}</div>
      <div><strong>Cost</strong> <help-ship help="cost"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getCost() | currency }}</div>
      <div><strong>Fuel per FTL jump</strong> <help-ship help="fuel"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getFTL() }}</div>
      <div><strong>Hardpoints</strong> <help-ship help="hardpoints"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getHardpoints() }}</div>
      <div><strong>Integrity</strong> <help-ship help="integrity"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getIntegrity() }}</div>
      <div><strong>Power</strong> <help-ship help="power-total"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getPower() }}</div>
      <div><strong>Size</strong> <help-ship help="size"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getSize() }}</div>
      <div><strong>Speed</strong> <help-ship help="speed"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getAcceleration() }} spaces (<em>{{ ship.getAccelerationConverted() }} m/s</em>)</div>
      <div><strong>Storage</strong> <help-ship help="storage-total"></help-ship></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getBulk() }} units</div>
      <div><strong>Toughness</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ ship.getToughness() }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      ship: {
        type: Object,
        required: true
      },
    }
  }
</script>
