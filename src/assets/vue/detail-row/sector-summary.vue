<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Name</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ sector.name }}</div>
      <div><strong>Control</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ regions.nations.get(sector.control).name }} ({{ sector.control | uppercase }})</div>
      <div><strong>Trade</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ regions.getSectorTrade(sector) }}</div>
      <div><strong>Star</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{details.type}} ({{ details.class }}) <help-generic :popover="'star-details'">{{details.description}}</help-generic></div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      sector: {
        type: Object,
        required: true
      }
    },
    data() {
        return {
            regions: this.$bsFactory.getTemplate('regions'),
	    }
    },
    computed: {
        details() {
            return this.regions.stars.details(this.sector.star.spectrum, this.sector.star.temperature, this.sector.star.size)
        }
    },
  }
</script>
