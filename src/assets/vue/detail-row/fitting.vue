<template>
  <dl>
    <dt><strong>Name</strong></dt>
    <dd class="bottom-border">{{ rowData.name }}</dd>
    <dt><strong>Storage</strong></dt>
    <dd class="bottom-border">{{ rowData.storage }}</dd>
    <dt><strong>Power</strong></dt>
    <dd class="bottom-border">{{ rowData.power }}</dd>
    <dt><strong>Crew</strong></dt>
    <dd class="bottom-border">{{ rowData.crew }}</dd>
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
