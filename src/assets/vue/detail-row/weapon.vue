<template>
  <dl>
    <dt><strong>Name</strong></dt>
    <dd>{{ rowData.name }}</dd>
    <dt><strong>Storage</strong></dt>
    <dd>{{ rowData.storage }}</dd>
    <dt><strong>Power</strong></dt>
    <dd>{{ rowData.power }}</dd>
    <dt><strong>Damage</strong></dt>
    <dd>{{ rowData.damage }}</dd>
    <dt><strong>Range</strong></dt>
    <dd>{{ rowData.range }}/{{rowData.range*2}}/{{(rowData.range*2)*2}}</dd>
    <dt><strong>Rate of Fire</strong></dt>
    <dd>{{ rowData.rof }}</dd>
    <dt><strong>Hardpoints</strong></dt>
    <dd>{{ rowData.hardpoints }}</dd>
    <dt><strong>Cost</strong></dt>
    <dd>{{ formatNumber( rowData.cost ) }}</dd>
    <dt><strong>Description</strong></dt>
    <dd>{{ rowData.description }}</dd>
  </dl>
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
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      }
		}
  }
</script>
