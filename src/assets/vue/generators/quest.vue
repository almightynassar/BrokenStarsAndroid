<template>
	<f7-page>
		<f7-block inset>
			<f7-block-title class="content-center-text bottom-border small-caps">Quest Generator</f7-block-title>
			<p>Use this generator to help seed ideas for quests and missions. The generator will give you key words from which you can piece together an exciting adventure!</p>
			
			<f7-block-title class="content-center-text color-lightblue bottom-border">Starter <help-quest-starter></help-quest-starter></f7-block-title>
			<ol>
				<li v-for="(n, i) in values.starter" :key="i">
					{{n.name | capitalize}}
					<div v-if="n.traits.length > 0">
						<ul v-for="(o, j) in n.traits" :key="j" >
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ol>

			<f7-block-title class="content-center-text color-lightblue bottom-border">Type <help-quest-type></help-quest-type></f7-block-title>
			<ul>
				<li>
					{{values.quest.name | capitalize}} 
					<div v-if="!!values.quest.traits">
						<ul v-for="(o, j) in values.quest.traits" :key="j">
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ul>

			<f7-block-title class="content-center-text color-lightblue bottom-border">Neutral <help-quest-neutral></help-quest-neutral></f7-block-title>
			<ol>
				<li v-for="(n, i) in values.neutral" :key="i">
					{{n.name | capitalize}}
					<div v-if="n.traits.length > 0">
						<ul v-for="(o, j) in n.traits" :key="j">
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ol>

			<f7-block-title class="content-center-text color-lightblue bottom-border">Antagonists <help-quest-antagonist></help-quest-antagonist></f7-block-title>
			<ol>
				<li v-for="(n, i) in values.antagonists" :key="i">
					{{n.name | capitalize}} 
					<div v-if="n.traits.length > 0">
						<ul v-for="(o, j) in n.traits" :key="j">
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ol>

			<f7-block-title class="content-center-text color-lightblue bottom-border">Locations <help-quest-location></help-quest-location></f7-block-title>
			<ol>
				<li v-for="(n, i) in values.locations" :key="i">{{n | capitalize}}</li>
			</ol>

			<f7-button big fill color="blue" v-on:click="regenerate()"><f7-icon color="white" material="refresh"></f7-icon></f7-button>
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