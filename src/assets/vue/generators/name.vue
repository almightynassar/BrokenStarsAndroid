<template>
	<f7-page>
		<f7-block>
			<f7-block-title>Name Generator</f7-block-title>
			<f7-block inset form>
				<!-- Select with values inside -->
				<select v-model="selected" v-on:change="makeNames">
					<option v-for="(n,i) in names" :value="i" :key="'names-' + i">{{i[0].toUpperCase() + i.slice(1).replace(/_/g, " ")}}</option>
				</select>
				<p v-show="this.selected !== null">
					<p><em>Based on {{total}} names, with an average length of {{length}} letters.</em></p>
				</p>
				<p>
					<p>{{gName0}}</p>
				</p>
				<p>
					<p>{{gName1}}</p>
				</p>
				<p>
					<p>{{gName2}}</p>
				</p>
				<p>
					<p>{{gName3}}</p>
				</p>
				<f7-block>
					<f7-button big fill color="blue" v-on:click="makeNames"><f7-icon color="white" material="refresh"></f7-icon></f7-button>
				</f7-block>
			</f7-block>
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