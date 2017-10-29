<template>
	<f7-page>
    <f7-block>
      <f7-block-title>Fitting's List</f7-block-title>
      <div class="data-table">
        <vuetable
          ref="fittingstable"
          :api-mode="false"
          :data="fittings.fittings"
          :fields="fields"
          detail-row-component="detail-row-fitting"
        >
          <template slot="expand" scope="props">
            <f7-button v-on:click="onExpandRow(props.rowData.id)"><f7-icon material="expand_more"></f7-icon></f7-button>
          </template>
        </vuetable>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        fields: [
          'name',
          {
            name: '__slot:expand',
            title: 'Expand',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ],
        fittings: this.$bsFactory.getTemplate("fittings"),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onExpandRow (id) {
        let index = this.$refs.fittingstable.visibleDetailRows.indexOf(id)
        this.$refs.fittingstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.fittingstable.showDetailRow(id)
        }
      }
		}
  }
</script>