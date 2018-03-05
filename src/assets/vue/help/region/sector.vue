<template>
  <v-tooltip v-model="show" right>
    <v-btn icon slot="activator">
      <v-icon color="blue">help</v-icon>
    </v-btn>
    <span v-if="help == 'control'">Identifies the governing entity of the star system.</span>
    <span v-if="help == 'trade'">Allows merchants to easily identify potential profitable routes (or routes with low competition).</span>
    <span v-if="help == 'zone'">Allows travellers and merchants to easily identify their level of risk when travelling to a sector.</span>
    <span v-if="help == 'sector'">Stars are one of the most interesting stellar phenomena to visit (alonside Black Holes, Pulsars, and Neutron Stars)</span>
  </v-tooltip>
</template>
<script>
export default {
  props: {
    help: {
      type: String,
      default: "sector"
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>