<template>
	<f7-page>
		<f7-block inset>
			<f7-block-title class="small-caps content-center-text bottom-border">{{ship.name}}</f7-block-title>
			<f7-buttons>
				<f7-button big href="/ship/list/"><f7-icon material="chevron_left"></f7-icon> Back</f7-button>
				<f7-button big fill color="blue" v-on:click="copyTextArea">Copy</f7-button>
				<f7-button big fill color="green" v-on:click="onClick">Update</f7-button>
			</f7-buttons>

			<!-- ATTRIBUTES -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Attributes</f7-block-title>
			<div>
				<div class="bottom-border">
					<div><strong>AI</strong> <help-ship-ai></help-ship-ai></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.attributes.ai)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Armour</strong> <help-ship-armour></help-ship-armour></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.attributes.armour)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Bulk</strong> <help-ship-bulk></help-ship-bulk></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.attributes.bulk)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Engine</strong> <help-ship-engine></help-ship-engine></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.attributes.engine)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Power</strong> <help-ship-power></help-ship-power></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.attributes.power)}}</div>
				</div>
			</div>

			<!-- SUB-SYSTEMS -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Sub-Systems</f7-block-title>
			<div>
				<div class="bottom-border">
					<div><strong>Autopilot</strong> <help-ship-autopilot></help-ship-autopilot></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.systems.autopilot)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>ECM</strong> <help-ship-ecm></help-ship-ecm></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.systems.ecm)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Navigation</strong> <help-ship-navigation></help-ship-navigation></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.systems.navigation)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Operations</strong> <help-ship-operations></help-ship-operations></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.systems.operations)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Repair</strong> <help-ship-repair></help-ship-repair></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.systems.repair)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Sensors</strong> <help-ship-sensors></help-ship-sensors></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.systems.sensors)}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Weapons</strong> <help-ship-weapons></help-ship-weapons></div>
					<div class="pull-right">{{ship.getDiceCategory(ship.systems.weapons)}}</div>
				</div>
			</div>

			<!-- Fittings -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Fittings</f7-block-title>
			<f7-button big fill round color="blue" v-on:click="openPopup('fittings', uuid)"><f7-icon color="white" material="add"></f7-icon></f7-button>
			<f7-popup :id="'fittings-popup-'+uuid" :ref="'fittings-popup-'+uuid">
				<f7-block-title>Add fitting</f7-block-title>
				<f7-button big fill color="blue" v-on:click="closePopup('fittings', uuid)"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
							<f7-button fill color="green" v-on:click="onPopupAddClick('fittings', props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></f7-button>
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
					@vuetable:cell-clicked="wrapExpandShipFittings"
				>
					<template slot="name" scope="props">
						<p>{{ props.rowData.name }}</p>
						<p><em>Active: {{props.rowData.active}}, Total: {{props.rowData.total}}</em></p>
					</template>
					<template slot="actions" scope="props">
						<f7-buttons>
							<f7-button big fill color="red" v-on:click="onRemoveClick('fittings', props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></f7-button>
							<f7-button big v-on:click="onToggleClick('fittings', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="remove"></f7-icon></f7-button>
							<f7-button big v-on:click="onToggleClick('fittings', props.rowData.id, 1)"><f7-icon size=16 color="blue" material="add"></f7-icon></f7-button>
						</f7-buttons>
					</template>
				</vuetable>
			</div>

			<!-- Weapons -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Weapons</f7-block-title>
			<f7-button big fill color="blue" v-on:click="openPopup('weapons', uuid)"><f7-icon color="white" material="add"></f7-icon></f7-button>
			<f7-popup :id="'weapons-popup-'+uuid" :ref="'weapons-popup-'+uuid">
				<f7-block-title>Add fitting</f7-block-title>
				<f7-button big fill round color="blue" v-on:click="closePopup('weapons', uuid)"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
							<f7-button fill color="green" v-on:click="onPopupAddClick('weapons', props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></f7-button>
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
					@vuetable:cell-clicked="wrapExpandShipWeapons"
				>
					<template slot="name" scope="props">
						<p>{{ props.rowData.name }}</p>
						<p><em>Active: {{props.rowData.active}}, Total: {{props.rowData.total}}</em></p>
					</template>
					<template slot="actions" scope="props">
						<f7-buttons>
							<f7-button big fill color="red" v-on:click="onRemoveClick('weapons', props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></f7-button>
							<f7-button big v-on:click="onToggleClick('weapons', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="remove"></f7-icon></f7-button>
							<f7-button big v-on:click="onToggleClick('weapons', props.rowData.id, 1)"><f7-icon size=16 color="blue" material="add"></f7-icon></f7-button>
						</f7-buttons>
					</template>
				</vuetable>
			</div>

			<!-- Other Values -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Other Values</f7-block-title>
			<div>
				<div class="bottom-border">
					<div><strong>AI Actions</strong> <help-ship-ai-actions></help-ship-ai-actions></div>
					<div class="pull-right">{{ship.getActionsAI()}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>AI Evade</strong> <help-ship-evade></help-ship-evade></div>
					<div class="pull-right">{{ship.getEvade()}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Cost</strong> <help-ship-cost></help-ship-cost></div>
					<div class="pull-right">{{ship.getCost() | currency}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Crew</strong> <help-ship-crew></help-ship-crew></div>
					<div class="pull-right">{{ship.getCrew()}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Designation</strong></div>
					<div class="pull-right">{{ship.uuid}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Fuel per FTL</strong> <help-ship-fuel></help-ship-fuel></div>
					<div class="pull-right">{{ship.getFTL()}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Hardpoints</strong> <help-ship-hardpoints-used></help-ship-hardpoints-used></div>
					<div class="pull-right">{{ship.getHardpoints() + ship.getHardpointsUsed()}} Free / {{ship.getHardpoints()}} Total</div>
				</div>
				<div class="bottom-border">
					<div><strong>Hull</strong></div>
					<div class="pull-right">{{ship.getHull()}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Hull Size</strong> <help-ship-size></help-ship-size></div>
					<div class="pull-right">{{ship.getSize()}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Integrity</strong> <help-ship-integrity></help-ship-integrity></div>
					<div class="pull-right">{{ship.getIntegrity()}}</div>
				</div>
				<div class="bottom-border">
					<div><strong>Power</strong> <help-ship-power-used></help-ship-power-used></div>
					<div class="pull-right">{{ship.getPower() + ship.getPowerUsed()}} Free / {{ship.getPower()}} Total</div>
				</div>
				<div class="bottom-border">
					<div><strong>Rank</strong> <help-ship-rank></help-ship-rank></div>
					<div class="pull-right">{{ship.getRank()}} ({{ship.getPoints()}} points)</div>
				</div>
				<div class="bottom-border">
					<div><strong>Speed</strong> <help-ship-speed></help-ship-speed></div>
					<div class="pull-right">{{ship.getAcceleration()}} (<em>{{ ship.getAccelerationConverted() }} m/s</em>)</div>
				</div>
				<div class="bottom-border">
					<div><strong>Storage</strong> <help-ship-storage-used></help-ship-storage-used></div>
					<div class="pull-right">{{ship.getBulk() + ship.getBulkUsed()}} Free / {{ship.getBulk()}} Total</div>
				</div>
				<div class="bottom-border">
					<div><strong>Toughness</strong> <help-ship-breech></help-ship-breech></div>
					<div class="pull-right">{{ship.getToughness()}}</div>
				</div>
			</div>
			<div>
				<f7-buttons>
					<f7-button big href="/ship/list/"><f7-icon material="chevron_left"></f7-icon> Back</f7-button>
					<f7-button big fill color="blue" v-on:click="copyTextArea">Copy</f7-button>
					<f7-button big fill color="green" v-on:click="onClick">Update</f7-button>
				</f7-buttons>
			</div>
		</f7-block>
	</f7-page>
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
				fittings: this.$bsFactory.getTemplate('fittings'),
				weapons: this.$bsFactory.getTemplate("weapons"),
			}
		},
		methods: {
			/**
			 * Reset the table and inject the new information
			 */
			updateTable(type) {
				this.$refs["ship"+type+"table"].setData(this.ship[type])
			},
			/**
			 * Toggle Pop-up status
			 */
			openPopup(type, id) {
				this.$refs[type + '-popup-' + id].open()
			},
			closePopup(type, id) {
				this.$refs[type + '-popup-' + id].close()
			},
			/**
			 * Update ship information on the database
			 */
			onClick() {
				console.log( 'Saving ship: ' + this.ship.uuid )
				let store = this.$bsFactory.getShipStore()
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
			onPopupAddClick(type, id) {
				if ( type == "fittings") {
					let fitting = this.fittings.search(id)
					if (fitting) {
						this.ship.addFitting(fitting, 1)
					}
				} else if ( type === "weapons" ) {
					let weapon = this.weapons.search(id)
					if (weapon) {
						this.ship.addWeapon(weapon, 1)
					}
				}
				this.updateTable(type)
			},
			/**
			 * Toggles on / off status for fittings / weapons
			 */
			onToggleClick(type, id, num) {
				if ( type == "fittings") {
					let fitting = this.fittings.search(id)
					if (fitting) {
						this.ship.activateFitting(fitting, num)
					}
				} else if ( type === "weapons" ) {
					let weapon = this.weapons.search(id)
					if (weapon.length == 1) {
						this.ship.activateWeapon(weapon, num)
					}
				}
				this.updateTable(type)
			},
			/**
			 * Remove a fitting / weapon
			 */
			onRemoveClick(type, id) {
				if ( type == "fittings") {
					let fitting = this.fittings.search(id)
					if (fitting) {
						this.ship.removeFitting(fitting, 1)
					}
				} else if ( type === "weapons" ) {
					let weapon = this.weapons.search(id)
					if (weapon) {
						this.ship.removeWeapon(weapon, 1)
					}
				}
				this.updateTable(type)
			},
			/**
			 * Expand Detail Rows
			 */
			onShipViewExpandRow(type, id) {
				let index = this.$refs[type+"table"].visibleDetailRows.indexOf(id)
				this.$refs[type+"table"].visibleDetailRows = []
				if (index == -1) {
					this.$refs[type+"table"].showDetailRow(id)
				}
			},
			wrapExpandFittings (data, field, event) {  if (field.name === "name" ) { this.onShipViewExpandRow('fittings', data.id) } },
			wrapExpandWeapons (data, field, event) { if (field.name === "name" ) { this.onShipViewExpandRow('weapons', data.id) } },
			wrapExpandShipFittings (data, field, event) { console.log(field.name); if (field.name === "__slot:name" ) { this.onShipViewExpandRow('shipfittings', data.id) } },
			wrapExpandShipWeapons (data, field, event) { if (field.name === "__slot:name" ) { this.onShipViewExpandRow('shipweapons', data.id) } },
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
			let store = this.$bsFactory.getShipStore()
			let resultSet = store.getAll()
			let self = this
			resultSet.onsuccess = function() {
				if (resultSet.result && resultSet.result.constructor === Array) {
					for(var x = 0; x < resultSet.result.length; x++) {
						if ( self.uuid === resultSet.result[x].uuid ) {
							console.log( 'Found ship!')
							self.ship.hydrate(resultSet.result[x])
							self.updateTable('fittings')
							self.updateTable('weapons')
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