<template>
	<f7-block form>
		<f7-block-title class="content-center-text bottom-border small-caps">Power Builder</f7-block-title>
		<div class="data-table custom-table">
			<table>
				<tr>
					<td><strong>Name</strong></td>
					<td><input type="text" v-model="power.name" /></td>
				</tr>
				<tr>
					<td><strong>Target Defence</strong></td>
					<td><input type="number" v-model="defence" /></td>
				</tr>
				<tr>
					<td><strong>Art</strong> <help-power-art></help-power-art></td>
					<td>
						<select v-model="power.art" @change="reset('art')">
							<option v-for="(n,i) in powers.art" :value="i" :key="'art-' + i">{{ i | capitalize }}</option>
						</select>
					</td>
				</tr>
                <tr>
					<td><strong>Art Specialisation</strong> <help-power-art-special></help-power-art-special></td>
					<td>
						<select v-model="power.art_specialisation">
							<option v-for="(n,i) in powers.art[power.art]" :value="i" :key="'art-special-' + i">{{ n.name | capitalize }} ({{ n.base }})</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="2">{{ powers.art[power.art][power.art_specialisation].description}}</td>
				</tr>
				<tr>
					<td><strong>Form</strong> <help-power-form></help-power-form></td>
					<td>
						<select v-model="power.form" @change="reset('form')">
							<option v-for="(n,i) in powers.form" :value="i" :key="'form-' + i">{{ i | capitalize }}</option>
						</select>
					</td>
				</tr>
                <tr>
					<td><strong>Form Specialisation</strong> <help-power-form-special></help-power-form-special></td>
					<td>
						<select v-model="power.form_specialisation">
							<option v-for="(n,i) in powers.form[power.form]" :value="i" :key="'form-special-' + i">{{ n.name | capitalize }} ({{ n.base }})</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="2">{{ powers.form[power.form][power.form_specialisation].description}}</td>
				</tr>
				<tr>
					<td><strong>Range</strong></td>
					<td>
						<select v-model="power.range">
							<option v-for="(n,i) in powers.attributes.range" :value="i" :key="'range-' + i">{{ n.name | capitalize }} ({{ n.base }})</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="2">{{ powers.attributes.range[power.range].description}}</td>
				</tr>
				<tr>
					<td><strong>Duration</strong></td>
					<td>
						<select v-model="power.duration">
							<option v-for="(n,i) in powers.attributes.duration" :value="i" :key="'duration-' + i">{{ n.name | capitalize }} ({{ n.base }})</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="2">{{ powers.attributes.duration[power.duration].description}}</td>
				</tr>
				<tr>
					<td><strong>Target</strong></td>
					<td>
						<select v-model="power.target">
							<option v-for="(n,i) in powers.attributes.target" :value="i" :key="'target-' + i">{{ n.name | capitalize }} ({{ n.base }})</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="2">{{ powers.attributes.target[power.target].description}}</td>
				</tr>
				<tr>
					<td><strong>Difficulty</strong></td>
					<td>
						<select v-model="power.difficulty">
							<option v-for="(n,i) in powers.attributes.difficulty" :value="i" :key="'difficulty-' + i">{{ n.name | capitalize }} ({{ n.base }})</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="2">{{ powers.attributes.difficulty[power.difficulty].description}}</td>
				</tr>
				<tr>
					<td><strong>Prepared / Spontaneous</strong></td>
					<td>
						<select v-model="spontaneous">
							<option :value="true" key="spontaneous">Spontaneous (2)</option>
							<option :value="false" key="prepared">Prepared (0)</option>
						</select>
					</td>
				</tr>
			</table>
		</div>
		<p><strong>Target Number: </strong>{{ powers.calculate(power, defence, spontaneous) }}</p>
		<f7-buttons>
			<f7-button big fill color="blue" v-on:click="randomPower">Random</f7-button>
			<f7-button big fill color="green" v-on:click="onClick">Submit</f7-button>
		</f7-buttons>
	</f7-block>
</template>

<script>
	export default {
		data() {
			return {
				names: this.$bsFactory.getNames(),
				defence: 4,
				spontaneous: false,
				power: {
                    name: "Test Power",
                    art: "control",
                    art_specialisation: 0,
                    form: "biological",
                    form_specialisation: 0,
                    range: 0,
                    duration: 0,
                    target: 0,
					difficulty: 0
                },
				powers: this.$bsFactory.getTemplate('powers'),
			}
		},
		methods: {
			/**
			 * Randomises all of the fields of the power
			 */
			randomPower() {
				// Random Ship Name
				let nameKeys = Object.keys(this.names)
				let nameRandom = (nameKeys.length * Math.random() << 0)
				this.power.name = this.names[ nameKeys[nameRandom] ].name()
				// Random Art and Specialisation
				let artList = _.keys(this.powers.art)
				this.power.art = artList[ artList.length * Math.random() << 0]
				this.power.art_specialisation = this.powers.art[this.power.art].length * Math.random() << 0
				// Random Form and Specialisation
				let formList = _.keys(this.powers.form)
				this.power.form = formList[ formList.length * Math.random() << 0]
				this.power.form_specialisation = this.powers.form[this.power.form].length * Math.random() << 0
				// Random attributes
				this.power.range = this.powers.attributes.range.length * Math.random() << 0
				this.power.duration = this.powers.attributes.duration.length * Math.random() << 0
				this.power.target = this.powers.attributes.target.length * Math.random() << 0
				this.power.difficulty = this.powers.attributes.difficulty.length * Math.random() << 0
			},
			/**
			 * Resets the specialisation
			 */
			reset(type) {
				if (type === 'art') {
					this.power.art_specialisation = 0
				} else if (type === 'form') {
					this.power.form_specialisation = 0
				}
			},
			/**
			 * Save the power
			 */
			onClick() {
				console.log( 'Saving power: ' + this.power.name )
				let store = this.$bsFactory.getPowerStore()
          		let data = Object.assign({}, this.power)
				let resultSet = store.put(data);
				let self = this;
				resultSet.onsuccess = function() {
					self.$f7.alert(self.power.name+" has been saved")
				};
				resultSet.onerror = function() {
					self.$f7.alert("ERROR: "+self.power.name+" could not be saved")
				};
			},
		}
	}
</script>