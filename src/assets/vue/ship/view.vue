<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<!-- NAME & ATTRIBUTES -->
			<v-flex sm12 md6 lg4>
				<v-card>
					<v-card-title class="small-caps">{{ship.name}}</v-card-title>
					<v-card-text>
						<div>
							<div>
								<div><strong>AI</strong> <help-ship help="ai"></help-ship></div>
								<div class="pull-right">{{ship.attributes.ai}}</div>
							</div>
							<div>
								<div><strong>Armour</strong> <help-ship help="armour"></help-ship></div>
								<div class="pull-right">{{ship.attributes.armour}}</div>
							</div>
							<div>
								<div><strong>Bulk</strong> <help-ship help="bulk"></help-ship></div>
								<div class="pull-right">{{ship.attributes.bulk}}</div>
							</div>
							<div>
								<div><strong>Engine</strong> <help-ship help="engine"></help-ship></div>
								<div class="pull-right">{{ship.attributes.engine}}</div>
							</div>
							<div>
								<div><strong>Power</strong> <help-ship help="power"></help-ship></div>
								<div class="pull-right">{{ship.attributes.power}}</div>
							</div>
						</div>
					</v-card-text>
					<v-card-actions>
						<v-btn to="/ship/"><v-icon class="white">chevron_left</v-icon> Back</v-btn>
						<v-btn color="blue" @click="copyTextArea">Copy</v-btn>
						<v-btn color="green" @click="onClick">Update</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
				


			<!-- SUB-SYSTEMS -->
			<v-flex sm12 md6 lg4>
				<v-card>
					<v-card-title class="small-caps">Sub-Systems</v-card-title>
					<v-card-text>
						<div>
							<div>
								<div><strong>Autopilot</strong> <help-ship help="autopilot"></help-ship></div>
								<div class="pull-right">{{ship.systems.autopilot}}</div>
							</div>
							<div>
								<div><strong>ECM</strong> <help-ship help="ecm"></help-ship></div>
								<div class="pull-right">{{ship.systems.ecm}}</div>
							</div>
							<div>
								<div><strong>Navigation</strong> <help-ship help="navigation"></help-ship></div>
								<div class="pull-right">{{ship.systems.navigation}}</div>
							</div>
							<div>
								<div><strong>Operations</strong> <help-ship help="operations"></help-ship></div>
								<div class="pull-right">{{ship.systems.operations}}</div>
							</div>
							<div>
								<div><strong>Repair</strong> <help-ship help="repair"></help-ship></div>
								<div class="pull-right">{{ship.systems.repair}}</div>
							</div>
							<div>
								<div><strong>Sensors</strong> <help-ship help="sensors"></help-ship></div>
								<div class="pull-right">{{ship.systems.sensors}}</div>
							</div>
							<div>
								<div><strong>Weapons</strong> <help-ship help="weapons"></help-ship></div>
								<div class="pull-right">{{ship.systems.weapons}}</div>
							</div>
						</div>
					</v-card-text>
				</v-card>
			</v-flex>

			<!-- Fittings -->
			<!-- <f7-block-title>Fittings</f7-block-title>
			<v-btn round color="blue" @click="openPopup('fittings', uuid)"><f7-icon color="white" material="add"></f7-icon></v-btn>
			<f7-popup :id="'fittings-popup-'+uuid" :ref="'fittings-popup-'+uuid">
				<f7-block-title>Add fitting</f7-block-title>
				<v-btn color="blue" @click="closePopup('fittings', uuid)"><f7-icon color="white" material="arrow_back"></f7-icon></v-btn>
				<div class="data-table">
					<vuetable
						ref="fittingstable"
						:api-mode="false"
						:data="fittings.fittings"
						:fields="[
							'name',
							{
								name: '__slot:addFitting',
								title: 'Add',
								titleClass: 'center aligned',
								dataClass: 'center aligned'
							}
						]"
						detail-row-component="detail-row-fitting"
						@vuetable:cell-clicked="wrapExpandFittings"
					>
						<template slot="addFitting" scope="props">
							<v-btn color="green" @click="onPopupAddClick('fittings', props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></v-btn>
						</template>
					</vuetable>
				</div>
			</f7-popup>
			<div class="data-table">
				<vuetable
					ref="shipfittingstable"
					:api-mode="false"
					:data="ship.fittings"
					:fields="[
						{
							name: '__slot:name',
							title: 'Fitting',
						},
						{
							name: '__slot:actions',
							title: 'Actions'
						}
					]"
					detail-row-component="detail-row-fitting"
				>
					<template slot="name" scope="props" @click="onShipViewExpandRow('shipfittings', props.rowData.id)" >
						<p>{{ props.rowData.name }}</p>
						<p><em>Active: {{props.rowData.active}}, Total: {{props.rowData.total}}</em></p>
					</template>
					<template slot="actions" scope="props">
						<v-btns>
							<v-btn color="red" @click="onRemoveClick('fittings', props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></v-btn>
							<v-btn @click="onToggleClick('fittings', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="remove"></f7-icon></v-btn>
							<v-btn @click="onToggleClick('fittings', props.rowData.id, 1)"><f7-icon size=16 color="blue" material="add"></f7-icon></v-btn>
						</v-btns>
					</template>
				</vuetable>
			</div> -->

			<!-- Weapons -->
			<!-- <f7-block-title>Weapons</f7-block-title>
			<v-btn color="blue" @click="openPopup('weapons', uuid)"><f7-icon color="white" material="add"></f7-icon></v-btn>
			<f7-popup :id="'weapons-popup-'+uuid" :ref="'weapons-popup-'+uuid">
				<f7-block-title>Add fitting</f7-block-title>
				<v-btn round color="blue" @click="closePopup('weapons', uuid)"><f7-icon color="white" material="arrow_back"></f7-icon></v-btn>
				<div class="data-table">
					<vuetable
						ref="weaponstable"
						:api-mode="false"
						:data="weapons.weapons"
						:fields="[
							'name',
							{
								name: '__slot:addWeapon',
								title: 'Add',
								titleClass: 'center aligned',
								dataClass: 'center aligned'
							}
						]"
						detail-row-component="detail-row-weapon"
						@vuetable:cell-clicked="wrapExpandWeapons"
					>
						<template slot="addWeapon" scope="props">
							<v-btn color="green" @click="onPopupAddClick('weapons', props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></v-btn>
						</template>
					</vuetable>
				</div>
			</f7-popup>
			<div class="data-table">
				<vuetable
					ref="shipweaponstable"
					:api-mode="false"
					:data="ship.weapons"
					:fields="[
						{
							name: '__slot:name',
							title: 'Fitting',
						},
						{
							name: '__slot:actions',
							title: 'Actions',
						}
					]"
					detail-row-component="detail-row-weapon"
				>
					<template slot="name" scope="props" @click="onShipViewExpandRow('shipweapons', props.rowData.id)" >
						<p>{{ props.rowData.name }}</p>
						<p><em>Active: {{props.rowData.active}}, Total: {{props.rowData.total}}</em></p>
					</template>
					<template slot="actions" scope="props">
						<v-btns>
							<v-btn color="red" @click="onRemoveClick('weapons', props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></v-btn>
							<v-btn @click="onToggleClick('weapons', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="remove"></f7-icon></v-btn>
							<v-btn @click="onToggleClick('weapons', props.rowData.id, 1)"><f7-icon size=16 color="blue" material="add"></f7-icon></v-btn>
						</v-btns>
					</template>
				</vuetable>
			</div> -->

			<!-- Other Values -->
			<v-flex sm12 md6 lg4>
				<v-card>
					<v-card-title class="small-caps">Other Values</v-card-title>
					<v-card-text>
						<div>
							<div>
								<div><strong>AI Actions</strong> <help-ship help="ai-actions"></help-ship></div>
								<div class="pull-right">{{ship.getActionsAI()}}</div>
							</div>
							<div>
								<div><strong>AI Evade</strong> <help-ship help="evade"></help-ship></div>
								<div class="pull-right">{{ship.getEvade()}}</div>
							</div>
							<div>
								<div><strong>Cost</strong> <help-ship help="cost"></help-ship></div>
								<div class="pull-right">{{ship.getCost() | currency}}</div>
							</div>
							<div>
								<div><strong>Crew</strong> <help-ship help="crew"></help-ship></div>
								<div class="pull-right">{{ship.getCrew()}}</div>
							</div>
							<div>
								<div><strong>Designation</strong></div>
								<div class="pull-right">{{ship.uuid}}</div>
							</div>
							<div>
								<div><strong>Fuel per FTL</strong> <help-ship help="fuel"></help-ship></div>
								<div class="pull-right">{{ship.getFTL()}}</div>
							</div>
							<div>
								<div><strong>Hardpoints</strong> <help-ship help="hardpoints-used"></help-ship></div>
								<div class="pull-right">{{ship.getHardpoints() + ship.getHardpointsUsed()}} Free / {{ship.getHardpoints()}} Total</div>
							</div>
							<div>
								<div><strong>Hull</strong></div>
								<div class="pull-right">{{ship.getHull()}}</div>
							</div>
							<div>
								<div><strong>Hull Size</strong> <help-ship help="size"></help-ship></div>
								<div class="pull-right">{{ship.getSize()}}</div>
							</div>
							<div>
								<div><strong>Integrity</strong> <help-ship help="integrity"></help-ship></div>
								<div class="pull-right">{{ship.getIntegrity()}}</div>
							</div>
							<div>
								<div><strong>Power</strong> <help-ship help="power-used"></help-ship></div>
								<div class="pull-right">{{ship.getPower() + ship.getPowerUsed()}} Free / {{ship.getPower()}} Total</div>
							</div>
							<div>
								<div><strong>Rank</strong> <help-ship help="rank"></help-ship></div>
								<div class="pull-right">{{ship.getRank()}} ({{ship.getPoints()}} points)</div>
							</div>
							<div>
								<div><strong>Speed</strong> <help-ship help="speed"></help-ship></div>
								<div class="pull-right">{{ship.getAcceleration()}} (<em>{{ ship.getAccelerationConverted() }} m/s</em>)</div>
							</div>
							<div>
								<div><strong>Storage</strong> <help-ship help="storage-used"></help-ship></div>
								<div class="pull-right">{{ship.getBulk() + ship.getBulkUsed()}} Free / {{ship.getBulk()}} Total</div>
							</div>
							<div>
								<div><strong>Toughness</strong> <help-ship help="breech"></help-ship></div>
								<div class="pull-right">{{ship.getToughness()}}</div>
							</div>
						</div>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>			
	</v-container>
</template>

<script>
	export default {
		props: {
			uuid: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				ship: this.$bsFactory.cloneShip(),
			}
		},
		methods: {
			/**
			 * Reset the table and inject the new information
			 */
			// updateTable(type) {
			// 	this.$refs["ship"+type+"table"].setData(this.ship[type])
			// },
			/**
			 * Toggle Pop-up status
			 */
			// openPopup(type, id) {
			// 	this.$refs[type + '-popup-' + id].open()
			// },
			// closePopup(type, id) {
			// 	this.$refs[type + '-popup-' + id].close()
			// },
			/**
			 * Update ship information on the database
			 */
			onClick() {
				console.log( 'Saving ship: ' + this.ship.uuid )
				let store = this.$bsFactory.getStore('store')
          		let data = this.ship.deflate()
				let resultSet = store.put(data);
				let self = this;
				resultSet.onsuccess = function() {
					self.$f7.alert(self.ship.name+" has been updated")
				};
				resultSet.onerror = function() {
					self.$f7.alert("ERROR: "+self.ship.name+" could not be updated")
				};
			},
			/**
			 * Add Fitting or Weapon to the Ship
			 */
			// onPopupAddClick(type, id) {
			// 	if ( type == "fittings") {
			// 		let fitting = this.fittings.search(id)
			// 		if (fitting) {
			// 			this.ship.addFitting(fitting, 1)
			// 		}
			// 	} else if ( type === "weapons" ) {
			// 		let weapon = this.weapons.search(id)
			// 		if (weapon) {
			// 			this.ship.addWeapon(weapon, 1)
			// 		}
			// 	}
			// 	this.updateTable(type)
			// },
			/**
			 * Toggles on / off status for fittings / weapons
			 */
			// onToggleClick(type, id, num) {
			// 	if ( type == "fittings") {
			// 		let fitting = this.fittings.search(id)
			// 		if (fitting) {
			// 			this.ship.activateFitting(fitting, num)
			// 		}
			// 	} else if ( type === "weapons" ) {
			// 		let weapon = this.weapons.search(id)
			// 		if (weapon.length == 1) {
			// 			this.ship.activateWeapon(weapon, num)
			// 		}
			// 	}
			// 	this.updateTable(type)
			// },
			/**
			 * Remove a fitting / weapon
			 */
			// onRemoveClick(type, id) {
			// 	if ( type == "fittings") {
			// 		let fitting = this.fittings.search(id)
			// 		if (fitting) {
			// 			this.ship.removeFitting(fitting, 1)
			// 		}
			// 	} else if ( type === "weapons" ) {
			// 		let weapon = this.weapons.search(id)
			// 		if (weapon) {
			// 			this.ship.removeWeapon(weapon, 1)
			// 		}
			// 	}
			// 	this.updateTable(type)
			// },
			/**
			 * Expand Detail Rows
			 */
			// onShipViewExpandRow(type, id) {
			// 	let index = this.$refs[type+"table"].visibleDetailRows.indexOf(id)
			// 	this.$refs[type+"table"].visibleDetailRows = []
			// 	if (index == -1) {
			// 		this.$refs[type+"table"].showDetailRow(id)
			// 	}
			// },
			// wrapExpandFittings (data, field, event) {  if (field.name === "name" ) { this.onShipViewExpandRow('fittings', data.id) } },
			// wrapExpandWeapons (data, field, event) { if (field.name === "name" ) { this.onShipViewExpandRow('weapons', data.id) } },
			/**
			 * Copy the Ship object to the user's clipboard
			 */
			copyTextArea() {
				let textArea = document.createElement('textarea')
				textArea.id ="ThisWillBeDeletedLater"
				textArea.style.height = 0
				document.body.appendChild(textArea)
				textArea.value = JSON.stringify(this.ship.deflate(), null, 2)
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
			}
		},
		mounted() {
			console.log( 'Searching for ship: ' + this.uuid )
			let store = this.$bsFactory.getStore('store')
			let resultSet = store.getAll()
			let self = this
			resultSet.onsuccess = function() {
				if (resultSet.result && resultSet.result.constructor === Array) {
					for(var x = 0; x < resultSet.result.length; x++) {
						if ( self.uuid === resultSet.result[x].uuid ) {
							console.log( 'Found ship!')
							self.ship.hydrate(resultSet.result[x])
							// self.updateTable('fittings')
							// self.updateTable('weapons')
							break;
						}
					}
				}
			}
			resultSet.onerror = function() {
				console.error( 'Cannot load ship from the database' );
			}
		}
	}
</script>