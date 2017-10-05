<template>
	<f7-page>
		<f7-block-title>Name Generator</f7-block-title>
		<f7-list form>
			<!-- Name Lists -->
			<f7-list-item>
				<f7-label><strong>Name List</strong></f7-label>
				<f7-input type="select" v-model="selected" v-on:change="makeNames">
					<option v-for="(n,i) in names" :value="i" :key="'names-' + i">{{i[0].toUpperCase() + i.slice(1).replace(/_/g, " ")}}</option>
				</f7-input>
			</f7-list-item>
			<f7-list-item v-show="this.selected !== null">
				<p><em>Based on {{total}} names, with an average length of {{length}} letters.</em></p>
			</f7-list-item>
      <f7-list-item>
				<p>{{gName0}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{gName1}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{gName2}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{gName3}}</p>
			</f7-list-item>
		</f7-list>
    <f7-block>
			<f7-button big fill color="blue" v-on:click="makeNames"><f7-icon color="white" material="refresh"></f7-icon></f7-button>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
        names: this.$bsFactory.getNames(),
        selected: null,
				gName0: "-",
				gName1: "-",
				gName2: "-",
				gName3: "-"
			}
		},
		computed: {
			total() {
				if (this.selected !== null) {
					return this.names[this.selected].word_count;
				}
				return 0;
			},
			length() {
				if (this.selected !== null) {
					return this.names[this.selected].average_length;
				}
				return 0;
			}
		},
    methods: {
			makeNames() {
        if (this.selected !== null) {
					this.gName0 = this.names[this.selected].name();
					this.gName1 = this.names[this.selected].name();
					this.gName2 = this.names[this.selected].name();
					this.gName3 = this.names[this.selected].name();
				}
      }
    }
	}
</script>