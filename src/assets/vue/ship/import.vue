<template>
	<v-card flat>
    	<v-card-text>
			<v-text-field
				v-model="textual"
				multi-line
				textarea
			></v-text-field>
			<!-- <textarea style="height: 50vh;" v-model="textual"></textarea> -->
			<v-btn dark color="blue" @click="importShip">Import</v-btn>
    	</v-card-text>
		<v-snackbar
      		:timeout="3000"
			color="error"
			:vertical="true"
			v-model="snackbar.error"
		>
			ERROR: Ship could not be imported
			<v-btn flat @click.native="snackbar.error = false">Close</v-btn>
		</v-snackbar>
		<v-snackbar
			:timeout="3000"
			color="success"
			:vertical="true"
			v-model="snackbar.success"
		>
			Ship was imported
			<v-btn flat @click.native="snackbar.success = false">Close</v-btn>
		</v-snackbar>
	</v-card>
</template>

<script>
	export default {
		data() {
			return {
				textual: "",
				ship: this.$bsFactory.cloneShip(),
				snackbar: {
					error: false,
					success: false
				},
			}
		},
		computed: {
			hydratedText() {
				return JSON.parse(this.textual)
			}
		},
		methods: {
			importShip() {
				this.ship.hydrate(this.hydratedText)
				console.log( 'Importing ship: ' + this.ship.uuid )
				let store = this.$bsFactory.getShipStore()
          		let data = this.ship.deflate()
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

