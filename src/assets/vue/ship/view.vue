<template>
	<f7-page>
		<f7-block-title>{{ship.name}}</f7-block-title>
		<p><f7-link href='/ship/list/'><< Back</f7-link>.</p>
		<f7-grid>
			<!-- HULL -->
			<f7-col width="50">Hull</f7-col>
			<f7-col width="50">{{ship.getHull()}}</f7-col>
			<!-- ATTRIBUTES -->
			<f7-col width="100">
				<f7-block-title class="content-center-text color-lightblue">Attributes</f7-block-title>
			</f7-col>
			<f7-col width="50">AI <help-ai></help-ai></f7-col>
			<f7-col width="50">{{ship.getDiceCategory(ship.attributes.ai)}}</f7-col>
			<f7-col class="bg-gray" width="50">Armour <help-armour></help-armour></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getDiceCategory(ship.attributes.armour)}}</f7-col>
			<f7-col width="50">Bulk <help-bulk></help-bulk></f7-col>
			<f7-col width="50">{{ship.getDiceCategory(ship.attributes.bulk)}}</f7-col>
			<f7-col class="bg-gray" width="50">Engine <help-engine></help-engine></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getDiceCategory(ship.attributes.engine)}}</f7-col>
			<f7-col width="50">Power <help-power></help-power></f7-col>
			<f7-col width="50">{{ship.getDiceCategory(ship.attributes.power)}}</f7-col>
			<!-- SUB-SYSTEMS -->
			<f7-col width="100">
				<f7-block-title class="content-center-text color-lightblue">Sub-Systems</f7-block-title>
			</f7-col>
			<f7-col width="50">Autopilot <help-autopilot></help-autopilot></f7-col>
			<f7-col width="50">{{ship.getDiceCategory(ship.systems.autopilot)}}</f7-col>
			<f7-col class="bg-gray" width="50">ECM <help-ecm></help-ecm></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getDiceCategory(ship.systems.ecm)}}</f7-col>
			<f7-col width="50">Navigation <help-navigation></help-navigation></f7-col>
			<f7-col width="50">{{ship.getDiceCategory(ship.systems.navigation)}}</f7-col>
			<f7-col class="bg-gray" width="50">Operations <help-operations></help-operations></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getDiceCategory(ship.systems.operations)}}</f7-col>
			<f7-col width="50">Repair <help-repair></help-repair></f7-col>
			<f7-col width="50">{{ship.getDiceCategory(ship.systems.repair)}}</f7-col>
			<f7-col class="bg-gray" width="50">Sensors <help-sensors></help-sensors></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getDiceCategory(ship.systems.sensors)}}</f7-col>
			<f7-col width="50">Weapons <help-weapons></help-weapons></f7-col>
			<f7-col width="50">{{ship.getDiceCategory(ship.systems.weapons)}}</f7-col>
			<!-- Fittings -->
			<f7-col width="100">
				<f7-block-title class="content-center-text color-lightblue">Fittings</f7-block-title>
			</f7-col>
			<f7-col width="100">
				<f7-button big fill round color="blue" v-on:click="openFittingsPopup(index)"><f7-icon color="white" material="add"></f7-icon></f7-button>
				<f7-popup :id="'fittings-popup-'+index" :ref="'fittings-popup-'+index">
					<f7-block-title>Add fitting</f7-block-title>
					<f7-button big fill color="blue" v-on:click="closeFittingsPopup(index)"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
								<f7-button fill color="green" v-on:click="onFittingAddClick(props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></f7-button>
							</template>
							<template slot="expand" scope="props">
								<f7-button fill color="blue" v-on:click="onFittingExpandRow(props.rowData.id)"><f7-icon color="white" material="expand_more"></f7-icon></f7-button>
							</template>
						</vuetable>
					</div>
				</f7-popup>
			</f7-col>
			<f7-col width="100">
				<div class="data-table">
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
							<p><f7-button v-on:click="onFittingDeactivateClick(props.rowData.id)"><f7-icon size=16 color="blue" material="remove"></f7-icon></f7-button></p>
							<p>{{props.rowData.active}} / {{props.rowData.total}}</p>
							<p><f7-button v-on:click="onFittingActivateClick(props.rowData.id)"><f7-icon size=16 color="blue" material="add"></f7-icon></f7-button></p>
						</template>
						<template slot="actions" scope="props">
							<p><f7-button fill color="red" v-on:click="onFittingRemoveClick(props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></f7-button></p>
							<p><f7-button v-on:click="onShipFittingExpandRow(props.rowData.id)"><f7-icon size=16 color="blue" material="expand_more"></f7-icon></f7-button></p>
						</template>
					</vuetable>
				</div>
			</f7-col>
			<!-- Weapons -->
			<f7-col width="100">
				<f7-block-title class="content-center-text color-lightblue">Weapons</f7-block-title>
			</f7-col>
			<f7-col width="100">
				<f7-button big fill color="blue" v-on:click="openWeaponsPopup(index)"><f7-icon color="white" material="add"></f7-icon></f7-button>
				<f7-popup :id="'weapons-popup-'+index" :ref="'weapons-popup-'+index">
					<f7-block-title>Add fitting</f7-block-title>
					<f7-button big fill round color="blue" v-on:click="closeWeaponsPopup(index)"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
								<f7-button fill color="green" v-on:click="onWeaponAddClick(props.rowData.id)"><f7-icon color="white" material="add"></f7-icon></f7-button>
							</template>
							<template slot="expand" scope="props">
								<f7-button fill color="blue" v-on:click="onWeaponExpandRow(props.rowData.id)"><f7-icon color="white" material="expand_more"></f7-icon></f7-button>
							</template>
						</vuetable>
					</div>
				</f7-popup>
			</f7-col>
			<f7-col width="100">
				<div class="data-table">
					<vuetable
						ref="shipweaponstable"
						:api-mode="false"
						:data="ship.weapons"
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
						detail-row-component="detail-row-weapon"
					>
						<template slot="total" scope="props">
							<p><f7-button v-on:click="onWeaponDeactivateClick(props.rowData.id)"><f7-icon size=16 color="blue" material="remove"></f7-icon></f7-button></p>
							<p>{{props.rowData.active}} / {{props.rowData.total}}</p>
							<p><f7-button v-on:click="onWeaponActivateClick(props.rowData.id)"><f7-icon size=16 color="blue" material="add"></f7-icon></f7-button></p>
						</template>
						<template slot="actions" scope="props">
							<p><f7-button fill color="red" v-on:click="onWeaponRemoveClick(props.rowData.id)"><f7-icon size=16 color="white" material="delete"></f7-icon></f7-button></p>
							<p><f7-button v-on:click="onShipWeaponExpandRow(props.rowData.id)"><f7-icon size=16 color="blue" material="expand_more"></f7-icon></f7-button></p>
						</template>
					</vuetable>
				</div>
			</f7-col>
			<!-- Derivative Values -->
			<f7-col width="100">
				<f7-block-title class="content-center-text color-lightblue">Derived Values</f7-block-title>
			</f7-col>
			<f7-col width="50">AI Actions <help-ai-actions></help-ai-actions></f7-col>
			<f7-col width="50">{{ship.getActionsAI()}}</f7-col>
			<f7-col class="bg-gray" width="50">AI Evade <help-evade></help-evade></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getEvade()}}</f7-col>
			<f7-col width="50">Breech <help-breech></help-breech></f7-col>
			<f7-col width="50">{{ship.getToughness()}}</f7-col>
			<f7-col class="bg-gray" width="50">Crew <help-crew></help-crew></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getCrew()}}</f7-col>
			<f7-col width="50">Fuel per FTL <help-fuel></help-fuel></f7-col>
			<f7-col width="50">{{ship.getFTL()}}</f7-col>
			<f7-col class="bg-gray" width="50">Hardpoints <help-hardpoints></help-hardpoints></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getHardpoints()}}</f7-col>
			<f7-col width="50">Hardpoints (Free) <help-hardpoints-used></help-hardpoints-used></f7-col>
			<f7-col width="50">{{ship.getHardpoints() + ship.getHardpointsUsed()}}</f7-col>
			<f7-col class="bg-gray" width="50">Hull Size <help-size></help-size></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getSize()}}</f7-col>
			<f7-col width="50">Integrity <help-integrity></help-integrity></f7-col>
			<f7-col width="50">{{ship.getIntegrity()}}</f7-col>
			<f7-col class="bg-gray" width="50">Power (Total) <help-power-total></help-power-total></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getPower()}}</f7-col>
			<f7-col width="50">Power (Free) <help-power-used></help-power-used></f7-col>
			<f7-col width="50">{{ship.getPower() + ship.getPowerUsed()}}</f7-col>
			<f7-col class="bg-gray" width="50">Speed <help-speed></help-speed></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getAcceleration()}}</f7-col>
			<f7-col width="50">Storage (Total) <help-storage-total></help-storage-total></f7-col>
			<f7-col width="50">{{ship.getBulk()}}</f7-col>
			<f7-col class="bg-gray" width="50">Storage (Used) <help-storage-used></help-storage-used></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getBulk() + ship.getBulkUsed()}}</f7-col>
			<f7-col width="50">Points <help-points></help-points></f7-col>
			<f7-col width="50">{{ship.getPoints()}}</f7-col>
			<f7-col class="bg-gray" width="50">Rank <help-rank></help-rank></f7-col>
			<f7-col class="bg-gray" width="50">{{ship.getRank()}}</f7-col>
			<f7-col width="50">Cost <help-cost></help-cost></f7-col>
			<f7-col width="50">{{formatNumber(ship.getCost())}}</f7-col>
		</f7-grid>
		
		<f7-block inner>
			<p>
				<f7-button big fill color="green" v-on:click="onClick">Update</f7-button>
			</p>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		props: {
			index: {
				type: String,
				default: "0"
			}
		},
		data() {
			return {
				ship: {},
				fittings: this.$bsFactory.getTemplate('fittings'),
				weapons: this.$bsFactory.getTemplate("weapons"),
				formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
		},
		methods: {
			openFittingsPopup(i) {
				let popupName = 'fittings-popup-' + i
				this.$refs[popupName].open()
			},
			closeFittingsPopup(i) {
				let popupName = 'fittings-popup-' + i
				this.$refs[popupName].close()
			},
			openWeaponsPopup(i) {
				let popupName = 'weapons-popup-' + i
				this.$refs[popupName].open()
			},
			closeWeaponsPopup(i) {
				let popupName = 'weapons-popup-' + i
				this.$refs[popupName].close()
			},
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
			},
			onClick() {
				let saved = this.$bsFactory.saveShip(this.ship)
				if (saved === 2) {
					this.$f7.alert(this.ship.name+" has been added")
				} else if (saved === 1) {
					this.$f7.alert(this.ship.name+" has been updated")
				} else {
					this.$f7.alert("ERROR: "+this.ship.name+" could not be saved")
				}
			},
			onFittingAddClick(id) {
        let fitting = this.fittings.search(id)
        if (fitting.length == 1) {
          this.ship.addFitting(fitting[0], 1)
				}
			},
			onFittingActivateClick(id) {
        let fitting = this.fittings.search(id)
        if (fitting.length == 1) {
          this.ship.activateFitting(fitting[0], 1)
				}
			},
			onFittingDeactivateClick(id) {
        let fitting = this.fittings.search(id)
        if (fitting.length == 1) {
          this.ship.deactivateFitting(fitting[0], 1)
				}
			},
			onFittingRemoveClick(id) {
        let fitting = this.fittings.search(id)
        if (fitting.length == 1) {
          this.ship.removeFitting(fitting[0], 1)
				}
			},
			onFittingExpandRow(id) {
        let index = this.$refs.fittingstable.visibleDetailRows.indexOf(id)
        this.$refs.fittingstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.fittingstable.showDetailRow(id)
        }
      },
			onShipFittingExpandRow(id) {
        let index = this.$refs.shipfittingstable.visibleDetailRows.indexOf(id)
        this.$refs.shipfittingstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.shipfittingstable.showDetailRow(id)
        }
      },
			onWeaponAddClick(id) {
        let weapon = this.weapons.search(id)
        if (weapon.length == 1) {
          this.ship.addWeapon(weapon[0], 1)
				}
			},
			onWeaponActivateClick(id) {
        let weapon = this.weapons.search(id)
        if (weapon.length == 1) {
          this.ship.activateWeapon(weapon[0], 1)
				}
			},
			onWeaponDeactivateClick(id) {
        let weapon = this.weapons.search(id)
        if (weapon.length == 1) {
          this.ship.deactivateWeapon(weapon[0], 1)
				}
			},
			onWeaponRemoveClick(id) {
        let weapon = this.weapons.search(id)
        if (weapon.length == 1) {
          this.ship.removeWeapon(weapon[0], 1)
				}
			},
			onWeaponExpandRow(id) {
        let index = this.$refs.weaponstable.visibleDetailRows.indexOf(id)
        this.$refs.weaponstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.weaponstable.showDetailRow(id)
        }
      },
			onShipWeaponExpandRow(id) {
        let index = this.$refs.shipweaponstable.visibleDetailRows.indexOf(id)
        this.$refs.shipweaponstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.shipweaponstable.showDetailRow(id)
        }
      }
		},
		created() {
			let tempShip = this.$bsFactory.getShipByIndex(this.index)
			if (tempShip) {
				this.ship = tempShip
			} else {
				console.error("SHIP NOT FOUND")
			}
		}
	}
</script>