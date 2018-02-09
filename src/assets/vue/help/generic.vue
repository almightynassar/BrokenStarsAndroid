<template>
  <v-tooltip v-model="show" right>
    <v-btn icon slot="activator">
      <v-icon color="blue">help</v-icon>
    </v-btn>
    <span>
      <slot></slot>
    </span>
  </v-tooltip>
</template>
<script>
export default {
  props: {
    popover: {
        type: String,
        required: true
      },
  },
  data() {
    return {
      show: false
    }
  }
}
</script>