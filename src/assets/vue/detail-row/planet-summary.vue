<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div>
        <div><strong>Name</strong></div>
        <div class="pull-right">{{ planet.name }}</div>
      </div>
      <div>
        <div><strong>Type</strong></div>
        <div class="pull-right">{{ planet.shape | capitalize}}: {{ regions.categories.planet.shape[planet.shape]}}</div>
      </div>
      <div>
        <div><strong>Size</strong></div>
        <div class="pull-right">{{ planet.size | capitalize }}: {{ regions.categories.planet.size[planet.size]}} km diameter</div>
      </div>
      <div>
        <div><strong>Atmosphere</strong></div>
        <div class="pull-right">{{planet.atmosphere | capitalize }}: {{ regions.categories.planet.atmosphere[planet.atmosphere]}}</div>
      </div>
      <div>
        <div><strong>Hydrosphere</strong></div>
        <div class="pull-right">{{planet.hydrosphere | capitalize }}: {{ regions.categories.planet.atmosphere[planet.hydrosphere]}}</div>
      </div>
      <div>
        <div><strong>Biosphere</strong></div>
        <div class="pull-right">{{planet.biosphere | capitalize }}: {{ regions.categories.planet.atmosphere[planet.biosphere]}}</div>
      </div>
      <div>
        <div><strong>Population</strong></div>
        <div class="pull-right">{{ regions.categories.planet.population[planet.population] | capitalize}}</div>
      </div>
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
