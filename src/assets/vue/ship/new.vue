<template>
	<v-form v-model="valid" ref="form" lazy-validation>
		<v-container grid-list-md>
			<v-layout row wrap>
				<!-- MAIN & ATTRIBUTES -->
				<v-flex sm12 md6 lg4>
					<v-card flat>
						<v-card-title class="small-caps">Main &amp; Attributes</v-card-title>
						<v-card-text>
							<v-text-field
								label="Name"
								v-model="ship.name"
								:rules="[v => !!v || 'Name is required']"
								required
							></v-text-field>
							<v-select
								label="Hull Class"
								v-model="ship.hull"
								:items="ship.hulls.categories"
								:rules="[v => !!v || 'Hull Class is required']"
								required
							></v-select>
							<v-select
								label="AI"
								v-model="ship.attributes.ai"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'AI is required']"
								required
							></v-select>
							<v-select
								label="Armour"
								v-model="ship.attributes.armour"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Armour is required']"
								required
							></v-select>
							<v-select
								label="Bulk"
								v-model="ship.attributes.bulk"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Bulk is required']"
								required
							></v-select>
							<v-select
								label="Engine"
								v-model="ship.attributes.engine"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Engine is required']"
								required
							></v-select>
							<v-select
								label="Power"
								v-model="ship.attributes.power"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Power is required']"
								required
							></v-select>
						</v-card-text>
						<v-card-actions>
							<v-btn dark flat color="blue" @click="randomAttributes">Random</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>

				<!-- SUB-SYSTEMS -->
				<v-flex sm12 md6 lg4>
					<v-card flat>
						<v-card-title class="small-caps">Subsystems</v-card-title>
						<v-card-text>
							<v-select
								label="Autopilot"
								v-model="ship.systems.autopilot"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Autopilot is required']"
								required
							></v-select>
							<v-select
								label="ECM"
								v-model="ship.systems.ecm"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'ECM is required']"
								required
							></v-select>
							<v-select
								label="Navigation"
								v-model="ship.systems.navigation"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Navigation is required']"
								required
							></v-select>
							<v-select
								label="Operations"
								v-model="ship.systems.operations"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Operations is required']"
								required
							></v-select>
							<v-select
								label="Repair"
								v-model="ship.systems.repair"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Repair is required']"
								required
							></v-select>
							<v-select
								label="Sensors"
								v-model="ship.systems.sensors"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Sensors is required']"
								required
							></v-select>
							<v-select
								label="Weapons"
								v-model="ship.systems.weapons"
								:items="ship.dice.categories"
								:rules="[v => !!v || 'Weapons is required']"
								required
							></v-select>
						</v-card-text>
						<v-card-actions>
							<v-btn dark flat color="blue" @click="randomSystems">Random</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>

				<!-- FITTINGS -->
				<v-flex sm12 md6 lg4>
					<v-card flat>
						<v-card-title class="small-caps">Fittings</v-card-title>
						<v-card-text>
							<v-data-table
								:headers="fields.fittings"
								:items="ship.fittings.selected"
								hide-actions
								item-key="id"
							>
								<template slot="items" slot-scope="props">
									<tr>
										<td @click="props.expanded = !props.expanded">{{ props.item.name | capitalize }}</td>
										<td style="max-width: 10vw;">
											<v-btn small icon @click="ship.fittings.activate(props.item.id, -1)"><v-icon color="red">remove</v-icon></v-btn>
											{{props.item.active}}
											<v-btn small icon @click="ship.fittings.activate(props.item.id, 1)"><v-icon color="green">add</v-icon></v-btn>
										</td>
										<td style="max-width: 10vw;">
											<v-btn small icon @click="ship.fittings.update(props.item.id, -1)"><v-icon color="red">remove</v-icon></v-btn>
											{{props.item.total}}
											<v-btn small icon @click="ship.fittings.update(props.item.id, 1)"><v-icon color="green">add</v-icon></v-btn>
										</td>
									</tr>
								</template>
								<template slot="expand" slot-scope="props">
									<detail-row-fitting :fitting="props.item"></detail-row-fitting>
								</template>
							</v-data-table>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn dark flat color="red" @click="ship.fittings.clear()">Clear</v-btn>
          					<v-dialog v-model="dialog.fittings">
								<v-btn dark flat color="green" slot="activator">Add</v-btn>
								<v-card>
									<v-card-title class="headline">Add a new fitting</v-card-title>
									<v-card-text>
										<v-data-table
											:headers="fields.dialog"
											:items="ship.fittings.list"
											hide-actions
											item-key="id"
										>
											<template slot="items" slot-scope="props">
												<tr @click="props.expanded = !props.expanded">
													<td>{{ props.item.name | capitalize }}</td>
													<td><v-btn dark block color="green" @click="addFitting(props.item.id)">Add</v-btn></td>
												</tr>
											</template>
											<template slot="expand" slot-scope="props">
												<detail-row-fitting :fitting="props.item"></detail-row-fitting>
											</template>
										</v-data-table>
									</v-card-text>
								</v-card>
							</v-dialog>
						</v-card-actions>
					</v-card>
				</v-flex>

		<!-- Weapons -->
		<!-- <f7-block-title class="content-center-text color-lightblue">Weapons</f7-block-title>
		<v-btn big fill color="blue" open-popup="#weapons-popup"><f7-icon color="white" material="add"></f7-icon></v-btn>
		<f7-popup id="weapons-popup">
			<f7-block-title>Add fitting</f7-block-title>
			<v-btn big fill round color="blue" close-popup="#weapons-popup"><f7-icon color="white" material="arrow_back"></f7-icon></v-btn>
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
						<v-btn fill color="green" v-on:click="onAddClick('weapons', props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></v-btn>
					</template>
					<template slot="expand" scope="props">
						<v-btn v-on:click="onExpandRow('weapons', props.rowData.id)"><f7-icon material="expand_more"></f7-icon></v-btn>
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
					<p><v-btn v-on:click="onToggleClick('weapons', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="remove"></f7-icon></v-btn></p>
					<p>Active: {{props.rowData.active}}</p>
					<p>Total: {{props.rowData.total}}</p>
					<p><v-btn v-on:click="onToggleClick('weapons', props.rowData.id, -1)"><f7-icon size=16 color="blue" material="add"></f7-icon></v-btn></p>
				</template>
				<template slot="actions" scope="props">
					<p><v-btn fill color="red" v-on:click="onRemoveClick('wespons', props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></v-btn></p>
					<p><v-btn v-on:click="onExpandRow('shipweapons', props.rowData.id)"><f7-icon size=16 color="blue" material="expand_more"></f7-icon></v-btn></p>
				</template>
			</vuetable>
		</div> -->

				<!--  SHIP INFO -->
				<v-flex sm12 md6 lg4>
					<v-card>
						<v-card-title class="small-caps">Ship Info</v-card-title>
						<v-card-title>
							<dl class="list">
								<dt>Designation: <help-ship help="designation"></help-ship></dt>
								<dd class="pull-right">{{ship.uuid}}</dd>
								<dt>Crew <help-ship help="crew"></help-ship></dt>
								<dd class="pull-right">{{ship.getCrew()}}</dd>
								<dt>Fuel per FTL <help-ship help="fuel"></help-ship></dt>
								<dd class="pull-right">{{ship.getFTL()}}</dd>
								<dt>Hull Size <help-ship help="size"></help-ship></dt>
								<dd class="pull-right">{{ship.getSize()}}</dd>
								<dt>Speed <help-ship help="speed"></help-ship></dt>
								<dd class="pull-right">{{ship.getAcceleration()}}</dd>
								<dt>Rank <help-ship help="rank"></help-ship></dt>
								<dd class="pull-right">{{ship.getRank()}}</dd>
								<dt>Cost <help-ship help="cost"></help-ship></dt>
								<dd class="pull-right">{{ship.getCost() | currency }}</dd>
							</dl>
						</v-card-title>
					</v-card>
				</v-flex>

				<!--  COMBAT -->
				<v-flex sm12 md6 lg4>
					<v-card>
						<v-card-title class="small-caps">Combat</v-card-title>
						<v-card-title>
							<dl class="list">
								<dt>AI Actions <help-ship help="ai-actions"></help-ship></dt>
								<dd class="pull-right">{{ship.getActionsAI()}}</dd>
								<dt>AI Evade <help-ship help="evade"></help-ship></dt>
								<dd class="pull-right">{{ship.getEvade()}}</dd>
								<dt>Integrity <help-ship help="integrity"></help-ship></dt>
								<dd class="pull-right">{{ship.getIntegrity()}}</dd>
								<dt>Toughness <help-ship help="breech"></help-ship></dt>
								<dd class="pull-right">{{ship.getToughness()}}</dd>
							</dl>
						</v-card-title>
					</v-card>
				</v-flex>
					
				<!--  STORAGE & POWER -->
				<v-flex sm12 md6 lg4>
					<v-card flat>
						<v-card-title class="small-caps">Storage &amp; Power</v-card-title>
						<v-card-title>
							<dl class="list">
								<dt>Hardpoints <help-ship help="hardpoints"></help-ship></dt>
								<dd class="pull-right">{{ship.getHardpoints()}}</dd>
								<dt>Hardpoints (Free) <help-ship help="hardpoints-used"></help-ship></dt>
								<dd class="pull-right">{{ship.getHardpoints() + ship.getHardpointsUsed()}}</dd>
								<dt>Power (Total) <help-ship help="power-total"></help-ship></dt>
								<dd class="pull-right">{{ship.getPower()}}</dd>
								<dt>Power (Free) <help-ship help="power-used"></help-ship></dt>
								<dd class="pull-right">{{ship.getPower() + ship.getPowerUsed()}}</dd>
								<dt>Storage (Total) <help-ship help="storage-total"></help-ship></dt>
								<dd class="pull-right">{{ship.getBulk()}}</dd>
								<dt>Storage (Used) <help-ship help="storage-used"></help-ship></dt>
								<dd class="pull-right">{{ship.getBulk() + ship.getBulkUsed()}}</dd>
							</dl>
						</v-card-title>
					</v-card>
				</v-flex>
						
				<!-- Our Submission button -->
				<v-flex sm12 md12 lg12>
					<v-btn block color="green" @click="onClick" :disabled="!valid">Submit</v-btn>
				</v-flex>
			</v-layout>
			<v-snackbar
				:timeout="3000"
				color="error"
				:vertical="true"
				v-model="snackbar.error"
			>
				ERROR: Ship could not be saved
				<v-btn flat @click.native="snackbar.error = false">Close</v-btn>
			</v-snackbar>
			<v-snackbar
				:timeout="3000"
				color="success"
				:vertical="true"
				v-model="snackbar.success"
			>
				Ship {{ship.name}} was saved
				<v-btn flat @click.native="snackbar.success = false">Close</v-btn>
			</v-snackbar>
		</v-container>
	</v-form>
</template>

<script>
	export default {
		data() {
			return {
				valid: false,
				names: this.$bsFactory.getNames(),
				ship: this.$bsFactory.cloneShip(),
				fields: {
					fittings: [
						{
							text: 'Name',
							align: 'left',
							sortable: true,
							value: 'name'
						},
						{
							text: 'Active',
							align: 'left',
							sortable: true,
							value: 'active'
						},
						{
							text: 'Total',
							align: 'left',
							sortable: true,
							value: 'total'
						},
					],
					dialog: [
						{
							text: 'Name',
							align: 'left',
							sortable: true,
							value: 'name'
						},
					]
				},
				dialog: {
					fittings: false,
				},
				snackbar: {
					error: false,
					success: false
				},
			}
		},
		methods: {
			/**
			 * Randomises attributess of the ship
			 */
			randomAttributes() {
				// Random Ship Name
				let nameKeys = _.keys(this.names)
				let nameRandom = (nameKeys.length * Math.random() << 0)
				this.ship.name = this.names[ nameKeys[nameRandom] ].name()
				// New Designation
				this.ship.uuid = this.ship.generateShipDesignation().toUpperCase()
				// Random Ship hull
				this.ship.hull = this.ship.hulls.random()
				// Random Attributes
				this.ship.attributes.ai = this.ship.dice.random()
				this.ship.attributes.armour = this.ship.dice.random()
				this.ship.attributes.bulk = this.ship.dice.random()
				this.ship.attributes.engine = this.ship.dice.random()
				this.ship.attributes.power = this.ship.dice.random()
			},
			/**
			 * Randomises systems of the ship
			 */
			randomSystems() {
				// Random Sub-systems
				this.ship.systems.autopilot = this.ship.dice.random()
				this.ship.systems.ecm = this.ship.dice.random()
				this.ship.systems.navigation = this.ship.dice.random()
				this.ship.systems.operations = this.ship.dice.random()
				this.ship.systems.repair = this.ship.dice.random()
				this.ship.systems.sensors = this.ship.dice.random()
				this.ship.systems.weapons = this.ship.dice.random()
			},
			/**
			 * Save the ship
			 */
			onClick() {
				console.log( 'Saving ship: ' + this.ship.uuid )
				let store = this.$bsFactory.getStore('ship')
          		let data = this.ship.deflate()
				let resultSet = store.put(data)
				let self = this;
				resultSet.onsuccess = function() {
					self.snackbar.success = true
				};
				resultSet.onerror = function() {
					self.snackbar.error = true
				};
			},
			/**
			 * Add Fitting to the Ship
			 */
			addFitting(id) {
				this.ship.fittings.update(id, 1)
				this.dialog.fittings = false
			},
		}
	}
</script>