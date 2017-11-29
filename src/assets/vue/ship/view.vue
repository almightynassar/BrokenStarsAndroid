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
			<dl>
				<dt><strong>AI</strong> <help-ship-ai></help-ship-ai></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.attributes.ai)}}</dd>
				<dt><strong>Armour</strong> <help-ship-armour></help-ship-armour></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.attributes.armour)}}</dd>
				<dt><strong>Bulk</strong> <help-ship-bulk></help-ship-bulk></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.attributes.bulk)}}</dd>
				<dt><strong>Engine</strong> <help-ship-engine></help-ship-engine></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.attributes.engine)}}</dd>
				<dt><strong>Power</strong> <help-ship-power></help-ship-power></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.attributes.power)}}</dd>
			</dl>

			<!-- SUB-SYSTEMS -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Sub-Systems</f7-block-title>
			<dl>
				<dt><strong>Autopilot</strong> <help-ship-autopilot></help-ship-autopilot></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.systems.autopilot)}}</dd>
				<dt><strong>ECM</strong> <help-ship-ecm></help-ship-ecm></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.systems.ecm)}}</dd>
				<dt><strong>Navigation</strong> <help-ship-navigation></help-ship-navigation></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.systems.navigation)}}</dd>
				<dt><strong>Operations</strong> <help-ship-operations></help-ship-operations></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.systems.operations)}}</dd>
				<dt><strong>Repair</strong> <help-ship-repair></help-ship-repair></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.systems.repair)}}</dd>
				<dt><strong>Sensors</strong> <help-ship-sensors></help-ship-sensors></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.systems.sensors)}}</dd>
				<dt><strong>Weapons</strong> <help-ship-weapons></help-ship-weapons></dt>
				<dd class="bottom-border">{{ship.getDiceCategory(ship.systems.weapons)}}</dd>
			</dl>

			<!-- Fittings -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Fittings</f7-block-title>
			<f7-button big fill round color="blue" v-on:click="openFittingsPopup(uuid)"><f7-icon color="white" material="add"></f7-icon></f7-button>
			<f7-popup :id="'fittings-popup-'+uuid" :ref="'fittings-popup-'+uuid">
				<f7-block-title>Add fitting</f7-block-title>
				<f7-button big fill color="blue" v-on:click="closeFittingsPopup(uuid)"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
							<f7-button v-on:click="onFittingExpandRow(props.rowData.id)"><f7-icon material="expand_more"></f7-icon></f7-button>
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

			<!-- Weapons -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Weapons</f7-block-title>
			<f7-button big fill color="blue" v-on:click="openWeaponsPopup(uuid)"><f7-icon color="white" material="add"></f7-icon></f7-button>
			<f7-popup :id="'weapons-popup-'+uuid" :ref="'weapons-popup-'+uuid">
				<f7-block-title>Add fitting</f7-block-title>
				<f7-button big fill round color="blue" v-on:click="closeWeaponsPopup(uuid)"><f7-icon color="white" material="arrow_back"></f7-icon></f7-button>
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
							<f7-button v-on:click="onWeaponExpandRow(props.rowData.id)"><f7-icon material="expand_more"></f7-icon></f7-button>
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

			<!-- Other Values -->
			<f7-block-title class="content-center-text color-lightblue bottom-border">Other Values</f7-block-title>
			<dl>
				<dt><strong>AI Actions</strong> <help-ship-ai-actions></help-ship-ai-actions></dt>
				<dd class="bottom-border">{{ship.getActionsAI()}}</dd>
				<dt><strong>AI Evade</strong> <help-ship-evade></help-ship-evade></dt>
				<dd class="bottom-border">{{ship.getEvade()}}</dd>
				<dt><strong>Cost</strong> <help-ship-cost></help-ship-cost></dt>
				<dd class="bottom-border">{{formatNumber(ship.getCost())}}</dd>
				<dt><strong>Crew</strong> <help-ship-crew></help-ship-crew></dt>
				<dd class="bottom-border">{{ship.getCrew()}}</dd>
				<dt><strong>Designation</strong></dt>
				<dd class="bottom-border">{{ship.uuid}}</dd>
				<dt><strong>Fuel per FTL</strong> <help-ship-fuel></help-ship-fuel></dt>
				<dd class="bottom-border">{{ship.getFTL()}}</dd>
				<dt><strong>Hardpoints</strong> <help-ship-hardpoints></help-ship-hardpoints></dt>
				<dd class="bottom-border">{{ship.getHardpoints()}}</dd>
				<dt><strong>Hardpoints (Free)</strong> <help-ship-hardpoints-used></help-ship-hardpoints-used></dt>
				<dd class="bottom-border">{{ship.getHardpoints() + ship.getHardpointsUsed()}}</dd>
				<dt><strong>Hull</strong></dt>
				<dd class="bottom-border">{{ship.getHull()}}</dd>
				<dt><strong>Hull Size</strong> <help-ship-size></help-ship-size></dt>
				<dd class="bottom-border">{{ship.getSize()}}</dd>
				<dt><strong>Integrity</strong> <help-ship-integrity></help-ship-integrity></dt>
				<dd class="bottom-border">{{ship.getIntegrity()}}</dd>
				<dt><strong>Points</strong> <help-ship-points></help-ship-points></dt>
				<dd class="bottom-border">{{ship.getPoints()}}</dd>
				<dt><strong>Power (Total)</strong> <help-ship-power-total></help-ship-power-total></dt>
				<dd class="bottom-border">{{ship.getPower()}}</dd>
				<dt><strong>Power (Free)</strong> <help-ship-power-used></help-ship-power-used></dt>
				<dd class="bottom-border">{{ship.getPower() + ship.getPowerUsed()}}</dd>
				<dt><strong>Rank</strong> <help-ship-rank></help-ship-rank></dt>
				<dd class="bottom-border">{{ship.getRank()}}</dd>
				<dt><strong>Speed</strong> <help-ship-speed></help-ship-speed></dt>
				<dd class="bottom-border">{{ship.getAcceleration()}}</dd>
				<dt><strong>Storage (Total)</strong> <help-ship-storage-total></help-ship-storage-total></dt>
				<dd class="bottom-border">{{ship.getBulk()}}</dd>
				<dt><strong>Storage (Used)</strong> <help-ship-storage-used></help-ship-storage-used></dt>
				<dd class="bottom-border">{{ship.getBulk() + ship.getBulkUsed()}}</dd>
				<dt><strong>Toughness</strong> <help-ship-breech></help-ship-breech></dt>
				<dd class="bottom-border">{{ship.getToughness()}}</dd>
			</dl>
			<f7-buttons>
				<f7-button big fill color="blue" href="/ship/list/"><f7-icon material="chevron_left"></f7-icon> Back</f7-button>
				<f7-button big fill color="blue" v-on:click="copyTextArea">Copy</f7-button>
				<f7-button big fill color="green" v-on:click="onClick">Update</f7-button>
			</f7-buttons>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		props: {
			uuid: {
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
			},
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
		created() {
			let tempShip = this.$bsFactory.findShipByDesignation(this.uuid)
			if (tempShip) {
				this.ship = tempShip
			} else {
				console.error("SHIP NOT FOUND")
			}
		}
	}
</script>