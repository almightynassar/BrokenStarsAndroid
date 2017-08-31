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
			<f7-list-item class="color-gray">
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
			</f7-list-item>
			<!-- ATTRIBUTES -->
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item class="content-border border-lightblue">
						<f7-accordion-toggle class="content-center-text color-lightblue">Attributes</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list>
								<f7-list-item class="color-gray">
									<p>Attributes are the physical and technical characteristics of your particular ship.</p>
								</f7-list-item>
								<f7-list-item>
									<f7-grid>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>AI</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.attributes.ai">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Determines the upper limit of your sub-systems.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Armour</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.attributes.armour">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'armour-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Determines your ship's protection against damage and integrity loss (as well as available weapon hardpoints).</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Bulk</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.attributes.bulk">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'bulk-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Represents how much extra space your spacecraft has.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="25">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Engine</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.attributes.engine">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'engine-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Represents your relative ship, and the efficiency of your FTL drive.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Power</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.attributes.power">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>How much extra power you have to power ship systems.</em></p></f7-col>
											</f7-grid>
										</f7-col>
									</f7-grid>
								</f7-list-item>
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
			<!-- SUB-SYSTEMS -->
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item class="content-border border-lightblue">
						<f7-accordion-toggle class="content-center-text color-lightblue">Sub-Systems</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list>
								<f7-list-item class="color-gray">
									<p></em>Your Ship's AI sub-systems are limited by the AI attribute (this means that it will cost you more creation points to make a sub-system go over your AI attribute score)</em></p>
								</f7-list-item>
								<f7-list-item>
									<f7-grid>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Autopilot</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.systems.autopilot">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'autopilot-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Controls piloting your ship if you do not have a pilot.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>ECM</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.systems.ecm">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'ecm-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Electronic Counter-Measures allows your ship's AI to confuse enemies' sensors and targeting systems.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Navigation</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.systems.navigation">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'navigation-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Planning routes through FTL Jumps or difficult areas (such as asteroid fields or high gravity wells).</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Operations</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.systems.operations">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'operations-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Generic sub-system for operating various facilites (such as workshop or med-bay).</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Repair</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.systems.repair">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'repair-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>How well your ship will self-repair from integrity loss.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Sensors</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.systems.sensors">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'sensors-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>How well your ship can detect enemies and other objects in space.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Weapons</strong></f7-col>
												<f7-col width="50" tablet-width="25">
													<f7-input type="select" v-model="ship.systems.weapons">
														<option v-for="(n,i) in ship.categories.dice" :value="i" :key="'weapons-' + i">{{n}}</option>
													</f7-input>
												</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Operating your ship's weapons and targeting array.</em></p></f7-col>
											</f7-grid>
										</f7-col>
									</f7-grid>
								</f7-list-item>
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
			<!-- Derivative Values -->
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item class="content-border border-lightblue">
						<f7-accordion-toggle class="content-center-text color-lightblue">Statistics</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list>
								<f7-list-item>
									<f7-grid>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>AI Evade</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getEvade()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Your AI's evasion if you do not have a dedicated pilot.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Breech</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getToughness()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>The target number that total enemy damage must exceed.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Crew</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getCrew()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Amount of crew this spacecraft can support. Includes bedrooms and amenities</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Fuel</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getBaseFTL()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Represents fuel usage per FTL jump.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Hull Size</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getSize()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Modifier that represents the relative size of spacecraft.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Integrity</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getIntegrity()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Represents how many breeches the spacecraft can take.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Power</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getPower()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Amount of extra power for ship fittings.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Speed</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getAcceleration()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>Your spacecrafts acceleration through frictionless space.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Storage</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getBulk()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>The amount of free space. 1 storage space equals a 2.5 m x 2.5 m cube.</em></p></f7-col>
											</f7-grid>
										</f7-col>
										<f7-col width="100" tablet-width="50">
											<f7-grid>
												<f7-col width="50" tablet-width="25"><strong>Hardpoints</strong></f7-col>
												<f7-col width="50" tablet-width="25">{{ship.getHardpoints()}}</f7-col>
												<f7-col width="100"><p class="color-gray"><em>The amount of mounts on which to place weapons or other defensive structures.</em></p></f7-col>
											</f7-grid>
										</f7-col>
									</f7-grid>
								</f7-list-item>
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
			<f7-list-item>
				<f7-grid>
					<f7-col width="50" tablet-width="25"><strong>Points</strong></f7-col>
					<f7-col width="50" tablet-width="25">{{ship.getPoints()}}</f7-col>
				</f7-grid>
			</f7-list-item>
			<f7-list-item>
				<f7-grid>
					<f7-col width="50" tablet-width="25"><strong>Rank</strong></f7-col>
					<f7-col width="50" tablet-width="25">{{ship.getRank()}}</f7-col>
				</f7-grid>
			</f7-list-item>
			<f7-list-item>
				<f7-grid>
					<f7-col width="50" tablet-width="25"><strong>Cost</strong></f7-col>
					<f7-col width="50" tablet-width="25">{{formatNumber(ship.getCost())}}</f7-col>
				</f7-grid>
			</f7-list-item>
		</f7-list>
		
		<f7-block inner>
			<p>
				<f7-button big fill color="green" v-on:click="onClick">Submit</f7-button>
			</p>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
				ship: this.$bsFactory.cloneShip(),
				fittings: this.$bsFactory.getTemplate('fittings'),
				formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
		},
		methods: {
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
			}
		}
	}
</script>