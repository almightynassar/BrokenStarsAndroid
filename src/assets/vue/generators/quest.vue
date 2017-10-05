<template>
	<f7-page>
		<f7-block-title>Quest Generator</f7-block-title>
		<f7-block form>
			<p>Use this generator to help seed ideas for quests and missions. The generator will give you key words from which you can piece together an exciting adventure!</p>
			<p><strong>Starter</strong><p>
			<p><em>Starters</em> are potential methods for your players to discover the quest (or lists the main people interested in it).</p>
			<ol>
				<li v-for="n in nums.starter" :key="n">{{quests.getRandomStarter() | capitalize}}</li>
			</ol>
			<p><strong>Type</strong></p>
			<p><em>Type</em> determines what the quest will involve.</p>
			<ol>
				<li v-for="n in nums.type" :key="n">{{quests.getRandomType() | capitalize}}</li>
			</ol>
			<p><strong>Modifier</strong></p>
			<p><em>Modifiers</em> flavours the quest and determines any additional complications.</p>
			<ol>
				<li v-for="n in nums.modifier" :key="n">{{quests.getRandomModifier() | capitalize}}</li>
			</ol>
			<p><strong>Allies</strong></p>
			<p><em>Allies</em> want to see a quest succeed.</p>
			<ol>
				<li v-for="n in nums.ally" :key="n">{{quests.getRandomAlly() | capitalize}}</li>
			</ol>
			<p><strong>Antagonists</strong></p>
			<p><em>Antagonists</em> desire to see the quest fail.</p>
			<ol>
				<li v-for="n in nums.antagonist" :key="n">{{quests.getRandomAntagonist() | capitalize}}</li>
			</ol>
			<p><strong>Locations</strong></p>
			<p><em>Locations</em> are the main places where the quest should take place.</p>
			<ol>
				<li v-for="n in nums.location" :key="n">{{quests.getRandomLocation() | capitalize}}</li>
			</ol>
		</f7-block>
    <f7-block>
			<f7-button big fill color="blue" v-on:click="regenerate()"><f7-icon color="white" material="refresh"></f7-icon></f7-button>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
				quests: this.$bsFactory.getTemplate('quests'),
				nums: {
					starter: 1,
					type: 1,
					modifier: 1,
					ally: 1,
					antagonist: 1,
					location: 1
				}
			}
		},
    methods: {
			regenerate() {
				this.nums.starter = 0
				this.nums.type = 0
				this.nums.modifier = 0
				this.nums.ally = 0
				this.nums.antagonist = 0
				this.nums.location = 0
				this.nums.starter = Math.round(Math.random() * 3) + 1
				this.nums.type = Math.round(Math.random() * 2) + 1
				this.nums.modifier = Math.round(Math.random() * 3) + 1
				this.nums.ally = Math.round(Math.random() * 3) + 1
				this.nums.antagonist = Math.round(Math.random() * 3) + 1
				this.nums.location = Math.round(Math.random() * 3) + 1
      }
    }
	}
</script>