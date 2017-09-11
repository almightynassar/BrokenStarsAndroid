<template>
  <dl>
    <dt><strong>Size</strong></dt>
    <dd>{{ rowData.getSize() }}</dd>
    <dt><strong>Integrity</strong></dt>
    <dd>{{ rowData.getIntegrity() }}</dd>
    <dt><strong>Toughness</strong></dt>
    <dd>{{ rowData.getToughness() }}</dd>
    <dt><strong>Crew</strong></dt>
    <dd>{{ rowData.getCrew() }}</dd>
    <dt><strong>Power</strong></dt>
    <dd>{{ rowData.getPower() }}</dd>
    <dt><strong>Storage</strong></dt>
    <dd>{{ rowData.getBulk() }}</dd>
    <dt><strong>Speed</strong></dt>
    <dd>{{ rowData.getAcceleration() }}</dd>
    <dt><strong>FTL per jump</strong></dt>
    <dd>{{ rowData.getFTL() }}</dd>
    <dt><strong>Hardpoints</strong></dt>
    <dd>{{ rowData.getHardpoints() }}</dd>
    <dt><strong>Cost</strong></dt>
    <dd>{{ formatNumber( rowData.getCost() ) }}</dd>
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
