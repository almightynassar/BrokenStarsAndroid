<template>
  <dl>
    <dt><strong>Hull</strong></dt>
    <dd>{{ rowData.getHull() }}</dd>
    <dt><strong>Size</strong> <help-size></help-size></dt>
    <dd>{{ rowData.getSize() }}</dd>
    <dt><strong>Integrity</strong> <help-integrity></help-integrity></dt>
    <dd>{{ rowData.getIntegrity() }}</dd>
    <dt><strong>Toughness</strong></dt>
    <dd>{{ rowData.getToughness() }}</dd>
    <dt><strong>Crew</strong>  <help-crew></help-crew></dt>
    <dd>{{ rowData.getCrew() }}</dd>
    <dt><strong>Power</strong> <help-power-total></help-power-total></dt>
    <dd>{{ rowData.getPower() }}</dd>
    <dt><strong>Storage</strong> <help-storage-total></help-storage-total></dt>
    <dd>{{ rowData.getBulk() }}</dd>
    <dt><strong>Cargo Capacity</strong> <help-storage-total></help-storage-total></dt>
    <dd>{{ rowData.getBulk() * 100 }} tons</dd>
    <dt><strong>Speed</strong> <help-speed></help-speed></dt>
    <dd>{{ rowData.getAcceleration() }}</dd>
    <dt><strong>FTL per jump</strong> <help-fuel></help-fuel></dt>
    <dd>{{ rowData.getFTL() }}</dd>
    <dt><strong>Hardpoints</strong> <help-hardpoints></help-hardpoints></dt>
    <dd>{{ rowData.getHardpoints() }}</dd>
    <dt><strong>Cost</strong> <help-cost></help-cost></dt>
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
