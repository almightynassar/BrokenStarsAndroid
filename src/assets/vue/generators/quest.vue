<template>
	<v-card flat>
    	<v-card-text>
			<p>Use this generator to help seed ideas for quests and missions. The generator will give you key words from which you can piece together an exciting adventure!</p>
			
			<p><strong class="small-caps">Starter</strong> <help-quest help="starter"></help-quest></p>
			<ol class="proper-list">
				<li v-for="(n, i) in values.starter" :key="i">
					{{n.name | capitalize}}
					<div v-if="n.traits.length > 0">
						<ul v-for="(o, j) in n.traits" :key="j" >
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ol>

			<p><strong class="small-caps">Type</strong> <help-quest help="type"></help-quest></p>
			<ul class="proper-list">
				<li>
					{{values.quest.name | capitalize}} 
					<div v-if="!!values.quest.traits">
						<ul v-for="(o, j) in values.quest.traits" :key="j">
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
				<li v-if="!!values.quest.side">
					Optional: {{values.quest.side.name | capitalize}} 
					<div v-if="!!values.quest.side.traits">
						<ul v-for="(o, j) in values.quest.side.traits" :key="j">
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ul>

			<p><strong class="small-caps">Neutral</strong> <help-quest help="neutral"></help-quest></p>
			<ol class="proper-list">
				<li v-for="(n, i) in values.neutral" :key="i">
					{{n.name | capitalize}}
					<div v-if="n.traits.length > 0">
						<ul v-for="(o, j) in n.traits" :key="j">
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ol>

			<p><strong class="small-caps">Antagonists</strong> <help-quest help="antagonist"></help-quest></p>
			<ol class="proper-list">
				<li v-for="(n, i) in values.antagonists" :key="i">
					{{n.name | capitalize}} 
					<div v-if="n.traits.length > 0">
						<ul v-for="(o, j) in n.traits" :key="j">
							<li>{{o | capitalize}}</li>
						</ul>
					</div>
				</li>
			</ol>

			<p><strong class="small-caps">Locations</strong> <help-quest help="location"></help-quest></p>
			<ol class="proper-list">
				<li v-for="(n, i) in values.locations" :key="i">{{n | capitalize}}</li>
			</ol>

			<v-btn color="blue" @click="regenerate()"><v-icon color="white">refresh</v-icon></v-btn>
    	</v-card-text>
	</v-card>
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