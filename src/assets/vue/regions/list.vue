<template>
	<f7-page>
    <div class="data-table">
      <vuetable
        ref="regionsummarytable"
        :api-mode="false"
        :data="sectors"
        :fields="fields"
        track-by="name"
        detail-row-component="detail-row-region-summary"
      >
        <template slot="owner" scope="props">
          {{ regions.categories.sector.control[props.rowData.control] }}
        </template>
        <template slot="expand" scope="props">
          <f7-button fill color="blue" v-on:click="onExpandRow(props.rowData.name)"><f7-icon color="white" material="expand_more"></f7-icon></f7-button>
        </template>
      </vuetable>
    </div>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        regions: this.$bsFactory.getTemplate('regions'),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
        fields: [
          'name',
          {
            name: '__slot:owner',
            title: 'Control',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          },
          {
            name: '__slot:expand',
            title: 'Expand',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ]
      }
    },
    computed: {
      sectors() {
        return this.regions.sectors;
      }
    },
    methods: {
      formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onExpandRow (id) {
        let index = this.$refs.regionsummarytable.visibleDetailRows.indexOf(id)
        this.$refs.regionsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.regionsummarytable.showDetailRow(id)
        }
      }
    }
  }
</script>