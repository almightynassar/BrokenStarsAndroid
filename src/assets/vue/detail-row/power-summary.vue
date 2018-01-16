<template>
  <div>
    <div class="bottom-border">
      <div><strong>Name</strong></div>
      <div class="pull-right">{{ rowData.name }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Art</strong></div>
      <div class="pull-right">{{ rowData.art | capitalize}} ({{ powers.art[rowData.art][rowData.art_specialisation].name | capitalize }})</div>
    </div>
    <div class="bottom-border">
      <div><strong>Form</strong></div>
      <div class="pull-right">{{ rowData.form | capitalize}} ({{ powers.form[rowData.form][rowData.form_specialisation].name | capitalize }})</div>
    </div>
    <div class="bottom-border">
      <div><strong>Range</strong></div>
      <div class="pull-right">{{ powers.attributes.range[rowData.range].name | capitalize }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Target</strong></div>
      <div class="pull-right">{{ powers.attributes.target[rowData.target].name | capitalize }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Duration</strong></div>
      <div class="pull-right">{{ powers.attributes.duration[rowData.duration].name | capitalize }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Difficulty</strong></div>
      <div class="pull-right">{{ powers.attributes.difficulty[rowData.difficulty].name | capitalize }}</div>
    </div>
    <div class="bottom-border">
      <div><strong>Defence</strong></div>
      <div class="pull-right"><input type="number" v-model="defence" /></div>
    </div>
    <div class="bottom-border">
      <div><strong>Spotaneous?</strong></div>
      <div class="pull-right">
            <select v-model="spontaneous">
                <option :value="true" key="spontaneous">Spontaneous (2)</option>
                <option :value="false" key="prepared">Prepared (0)</option>
            </select>
      </div>
    </div>
    <div class="bottom-border">
      <div><strong>Target Number</strong></div>
      <div class="pull-right">{{ powers.calculate(rowData, defence, spontaneous) }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      },
    },
    data() {
        return {
            defence: 4,
            spontaneous: false,
            powers: this.$bsFactory.getTemplate('powers'),
	    }
    }
  }
</script>
