<template>
	<f7-page>
		<f7-block>
			<f7-block-title class="content-center-text bottom-border small-caps">{{sector.name}}</f7-block-title>
			<f7-block inset>
				<f7-buttons>
					<f7-button href='/regions/list'>Sector List</f7-button>
					<f7-button :href="'/regions/map/?x='+sector.x+'&y='+sector.y">Show on Map</f7-button>
				</f7-buttons>
				<dl>
					<!-- STATISTICS -->
					<dt><strong>Travel Zone</strong> <help-region-zone></help-region-zone></dt>
					<dd class="bottom-border">{{ sector.zone | capitalize}}: {{ regions.categories.sector.zone[sector.zone] }}</dd>
					<dt><strong>Trade Number</strong> <help-region-zone></help-region-zone></dt>
					<dd class="bottom-border">{{ regions.getSectorTrade(sector) }}</dd>
					<dt><strong>Sector Control</strong> <help-region-control></help-region-control></dt>
					<dd class="bottom-border">{{ regions.categories.sector.control[sector.control] }}</dd>
					<dt><strong>Star Class</strong> <help-region-star></help-region-star></dt>
					<dd class="bottom-border">{{starDetails.type}} ({{ starDetails.class }}) <help-generic :popover="'star-details'">{{starDetails.description}}</help-generic></dd>
					<dt><strong>Star Temperature</strong></dt>
					<dd class="bottom-border">{{starDetails.temperature}}K</dd>
					<dt><strong>Star Luminosity</strong></dt>
					<dd class="bottom-border">{{starDetails.luminosity}}</dd>
					<dt><strong>Star Radius</strong></dt>
					<dd class="bottom-border">{{starDetails.radius}}</dd>
					<dt><strong>Description</strong></dt>
					<dd class="bottom-border">{{sector.description}}</dd>
					<dt><strong># of solar objects</strong></dt>
					<dd class="bottom-border">{{ sector.planets.length }}</dd>
					<dt><strong>Solar Objects</strong></dt>
					<dd class="bottom-border">
						<table>
							<tr>
								<th>Name</th>
								<th></th>
							</tr>
							<tr v-for="(p,i) in sector.planets" :value="i" :key="'planet-' + i">
								<td>{{p.name}}</td>
								<td>
									<f7-link :href="'/regions/planet/view/'+sector_x+'/'+sector_y+'/'+i"><f7-icon color="blue" material="arrow_forward"></f7-icon></f7-link>
								</td>
							</tr>
						</table>
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
			}
		},
		data() {
			return {
				sector: {},
				regions: this.$bsFactory.getTemplate('regions'),
			}
		},
		computed: {
			starDetails() {
				return this.regions.stars.starDetails(this.sector.star.spectrum, this.sector.star.temperature, this.sector.star.size)
			}
    	},
		created() {
			let tempSector = this.regions.findSector(this.sector_x, this.sector_y)
			if (tempSector) {
				this.sector = tempSector
			} else {
				console.error("SECTOR NOT FOUND")
			}
		}
	}
</script>