<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div>
        <div><strong>Name</strong></div>
        <div class="pull-right">{{ power.name }}</div>
      </div>
      <div>
        <div><strong>Description</strong></div>
        <div>{{ power.description | capitalize }}</div>
      </div>
      <div>
        <div><strong>Art</strong></div>
        <div class="pull-right">{{ power.art | capitalize}} ({{ power.art_specialisation | capitalize }})</div>
      </div>
      <div>
        <div><strong>Form</strong></div>
        <div class="pull-right">{{ power.form | capitalize}} ({{ power.form_specialisation | capitalize }})</div>
      </div>
      <div>
        <div><strong>Range</strong></div>
        <div class="pull-right">{{ power.range | capitalize }}</div>
      </div>
      <div>
        <div><strong>Target</strong></div>
        <div class="pull-right">{{ power.target | capitalize }}</div>
      </div>
      <div>
        <div><strong>Duration</strong></div>
        <div class="pull-right">{{ power.duration | capitalize }}</div>
      </div>
      <div>
        <div><strong>Difficulty</strong></div>
        <div class="pull-right">{{ power.difficulty | capitalize }}</div>
      </div>
      <v-switch label="Spontaneous" v-model="spontaneous"></v-switch>
      <div>
        <span><strong>Target Number:</strong></span>
        <span class="pull-right">{{ powers.calculate(power, spontaneous) }}</span>
      </div>
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
