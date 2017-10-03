<template>
	<f7-page>
    <f7-list form>
      <!-- Text Input -->
      <f7-list-item>
        <f7-label>Search</f7-label>
        <f7-input type="text" v-model="search" v-on:input="updateSectors()" />
      </f7-list-item>
    </f7-list>
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
        <template slot="trade" scope="props">
          {{ regions.getSectorTrade(props.rowData) }}
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
        search: "",
        sectors: [],
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
            name: '__slot:trade',
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
    watch: {
      sectors: {
        handler(value) {
          this.$refs.regionsummarytable.resetData()
          this.$refs.regionsummarytable.setData(value)
        },
        deep: true
      }
    },
    methods: {
      updateSectors() {
        let tempSectors = []
        for (var index = 0; index < this.regions.sectors.length; index++) {
          let name = this.regions.sectors[index].name.toLowerCase()
          if ( name.includes(this.search.toLowerCase()) || (this.search == "")) {
            tempSectors.push(this.regions.sectors[index])
          }
        }
        this.sectors = tempSectors
      },
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
    },
    created() {
      this.sectors = this.regions.sectors
    }
  }
</script>