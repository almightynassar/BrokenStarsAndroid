<template>
  <dl>
    <dt><strong>Name</strong></dt>
    <dd class="bottom-border">{{ rowData.name }}</dd>
    <dt><strong>Type</strong></dt>
    <dd class="bottom-border">{{ rowData.shape | capitalize}}: {{ regions.categories.planet.shape[rowData.shape]}}</dd>
    <dt><strong>Size</strong></dt>
    <dd class="bottom-border">{{ rowData.size | capitalize }}: {{ regions.categories.planet.size[rowData.size]}} km diameter</dd>
    <dt><strong>Atmosphere</strong></dt>
    <dd class="bottom-border">{{rowData.atmosphere | capitalize }}: {{ regions.categories.planet.atmosphere[rowData.atmosphere]}}</dd>
    <dt><strong>Hydrosphere</strong></dt>
    <dd class="bottom-border">{{rowData.hydrosphere | capitalize }}: {{ regions.categories.planet.atmosphere[rowData.hydrosphere]}}</dd>
    <dt><strong>Biosphere</strong></dt>
    <dd class="bottom-border">{{rowData.biosphere | capitalize }}: {{ regions.categories.planet.atmosphere[rowData.biosphere]}}</dd>
    <dt><strong>Population</strong></dt>
    <dd class="bottom-border">{{ regions.categories.planet.population[rowData.population] | capitalize}}</dd>
  </dl>
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
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      }
		}
  }
</script>
