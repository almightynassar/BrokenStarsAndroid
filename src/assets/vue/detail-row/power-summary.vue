<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div>
        <div><strong>Name</strong></div>
        <div class="pull-right bottom-border">{{ power.name }}</div>
      </div>
      <div>
        <div><strong>Description</strong></div>
        <div class="bottom-border">{{ power.description | capitalize }}</div>
      </div>
      <div>
        <div><strong>Art</strong></div>
        <div class="pull-right bottom-border">{{ power.art | capitalize}} ({{ power.art_specialisation | capitalize }})</div>
      </div>
      <div>
        <div><strong>Form</strong></div>
        <div class="pull-right bottom-border">{{ power.form | capitalize}} ({{ power.form_specialisation | capitalize }})</div>
      </div>
      <div>
        <div><strong>Range</strong></div>
        <div class="pull-right bottom-border">{{ power.range | capitalize }}</div>
      </div>
      <div>
        <div><strong>Target</strong></div>
        <div class="pull-right bottom-border">{{ power.target | capitalize }}</div>
      </div>
      <div>
        <div><strong>Duration</strong></div>
        <div class="pull-right bottom-border">{{ power.duration | capitalize }}</div>
      </div>
      <div>
        <div><strong>Difficulty</strong></div>
        <div class="pull-right bottom-border">{{ power.difficulty | capitalize }}</div>
      </div>
      <div>
        <div><strong>Mod:</strong></div>
        <div class="pull-right bottom-border">{{ powers.calculate(power, spontaneous) }}</div>
      </div>
      <div>
        <div><strong>Defence:</strong></div>
        <div class="pull-right bottom-border">{{ power.defence }}</div>
      </div>
      <v-switch label="Spontaneous" v-model="spontaneous"></v-switch>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      power: {
        type: Object,
        required: true
      }
    },
    data() {
        return {
            spontaneous: false,
            powers: this.$bsFactory.getTemplate('powers'),
	    }
    }
  }
</script>
