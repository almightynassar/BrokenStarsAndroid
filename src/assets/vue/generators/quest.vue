<template>
	<f7-page>
		<f7-block>
			<f7-block-title>Quest Generator</f7-block-title>
			<f7-block inset>
				<p>Use this generator to help seed ideas for quests and missions. The generator will give you key words from which you can piece together an exciting adventure!</p>
				<p class="bottom-border"><strong>Starter</strong><p>
				<p><em>Starters</em> are potential methods for your players to discover the quest (or lists the main people interested in it).</p>
				<ol>
					<li v-for="(n, i) in values.starter" :key="i">
						{{n.name | capitalize}} 
						<ul v-for="(o, j) in n.traits" :key="j" v-if="n.traits.length > 0">
							<li>{{o | capitalize}}</li>
						</ul>
					</li>
				</ol>
				<p class="bottom-border"><strong>Type</strong></p>
				<p><em>Type</em> determines what the quest will involve.</p>
				<ul>
					<li>
						{{values.quest.name | capitalize}} 
						<ul v-for="(o, j) in values.quest.traits" :key="j" v-if="values.quest.traits.length > 0">
							<li>{{o | capitalize}}</li>
						</ul>
					</li>
				</ul>
				<p class="bottom-border"><strong>Neutral</strong></p>
				<p><em>Neutrals</em> are significantly involved, but do not care how the quest is resolved.</p>
				<ol>
					<li v-for="(n, i) in values.neutral" :key="i">
						{{n.name | capitalize}} 
						<ul v-for="(o, j) in n.traits" :key="j" v-if="n.traits.length > 0">
							<li>{{o | capitalize}}</li>
						</ul>
					</li>
				</ol>
				<p class="bottom-border"><strong>Antagonists</strong></p>
				<p><em>Antagonists</em> desire to see the quest fail.</p>
				<ol>
					<li v-for="(n, i) in values.antagonists" :key="i">
						{{n.name | capitalize}} 
						<ul v-for="(o, j) in n.traits" :key="j" v-if="n.traits.length > 0">
							<li>{{o | capitalize}}</li>
						</ul>
					</li>
				</ol>
				<p class="bottom-border"><strong>Locations</strong></p>
				<p><em>Locations</em> are the main places where the quest should take place.</p>
				<ol>
					<li v-for="(n, i) in values.locations" :key="i">{{n | capitalize}}</li>
				</ol>
			</f7-block>
			<f7-block>
				<f7-button big fill color="blue" v-on:click="regenerate()"><f7-icon color="white" material="refresh"></f7-icon></f7-button>
			</f7-block>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
				quests: this.$bsFactory.getTemplate('quests'),
				values: {
					starter: [],
					quest: [],
					neutral: [],
					antagonists: [],
					locations: []
				}
			}
		},
    methods: {
			makeStarter() {
				let nums = Math.round(Math.random() * 3) + 1
				this.values['starter'] = []
				for (var index = 0; index < nums; index++) {
					this.values['starter'].push( this.quests.getStarter() )
				}
			},
			makeQuest() {
				this.values['quest'] = this.quests.getQuest()
			},
			makeNeutral() {
				let nums = Math.round(Math.random() * 2) + 1
				this.values['neutral'] = []
				for (var index = 0; index < nums; index++) {
					this.values['neutral'].push( this.quests.getNeutral() )
				}
			},
			makeAntagonist() {
				let nums = Math.round(Math.random() * 4) + 1
				this.values['antagonists'] = []
				for (var index = 0; index < nums; index++) {
					this.values['antagonists'].push( this.quests.getAntagonist() )
				}
			},
			makeLocation() {
				let nums = Math.round(Math.random() * 2) + 1
				this.values['locations'] = []
				for (var index = 0; index < nums; index++) {
					let newValue = this.quests.getLocation()
					if ( ! this.values.locations.includes(newValue)) {
						this.values.locations.push( newValue )
					}
				}
			},
			regenerate() {
				this.makeStarter()
				this.makeQuest()
				this.makeNeutral()
				this.makeAntagonist()
				this.makeLocation()
      }
		},
		mounted() {
			this.regenerate()
		}
	}
</script>