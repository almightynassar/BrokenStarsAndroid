<template>
	<v-container grid-list-md>
        <v-layout row wrap>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">{{planet.name}}</v-card-title>
					<v-card-text>
						<dl class="list">
							<!-- STATISTICS -->
							<dt>Type</dt>
							<dd>{{planet.shape | capitalize}}: {{ regions.categories.planet.shape[planet.shape]}}</dd>
							<dt>Size</dt>
							<dd>{{planet.size | capitalize}}: {{ regions.categories.planet.size[planet.size]}} km diameter</dd>
							<dt>Atmosphere</dt>
							<dd>{{planet.atmosphere | capitalize}}: {{ regions.categories.planet.atmosphere[planet.atmosphere]}}</dd>
							<dt>Hydrosphere</dt>
							<dd>{{planet.hydrosphere | capitalize}}: {{ regions.categories.planet.hydrosphere[planet.hydrosphere]}}</dd>
							<dt>Biosphere</dt>
							<dd>{{planet.biosphere | capitalize}}: {{ regions.categories.planet.biosphere[planet.biosphere]}}</dd>
							<dt>Population</dt>
							<dd>{{regions.categories.planet.population[planet.population] | capitalize}}</dd>
							<dt>Government</dt>
							<dd>{{planet.government | capitalize}}: {{ regions.categories.planet.government[planet.government]}}</dd>
							<dt>Laws</dt>
							<dd>{{planet.laws | capitalize}}: {{ regions.categories.planet.laws[planet.laws]}}</dd>
							<dt>Tech</dt>
							<dd>{{planet.tech | capitalize}}: {{ regions.categories.planet.tech[planet.tech]}}</dd>
							<dt>Temperature</dt>
							<dd>{{planet.temperature | capitalize}}: {{ regions.categories.planet.temperature[planet.temperature]}}</dd>
							<dt>Resource</dt>
							<dd>{{planet.resources | capitalize}}: {{ regions.categories.planet.resources[planet.resources]}}</dd>
							<dt>Infrastructure</dt>
							<dd>{{planet.infrastructure | capitalize}}: {{ regions.categories.planet.infrastructure[planet.infrastructure]}}</dd>
							<dt>Spaceport</dt>
							<dd>{{regions.categories.planet.spaceport[planet.spaceport]}}</dd>
							<dt>Satellites</dt>
							<dd>{{planet.satellites}}</dd>
							<dt>Trade Number</dt>
							<dd>{{regions.getPlanetTrade(planet)}}</dd>
							<dt>Description</dt>
							<dd>{{planet.description}}</dd>
							<dt>Tags</dt>
							<dd>
								<v-chip v-for="(t,i) in tags" :key="'tag-' + i">{{t}}</v-chip>
							</dd>
						</dl>
					</v-card-text>
				</v-card>
			</v-flex>
        </v-layout>
	</v-container>
</template>

<script>
	export default {
		props: {
			sector_x: {
				type: String,
				default: "0"
			},
			sector_y: {
				type: String,
				default: "0"
			},
			planet_index: {
				type: String,
				default: "0"
			}
		},
		data() {
			return {
				planet: {},
				sector: {},
				regions: this.$bsFactory.getTemplate('regions'),
			}
		},
		computed: {
			tags() {
				return this.regions.tags.generateTags(this.planet)
			}
		},
		created() {
			let tempSector = this.regions.findSector(this.sector_x, this.sector_y)
			if (tempSector) {
				this.sector = tempSector
				let tempPlanet = this.sector.planets[this.planet_index]
				if (tempPlanet) {
					this.planet = tempPlanet
				} else {
					console.error("PLANET NOT FOUND")
				}
			} else {
				console.error("SECTOR NOT FOUND")
			}
		}
	}
</script>