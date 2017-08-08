<template>
	<f7-page>
		<f7-block-title>Name Generator</f7-block-title>
		<f7-list form>
			<!-- Name Lists -->
			<f7-list-item>
				<f7-label><strong>Name List</strong></f7-label>
				<f7-input type="select" v-model="selected">
					<option v-for="(n,i) in names" :value="i" :key="'names-' + i">{{i[0].toUpperCase() + i.slice(1).replace("_", " ")}}</option>
				</f7-input>
			</f7-list-item>
      <f7-list-item>
				<p>{{randomName()}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{randomName()}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{randomName()}}</p>
			</f7-list-item>
      <f7-list-item>
				<p>{{randomName()}}</p>
			</f7-list-item>
		</f7-list>
    <f7-block>
			<f7-button big fill color="blue" v-on:click="toggled = !toggled"><i class="material-icons color-white">refresh</i></f7-button>
		</f7-block>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
        names: this.$bsFactory.getNames(),
        selected: null,
        toggled: false
			}
    },
    methods: {
      randomName() {
        if (this.selected !== null) {
          return this.names[this.selected].name();
        }
        return "-";
      }
    }
	}
</script>