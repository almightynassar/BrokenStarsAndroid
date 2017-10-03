<template>
	<f7-page>
		<f7-block-title>{{planet.name}}</f7-block-title>
		<f7-block>
			<f7-buttons>
				<f7-button :href="'/regions/sector/view/'+sector_index">View Sector</f7-button>
				<f7-button :href="'/regions/map/?x='+sector.x+'&y='+sector.y">Show on Map</f7-button>
			</f7-buttons>
			<dl>
				<!-- STATISTICS -->
				<dt><strong>Type</strong></dt>
				<dd>{{planet.type | capitalize}}</dd>
				<dt><strong>Size</strong></dt>
				<dd>{{planet.size | capitalize}}</dd>
				<dt><strong>Atmosphere</strong></dt>
				<dd>{{planet.atmosphere | capitalize}}</dd>
				<dt><strong>Hydrosphere</strong></dt>
				<dd>{{planet.hydrosphere | capitalize}}</dd>
				<dt><strong>Biosphere</strong></dt>
				<dd>{{planet.biosphere | capitalize}}</dd>
				<dt><strong>Populatiion</strong></dt>
				<dd>{{regions.categories.planet.population[planet.population] | capitalize}}</dd>
				<dt><strong>Government</strong></dt>
				<dd>{{planet.government | capitalize}}</dd>
				<dt><strong>Laws</strong></dt>
				<dd>{{planet.laws | capitalize}}</dd>
				<dt><strong>Tech</strong></dt>
				<dd>{{planet.tech | capitalize}}</dd>
				<dt><strong>Temperature</strong></dt>
				<dd>{{planet.temperature | capitalize}}</dd>
				<dt><strong>Resource</strong></dt>
				<dd>{{planet.resources | capitalize}}</dd>
				<dt><strong>Infrastructure</strong></dt>
				<dd>{{planet.infrastructure | capitalize}}</dd>
				<dt><strong>Spaceport</strong></dt>
				<dd>{{regions.categories.planet.spaceport[planet.spaceport]}}</dd>
				<dt><strong>Satellites</strong></dt>
				<dd>{{planet.satellites}}</dd>
				<dt><strong>Trade Number</strong></dt>
				<dd>{{regions.getPlanetTrade(planet)}}</dd>
				<dt><strong>Description</strong></dt>
				<dd>{{planet.description}}</dd>
				<dt><strong>Tags</strong></dt>
				<dd>
					<span v-for="(t,i) in tags" :value="i" :key="'tag-' + i">
						{{t}}&nbsp;
					</span>
				</dd>
			</dl>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		props: {
			sector_index: {
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
				return this.regions.getPlanetTags(this.planet)
			}
		},
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
			},
		},
		created() {
			let tempSector = this.regions.sectors[this.sector_index]
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