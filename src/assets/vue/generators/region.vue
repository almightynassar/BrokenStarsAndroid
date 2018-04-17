<template>
	<v-container grid-list-md>
        <v-layout row wrap>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Sector</v-card-title>
					<v-card-text>
						<v-text-field
							label="Name"
							v-model="sector.name"
							:rules="rules.name"
							hint="The name of the sector"
							required
						></v-text-field>
						<v-text-field
							label="Description"
							v-model="sector.description"
							multi-line
							textarea
							hint="The backstory of the sector"
							required
						></v-text-field>
						<v-text-field
							label="X-coordinate"
							v-model="sector.x"
							type="number"
							required
						></v-text-field>
						<v-text-field
							label="Y-coordinate"
							v-model="sector.y"
							type="number"
							required
						></v-text-field>
						<v-select
							label="Sector Control"
							v-model="sector.control"
							:items="nations"
							item-value="id"
							item-text="name"
							:rules="[v => !!v || 'Sector Control is required']"
							required
						></v-select>
					</v-card-text>
				</v-card>
			</v-flex>

			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Star</v-card-title>
					<v-card-text>
						<v-select
							label="Star Class"
							v-model="sector.star.spectrum"
							:items="classes"
							item-value="id"
							item-text="colour"
							:rules="[v => !!v || 'Star Class is required']"
							required
							@input="generateDetails"
						></v-select>
						<v-select
							label="Star Size"
							v-model="sector.star.size"
							:items="sizes"
							item-value="id"
							item-text="name"
							:rules="[v => !!v || 'Star Size is required']"
							required
							@input="generateDetails"
						></v-select>
						<v-select
							label="Star Temperature"
							v-model="sector.star.temperature"
							:items="['0',1,2,3,4,5,6,7,8,9]"
							:rules="[v => !!v || 'Star Temperature is required']"
							@input="generateDetails"
						></v-select>
						<div><strong>Class</strong> <help-star help="star-class"></help-star></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.star.type}} ({{ details.star.class }}) <help-generic :popover="'star-details'">{{details.star.description}}</help-generic></div>
						<div><strong>Luminosity</strong> <help-star help="luminosity"></help-star></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.star.luminosity}} W <help-generic :popover="'star-luminosity'">This is {{details.star.luminosityRelative}} times relative to our Sun (Sol)</help-generic></div>
						<div><strong>Mass</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.star.mass}} kg <help-generic :popover="'star-radius'">This is {{details.star.massRelative}} times relative to our Sun (Sol)</help-generic></div>
						<div><strong>Radius</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.star.radius}} m <help-generic :popover="'star-radius'">This is {{details.star.radiusRelative}} times relative to our Sun (Sol)</help-generic></div>
						<div><strong>Temperature</strong></div>
						<div class="ml-4 mt-1 mb-1 bottom-border">{{details.star.temperature}} K</div>
					</v-card-text>
				</v-card>
			</v-flex>

			<!-- PLANETS -->
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">Planets</v-card-title>
					<v-card-text>
						<v-data-table
							:headers="fields.planets"
							:items="sector.planets"
							hide-actions
							item-key="name"
						>
							<template slot="items" slot-scope="props">
								<tr>
									<td @click="props.expanded = !props.expanded">{{ props.item.name | capitalize }}</td>
									<td>{{ props.item.distance }}</td>
								</tr>
							</template>
							<template slot="expand" slot-scope="props">
								<detail-row-planet-summary :fitting="props.item"></detail-row-planet-summary>
							</template>
						</v-data-table>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn dark flat color="red" @click="clear()">Clear</v-btn>
						<v-dialog v-model="dialog.planets">
							<v-btn dark flat color="green" slot="activator">Add</v-btn>
							<v-card>
								<v-card-title class="headline">Add a new planet</v-card-title>
								<v-card-text>
									<v-text-field
										label="Name"
										v-model="planet.name"
										:rules="rules.name"
										hint="The name of the planet"
										required
									></v-text-field>
									<v-text-field
										label="Distance (AU)"
										v-model="planet.distance"
										type="number"
										hint="Distance of the planet from the star (in AU)"
										required
										@input="generateDetails"
									></v-text-field>
									<v-select
										label="Atmosphere"
										v-model="planet.atmosphere"
										:items="regions.planets.makeArray('atmosphere')"
										item-value="id"
										item-text="name"
										:rules="[v => !!v || 'Atmosphere is required']"
										required
										@input="generateDetails"
									></v-select>
									<v-slider
										label="Diameter"
										v-model="planet.size"
										:step="1000"
										:min="1"
										:max="50000"
										ticks
										:hint="details.planet.size.name + ' (' + planet.size + ' km). ' + details.planet.size.description"
										persistent-hint
										@input="generateDetails"
									>
									</v-slider>
									<v-slider
										label="Metallics vs Silicates"
										v-model="planet.metallic"
										thumb-label
										step="5"
										ticks
										persistent-hint
										:hint="details.planet.metallic.name + ' (' + planet.metallic + '% Metallics / ' + (100 - planet.metallic) + '% Silicates). ' + details.planet.metallic.description"
										@input="generateDetails"
									>
									</v-slider>
									<v-slider
										label="Surface Water"
										v-model="planet.hydrosphere"
										thumb-label
										step="5"
										ticks
										persistent-hint
										:hint="details.planet.hydrosphere.name + ' (' + planet.hydrosphere + '% surface water). ' + details.planet.hydrosphere.description"
										@input="generateDetails"
									>
									</v-slider>
									<div><strong>Albedo</strong></div>
									<div class="ml-4 mt-1 mb-1 bottom-border">{{details.planet.albedo}}</div>
									<div><strong>Temperature</strong></div>
									<div class="ml-4 mt-1 mb-1 bottom-border">{{details.planet.celsius}} °C ({{details.planet.temperature}} °K)</div>
								</v-card-text>
							</v-card>
						</v-dialog>
					</v-card-actions>
				</v-card>
			</v-flex>
			<!-- <f7-block-title class="content-center-text color-lightblue">Planets</f7-block-title>
			<f7-button big fill round color="blue" v-on:click="openPlanetsPopup()"><f7-icon color="white" material="add"></f7-icon></f7-button>
			<f7-popup id="planets-popup" ref="planets-popup">
				<f7-block-title>Add Planet</f7-block-title>
				<f7-button big fill color="blue" v-on:click="closePlanetsPopup()"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
				<div class="data-table custom-table">
					<table>
						<tr>
							<td><strong>Name</strong></td>
							<td><input type="text" v-model="planet.name" /></td>
						</tr>
						<tr>
							<td><strong>Description</strong></td>
							<td><input type="text" v-model="planet.description" /></td>
						</tr>
						<tr>
							<td><strong>Type</strong></td>
							<td>
								<select v-model="planet.shape">
									<option v-for="(n,i) in regions.categories.planet.shape" :value="i" :key="'planet-shape-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Size</strong></td>
							<td>
								<select v-model="planet.size">
									<option v-for="(n,i) in regions.categories.planet.size" :value="i" :key="'planet-size-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Atmosphere</strong></td>
							<td>
								<select v-model="planet.atmosphere">
									<option v-for="(n,i) in regions.categories.planet.atmosphere" :value="i" :key="'planet-atmosphere-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Hydrosphere</strong></td>
							<td>
								<select v-model="planet.hydrosphere">
									<option v-for="(n,i) in regions.categories.planet.hydrosphere" :value="i" :key="'planet-hydrosphere-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Biosphere</strong></td>
							<td>
								<select v-model="planet.biosphere">
									<option v-for="(n,i) in regions.categories.planet.biosphere" :value="i" :key="'planet-biosphere-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Population</strong></td>
							<td>
								<select v-model="planet.population">
									<option v-for="(n,i) in regions.categories.planet.population" :value="i" :key="'planet-population-' + i">{{n | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Government</strong></td>
							<td>
								<select v-model="planet.government">
									<option v-for="(n,i) in regions.categories.planet.government" :value="i" :key="'planet-government-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Laws</strong></td>
							<td>
								<select v-model="planet.laws">
									<option v-for="(n,i) in regions.categories.planet.laws" :value="i" :key="'planet-laws-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Tech-Level</strong></td>
							<td>
								<select v-model="planet.tech">
									<option v-for="(n,i) in regions.categories.planet.tech" :value="i" :key="'planet-tech-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Temperature</strong></td>
							<td>
								<select v-model="planet.temperature">
									<option v-for="(n,i) in regions.categories.planet.temperature" :value="i" :key="'planet-temperature-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Resources</strong></td>
							<td>
								<select v-model="planet.resources">
									<option v-for="(n,i) in regions.categories.planet.resources" :value="i" :key="'planet-resources-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Infrastructure</strong></td>
							<td>
								<select v-model="planet.infrastructure">
									<option v-for="(n,i) in regions.categories.planet.infrastructure" :value="i" :key="'planet-infrastructure-' + i">{{i | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Spaceport</strong></td>
							<td>
								<select v-model="planet.spaceport">
									<option v-for="(n,i) in regions.categories.planet.spaceport" :value="i" :key="'planet-spaceport-' + i">{{n | capitalize}}</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><strong>Satellites</strong></td>
							<td><input type="number" v-model="planet.satellites" /></td>
						</tr>
						<tr>
							<td><strong>Tags</strong></td>
							<td><textarea v-model="tagInput" v-on:input="updateTags()" placeholder="Use ';' as a seperator between tags"></textarea></td>
						</tr>
						<tr>
							<td><strong>Trade Number</strong></td>
							<td>{{planetTrade}}</td>
						</tr>
					</table>
				</div>
				<div>
					<p>Your eligible tags for this planet are:</p>
					<span class="tag" v-for="(t,i) in tags" :value="i" :key="'tag-' + i">
						{{t}}
					</span>
				</div>
				<f7-button fill color="green" v-on:click="onPlanetAddClick()"><f7-icon color="white" material="add"></f7-icon></f7-button>
			</f7-popup>
			<div class="data-table">
				<vuetable
					ref="planetstable"
					:api-mode="false"
					:data="sector.planets"
					:fields="[
						'name',
						{
							name: '__slot:delete',
							title: 'Delete',
							titleClass: 'center aligned',
							dataClass: 'center aligned'
						},
						{
							name: '__slot:expand',
							title: 'Expand',
							titleClass: 'center aligned',
							dataClass: 'center aligned'
						}
					]"
					detail-row-component="detail-row-planet-summary"
					track-by="name"
				>
					<template slot="delete" scope="props">
						<p><f7-button fill color="red" v-on:click="onPlanetRemoveClick(props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></f7-button></p>
					</template>
					<template slot="expand" scope="props">
						<p><f7-button v-on:click="onPlanetExpandRow(props.rowData.name)"><f7-icon size=16 color="blue" material="expand_more"></f7-icon></f7-button></p>
					</template>
				</vuetable>
			</div> -->

			<!-- COPY TO CLIPBOARD -->
			<v-flex sm12>
				<v-card flat>
					<v-card-title class="small-caps">Result</v-card-title>
					<v-card-text>
						<p>The generated Sector is shown in object format below. Currently you cannot save your sector; to do that, you need to create a new enhancement issue on the project page.</p>
						<v-text-field
							id="sector-textarea-to-copy"
							label="Data"
							v-model="textual"
							disabled
							multi-line
							textarea
						></v-text-field>
					</v-card-text>
					<v-card-actions>
						<v-btn flat color="blue" @click="copyTextArea">Copy to clipboard</v-btn>
					</v-card-actions>
				</v-card>
				<v-snackbar
					:timeout="3000"
					color="error"
					:vertical="true"
					v-model="snackbar.copy.error"
				>
					ERROR: Could not copy the text to your clipboard
					<v-btn flat @click.native="snackbar.copy.error = false">Close</v-btn>
				</v-snackbar>
				<v-snackbar
					:timeout="3000"
					color="success"
					:vertical="true"
					v-model="snackbar.copy.success"
				>
					Text was copied to your clipboard
					<v-btn flat @click.native="snackbar.copy.success = false">Close</v-btn>
				</v-snackbar>
			</v-flex>
        </v-layout>
	</v-container>
</template>

<script>
	var stringifyObject = require('stringify-object')
	export default {
		data() {
			return {
				// Region model
				regions: this.$bsFactory.getTemplate('regions'),
				// Form rules
				rules: {
					name: [
						(v) => !!v || 'Name is required',
						(v) => /[A-Za-z0-9. -,&%!()]+/.test(v) || 'Name must have at least one character (special characters allowed: .-,&%!() and space)'
					],
				},
				// Snackbar information
				snackbar: {
					copy: {
						error: false,
						success: false
					}
				},
				// Table fields
				fields: {
					planets: [
						{
							text: 'Name',
							align: 'left',
							sortable: true,
							value: 'name'
						},
						{
							text: 'Distance',
							align: 'left',
							sortable: true,
							value: 'distance'
						},
					],
				},
				// Dialog fields
				dialog: {
					planets: false,
				},
				// Tag information
				tags: [],
				tagInput: "",
				// Trade data
				sectorTrade: 0,
				planetTrade: 0,
				// Basic sector
        		sector: {
					name: "New Sector",
					x: 0,
					y: 0,
					control: "na",
					star: {
						spectrum: "G",
						temperature: 2,
						size: "V"
					},
					planets: [],
					description: "Generic description of a star system."
				},
				// Basic Planet
				planet: {
					name: "New Planet",
					distance: 1,
					shape: "terrestrial",
					size: 13000,
					atmosphere: "standard",
					hydrosphere: 70,
					metallic: 35,
					biosphere: "none",
					population: 1,
					government: "none",
					laws: "none",
					tech: "none",
					temperature: "temperate",
					resources: "none",
					infrastructure: "none",
					spaceport: 0,
					satellites: 0,
					description: "Generic Planetary description",
					tags: []
				},
				// Generated star information
				details: {
					star: {},
					planet: {},
				},
				// Lists for select controls
				nations: [],
				sizes: [],
				classes: [],
			}
		},
		computed: {
			textual() {
				return "export default " + stringifyObject(this.sector, {indent: '  ', singleQuotes: false})
			}
		},
		watch: {
			planet: {
				handler() {
					this.makeTags()
					this.makeTrade()
				},
				deep: true
			}
		},
		methods: {
			/**
			 * Generate star details from sector information
			 */
			generateDetails() {
				this.details.star = this.regions.stars.details(this.sector.star.spectrum, this.sector.star.temperature, this.sector.star.size)
				this.details.planet = this.regions.planets.details(this.details.star, this.planet)
			},
			/**
			 * Copies the sector information into the user's clipboard
			 */
			copyTextArea() {
				// Select the text area with the formatted Sector information
				let selector = document.querySelector('#sector-textarea-to-copy')
				selector.disabled = false
				selector.select()
				try {
					if (document.execCommand('copy')) {
						this.snackbar.copy.success = true
					} else {
						this.snackbar.copy.error = true
					}
				} catch (err) {
					this.snackbar.copy.error = true
				}
				selector.disabled = true
			},
			/**
			 * Clear our the sector planets
			 */
			clear() {
				this.sector.planets = []
			},
			onPlanetAddClick() {
        		let planet = _.cloneDeep(this.planet)
				this.sector.planets.push(planet)
				this.makeTrade()
				this.closePlanetsPopup()
			},
			onPlanetRemoveClick(id) {
        		this.sector.planets.splice(id, 1)
			},
			makeTags() {
				this.tags = this.regions.tags.generateTags(this.planet)
			},
			makeTrade() {
				this.sectorTrade = this.regions.getSectorTrade(this.sector)
				this.planetTrade = this.regions.getPlanetTrade(this.planet)
			},
			updateTags() {
				let tagArray = this.tagInput.split(/;[ ]?/).filter(n => n)
				this.planet.tags = tagArray
			}
		},
		created() {
			// Initialise our arrays
			this.nations = this.regions.nations.makeArray()
			this.sizes = this.regions.stars.makeArray('size')
			this.classes = this.regions.stars.makeArray('class')
			// Generate basic star information
			this.generateDetails()
		}
	}
</script>

