<template>
	<f7-page>
    <f7-block inset>
      <f7-block-title class="content-center-text bottom-border small-caps">Sector List</f7-block-title>
      <f7-block form>
        <!-- Text Input -->
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
          <template slot="name" scope="props">
            <p>{{ props.rowData.name }}</p>
            <p v-if="option === 'owner'"><em>{{ regions.categories.sector.control[props.rowData.control] }}</em></p>
            <p v-if="option === 'trade'"><em>{{ regions.getSectorTrade(props.rowData) }}</em></p>
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
        sectors: [],
        regions: this.$bsFactory.getTemplate('regions'),
        fields: [
          {
            name: '__slot:name',
            title: 'Name',
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
      }
    },
    methods: {
      onExpandRow (data, event) {
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