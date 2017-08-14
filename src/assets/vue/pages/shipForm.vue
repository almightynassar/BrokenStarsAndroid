<template>
	<f7-page>
		<f7-block-title>Ship Creator</f7-block-title>
		<f7-list form>
			<!-- SHIP NAME -->
			<f7-list-item>
				<f7-label><strong>Name</strong></f7-label>
				<f7-input type="text" v-model="ship.name"></f7-input>
			</f7-list-item>
			<!-- HULL -->
			<f7-list-item>
				<f7-label><strong>Hull</strong></f7-label>
				<f7-input type="select" v-model="ship.hull">
					<option v-for="(n,i) in ship.categories.hulls" :value="i" :key="'hull-' + i">{{n}}</option>
				</f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item>
						<f7-accordion-toggle class="content-border content-center-text border-lightblue color-lightblue">Hull Statistics</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list class="content-border border-lightblue">
								<f7-list-item class="color-gray">
									<p v-show="ship.hull == 0">The <em>Interceptor</em> class are fast craft used to intercept and harras other spacecraft. They are usually deployed from other larger spacecraft, or from Space Stations.</p>
									<p v-show="ship.hull == 1">The <em>Shuttle</em> class are small versatile spacecraft used for various functions (usually transferring material or personnel from one location to another). The most common spacecraft type.</p>
									<p v-show="ship.hull == 2">The <em>Yacht</em> class are luxury spacecraft for general civilian use. Commonly used as cruise-liners, or as slightly larger <em>Shuttles</em>.</p>
									<p v-show="ship.hull == 3">The <em>Patrol</em> class is commonly used as non-military law enforcement spacecraft.</p>
									<p v-show="ship.hull == 4">The <em>Escort</em> class is commonly used to protect other spacecraft from smaller, mobile enemy craft. Other uses include being inter-system Cargo Transports, Troopships and Tankers.</p>
									<p v-show="ship.hull == 5">The <em>Corvette</em> class is the smallest class of warship, usually used for scouting, raiding or guarding key points. Usually operates as part of a larger group.</p>
									<p v-show="ship.hull == 6">The <em>Frigate</em> class is designed to be tough enough for mostly independent missions. It is used for raiding, long-range patrol, bombardment, or scouting.</p>
									<p v-show="ship.hull == 7">The <em>Cruiser</em> class is the "<em>Jack-Of-All-Trades</em>" warship; large enough to handle themselves, but fast enough to run away from bigger threats. Due to their expense, "<em>Frigates</em>" are more commonly used during Peace-time.</p>
									<p v-show="ship.hull == 8">The <em>Battleship</em> class spacecraft are usually the largest in a fleet. Their expense means that only a few are operational in conventional navies.</p>
									<p v-show="ship.hull == 9">The <em>Dreadnought</em> class spacecraft are rare, and only used as Flagships.</p>
									<p v-show="ship.hull == 10">The <em>Carrier</em> class spacecraft are huge, mainly so that they can transport smaller <em>Interceptor</em> spacecraft into battle.</p>
									<p v-show="ship.hull == 11">The <em>Worldship</em> class are feats of modern engineering. They are so large that they can usually sustain a functional population internally.</p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Hull Size</strong></f7-label>
									<f7-label>{{ship.getSize()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Base Crew</strong></f7-label>
									<f7-label>{{ship.getBaseCrew()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Base Power</strong></f7-label>
									<f7-label>{{ship.getBasePower()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Base Storage</strong></f7-label>
									<f7-label>{{ship.getBaseBulk()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Integrity</strong></f7-label>
									<f7-label>{{ship.getIntegrity()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Base Acceleration</strong></f7-label>
									<f7-label>{{ship.getBaseAcceleration()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Base Top Speed</strong></f7-label>
									<f7-label>{{ship.getBaseTopSpeed()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Base Fuel per FTL Jump</strong></f7-label>
									<f7-label>{{ship.getBaseFTL()}}</f7-label>
								</f7-list-item>
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
			<!-- ATTRIBUTES -->
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item>
						<f7-accordion-toggle class="content-border content-center-text border-lightblue color-lightblue">Attributes</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list class="content-border border-lightblue">
								<f7-list-item class="color-gray">
									<p>Attributes are the physical and technical characteristics of your particular ship.</p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>AI</strong></f7-label>
									<f7-input type="select" v-model="ship.attributes.ai">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>The AI attribute determines the quality and capacity of your ship's computer. The higher your AI attribute, the more actions your ship's computer can take (and you will have access to better quality sub-systems).</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Armour</strong></f7-label>
									<f7-input type="select" v-model="ship.attributes.armour">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'armour-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>Armour determines your ship's protection against damage and integrity loss.</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Bulk</strong></f7-label>
									<f7-input type="select" v-model="ship.attributes.bulk">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'bulk-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>Bulk is simply a measure of how much extra space your ship has. Higher values are better for cargo vessels.</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Engine</strong></f7-label>
									<f7-input type="select" v-model="ship.attributes.engine">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'engine-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>This attribute determines the quality of your thrusters, engines and FTL drive.</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Power</strong></f7-label>
									<f7-input type="select" v-model="ship.attributes.power">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>Power is used to turn on extra devices, weapons and other ship fittings.</em></p>
								</f7-list-item>
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
			<!-- SUB-SYSTEMS -->
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item>
						<f7-accordion-toggle class="content-border content-center-text border-lightblue color-lightblue">Sub-Systems</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list class="content-border border-lightblue">
								<f7-list-item class="color-gray">
									<p></em>Sub-systems are the capabilities of your particular AI. Sub-system values are limited by the AI attribute (this means that it will cost you more creation points to make a sub-system go over your AI attribute score)</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Autopilot</strong></f7-label>
									<f7-input type="select" v-model="ship.systems.autopilot">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'autopilot-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>You AI is better at flying the ship (and evading incoming weapon's fire).</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>ECM</strong></f7-label>
									<f7-input type="select" v-model="ship.systems.ecm">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ecm-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>ECM (Electronic Counter-Measures) allows your ship's AI to confuse enemies' sensors and weapon targeting systems.</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Navigation</strong></f7-label>
									<f7-input type="select" v-model="ship.systems.navigation">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'navigation-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>Navigation allows your ship's AI to plan your route through FTL jumps, planetary gravity wells and other difficult locations.</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Operations</strong></f7-label>
									<f7-input type="select" v-model="ship.systems.operations">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'operations-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>Allows your ship's AI to operation various devices and fittings (such as factories, medical labs and other support structures).</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Repair</strong></f7-label>
									<f7-input type="select" v-model="ship.systems.repair">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'repair-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>How well your ship's AI can fix your ship's integrity.</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Sensors</strong></f7-label>
									<f7-input type="select" v-model="ship.systems.sensors">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'sensors-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>How well your ship's AI is at detecting objects (and tracking the trajectory of weapons).</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Weapons</strong></f7-label>
									<f7-input type="select" v-model="ship.systems.weapons">
										<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'weapons-' + i">{{n}}</option>
									</f7-input>
								</f7-list-item>
								<f7-list-item>
									<p><em>How well your ship's AI can operate machinery.</em></p>
								</f7-list-item>
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
			<!-- Derivative Values -->
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item>
						<f7-accordion-toggle class="content-border content-center-text border-lightblue color-lightblue">Derivative Values</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list class="content-border border-lightblue">
								<f7-list-item>
									<f7-label><strong>AI Evade</strong></f7-label>
									<f7-label>{{ship.getEvade()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Toughness</strong></f7-label>
									<f7-label>{{ship.getToughness()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Power</strong></f7-label>
									<f7-label>{{ship.getPower()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Acceleration</strong></f7-label>
									<f7-label>{{ship.getAcceleration()}}</f7-label>
								</f7-list-item>
								<f7-list-item>
									<f7-label><strong>Top Speed</strong></f7-label>
									<f7-label>{{ship.getTopSpeed()}}</f7-label>
								</f7-list-item>
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
		</f7-list>
		
		<f7-block inner>
			<p>
				<f7-grid>
					<f7-col><f7-button big fill color="green">Submit</f7-button></f7-col>
					<f7-col><f7-button big fill color="red">Cancel</f7-button></f7-col>
				</f7-grid>
			</p>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
				ship: this.$bsFactory.getTemplate("ships")
			}
		}
	}
</script>