<template>
	<v-container grid-list-md>
        <v-layout row wrap>
			<v-flex sm12 lg6>
				<v-card flat>
					<v-card-title class="small-caps">{{sector.name}}</v-card-title>
					<v-card-text>
						<div><strong>Sector Control</strong> <help-sector help="control"></help-sector></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">
							{{ nation.name }}
							<v-btn @click.native="dialog = true">More <v-icon>keyboard_arrow_right</v-icon></v-btn>
						</div>
						<div><strong>Trade Number</strong> <help-sector help="trade"></help-sector></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{ regions.getSectorTrade(sector) }}</div>
						<div><strong>Travel Zone</strong> <help-sector help="zone"></help-sector></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{ sector.zone | capitalize}}: {{ regions.categories.sector.zone[sector.zone] }}</div>
						<div><strong># of objects in orbit</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{ sector.objects.length }}</div>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 lg6>
				<v-card flat>
					<v-card-title class="small-caps">Star</v-card-title>
					<v-card-text>
						<div><strong>Class</strong> <help-star help="star-class"></help-star></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.type}} ({{ details.class }}) <help-generic :popover="'star-details'">{{details.description}}</help-generic></div>
						<div><strong>Luminosity</strong> <help-star help="luminosity"></help-star></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.luminosityRelative}} <help-generic :popover="'star-luminosity'">{{details.luminosity}} W</help-generic></div>
						<div><strong>Mass</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.massRelative}} <help-generic :popover="'star-radius'">{{details.mass}} kg</help-generic></div>
						<div><strong>Radius</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.radiusRelative}} <help-generic :popover="'star-radius'">Radius is {{details.radius}} m</help-generic></div>
						<div><strong>Temperature</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.temperature}} K</div>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 lg12>
				<v-card flat>
					<v-card-title class="small-caps">Description</v-card-title>
					<v-card-text>
						{{ sector.description }}
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex sm12 lg12>
				<v-card flat>
					<v-card-title class="small-caps">Solar Objects</v-card-title>
					<v-card-text>
						<v-switch
							label="Population Centres only"
							v-model="toggle"
						></v-switch>
						<help-generic :popover="'pop-centre-details'">The 'Population Centres only' flag will display ALL objects that have a population on it, including planets, moons and space stations.</help-generic>
						<v-data-table
							:headers="fields.objects"
							:items="(toggle) ? popCentres : sector.objects"
							hide-actions
							item-key="name"
						>
							<template slot="items" slot-scope="props">
								<tr @click="props.expanded = !props.expanded">
									<td>{{ props.item.name | capitalize}}</td>
									<td>{{ props.item.type | capitalize}}</td>
									<td>{{ props.item.distance}} AU</td>
								</tr>
							</template>
							<template slot="expand" slot-scope="props">
								<detail-row-planet-summary :star="details" :planet="props.item"></detail-row-planet-summary>
							</template>
						</v-data-table>
					</v-card-text>
				</v-card>
			</v-flex>
        </v-layout>
		<v-dialog
			v-model="dialog"
			fullscreen
			hide-overlay
			transition="dialog-bottom-transition"
			scrollable
		>
			<v-card tile>
				<v-toolbar card dark color="primary">
					<v-btn icon dark @click.native="dialog = false">
						<v-icon>close</v-icon>
					</v-btn>
					<v-toolbar-title>Nation</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<v-card flat>
						<v-card-title class="small-caps">{{nation.name}}</v-card-title>
						<v-card-text>
							<div><strong>Status</strong></div>
							<div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.governance.status | capitalize }} <help-generic :popover="'status-details'">{{ regions.governance.government.status[nation.governance.status] }}</help-generic></div>
							<div><strong>Government</strong></div>
							<div class="ml-4 mt-1 mb-1 bottom-border">{{ nation.governance.source | capitalize}}<help-generic :popover="'source-details'">{{regions.governance.government.source[nation.governance.source]}}</help-generic>  {{ nation.governance.structure | capitalize}}<help-generic :popover="'structure-details'">{{regions.governance.government.structure[nation.governance.structure]}}</help-generic></div>
						</v-card-text>
					</v-card>
					<v-card flat>
						<v-card-title class="small-caps">Description</v-card-title>
						<v-card-title>{{nation.description}}</v-card-title>
					</v-card>
				</v-card-text>
			</v-card>
     	</v-dialog>
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
				dialog: false,
				fields: {
					objects: [
						{
							text: 'Name',
							align: 'left',
							sortable: true,
							value: 'name'
						},
						{
							text: 'Type',
							align: 'left',
							sortable: true,
							value: 'type'
						},
						{
							text: 'Distance',
							align: 'left',
							sortable: true,
							value: 'distance'
						},
					],
				},
				toggle: false
			}
		},
		computed: {
			details() {
				return this.regions.stars.details(this.sector.star.spectrum, this.sector.star.temperature, this.sector.star.size)
			},
			nation() {
				return this.regions.nations.get(this.sector.control)
			},
			popCentres() {
				return this.regions.getPopulationCentres(this.sector.objects)
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