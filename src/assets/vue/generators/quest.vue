<template>
	<v-card flat>
    	<v-card-text>
			<p>Use this generator to help seed ideas for quests and missions. The generator will give you key words from which you can piece together an exciting adventure!</p>

			<div><span class="headline small-caps">Quest</span></div>
			<v-divider></v-divider>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs12 sm6 lg4>
						<v-card>
							<v-card-text>
								<div><span class="title">Type(s)</span> <help-quest help="type"></help-quest></div>
								<p>{{values.quest.name | capitalize}} </p>
								<div v-if="!!values.quest.traits">
									<ul class="proper-list" v-for="(o, j) in values.quest.traits" :key="j">
										<li>{{o | capitalize}}</li>
									</ul>
								</div>
								<div v-if="!!values.quest.side">
									<v-divider></v-divider>
									<p><em>Optional:</em> {{values.quest.side.name | capitalize}}</p>
									<div v-if="!!values.quest.side.traits">
										<ul class="proper-list" v-for="(o, j) in values.quest.side.traits" :key="j">
											<li>{{o | capitalize}}</li>
										</ul>
									</div>
								</div>
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs12 sm6 lg4>
						<v-card>
							<v-card-text>
								<div><span class="title">Sources</span> <help-quest help="source"></help-quest></div>
								<ol class="proper-list">
									<li v-for="(n, i) in values.sources" :key="i">{{n | capitalize}}</li>
								</ol>
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs12 sm6 lg4>
						<v-card>
							<v-card-text>
								<div><span class="title">Locations</span> <help-quest help="location"></help-quest></div>
								<ol class="proper-list">
									<li v-for="(n, i) in values.locations" :key="i">{{n | capitalize}}</li>
								</ol>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>

			<div><span class="headline small-caps">Factions</span> <help-quest help="faction"></help-quest></div>
			<v-divider></v-divider>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs12 sm6 lg4 xl3 v-for="(n, i) in values.factions" :key="i">
						<v-card>
							<v-card-text class="px-0">
								<h3 class="title mb-0">{{n.name | capitalize}}</h3>
								<h4>Traits</h4>
								<ul class="proper-list" v-for="(o, j) in n.traits" :key="j" >
									<li>{{o | capitalize}}</li>
								</ul>
								<v-divider></v-divider>
								<h4>Members</h4>
								<div v-for="(o, j) in n.members" :key="j" >
									<u>{{o.name | capitalize}}</u>
									<ul class="proper-list" v-for="(p, k) in o.traits" :key="k">
										<li>{{p | capitalize}}</li>
									</ul>
								</div>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>

			<div><span class="headline small-caps">Others</span> <help-quest help="other"></help-quest></div>
			<v-divider></v-divider>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs12 sm6 lg4 v-for="(n, i) in values.others" :key="i">
						<v-card>
							<v-card-text>
								<p><strong>{{n.name | capitalize}}</strong><p>
								<div v-if="n.traits.length > 0">
									<ul class="proper-list" v-for="(o, j) in n.traits" :key="j">
										<li>{{o | capitalize}}</li>
									</ul>
								</div>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>

			<v-btn color="blue" @click="makeQuest()"><v-icon color="white">refresh</v-icon></v-btn>
    	</v-card-text>
	</v-card>
</template>

<script>
	export default {
		data() {
			return {
				quests: this.$bsFactory.getTemplate('quests'),
				values: {
					quest: {},
					locations: [],
					factions: [],
					others: [],
					sources: []
				}
			}
		},
		methods: {
			makeQuest() {
				this.values = this.quests.get()
			},
		},
		mounted() {
			this.makeQuest()
		}
	}
</script>