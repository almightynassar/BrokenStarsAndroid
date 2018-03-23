<template>
	<v-card flat>
    	<v-card-text>
			<v-form v-model="valid" ref="form">
				<v-text-field
					label="Name"
					v-model="power.name"
					:rules="rules.name"
					hint="The name of the power"
					required
				></v-text-field>
				<v-select
					label="Art"
					v-model="power.art"
					:items="artList"
					:rules="[v => !!v || 'Art is required']"
					:hint="powers.art[power.art].description"
					required
				></v-select>
				<v-select
					label="Art Specialisation"
					v-model="power.art_specialisation"
					:items="artSpecList"
					:rules="[v => !!v || 'Art Specialisation is required']"
					:hint="powers.art_specialisation[power.art_specialisation].description"
					required
				></v-select>
				<v-select
					label="Form"
					v-model="power.form"
					:items="formList"
					:rules="[v => !!v || 'Form is required']"
					:hint="powers.form[power.form].description"
					required
				></v-select>
				<v-select
					label="Form Specialisation"
					v-model="power.form_specialisation"
					:items="formSpecList"
					:rules="[v => !!v || 'Form Specialisation is required']"
					:hint="powers.form_specialisation[power.form_specialisation].description"
					required
				></v-select>
				<!-- <p>{{ powers.form[power.form][power.form_specialisation].description }}</p> -->
				<v-select
					label="Range"
					v-model="power.range"
					:items="rangeList"
					:rules="[v => !!v || 'Range is required']"
					hint="A power's range defines how far the caster needs to be"
					required
				></v-select>
				<p>{{ powers.attributes.range[power.range].description }}</p>
				<v-select
					label="Duration"
					v-model="power.duration"
					:items="durationList"
					:rules="[v => !!v || 'Duration is required']"
					hint="A power's duration defines how long the power lasts (but permanent effects can linger)"
					required
				></v-select>
				<p>{{ powers.attributes.duration[power.duration].description }}</p>
				<v-select
					label="Target"
					v-model="power.target"
					:items="targetList"
					:rules="[v => !!v || 'Target is required']"
					hint="A power's target defines how many objects or people it can affect"
					required
				></v-select>
				<p>{{ powers.attributes.target[power.target].description }}</p>
				<v-select
					label="Difficulty"
					v-model="power.difficulty"
					:items="difficultyList"
					:rules="[v => !!v || 'Difficulty is required']"
					hint="A power's difficulty defines how hard or complex the power is compared to others"
					required
				></v-select>
				<p>{{ powers.attributes.difficulty[power.difficulty].description }}</p>
				<v-text-field
					label="Description"
					v-model="power.description"
					multi-line
					textarea
				></v-text-field>
				<v-switch label="Spontaneous" v-model="spontaneous"></v-switch>
				<p><strong>Target Number: </strong>{{ powers.calculate(power, spontaneous) }}</p>
				<v-btn dark color="blue" @click="randomPower" :disabled="!valid">Random</v-btn>
				<v-btn dark color="green" @click="onClick" :disabled="!valid">Submit</v-btn>
			</v-form>
    	</v-card-text>
		<v-snackbar
      		:timeout="3000"
			color="error"
			:vertical="true"
			v-model="snackbar.error"
		>
			ERROR: Power could not be saved
			<v-btn flat @click.native="snackbar.error = false">Close</v-btn>
		</v-snackbar>
		<v-snackbar
			:timeout="3000"
			color="success"
			:vertical="true"
			v-model="snackbar.success"
		>
			Power was saved
			<v-btn flat @click.native="snackbar.success = false">Close</v-btn>
		</v-snackbar>
	</v-card>
</template>

<script>
	export default {
		data() {
			return {
				valid: false,
				names: this.$bsFactory.getNames(),
				spontaneous: false,
				power: {
                    name: "Test Power",
                    art: 'Control',
                    art_specialisation: 'Neglible',
                    form: 'Biological',
                    form_specialisation: 'Basic',
                    range: 'Personal',
                    duration: 'Instant',
                    target: 'Single',
					difficulty: 'Trivial',
					description: "Generic Description"
				},
				rules: {
					name: [
						(v) => !!v || 'Name is required',
						(v) => /[A-Za-z0-9. -,&%!()]+/.test(v) || 'Name must have at least one character (special characters allowed: .-,&%!() and space)'
					],
				},
				powers: this.$bsFactory.getTemplate('powers'),
				snackbar: {
					error: false,
					success: false
				},
			}
		},
		computed: {
			artList() {
				return _.keys(this.powers.art)
			},
			artSpecList() {
				return _.keys(this.powers.art_specialisation)
			},
			formList() {
				return _.keys(this.powers.form)
			},
			formSpecList() {
				return _.keys(this.powers.form_specialisation)
			},
			rangeList() {
				return _.keys(this.powers.attributes.range)
			},
			durationList() {
				return _.keys(this.powers.attributes.duration)
			},
			targetList() {
				return _.keys(this.powers.attributes.target)
			},
			difficultyList() {
				return _.keys(this.powers.attributes.difficulty)
			},
		},
		methods: {
			/**
			 * Randomises all of the fields of the power
			 */
			randomPower() {
				// Random Ship Name
				let nameKeys = _.keys(this.names)
				let nameRandom = (nameKeys.length * Math.random() << 0)
				this.power.name = this.names[ nameKeys[nameRandom] ].name()
				// Random Art and Specialisation
				this.power.art = this.artList[ this.artList.length * Math.random() << 0 ]
				this.power.art_specialisation = this.artSpecList[ this.artSpecList.length * Math.random() << 0 ]
				// Random Form and Specialisation
				this.power.form = this.formList[ this.formList.length * Math.random() << 0 ]
				this.power.form_specialisation = this.formSpecList[ this.formSpecList.length * Math.random() << 0 ]
				// Random attributes
				this.power.range = this.rangeList[ this.rangeList.length * Math.random() << 0 ]
				this.power.duration = this.durationList[ this.durationList.length * Math.random() << 0 ]
				this.power.target = this.targetList[ this.targetList.length * Math.random() << 0 ]
				this.power.difficulty = this.difficultyList[ this.difficultyList.length * Math.random() << 0 ]
			},
			/**
			 * Save the power
			 */
			onClick() {
				console.log( 'Saving power: ' + this.power.name )
				let store = this.$bsFactory.getStore('power')
          		let data = Object.assign({}, this.power)
				let resultSet = store.put(data);
				let self = this;
				resultSet.onsuccess = function() {
					self.snackbar.success = true
				};
				resultSet.onerror = function() {
					self.snackbar.error = true
				};
			}
		}
	}
</script>