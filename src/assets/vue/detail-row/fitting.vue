<template>
  <div>
    <div class="bottom-border">
      <div><strong>Name</strong></div>
      <div class="pull-right">{{ rowData.name }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Storage</strong></div>
      <div class="pull-right">{{ rowData.storage }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Power</strong></div>
      <div class="pull-right">{{ rowData.power }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Crew</strong></div>
      <div class="pull-right">{{ rowData.crew }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Cost</strong></div>
      <div class="pull-right">{{ rowData.cost | currency }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Description</strong></div>
      <div class="pull-right">{{ rowData.description }}</div>
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
      },
    }
  }
</script>
