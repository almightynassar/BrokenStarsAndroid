<template>
	<f7-page>
		<f7-block>
			<f7-block-title>Quest Generator</f7-block-title>
			<f7-block inset>
				<p>Use this generator to help seed ideas for quests and missions. The generator will give you key words from which you can piece together an exciting adventure!</p>
				<p class="bottom-border"><strong>Starter</strong><p>
				<p><em>Starters</em> are potential methods for your players to discover the quest (or lists the main people interested in it).</p>
				<ol>
					<li v-for="(n, i) in values.starter" :key="i">{{n | capitalize}}</li>
				</ol>
				<p class="bottom-border"><strong>Type</strong></p>
				<p><em>Type</em> determines what the quest will involve.</p>
				<ol>
					<li v-for="(n, i) in values.type" :key="i">{{n | capitalize}}</li>
				</ol>
				<p class="bottom-border"><strong>Modifier</strong></p>
				<p><em>Modifiers</em> flavours the quest and determines any additional complications.</p>
				<ol>
					<li v-for="(n, i) in values.modifier" :key="i">{{n | capitalize}}</li>
				</ol>
				<p class="bottom-border"><strong>Allies</strong></p>
				<p><em>Allies</em> want to see a quest succeed.</p>
				<ol>
					<li v-for="(n, i) in values.allies" :key="i">{{n | capitalize}}</li>
				</ol>
				<p class="bottom-border"><strong>Antagonists</strong></p>
				<p><em>Antagonists</em> desire to see the quest fail.</p>
				<ol>
					<li v-for="(n, i) in values.antagonists" :key="i">{{n | capitalize}}</li>
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
					type: [],
					modifier: [],
					allies: [],
					antagonists: [],
					locations: []
				}
			}
		},
    methods: {
			makeNew(field) {
				let nums = Math.round(Math.random() * 3) + 1
				this.values[field] = []
				for (var index = 0; index < nums; index++) {
					let newValue = this.quests.getRandom(field)
					if ( ! this.values[field].includes(newValue)) {
						this.values[field].push( newValue )
					}
				}
			},
			regenerate() {
				this.makeNew('starter')
				this.makeNew('type')
				this.makeNew('modifier')
				this.makeNew('allies')
				this.makeNew('antagonists')
				this.makeNew('locations')
      }
		},
		mounted() {
			this.regenerate()
		}
	}
</script>