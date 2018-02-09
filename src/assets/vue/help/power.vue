<template>
  <v-tooltip v-model="show" right>
    <v-btn icon slot="activator">
      <v-icon color="blue">help</v-icon>
    </v-btn>
    <span v-if="help == 'art'">The <strong>Art</strong> is the intent of the power.</span>
    <span v-if="help == 'art-special'">The <strong>Art Specialisation</strong> helps describe what you want to do in the art.</span>
    <span v-if="help == 'form'">The <strong>Form</strong> is the target type of the power.</span>
    <span v-if="help == 'form-special'">The <strong>Form Specialisation</strong> describes the target of the power.</span>
  </v-tooltip>
</template>
<script>
export default {
  props: {
    help: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>