<template>
  <dl>
    <dt><strong>Name</strong></dt>
    <dd class="bottom-border">{{ rowData.name }}</dd>
    <dt><strong>Storage</strong></dt>
    <dd class="bottom-border">{{ rowData.storage }}</dd>
    <dt><strong>Power</strong></dt>
    <dd class="bottom-border">{{ rowData.power }}</dd>
    <dt><strong>Damage</strong></dt>
    <dd class="bottom-border">{{ rowData.damage }}</dd>
    <dt><strong>Range</strong></dt>
    <dd class="bottom-border">{{ rowData.range }}/{{rowData.range*2}}/{{(rowData.range*2)*2}}</dd>
    <dt><strong>Rate of Fire</strong></dt>
    <dd class="bottom-border">{{ rowData.rof }}</dd>
    <dt><strong>Hardpoints</strong></dt>
    <dd class="bottom-border">{{ rowData.hardpoints }}</dd>
    <dt><strong>Cost</strong></dt>
    <dd class="bottom-border">{{ formatNumber( rowData.cost ) }}</dd>
    <dt><strong>Description</strong></dt>
    <dd class="bottom-border">{{ rowData.description }}</dd>
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
