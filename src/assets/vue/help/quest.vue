<template>
  <v-tooltip v-model="show" right>
    <v-btn icon slot="activator">
      <v-icon color="blue">help</v-icon>
    </v-btn>
    <span v-if="help == 'antagonist'"><strong>Antagonists</strong> either want to see the party fail, or have different designs on the quest. They are the main opposition for the party.</span>
    <span v-if="help == 'location'"><strong>Locations</strong>  are the main places where the quest should take place.</span>
    <span v-if="help == 'nuetral'"><strong>Neutrals</strong> are involved or linked somehow, but do not have personal stake in it's resolution. They can be swayed by either side, or stay completely out of it.</span>
    <span v-if="help == 'starter'"><strong>Starters</strong> are potential methods for your players to discover the quest (or lists the main people interested in it)</span>
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