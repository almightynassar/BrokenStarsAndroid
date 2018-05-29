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
									<ul class="proper-list" v-for="(q_trait, q_trait_index) in values.quest.traits" :key="'quest-trait-'+q_trait_index">
										<li>{{q_trait | capitalize}}</li>
									</ul>
								</div>
								<div v-if="!!values.quest.side">
									<v-divider></v-divider>
									<p><em>Optional:</em> {{values.quest.side.name | capitalize}}</p>
									<div v-if="!!values.quest.side.traits">
										<ul class="proper-list" v-for="(side_q_trait, side_q_trait_index) in values.quest.side.traits" :key="'side-quest-'+side_q_trait_index">
											<li>{{side_q_trait | capitalize}}</li>
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
									<li v-for="(source, source_index) in values.sources" :key="'source-'+source_index">{{source | capitalize}}</li>
								</ol>
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs12 sm6 lg4>
						<v-card>
							<v-card-text>
								<div><span class="title">Locations</span> <help-quest help="location"></help-quest></div>
								<ol class="proper-list">
									<li v-for="(locale, locale_index) in values.locations" :key="'locale-'+locale_index">{{locale | capitalize}}</li>
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
					<v-flex xs12 sm6 lg4 xl3 v-for="(faction, faction_index) in values.factions" :key="'faction-'+faction_index">
						<v-card>
							<v-card-text>
								<div><span class="title">{{faction.name | capitalize}}</span></div>
								<strong>Traits</strong>
								<ul class="proper-list" v-for="(f_trait, f_trait_index) in faction.traits" :key="'faction-trait-'+f_trait_index" >
									<li>{{f_trait | capitalize}}</li>
								</ul>
								<v-divider></v-divider>
								<strong>Members</strong>
								<div v-for="(f_member, f_member_index) in faction.members" :key="'faction-member-'+f_member_index" >
									<u>{{f_member.name | capitalize}}</u>
									<ul class="proper-list" v-for="(m_trait, m_trait_index) in f_member.traits" :key="'faction-trait-'+m_trait_index">
										<li>{{m_trait | capitalize}}</li>
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
					<v-flex xs12 sm6 lg4 v-for="(other, i) in values.others" :key="'other-'+i">
						<v-card>
							<v-card-text>
								<p><strong>{{other.name | capitalize}}</strong><p>
								<div v-if="other.traits.length > 0">
									<ul class="proper-list" v-for="(o_t, j) in other.traits" :key="'other-trait-'+j">
										<li>{{o_t | capitalize}}</li>
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