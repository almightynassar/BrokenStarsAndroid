<template>
  <f7-block inset>
    <f7-block-title class="content-center-text bottom-border small-caps">Fitting's List</f7-block-title>
    <div class="data-table">
      <vuetable
        ref="fittingstable"
        :api-mode="false"
        :data="fittings.fittings"
        :fields="fields"
        detail-row-component="detail-row-fitting"
        @vuetable:row-clicked="onExpandRow"
      >
        <template slot="expand" scope="props">
          <span v-if="showData == 'cost'">{{ props.rowData.cost | currency }}</span>
          <span v-else-if="showData == 'crew'">{{ props.rowData.crew}} crew</span>
          <span v-else-if="showData == 'power'">{{ props.rowData.power }} power</span>
          <span v-else-if="showData == 'storage'">{{ props.rowData.storage }} storage</span>
        </template>
      </vuetable>
    </div>
    <f7-block-title class="content-center-text color-lightblue bottom-border">Datapoint</f7-block-title>
    <select v-model="showData">
      <option value='cost' key='cost'>Cost</option>
      <option value='crew' key='crew'>Crew</option>
      <option value='power' key='power'>Power</option>
      <option value='storage' key='storage'>Storage</option>
    </select>
  </f7-block>
</template>
<script>
  export default {
    data() {
      return {
        showData: 'cost',
        fields: [
          'name',
          {
            name: '__slot:expand',
            title: 'Datapoint',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ],
        fittings: this.$bsFactory.getTemplate("fittings"),
			}
    },
		methods: {
      onExpandRow (data, field, event) {
        let id = data.id
        let index = this.$refs.fittingstable.visibleDetailRows.indexOf(id)
        this.$refs.fittingstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.fittingstable.showDetailRow(id)
        }
      }
		}
  }
</script>