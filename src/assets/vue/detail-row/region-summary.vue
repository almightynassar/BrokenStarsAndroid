<template>
  <dl>
    <dt><strong>Name</strong></dt>
    <dd class="bottom-border">{{ rowData.name }}</dd>
    <dt><strong>Travel Zone</strong> <help-region-zone></help-region-zone></dt>
    <dd class="bottom-border">{{ rowData.zone | capitalize}}: {{ regions.categories.sector.zone[rowData.zone] }}</dd>
    <dt><strong>Trade Number</strong></dt>
    <dd class="bottom-border">{{ regions.getSectorTrade(rowData) }}</dd>
    <dt><strong>Star Class</strong> <help-region-star></help-region-star></dt>
    <dd class="bottom-border">{{starDetails.type}} ({{ starDetails.class }})</dd>
    <dt><strong>Star Temperature</strong></dt>
    <dd class="bottom-border">{{starDetails.temperature}}K</dd>
    <dt><strong># of solar objects</strong></dt>
    <dd class="bottom-border">{{ rowData.planets.length }}</dd>
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
    computed: {
      starDetails() {
        let temp = this.regions.categories.star.spectrum[this.rowData.star.spectrum].temp
        let star = {
          class: this.rowData.star.spectrum + this.rowData.star.temperature + this.rowData.star.size,
          type: this.regions.categories.star.spectrum[this.rowData.star.spectrum].colour + " " + this.regions.categories.star.size[this.rowData.star.size],
          description: this.regions.categories.star.spectrum[this.rowData.star.spectrum].description,
          temperature: (Math.round( (temp.max - temp.min) / 10 ) * (9 - this.rowData.star.temperature)) + temp.min
        }
        return star
      }
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      }
		}
  }
</script>
