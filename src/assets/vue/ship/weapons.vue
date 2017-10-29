<template>
  <f7-page>
    <f7-block>
      <f7-block-title>Weapon's List</f7-block-title>
      <div class="data-table">
        <vuetable
          ref="weaponstable"
          :api-mode="false"
          :data="weapons.weapons"
          :fields="fields"
          detail-row-component="detail-row-weapon"
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
        weapons: this.$bsFactory.getTemplate("weapons"),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0})
			}
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onExpandRow (id) {
        let index = this.$refs.weaponstable.visibleDetailRows.indexOf(id)
        this.$refs.weaponstable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.weaponstable.showDetailRow(id)
        }
      }
		}
  }
</script>