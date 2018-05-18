<template>
  <v-tooltip v-model="show" right>
    <v-btn icon slot="activator">
      <v-icon color="blue">help</v-icon>
    </v-btn>
    <span v-if="help == 'source'"><strong>Sources</strong> are methods by which the player characters find out about the quest.</span>
    <span v-if="help == 'location'"><strong>Locations</strong>  are the main places where the quest should take place.</span>
    <span v-if="help == 'other'"><strong>Others</strong> are individuals that are involved or linked somehow, but do not have personal stake in the quest's resolution. They can be swayed by either side, or stay completely out of it.</span>
    <span v-if="help == 'faction'"><strong>Factions</strong> are potential groups that your players will come across during the quest. They may be antagonists or allies.</span>
    <span v-if="help == 'type'"><strong>Types</strong> are potential quest lines, problems and other issues that the player has to overcome.</span>
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