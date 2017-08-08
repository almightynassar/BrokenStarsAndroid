<template>
	<f7-page>
		<f7-block-title>Name Generator</f7-block-title>
		<f7-list form>
			<!-- Name Lists -->
			<f7-list-item>
				<f7-label><strong>Name List</strong></f7-label>
				<f7-input type="select" v-model="selected">
					<option v-for="(n,i) in names" :value="i" :key="'names-' + i">{{i}}</option>
				</f7-input>
			</f7-list-item>
      <f7-list-item>
				<p>{{randomName1}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{randomName2}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{randomName3}}</p>
			</f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
        names: this.$bsFactory.getNames(),
        selected: null
			}
    },
    computed: {
      randomName1() {
        if (this.selected !== null) {
          return this.names[this.selected].name()
        }
        return "Please select a name list"
      },
      randomName2() {
        if (this.selected !== null) {
          return this.names[this.selected].name();
        }
        return "Please select a name list";
      },
      randomName3() {
        if (this.selected !== null) {
          return this.names[this.selected].name();
        }
        return "Please select a name list";
      }
    }
	}
</script>