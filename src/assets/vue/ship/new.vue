<template>
	<f7-block form>
		<f7-block-title class="content-center-text bottom-border small-caps">Ship Creator</f7-block-title>
		<div class="data-table custom-table">
			<table>
				<tr>
					<td><strong>Name</strong></td>
					<td><input type="text" v-model="ship.name" /></td>
				</tr>
				<tr>
					<td><strong>Designation:</strong> <help-ship-designation></help-ship-designation></td>
					<td>{{ship.uuid}}</td>
				</tr>
				<tr>
					<td><strong>Hull Class</strong> <help-ship-hull></help-ship-hull></td>
					<td>
						<select v-model="ship.hull">
							<option v-for="(n,i) in ship.categories.hulls" :value="i" :key="'hull-' + i">{{n}}</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<p v-show="ship.hull == 0"><em>Interceptor</em>-class are fast and small craft used to intercept and harrass.</p>
						<p v-show="ship.hull == 1"><em>Shuttle</em>-class are versatile spacecraft used for various functions.</p>
						<p v-show="ship.hull == 2"><em>Yacht</em>-class are commonly used as luxury transports.</p>
						<p v-show="ship.hull == 3"><em>Patrol</em>-class are commonly used as non-military law enforcement spacecraft.</p>
						<p v-show="ship.hull == 4"><em>Escort</em>-class are commonly used to protect other spacecraft, inter-system transports, troopships and tankers.</p>
						<p v-show="ship.hull == 5"><em>Corvette</em>-class are the smallest class of warship, usually used to guard key points.</p>
						<p v-show="ship.hull == 6"><em>Frigate</em>-class are designed for raiding, long-range patrol, and scouting.</p>
						<p v-show="ship.hull == 7"><em>Cruiser</em>-class are the "<em>Jack-Of-All-Trades</em>" warship; large enough to handle themselves, but fast enough to run away from bigger threats.</p>
						<p v-show="ship.hull == 8"><em>Battleship</em>-class are usually the largest warship in a fleet. Their expense means that only a few are operational in conventional navies.</p>
						<p v-show="ship.hull == 9"><em>Dreadnought</em>-class are rare and exceptional, and generally used as Flagships.</p>
						<p v-show="ship.hull == 10"><em>Carrier</em>-class spacecraft are huge, mainly so that they can transport smaller <em>Interceptor</em> spacecraft into battle.</p>
						<p v-show="ship.hull == 11"><em>Worldship</em>-class are feats of modern engineering. They are so large that they can usually sustain a functional population internally.</p>
					</td>
				</tr>
			</table>
		</div>

		<!-- ATTRIBUTES -->
		<f7-block-title class="content-center-text color-lightblue">Attributes</f7-block-title>
		<div class="data-table custom-table">
			<table>
				<thead>
					<tr>
						<th class="label-cell">Attribute</th>
						<th>Dice</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>AI</strong> <help-ship-ai></help-ship-ai></td>
						<td>
							<select v-model="ship.attributes.ai">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Armour</strong> <help-ship-armour></help-ship-armour></td>
						<td>
							<select v-model="ship.attributes.armour">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'armour-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Bulk</strong> <help-ship-bulk></help-ship-bulk></td>
						<td>
							<select v-model="ship.attributes.bulk">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'bulk-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Engine</strong> <help-ship-engine></help-ship-engine></td>
						<td>
							<select v-model="ship.attributes.engine">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'engine-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Power</strong> <help-ship-power></help-ship-power></td>
						<td>
							<select v-model="ship.attributes.power">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- SUB-SYSTEMS -->
		<f7-block-title class="content-center-text color-lightblue">Sub-Systems</f7-block-title>
		<div class="data-table custom-table">
			<table>
				<thead>
					<tr>
						<th class="label-cell">System</th>
						<th>Dice</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Autopilot</strong> <help-ship-autopilot></help-ship-autopilot></td>
						<td>
							<select v-model="ship.systems.autopilot">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'autopilot-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>ECM</strong> <help-ship-ecm></help-ship-ecm></td>
						<td>
							<select v-model="ship.systems.ecm">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ecm-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Navigation</strong> <help-ship-navigation></help-ship-navigation></td>
						<td>
							<select v-model="ship.systems.navigation">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'navigation-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Operations</strong> <help-ship-operations></help-ship-operations></td>
						<td>
							<select v-model="ship.systems.operations">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'operations-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Repair</strong> <help-ship-repair></help-ship-repair></td>
						<td>
							<select v-model="ship.systems.repair">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'repair-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Sensors</strong> <help-ship-sensors></help-ship-sensors></td>
						<td>
							<select v-model="ship.systems.sensors">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'sensors-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><strong>Weapons</strong> <help-ship-weapons></help-ship-weapons></td>
						<td>
							<select v-model="ship.systems.weapons">
								<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'weapons-' + i">{{n}}</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Fittings -->
		<f7-block-title class="content-center-text color-lightblue">Fittings</f7-block-title>
		<f7-button big fill round color="blue" open-popup="#fittings-popup"><f7-icon color="white" material="add"></f7-icon></f7-button>
		<f7-popup id="fittings-popup">
			<f7-block-title>Add fitting</f7-block-title>
			<f7-button big fill color="blue" close-popup="#fittings-popup"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
						},
						{
							name: '__slot:expand',
							title: 'Expand',
							titleClass: 'center aligned',
							dataClass: 'center aligned'
						}
					]"
					detail-row-component="detail-row-fitting"
				>
					<template slot="addFitting" scope="props">
						<f7-button fill color="green" v-on:click="onAddClick('fittings', props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></f7-button>
					</template>
					<template slot="expand" scope="props">
						<f7-button v-on:click="onExpandRow('fittings', props.rowData.id)"><f7-icon material="expand_more"></f7-icon></f7-button>
					</template>
				</vuetable>
			</div>
		</f7-popup>
		<div class="data-table custom-table">
			<vuetable
				ref="shipfittingstable"
				:api-mode="false"
				:data="ship.fittings"
				:fields="[
					'name',
					{
						name: '__slot:total',
						title: 'A / T',
						titleClass: 'center aligned',
						dataClass: 'center aligned'
					},
					{
						name: '__slot:actions',
						title: 'Actions',
						titleClass: 'center aligned',
						dataClass: 'center aligned'
					}
				]"
				detail-row-component="detail-row-fitting"
			>
				<template slot="total" scope="props">
					<p><f7-button v-on:click="onToggleClick('fittings', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="remove"></f7-icon></f7-button></p>
					<p>Active: {{props.rowData.active}}</p>
					<p>Total: {{props.rowData.total}}</p>
					<p><f7-button v-on:click="onToggleClick('fittings', props.rowData.id, 1)"><f7-icon size=16 color="blue" material="add"></f7-icon></f7-button></p>
				</template>
				<template slot="actions" scope="props">
					<p><f7-button fill color="red" v-on:click="onRemoveClick('fittings', props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></f7-button></p>
					<p><f7-button v-on:click="onExpandRow('shipfittings', props.rowData.id)"><f7-icon size=16 color="blue" material="expand_more"></f7-icon></f7-button></p>
				</template>
			</vuetable>
		</div>

		<!-- Weapons -->
		<f7-block-title class="content-center-text color-lightblue">Weapons</f7-block-title>
		<f7-button big fill color="blue" open-popup="#weapons-popup"><f7-icon color="white" material="add"></f7-icon></f7-button>
		<f7-popup id="weapons-popup">
			<f7-block-title>Add fitting</f7-block-title>
			<f7-button big fill round color="blue" close-popup="#weapons-popup"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
						},
						{
							name: '__slot:expand',
							title: 'Expand',
							titleClass: 'center aligned',
							dataClass: 'center aligned'
						}
					]"
					detail-row-component="detail-row-weapon"
				>
					<template slot="addWeapon" scope="props">
						<f7-button fill color="green" v-on:click="onAddClick('weapons', props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></f7-button>
					</template>
					<template slot="expand" scope="props">
						<f7-button v-on:click="onExpandRow('weapons', props.rowData.id)"><f7-icon material="expand_more"></f7-icon></f7-button>
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
					'name',
					{
						name: '__slot:total',
						title: 'Active',
						titleClass: 'center aligned',
						dataClass: 'center aligned'
					},
					{
						name: '__slot:actions',
						title: 'Actions',
						titleClass: 'center aligned',
						dataClass: 'center aligned'
					}
				]"
				detail-row-component="detail-row-weapon"
			>
				<template slot="total" scope="props">
					<p><f7-button v-on:click="onToggleClick('weapons', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="remove"></f7-icon></f7-button></p>
					<p>Active: {{props.rowData.active}}</p>
					<p>Total: {{props.rowData.total}}</p>
					<p><f7-button v-on:click="onToggleClick('weapons', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="add"></f7-icon></f7-button></p>
				</template>
				<template slot="actions" scope="props">
					<p><f7-button fill color="red" v-on:click="onRemoveClick('wespons', props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></f7-button></p>
					<p><f7-button v-on:click="onExpandRow('shipweapons', props.rowData.id)"><f7-icon size=16 color="blue" material="expand_more"></f7-icon></f7-button></p>
				</template>
			</vuetable>
		</div>

			<!-- Derivative Values -->
			<f7-block-title class="content-center-text color-lightblue">Derived Values</f7-block-title>
		<div class="data-table custom-table">
			<table>
				<thead>
					<tr>
						<th class="label-cell">Stat</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>AI Actions</strong> <help-ship-ai-actions></help-ship-ai-actions></td>
						<td>{{ship.getActionsAI()}}</td>
					</tr>
					<tr>
						<td><strong>AI Evade</strong> <help-ship-evade></help-ship-evade></td>
						<td>{{ship.getEvade()}}</td>
					</tr>
					<tr>
						<td><strong>Toughness</strong> <help-ship-breech></help-ship-breech></td>
						<td>{{ship.getToughness()}}</td>
					</tr>
					<tr>
						<td><strong>Crew</strong> <help-ship-crew></help-ship-crew></td>
						<td>{{ship.getCrew()}}</td>
					</tr>
					<tr>
						<td><strong>Fuel per FTL</strong> <help-ship-fuel></help-ship-fuel></td>
						<td>{{ship.getFTL()}}</td>
					</tr>
					<tr>
						<td><strong>Hardpoints</strong> <help-ship-hardpoints></help-ship-hardpoints></td>
						<td>{{ship.getHardpoints()}}</td>
					</tr>
					<tr>
						<td><strong>Hardpoints (Free)</strong> <help-ship-hardpoints-used></help-ship-hardpoints-used></td>
						<td>{{ship.getHardpoints() + ship.getHardpointsUsed()}}</td>
					</tr>
					<tr>
						<td><strong>Hull Size</strong> <help-ship-size></help-ship-size></td>
						<td>{{ship.getSize()}}</td>
					</tr>
					<tr>
						<td><strong>Integrity</strong> <help-ship-integrity></help-ship-integrity></td>
						<td>{{ship.getIntegrity()}}</td>
					</tr>
					<tr>
						<td><strong>Power (Total)</strong> <help-ship-power-total></help-ship-power-total></td>
						<td>{{ship.getPower()}}</td>
					</tr>
					<tr>
						<td><strong>Power (Free)</strong> <help-ship-power-used></help-ship-power-used></td>
						<td>{{ship.getPower() + ship.getPowerUsed()}}</td>
					</tr>
					<tr>
						<td><strong>Speed</strong> <help-ship-speed></help-ship-speed></td>
						<td>{{ship.getAcceleration()}}</td>
					</tr>
					<tr>
						<td><strong>Storage (Total)</strong> <help-ship-storage-total></help-ship-storage-total></td>
						<td>{{ship.getBulk()}}</td>
					</tr>
					<tr>
						<td><strong>Storage (Used)</strong> <help-ship-storage-used></help-ship-storage-used></td>
						<td>{{ship.getBulk() + ship.getBulkUsed()}}</td>
					</tr>
					<tr>
						<td><strong>Points</strong> <help-ship-points></help-ship-points></td>
						<td>{{ship.getPoints()}}</td>
					</tr>
					<tr>
						<td><strong>Rank</strong> <help-ship-rank></help-ship-rank></td>
						<td>{{ship.getRank()}}</td>
					</tr>
					<tr>
						<td><strong>Cost</strong> <help-ship-cost></help-ship-cost></td>
						<td>{{ship.getCost() | currency }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<f7-buttons>
			<f7-button big fill color="blue" v-on:click="randomShip">Random</f7-button>
			<f7-button big fill color="green" v-on:click="onClick">Submit</f7-button>
		</f7-buttons>
	</f7-block>
</template>

<script>
	export default {
		data() {
			return {
				names: this.$bsFactory.getNames(),
				ship: this.$bsFactory.cloneShip(),
				fittings: this.$bsFactory.getTemplate('fittings'),
				weapons: this.$bsFactory.getTemplate("weapons"),
			}
		},
		mounted() {
			this.updateTable('fittings')
			this.updateTable('weapons')
		},
		methods: {
			/**
			 * Randomises all of the fields of the ship
			 */
			randomShip() {
				// Random Ship Name
				let nameKeys = Object.keys(this.names)
				let nameRandom = (nameKeys.length * Math.random() << 0)
				this.ship.name = this.names[ nameKeys[nameRandom] ].name()
				// New Designation
				this.ship.uuid = this.ship.generateShipDesignation().toUpperCase()
				// Random Ship hull
				this.ship.hull = this.ship.categories.hulls.length * Math.random() << 0
				// Random Attributes
				this.ship.attributes.ai = this.ship.categories.dice.length * Math.random() << 0
				this.ship.attributes.armour = this.ship.categories.dice.length * Math.random() << 0
				this.ship.attributes.bulk = this.ship.categories.dice.length * Math.random() << 0
				this.ship.attributes.engine = this.ship.categories.dice.length * Math.random() << 0
				this.ship.attributes.power = this.ship.categories.dice.length * Math.random() << 0
				// Random Sub-systems
				this.ship.systems.autopilot = this.ship.categories.dice.length * Math.random() << 0
				this.ship.systems.ecm = this.ship.categories.dice.length * Math.random() << 0
				this.ship.systems.navigation = this.ship.categories.dice.length * Math.random() << 0
				this.ship.systems.operations = this.ship.categories.dice.length * Math.random() << 0
				this.ship.systems.repair = this.ship.categories.dice.length * Math.random() << 0
				this.ship.systems.sensors = this.ship.categories.dice.length * Math.random() << 0
				this.ship.systems.weapons = this.ship.categories.dice.length * Math.random() << 0
			},
			/**
			 * Save the ship
			 */
			onClick() {
				console.log( 'Saving ship: ' + this.ship.uuid )
				let store = this.$bsFactory.getShipStore()
          		let data = this.ship.deflate()
				let resultSet = store.put(data)
				let self = this;
				resultSet.onsuccess = function() {
					self.$f7.alert(self.ship.name+" has been saved")
				};
				resultSet.onerror = function() {
					self.$f7.alert("ERROR: "+self.ship.name+" could not be saved")
				};
			},
			/**
			 * Reset the table and inject the new information
			 */
			updateTable(type) {
				this.$refs["ship"+type+"table"].resetData()
				this.$refs["ship"+type+"table"].setData(this.ship[type])
			},
			/**
			 * Add Fitting or Weapon to the Ship
			 */
			onAddClick(type, id) {
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
			 * Expand Detail Row
			 */
			onExpandRow(type, id) {
				let index = this.$refs[type+"table"].visibleDetailRows.indexOf(id)
				this.$refs[type+"table"].visibleDetailRows = []
				if (index == -1) {
					this.$refs[type+"table"].showDetailRow(id)
				}
			}
		}
	}
</script>