<template>
	<v-container grid-list-md>
        <v-layout row wrap>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">{{sector.name}}</v-card-title>
					<v-card-text>
						<dl class="list">
							<dt>Sector Control <help-sector help="control"></help-sector></dt>
							<dd>
								{{ regions.nations.get(sector.control).name }}
								<v-btn :to="'/regions/nation/?nation='+sector.control"><v-icon>keyboard_arrow_right</v-icon></v-btn>
							</dd>
							<dt>Trade Number <help-sector help="trade"></help-sector></dt>
							<dd>{{ regions.getSectorTrade(sector) }}</dd>
							<dt>Travel Zone <help-sector help="zone"></help-sector></dt>
							<dd>{{ sector.zone | capitalize}}: {{ regions.categories.sector.zone[sector.zone] }}</dd>
							<dt># of objects in orbit</dt>
							<dd>{{ sector.planets.length }}</dd>
						</dl>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Star</v-card-title>
					<v-card-text>
						<dl class="list">
							<dt>Class: <help-star help="star-class"></help-star></dt>
							<dd>{{details.type}} ({{ details.class }}) <help-generic :popover="'star-details'">{{details.description}}</help-generic></dd>
							<dt>Luminosity: <help-star help="luminosity"></help-star></dt>
							<dd>{{details.luminosity}} W <help-generic :popover="'star-luminosity'">This is {{details.luminosityRelative}} times relative to our Sun (Sol)</help-generic></dd>
							<dt>Mass:</dt>
							<dd>{{details.mass}} kg <help-generic :popover="'star-radius'">This is {{details.massRelative}} times relative to our Sun (Sol)</help-generic></dd>
							<dt>Radius:</dt>
							<dd>{{details.radius}} m <help-generic :popover="'star-radius'">This is {{details.radiusRelative}} times relative to our Sun (Sol)</help-generic></dd>
							<dt>Temperature:</dt>
							<dd>{{details.temperature}} K</dd>
						</dl>
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