<template>
  <div>
    <div class="bottom-border">
      <div><strong>Name</strong></div>
      <div class="pull-right">{{ rowData.name }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Travel Zone</strong> <help-region-zone></help-region-zone></div>
      <div class="pull-right">{{ rowData.zone | capitalize}}: {{ regions.categories.sector.zone[rowData.zone] }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Trade Number</strong></div>
      <div class="pull-right">{{ regions.getSectorTrade(rowData) }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Star Class</strong> <help-region-star></help-region-star></div>
      <div class="pull-right">{{starDetails.type}} ({{ starDetails.class }})</div>
    </div>
    <div class="bottom-border">
      <div><strong>Star Temperature</strong></div>
      <div class="pull-right">{{starDetails.temperature}}K</div>
    </div>
    <div class="bottom-border">
      <div><strong># of solar objects</strong></div>
      <div class="pull-right">{{ rowData.planets.length }}</div>
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
    }
  }
</script>
