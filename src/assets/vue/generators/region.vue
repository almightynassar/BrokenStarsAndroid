<template>
	<f7-page>
		<f7-block>
			<f7-block-title class="content-center-text bottom-border small-caps">Region Generator</f7-block-title>
			<div class="data-table custom-table">
				<table>
					<tr>
						<td><strong>Name</strong></td>
						<td><input type="text" v-model="sector.name" /></td>
					</tr>
					<tr>
						<td><strong>Description</strong></td>
						<td><input type="text" v-model="sector.description" /></td>
					</tr>
					<tr>
						<td><strong>X coordinate</strong></td>
						<td><input type="number" v-model="sector.x" /></td>
					</tr>
					<tr>
						<td><strong>Y coordinate</strong></td>
						<td><input type="number" v-model="sector.y" /></td>
					</tr>
					<tr>
						<td><strong>Control</strong> <help-region-control></help-region-control></td>
						<td>
							<select v-model="sector.control">
								<option v-for="(n,i) in regions.categories.sector.control" :value="i" :key="'control-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Travel Zone</strong> <help-region-zone></help-region-zone></td>
						<td>
							<select v-model="sector.zone">
								<option v-for="(n,i) in regions.categories.sector.zone" :value="i" :key="'zone-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Star class</strong> <help-region-star></help-region-star></td>
						<td>
							<select v-model="sector.star.spectrum">
								<option v-for="(n,i) in regions.stars.class" :value="i" :key="'star-class-' + i">{{n.colour}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Star Temperature</strong> <help-region-star-temperature></help-region-star-temperature></td>
						<td>
							<select v-model="sector.star.temperature">
								<option v-for="n in 10" :value="n - 1" :key="'star-temp-' + n">{{n - 1}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Star Size</strong></td>
						<td>
							<select v-model="sector.star.size">
								<option v-for="(n,i) in regions.stars.size" :value="i" :key="'star-size-' + i">{{n.name}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Trade Number</strong></td>
						<td>{{sectorTrade}}</td>
					</tr>
				</table>
			</div>

			<!-- Planets -->
			<f7-block-title class="content-center-text color-lightblue">Planets</f7-block-title>
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
			</div>

			<!-- COPY TO CLIPBOARD -->
			<f7-block>
				<p>The generated Sector is shown in object format below. This sector is not automatically added to the map; to do that, you need to:</p>
				<ol>
					<li>Create a new project using source code from the GitHub repository (installing all the requisites such as cordova and npm)</li>
					<li>Create a new file in "./src/data/regions/"</li>
					<li>Copy-paste the below into the new file (don't forget the export default at the beginning)</li>
					<li>Rebuild the application (if possible)</li>
					<li>If your new region doesn't overwrite an existing sector, consider merging it with the parent repository!</li>
				</ol>
				<f7-button big fill color="blue" v-on:click="copyTextArea">Copy to clipboard</f7-button>
				<pre id="sector-textarea-to-copy">{{textual}}</pre>
			</f7-block>
		</f7-block>
	</f7-page>
</template>

<script>
	var stringifyObject = require('stringify-object')
	export default {
		data() {
			return {
				tags: [],
				tagInput: "",
				regions: this.$bsFactory.getTemplate('regions'),
				sectorTrade: 0,
				planetTrade: 0,
        sector: {
					name: "New Sector",
					x: 0,
					y: 0,
					control: "na",
					zone: "green",
					star: {
						spectrum: "G",
						temperature: "0",
						size: "V"
					},
					planets: [],
					description: "Generic description of a star system."
				},
				planet: {
					name: "New Planet",
					shape: "terrestrial",
					size: "small",
					atmosphere: "standard",
					hydrosphere: "none",
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
				}
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
			copyTextArea() {
				let text = document.getElementById("sector-textarea-to-copy")
				let textArea = document.createElement('textarea')
				textArea.id ="ThisWillBeDeletedLater"
				textArea.style.height = 0
				document.body.appendChild(textArea)
				textArea.value = text.innerText
				let selector = document.querySelector('#ThisWillBeDeletedLater')
				selector.select()
				try {
					var successful = document.execCommand('copy');
					var msg = successful ? 'successful' : 'unsuccessful';
					console.log('Copying text command was ' + msg);
				} catch (err) {
					console.log('Oops, unable to copy');
				}
				document.body.removeChild(textArea)
			},
			openPlanetsPopup() {
				this.$refs['planets-popup'].open()
			},
			closePlanetsPopup() {
				this.$refs['planets-popup'].close()
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
			onPlanetExpandRow(id) {
        let index = this.$refs.planetstable.visibleDetailRows.indexOf(id)
        this.$refs.planetstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.planetstable.showDetailRow(id)
        }
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
		}
	}
</script>

