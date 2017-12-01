<template>
  <f7-block inset>
    <f7-block-title class="content-center-text bottom-border small-caps">Weapon's List</f7-block-title>
    <div class="data-table">
      <vuetable
        ref="weaponstable"
        :api-mode="false"
        :data="weapons.weapons"
        :fields="fields"
        detail-row-component="detail-row-weapon"
        @vuetable:row-clicked="onExpandRow"
      >
        <template slot="expand" scope="props">
          <span v-if="showData == 'cost'">{{ props.rowData.cost | currency }}</span>
          <span v-else-if="showData == 'damage'">{{ props.rowData.damage}}</span>
          <span v-else-if="showData == 'hardpoints'">{{ props.rowData.hardpoints}}</span>
          <span v-else-if="showData == 'range'">{{ props.rowData.range}}</span>
          <span v-else-if="showData == 'rof'">{{ props.rowData.rof}}</span>
          <span v-else-if="showData == 'power'">{{ props.rowData.power }} power</span>
          <span v-else-if="showData == 'storage'">{{ props.rowData.storage }} storage</span>
        </template>
      </vuetable>
    </div>
    <f7-block-title class="content-center-text color-lightblue bottom-border">Datapoint</f7-block-title>
    <select v-model="showData">
      <option value='cost' key='cost'>Cost</option>
      <option value='damage' key='damage'>Damage</option>
      <option value='hardpoints' key='hardpoints'>Hardpoints</option>
      <option value='range' key='range'>Range</option>
      <option value='rof' key='rof'>Rate of Fire</option>
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
        weapons: this.$bsFactory.getTemplate("weapons"),
			}
    },
		methods: {
      onExpandRow (data, field, event) {
        let id = data.id
        let index = this.$refs.weaponstable.visibleDetailRows.indexOf(id)
        this.$refs.weaponstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.weaponstable.showDetailRow(id)
        }
      }
		}
  }
</script>