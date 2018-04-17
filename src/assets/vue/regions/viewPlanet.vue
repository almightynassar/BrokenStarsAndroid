<template>
	<v-container grid-list-md>
        <v-layout row wrap>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">{{planet.name}}</v-card-title>
					<v-card-text>
						<div>Name</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.name}}</div>
						<div>Description</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.description}}</div>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Environment</v-card-title>
					<v-card-text>
						<div>Type</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.shape | capitalize}}: {{ regions.categories.planet.shape[planet.shape]}}</div>
						<div>Size</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.size | capitalize}}: {{ regions.categories.planet.size[planet.size]}} km diameter</div>
						<div>Atmosphere</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.atmosphere | capitalize}}: {{ regions.categories.planet.atmosphere[planet.atmosphere]}}</div>
						<div>Hydrosphere</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.hydrosphere | capitalize}}: {{ regions.categories.planet.hydrosphere[planet.hydrosphere]}}</div>
						<div>Biosphere</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.biosphere | capitalize}}: {{ regions.categories.planet.biosphere[planet.biosphere]}}</div>
						<div>Satellites</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.satellites}}</div>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Statistics</v-card-title>
					<v-card-text>
						<div>Population</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{regions.categories.planet.population[planet.population] | capitalize}}</div>
						<div>Government</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.government | capitalize}}: {{ regions.categories.planet.government[planet.government]}}</div>
						<div>Laws</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.laws | capitalize}}: {{ regions.categories.planet.laws[planet.laws]}}</div>
						<div>Tech</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.tech | capitalize}}: {{ regions.categories.planet.tech[planet.tech]}}</div>
						<div>Temperature</div>
						<div >{{planet.temperature | capitalize}}: {{ regions.categories.planet.temperature[planet.temperature]}}</div>
						<div>Resource</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.resources | capitalize}}: {{ regions.categories.planet.resources[planet.resources]}}</div>
						<div>Infrastructure</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{planet.infrastructure | capitalize}}: {{ regions.categories.planet.infrastructure[planet.infrastructure]}}</div>
						<div>Spaceport</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{regions.categories.planet.spaceport[planet.spaceport]}}</div>
						<div>Trade Number</div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{regions.getPlanetTrade(planet)}}</div>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Tags</v-card-title>
					<v-card-text>
						<v-chip v-for="(t,i) in tags" :key="'tag-' + i">{{t}}</v-chip>
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