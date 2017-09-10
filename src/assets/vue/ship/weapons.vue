<template>
  <f7-page>
    <div class="data-table">
      <vuetable
        ref="weaponstable"
        :api-mode="false"
        :data="weapons.weapons"
        :fields="['name', 'description']"
        detail-row-component="detail-row-weapon"
        @vuetable:row-clicked="onRowClicked"
      ></vuetable>
    </div>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        weapons: this.$bsFactory.getTemplate("weapons"),
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
        this.$refs.weaponstable.visibleDetailRows = []
        this.$refs.weaponstable.showDetailRow(data.id)
      }
		}
  }
</script>