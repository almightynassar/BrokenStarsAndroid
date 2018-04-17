<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Name</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ planet.name }}</div>
      <div><strong>Type</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ planet.shape | capitalize}}: {{ regions.categories.planet.shape[planet.shape]}}</div>
      <div><strong>Size</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ planet.size | capitalize }}: {{ regions.categories.planet.size[planet.size]}} km diameter</div>
      <div><strong>Atmosphere</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{planet.atmosphere | capitalize }}: {{ regions.categories.planet.atmosphere[planet.atmosphere]}}</div>
      <div><strong>Hydrosphere</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{planet.hydrosphere | capitalize }}: {{ regions.categories.planet.atmosphere[planet.hydrosphere]}}</div>
      <div><strong>Biosphere</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{planet.biosphere | capitalize }}: {{ regions.categories.planet.atmosphere[planet.biosphere]}}</div>
      <div><strong>Population</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ regions.categories.planet.population[planet.population] | capitalize}}</div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      planet: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        regions: this.$bsFactory.getTemplate('regions'),
			}
    }
  }
</script>
