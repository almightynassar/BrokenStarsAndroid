<template>
  <div>
    <div class="bottom-border">
      <div><strong>Cargo Capacity</strong> <help-ship-storage-total></help-ship-storage-total></div>
      <div class="pull-right">{{ rowData.getBulk() + rowData.getBulkUsed() }} units (<em>{{ (rowData.getBulk() + rowData.getBulkUsed()) * 100 }} tons</em>)</div>
    </div>
    <div class="bottom-border">
      <div><strong>Crew</strong>  <help-ship-crew></help-ship-crew></div>
      <div class="pull-right">{{ rowData.getCrew() }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Cost</strong> <help-ship-cost></help-ship-cost></div>
      <div class="pull-right">{{ rowData.getCost() | currency }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Fuel per FTL jump</strong> <help-ship-fuel></help-ship-fuel></div>
      <div class="pull-right">{{ rowData.getFTL() }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Hardpoints</strong> <help-ship-hardpoints></help-ship-hardpoints></div>
      <div class="pull-right">{{ rowData.getHardpoints() }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Integrity</strong> <help-ship-integrity></help-ship-integrity></div>
      <div class="pull-right">{{ rowData.getIntegrity() }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Power</strong> <help-ship-power-total></help-ship-power-total></div>
      <div class="pull-right">{{ rowData.getPower() }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Size</strong> <help-ship-size></help-ship-size></div>
      <div class="pull-right">{{ rowData.getSize() }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Speed</strong> <help-ship-speed></help-ship-speed></div>
      <div class="pull-right">{{ rowData.getAcceleration() }} spaces (<em>{{ rowData.getAccelerationConverted() }} m/s</em>)</div>
    </div>
    <div class="bottom-border">
      <div><strong>Storage</strong> <help-ship-storage-total></help-ship-storage-total></div>
      <div class="pull-right">{{ rowData.getBulk() }} units</div>
    </div>
    <div class="bottom-border">
      <div><strong>Toughness</strong></div>
      <div class="pull-right">{{ rowData.getToughness() }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    }
  }
</script>
