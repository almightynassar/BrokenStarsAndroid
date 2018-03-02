<template>
	<v-card flat>
    	<v-card-text>
			<v-form v-model="valid" ref="form" lazy-validation>
				<p><em>The name list allows the generator to create <strong>nonsense</strong> names that follow a similar structure as the input name list. The output names are not representative of the culture of the input list.</em></p>
				<v-select
					label="Name List"
					v-model="selected"
					:items="mappedNames"
					item-value="value"
					item-text="text"
					:rules="[v => !!v || 'Name List is required']"
					@input="makeNames"
					required
				></v-select>
				<p v-show="this.selected !== null">
					<em>{{description}}</em>
				</p>
				<p v-show="this.selected !== null">
					<em>Uses a total of {{total}} names, with an average length of {{length}} letters.</em>
				</p>
				<p v-for="(g,i) in gNames" :key="i">{{g}}</p>
				<v-btn color="blue" @click="makeNames"><v-icon color="white">refresh</v-icon></v-btn>
			</v-form>
    	</v-card-text>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			valid: false,
        	names: this.$bsFactory.getNames(),
        	selected: 'altmer_female',
			gNames: [
				"-",
				"-",
				"-",
				"-"
			]
		}
	},
	computed: {
		mappedNames() {
			return _.map(this.names, function(value, key) {
				return {
					value: key,
					text: key.replace(/_/g, " ")
				}
			});
		},
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