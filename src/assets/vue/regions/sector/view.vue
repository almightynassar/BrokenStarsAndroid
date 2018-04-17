<template>
	<v-container grid-list-md>
        <v-layout row wrap>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">{{sector.name}}</v-card-title>
					<v-card-text>
						<div><strong>Sector Control</strong> <help-sector help="control"></help-sector></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">
							{{ regions.nations.get(sector.control).name }}
							<v-btn :to="'/regions/nation/?nation='+sector.control"><v-icon>keyboard_arrow_right</v-icon></v-btn>
						</div>
						<div><strong>Trade Number</strong> <help-sector help="trade"></help-sector></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{ regions.getSectorTrade(sector) }}</div>
						<div><strong>Travel Zone</strong> <help-sector help="zone"></help-sector></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{ sector.zone | capitalize}}: {{ regions.categories.sector.zone[sector.zone] }}</div>
						<div><strong># of objects in orbit</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{ sector.planets.length }}</div>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Star</v-card-title>
					<v-card-text>
						<div><strong>Class</strong> <help-star help="star-class"></help-star></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.type}} ({{ details.class }}) <help-generic :popover="'star-details'">{{details.description}}</help-generic></div>
						<div><strong>Luminosity</strong> <help-star help="luminosity"></help-star></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.luminosity}} W <help-generic :popover="'star-luminosity'">This is {{details.luminosityRelative}} times relative to our Sun (Sol)</help-generic></div>
						<div><strong>Mass</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.mass}} kg <help-generic :popover="'star-radius'">This is {{details.massRelative}} times relative to our Sun (Sol)</help-generic></div>
						<div><strong>Radius</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.radius}} m <help-generic :popover="'star-radius'">This is {{details.radiusRelative}} times relative to our Sun (Sol)</help-generic></div>
						<div><strong>Temperature</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.temperature}} K</div>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Solar Objects</v-card-title>
					<v-card-text>
						<table>
							<tr>
								<th>Name</th>
								<th></th>
							</tr>
							<tr v-for="(p,i) in sector.planets" :value="i" :key="'planet-' + i">
								<td>{{p.name}}</td>
								<td>
									<v-btn :to="'/regions/planet/view/'+sector_x+'/'+sector_y+'/'+i"><v-icon color="blue">arrow_forward</v-icon></v-btn>
								</td>
							</tr>
						</table>
					</v-card-text>
				</v-card>
			</v-flex>
        </v-layout>
		<v-btn dark color="blue" to='/regions/'>Sector List</v-btn>
		<v-btn dark color="blue" :to="'/regions/map?x='+sector.x+'&y='+sector.y">Show on Map</v-btn>
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
			}
		},
		data() {
			return {
				sector: {},
				regions: this.$bsFactory.getTemplate('regions'),
			}
		},
		computed: {
			details() {
				return this.regions.stars.details(this.sector.star.spectrum, this.sector.star.temperature, this.sector.star.size)
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