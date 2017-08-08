<template>
	<f7-page>
		<f7-block-title>Ship Creator</f7-block-title>
		<f7-list form>
			<!-- SHIP NAME -->
			<f7-list-item>
				<f7-label>Name</f7-label>
				<f7-input type="text" placeholder="Name"></f7-input>
			</f7-list-item>
			<!-- HULL -->
			<f7-list-item>
				<f7-label>Hull</f7-label>
				<f7-input type="select" v-model="ship.hull">
					<option v-for="(n,i) in ship.categories.hulls" :value="i" :key="'hull-' + i">{{n}}</option>
				</f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-accordion>
					<f7-accordion-item>
						<f7-accordion-toggle class="border-lightblue color-lightblue" style="text-align: center; border-radius: 0.5em; border-width: 0.2em; border-style: solid;">Hull Statistics</f7-accordion-toggle>
						<f7-accordion-content>
							<f7-list>
								<f7-list-item>
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
							</f7-list>
						</f7-accordion-content>
					</f7-accordion-item>
				</f7-accordion>
			</f7-list-item>
		</f7-list>
		
		<f7-block-title>Buttons</f7-block-title>
		<f7-block inner>
			<p><f7-button>Button</f7-button></p>
			<p><f7-button round>Button Round</f7-button></p>
			<p><f7-button fill>Button Fill</f7-button></p>
			<p>
				<f7-buttons>
					<f7-button round active>Button 1</f7-button>
					<f7-button round>Button 2</f7-button>
					<f7-button round>Button 3</f7-button>
				</f7-buttons>
			</p>
			<p>
				<f7-buttons color="orange">
					<f7-button round big>Button 1</f7-button>
					<f7-button round big active>Button 2</f7-button>
					<f7-button round big>Button 3</f7-button>
				</f7-buttons>
			</p>
			<p>
				<f7-grid>
					<f7-col><f7-button big fill color="green">Send</f7-button></f7-col>
					<f7-col><f7-button big fill color="red">Delete</f7-button></f7-col>
				</f7-grid>
			</p>
			<p>
				<f7-grid>
					<f7-col><f7-button fill raised color="green">Raised</f7-button></f7-col>
					<f7-col><f7-button raised color="red">Raised</f7-button></f7-col>
					<f7-col><f7-button fill raised color="pink">Raised</f7-button></f7-col>
				</f7-grid>
			</p>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
				ship: this.$bsFactory.makeShip()
			}
		}
	}
</script>