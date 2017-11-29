<template>
	<f7-page>
    <f7-block inset>
      <f7-block-title class="content-center-text bottom-border small-caps">Sector List</f7-block-title>
      <f7-block form>
        <!-- Text Input -->
        <input type="text" v-model="search" v-on:input="updateSectors()" placeholder="Search" />
        <div class="custom-radio custom-radio-inline">
          <input id="option-owner" type="radio" @change="changeOption('owner')" @click="changeOption('owner')" :checked="option == 'owner'">
          <label for="option-owner">Owner</label>
        </div>
        <div class="custom-radio custom-radio-inline">
          <input id="option-trade" type="radio" @change="changeOption('trade')" @click="changeOption('trade')" :checked="option == 'trade'">
          <label for="option-trade">Trade</label>
        </div>
      </f7-block>
      <div class="data-table">
        <vuetable
          ref="regionsummarytable"
          :api-mode="false"
          :data="sectors"
          :fields="fields"
          track-by="name"
          detail-row-component="detail-row-region-summary"
          @vuetable:row-clicked="onExpandRow"
        >
          <template slot="owner" scope="props">
            {{ regions.categories.sector.control[props.rowData.control] }}
          </template>
          <template slot="trade" scope="props">
            {{ regions.getSectorTrade(props.rowData) }}
          </template>
          <template slot="expand" scope="props">
            <f7-button :href="'/regions/sector/view/'+props.rowData.x+'/'+props.rowData.y"><f7-icon material="chevron_right"></f7-icon></f7-button>
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
            name: '__slot:expand',
            title: 'View',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ],
        option: "owner",
        options: {
          owner: {
            name: '__slot:owner',
            title: 'Control',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          },
          trade: {
            name: '__slot:trade',
            title: 'Trade',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        }
      }
    },
    watch: {
      option() {
        this.updateTable()
      },
      fields: {
        handler(value) {
          this.$refs.regionsummarytable.normalizeFields()
        },
        deep: true
      },
      sectors: {
        handler(value) {
          this.updateTable()
        },
        deep: true
      }
    },
    methods: {
      updateTable() {
        // Reset everything
        this.$refs.regionsummarytable.resetData()
        // Get our desired fields
        this.fields = [
          'name',
          this.options[this.option],
          {
            name: '__slot:expand',
            title: 'Expand',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ]
        // NOTE: We will get warnings about this, but setting the prop of the child
        // directly is the only way I could get the whole thing to be responsive.
        // All other methods resulted in a change delay as the prop only updated
        // one step behind all the other changes
        this.$refs.regionsummarytable.fields = this.fields
        // Set our data
        this.$refs.regionsummarytable.setData(this.sectors)
        // Force the table to read the new updated fields prop that we forced earlier
        this.$refs.regionsummarytable.normalizeFields()
      },
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
      onExpandRow (data, field, event) {
        let id = data.name
        let index = this.$refs.regionsummarytable.visibleDetailRows.indexOf(id)
        this.$refs.regionsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.regionsummarytable.showDetailRow(id)
        }
      },
      changeOption(value) {
        this.option = value
      }
    },
    created() {
      this.sectors = this.regions.sectors
    }
  }
</script>