<template>
  <v-tooltip v-model="show" right>
    <v-btn icon slot="activator">
      <v-icon color="blue">help</v-icon>
    </v-btn>
    <span v-if="help == 'size-class'">A star's size classification is a roman numeral from I to V (using Yerkes classification). It's size is also relative to it's brightness.</span>
    <span v-if="help == 'star-class'">The Stellar classification of the sector's star (using the Harvard spectral classification)</span>
    <span v-if="help == 'temperature-class'">A star's temperature classification is a number from 0 to 9, where 0 is the hottest in class and 9 is the coolest.</span>
    <span v-if="help == 'luminosity'">A star's luminosity is measured in Watts, and represents how much energy the star is producing.</span>
    <span v-if="help == 'star'">Stars are one of the most interesting stellar phenomena to visit (alonside Black Holes, Pulsars, and Neutron Stars)</span>
  </v-tooltip>
</template>
<script>
export default {
  props: {
    help: {
      type: String,
      default: "star"
    }
  }
}
</script>