<template>
	<f7-block>
		<f7-block-title>Import Ship</f7-block-title>
		<textarea v-model="textual"></textarea>
		<f7-buttons>
			<f7-button big fill color="blue" v-on:click="importShip">Import</f7-button>
		</f7-buttons>
	</f7-block>
</template>

<script>
	export default {
		data() {
			return {
				textual: "",
				ship: this.$bsFactory.cloneShip(),
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
				let saved = this.$bsFactory.saveShip(this.ship)
				if (saved === 2) {
					this.$f7.alert(this.ship.name+" has been added")
				} else if (saved === 1) {
					this.$f7.alert(this.ship.name+" has been updated")
				} else {
					this.$f7.alert("ERROR: "+this.ship.name+" could not be saved")
				}
			}
		}
	}
</script>

