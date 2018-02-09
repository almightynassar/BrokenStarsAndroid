<template>
  <v-tooltip v-model="show" right>
    <v-btn icon slot="activator">
      <v-icon color="blue">help</v-icon>
    </v-btn>
    <span v-if="help == 'ai-actions'">Tells you how many actions your ship's AI can take per round. This does not include any dedicated automation systems; you can use those systems seperately.</span>
    <span v-if="help == 'ai'">The <strong>AI</strong> attribute represents the quality of your ship's AI. It determines the upper limit of your sub-systems, costing you more when your sub-system value exceeds your AI value. It also determines how many actions your AI can take per round.</span>
    <span v-if="help == 'armour'">The <strong>Armour</strong> attribute determines your ship's <strong>Toughness</strong> target number, which protects you from damage and <strong>Integrity</strong> loss. It also helps calculate the number of available weapon <strong>Hardpoints</strong>.</span>
    <span v-if="help == 'autopilot'">The <strong>Autopilot</strong> sub-system allows your AI to control your ship when you do not have a pilot. It is used to calculate your ship's default <strong>Evade</strong> (or your enemy's target number to hit you with a weapon).</span>
    <span v-if="help == 'breech'">After the enemy has hit you with their weapon, they roll for damage. <strong>Toughness</strong> represents the target number the damage must exceed before <strong>Integrity</strong> loss or <strong>Shaken</strong> occurs.</span>
    <span v-if="help == 'bulk'">The <strong>Bulk</strong> attribute represents how much extra space your spacecraft has (while maintaining it's original hull type). This determines how many fittings you can install, or cargo you can carry.</span>
    <span v-if="help == 'cost'">The base price for the vessel (not including transaction fees, taxes and other incurred costs).</span>
    <span v-if="help == 'crew'">The amount of crew this spacecraft can support. You can increase this number by installing more quarters or barracks.</span>
    <span v-if="help == 'designation'">The designation is a unique manufactorer's code that uniquely identifies the spacecraft. It is shared with all civilised planets and is used by law enforcement to track criminals.</span>
    <span v-if="help == 'ecm'">The <strong>ECM</strong> (Electronic Counter-Measures) sub-system allows your AI to use equipment and devices that confuse enemies' sensors and targeting systems. This does not affect weapons fire that has already been taken (with the exception of missiles).</span>
    <span v-if="help == 'engine'">The <strong>Engine</strong> attribute represents the effectiveness and efficiency of your propulsion systems, thrusters, and FTL drive.</span>
    <span v-if="help == 'evade'">Your <strong>Evade</strong> determines your AI's ability to avoid being locked on by the enemy's targeting system. This value is only used if you currently do not have a pilot (instead use half their piloting skill, and then add two).</span>
    <span v-if="help == 'fuel'">The amount of fuel your ship will use per FTL jump.</span>
    <span v-if="help == 'hardpoints-used'">The amount of hardpoint mounts used.</span>
    <span v-if="help == 'hardpoints'"><strong>Hardpoints</strong> are special hull mounts that allow you to place weapons or other defensive structures.</span>
    <span v-if="help == 'hull'"><strong>Hull types</strong> are the standardised vessel classification of civilised systems. A Hull type determines some default factors such as storage, power, and hardpoints.</span>
    <span v-if="help == 'integrity'"><strong>Integrity</strong> represents how much damage the spacecraft can take and still fly. Total loss of Integrity means that the ship must be abandoned.</span>
    <span v-if="help == 'navigation'">The <strong>Navigation</strong> sub-system allows your AI to plan safe FTL Jump routes, and navigate difficult areas (such as asteroid fields or high gravity wells). During FTL travel, every success and raise on your Navigation roll shaves off 1 day and 1 unit of fuel.</span>
    <span v-if="help == 'operations'">The <strong>Operations</strong> sub-system allows your AI to control all other equipment and devices not covered by other sub-systems (such as the factory or med-bay).</span>
    <span v-if="help == 'points'">An abstract representation of the quality of your ship (the higher the better).</span>
    <span v-if="help == 'power-total'">The total amount of power available for ship fittings and weapons.</span>
    <span v-if="help == 'power-used'">The amount of power that is actively used for weapons and fittings.</span>
    <span v-if="help == 'power'">The <strong>Power</strong> attribute represents the effectiveness and efficiency of your power core (which uses some form of renewable energy).</span>
    <span v-if="help == 'rank'">An abstract classification of the quality of your ship compared to others in it's class.</span>
    <span v-if="help == 'repair'">The <strong>Repair</strong> sub-system allows your AI to use equipment and devices to repair other electronic and mechanical devices. It can also be used to perform limited self-repair to regain <strong>Integrity</strong> loss.</span>
    <span v-if="help == 'sensors'">The <strong>Sensors</strong> sub-system allows your AI to use the on-board sensor array to detect other objects (including enemies, weapons ordanance and space debris). No special equipment is required to perform this function. Sensors can also be used to provide targeting data during combat, giving a bonus to Weapons.</span>
    <span v-if="help == 'size'">The <strong>Size</strong> modifier represents the relative size of your spacecraft.</span>
    <span v-if="help == 'speed'"><strong>Speed</strong> represents how many grid spaces your spacecraft can move during 1 round. To convert, 1 spaceship grid space is equal to 5 character grid spaces (1 character grid space is a 1.5 m x 1.5 m, or 5 feet).</span>
    <span v-if="help == 'storage-total'">The total amount of space to be used on your spacecraft. 1 space is a 5m x 5m cube. When empty, a free space can support up to 100 metric tons of cargo.</span>
    <span v-if="help == 'storage-used'">The amount of space currently used for fittings and weapons.</span>
    <span v-if="help == 'weapons'">The <strong>Weapons</strong> sub-system allows your AI to use ship-mounted weapons and targeting systems.</span>
  </v-tooltip>
</template>
<script>
export default {
  props: {
    help: {
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