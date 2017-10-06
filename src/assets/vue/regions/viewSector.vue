<template>
	<f7-page>
		<f7-block>
			<f7-block-title>{{sector.name}}</f7-block-title>
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
					<dd class="bottom-border">{{starDetails.type}} ({{ starDetails.class }})</dd>
					<dd class="bottom-border">{{starDetails.description}}</dd>
					<dt><strong>Star Temperature</strong></dt>
					<dd class="bottom-border">{{starDetails.temperature}}K</dd>
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
									<f7-link :href="'/regions/planet/view/'+sector_index+'/'+i"><f7-icon color="blue" material="arrow_forward"></f7-icon></f7-link>
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
			sector_index: {
				type: String,
				default: "0"
			}
		},
		data() {
			return {
				sector: {},
				regions: this.$bsFactory.getTemplate('regions'),
				formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
		},
		computed: {
      starDetails() {
        let temp = this.regions.categories.star.spectrum[this.sector.star.spectrum].temp
        let star = {
          class: this.sector.star.spectrum + this.sector.star.temperature + this.sector.star.size,
          type: this.regions.categories.star.spectrum[this.sector.star.spectrum].colour + " " + this.regions.categories.star.size[this.sector.star.size],
          description: this.regions.categories.star.spectrum[this.sector.star.spectrum].description,
          temperature: (Math.round( (temp.max - temp.min) / 10 ) * (9 - this.sector.star.temperature)) + temp.min
        }
        return star
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
			} else {
				console.error("SECTOR NOT FOUND")
			}
		}
	}
</script>