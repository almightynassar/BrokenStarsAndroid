<template>
	<f7-page>
    <div class="data-table">
      <vuetable
        ref="fittingstable"
        :api-mode="false"
        :data="fittings.fittings"
        :fields="['name', 'description']"
        detail-row-component="detail-row-fitting"
        @vuetable:row-clicked="onRowClicked"
      ></vuetable>
    </div>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        fittings: this.$bsFactory.getTemplate("fittings"),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
        class: {
          tableClass: 'ui blue selectable celled stackable attached table',
          loadingClass: 'loading',
          ascendingIcon: 'blue chevron up icon',
          descendingIcon: 'blue chevron down icon',
          detailRowClass: 'vuetable-detail-row',
          handleIcon: 'grey sidebar icon',
        }
			}
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onRowClicked (data, field, event) {
        this.$refs.fittingstable.visibleDetailRows = []
        this.$refs.fittingstable.showDetailRow(data.id)
      }
		}
  }
</script>