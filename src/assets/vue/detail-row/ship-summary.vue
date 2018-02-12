<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div>
        <div><strong>Cargo Capacity</strong> <help-ship help="storage-total"></help-ship></div>
        <div class="pull-right">{{ ship.getBulk() + ship.getBulkUsed() }} units (<em>{{ (ship.getBulk() + ship.getBulkUsed()) * 100 }} tons</em>)</div>
      </div>
      <div>
        <div><strong>Crew</strong>  <help-ship help="crew"></help-ship></div>
        <div class="pull-right">{{ ship.getCrew() }}</div>
      </div>
      <div>
        <div><strong>Cost</strong> <help-ship help="cost"></help-ship></div>
        <div class="pull-right">{{ ship.getCost() | currency }}</div>
      </div>
      <div>
        <div><strong>Fuel per FTL jump</strong> <help-ship help="fuel"></help-ship></div>
        <div class="pull-right">{{ ship.getFTL() }}</div>
      </div>
      <div>
        <div><strong>Hardpoints</strong> <help-ship help="hardpoints"></help-ship></div>
        <div class="pull-right">{{ ship.getHardpoints() }}</div>
      </div>
      <div>
        <div><strong>Integrity</strong> <help-ship help="integrity"></help-ship></div>
        <div class="pull-right">{{ ship.getIntegrity() }}</div>
      </div>
      <div>
        <div><strong>Power</strong> <help-ship help="power-total"></help-ship></div>
        <div class="pull-right">{{ ship.getPower() }}</div>
      </div>
      <div>
        <div><strong>Size</strong> <help-ship help="size"></help-ship></div>
        <div class="pull-right">{{ ship.getSize() }}</div>
      </div>
      <div>
        <div><strong>Speed</strong> <help-ship help="speed"></help-ship></div>
        <div class="pull-right">{{ ship.getAcceleration() }} spaces (<em>{{ ship.getAccelerationConverted() }} m/s</em>)</div>
      </div>
      <div>
        <div><strong>Storage</strong> <help-ship help="storage-total"></help-ship></div>
        <div class="pull-right">{{ ship.getBulk() }} units</div>
      </div>
      <div>
        <div><strong>Toughness</strong></div>
        <div class="pull-right">{{ ship.getToughness() }}</div>
      </div>
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
