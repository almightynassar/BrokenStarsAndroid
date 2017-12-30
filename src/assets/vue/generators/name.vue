<template>
	<f7-page>
		<f7-block>
			<f7-block-title class="content-center-text bottom-border small-caps">Name Generator</f7-block-title>
			<f7-block inset form>
				<p><em>The name list allows the generator to create <strong>nonsense</strong> names that follow a similar structure as the input name list. The output names are not representative of the culture of the input list.</em></p>
				<!-- Select with values inside -->
				<select v-model="selected" v-on:change="makeNames">
					<option v-for="(n,i) in names" :value="i" :key="'names-' + i">{{ i.replace(/_/g, " ") | capitalize }}</option>
				</select>
				<p v-show="this.selected !== null">
					<em>{{description}} Uses a total of {{total}} names, with an average length of {{length}} letters.</em>
				</p>
				<p v-for="g in gNames" :key="g">{{g}}</p>
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
			gNames: [
				"-",
				"-",
				"-",
				"-"
			]
		}
	},
	computed: {
		description() {
			if (this.selected !== null) {
				return this.names[this.selected].description;
			}
			return '';
		},
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
				this.gNames[0] = this.names[this.selected].name();
				this.gNames[1] = this.names[this.selected].name();
				this.gNames[2] = this.names[this.selected].name();
				this.gNames[3] = this.names[this.selected].name();
			}
			this.gNames.sort()
      	}
    }
}
</script>