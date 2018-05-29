<template>
	<v-card flat>
    	<v-card-text>
			<v-form v-model="valid" ref="form" lazy-validation>
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
				<v-switch
					:label="`${switcher ? 'Randomise' : 'Normal'}`"
					v-model="switcher"
				></v-switch>
				<p v-show="this.switcher">
					<em>Generates <strong>nonsense</strong> names that can sound like it came from the name list. The output names are <strong>not</strong> representative of the culture of the input list.</em>
				</p>
				<p v-show="!this.switcher">
					<em>Returns a names from the name list. This can be limited, and if you want some variety you should turn the randomise function on.</em>
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
			],
			switcher: true
		}
	},
	computed: {
		mappedNames() {
			return _.map(this.names, function(value, key) {
				return {
					value: key,
					text: 	key.replace(/_/g, " ").replace(/\w\S*/g, function(txt){
								return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
							})
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
				if (this.switcher) {
					this.gNames[0] = this.names[this.selected].name()
					this.gNames[1] = this.names[this.selected].name()
					this.gNames[2] = this.names[this.selected].name()
					this.gNames[3] = this.names[this.selected].name()
				} else {
					this.gNames[0] = this.names[this.selected].fromList()
					this.gNames[1] = this.names[this.selected].fromList()
					this.gNames[2] = this.names[this.selected].fromList()
					this.gNames[3] = this.names[this.selected].fromList()
				}
			}
			this.gNames.sort()
      	}
    }
}
</script>