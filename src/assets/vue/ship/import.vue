<template>
	<f7-block inset>
		<f7-block-title class="content-center-text bottom-border small-caps">Import Ship</f7-block-title>
		<textarea style="height: 50vh;" v-model="textual"></textarea>
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
				console.log( 'Importing ship: ' + this.ship.uuid )
				let store = this.$bsFactory.getShipStore()
          		let data = this.ship.deflate()
				let resultSet = store.put(data);
				let self = this;
				resultSet.onsuccess = function() {
					self.$f7.alert(self.ship.name+" has been imported")
				};
				resultSet.onerror = function() {
					self.$f7.alert("ERROR: "+self.ship.name+" could not be imported")
				};
			}
		}
	}
</script>

