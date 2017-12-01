<template>
  <div>
    <div class="bottom-border">
      <div><strong>Name</strong></div>
      <div class="pull-right">{{ rowData.name }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Type</strong></div>
      <div class="pull-right">{{ rowData.shape | capitalize}}: {{ regions.categories.planet.shape[rowData.shape]}}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Size</strong></div>
      <div class="pull-right">{{ rowData.size | capitalize }}: {{ regions.categories.planet.size[rowData.size]}} km diameter</div>
    </div>
    <div class="bottom-border">
      <div><strong>Atmosphere</strong></div>
      <div class="pull-right">{{rowData.atmosphere | capitalize }}: {{ regions.categories.planet.atmosphere[rowData.atmosphere]}}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Hydrosphere</strong></div>
      <div class="pull-right">{{rowData.hydrosphere | capitalize }}: {{ regions.categories.planet.atmosphere[rowData.hydrosphere]}}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Biosphere</strong></div>
      <div class="pull-right">{{rowData.biosphere | capitalize }}: {{ regions.categories.planet.atmosphere[rowData.biosphere]}}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Population</strong></div>
      <div class="pull-right">{{ regions.categories.planet.population[rowData.population] | capitalize}}</div>
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
    },
    data() {
      return {
        regions: this.$bsFactory.getTemplate('regions'),
			}
    }
  }
</script>
