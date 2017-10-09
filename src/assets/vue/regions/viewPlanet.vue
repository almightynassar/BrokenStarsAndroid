<template>
	<f7-page>
		<f7-block>
			<f7-block-title>{{planet.name}}</f7-block-title>
			<f7-block inset>
				<f7-buttons>
					<f7-button :href="'/regions/sector/view/'+sector_x+'/'+sector_y">View Sector</f7-button>
					<f7-button :href="'/regions/map/?x='+sector.x+'&y='+sector.y">Show on Map</f7-button>
				</f7-buttons>
				<dl>
					<!-- STATISTICS -->
					<dt><strong>Type</strong></dt>
					<dd class="bottom-border">{{planet.shape | capitalize}}: {{ regions.categories.planet.shape[planet.shape]}}</dd>
					<dt><strong>Size</strong></dt>
					<dd class="bottom-border">{{planet.size | capitalize}}: {{ regions.categories.planet.size[planet.size]}} km diameter</dd>
					<dt><strong>Atmosphere</strong></dt>
					<dd class="bottom-border">{{planet.atmosphere | capitalize}}: {{ regions.categories.planet.atmosphere[planet.atmosphere]}}</dd>
					<dt><strong>Hydrosphere</strong></dt>
					<dd class="bottom-border">{{planet.hydrosphere | capitalize}}: {{ regions.categories.planet.hydrosphere[planet.hydrosphere]}}</dd>
					<dt><strong>Biosphere</strong></dt>
					<dd class="bottom-border">{{planet.biosphere | capitalize}}: {{ regions.categories.planet.biosphere[planet.biosphere]}}</dd>
					<dt><strong>Population</strong></dt>
					<dd class="bottom-border">{{regions.categories.planet.population[planet.population] | capitalize}}</dd>
					<dt><strong>Government</strong></dt>
					<dd class="bottom-border">{{planet.government | capitalize}}: {{ regions.categories.planet.government[planet.government]}}</dd>
					<dt><strong>Laws</strong></dt>
					<dd class="bottom-border">{{planet.laws | capitalize}}: {{ regions.categories.planet.laws[planet.laws]}}</dd>
					<dt><strong>Tech</strong></dt>
					<dd class="bottom-border">{{planet.tech | capitalize}}: {{ regions.categories.planet.tech[planet.tech]}}</dd>
					<dt><strong>Temperature</strong></dt>
					<dd class="bottom-border">{{planet.temperature | capitalize}}: {{ regions.categories.planet.temperature[planet.temperature]}}</dd>
					<dt><strong>Resource</strong></dt>
					<dd class="bottom-border">{{planet.resources | capitalize}}: {{ regions.categories.planet.resources[planet.resources]}}</dd>
					<dt><strong>Infrastructure</strong></dt>
					<dd class="bottom-border">{{planet.infrastructure | capitalize}}: {{ regions.categories.planet.infrastructure[planet.infrastructure]}}</dd>
					<dt><strong>Spaceport</strong></dt>
					<dd class="bottom-border">{{regions.categories.planet.spaceport[planet.spaceport]}}</dd>
					<dt><strong>Satellites</strong></dt>
					<dd class="bottom-border">{{planet.satellites}}</dd>
					<dt><strong>Trade Number</strong></dt>
					<dd class="bottom-border">{{regions.getPlanetTrade(planet)}}</dd>
					<dt><strong>Description</strong></dt>
					<dd class="bottom-border">{{planet.description}}</dd>
					<dt><strong>Tags</strong></dt>
					<dd class="bottom-border">
						<span class="tag" v-for="(t,i) in tags" :value="i" :key="'tag-' + i">
							{{t}}
						</span>
					</dd>
				</dl>
			</f7-block>
		</f7-block>
	</f7-page>
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
				formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
		},
		computed: {
			tags() {
				return this.regions.tags.generateTags(this.planet)
			}
		},
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
			},
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