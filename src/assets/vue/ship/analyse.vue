<template>
	<f7-page>
    <f7-list>
      <f7-list-item>
        <div class="data-table">
          <vuetable
            ref="hullsummarytable"
            :api-mode="false"
            :data="ships"
            :fields="fields"
            track-by="hull"
            detail-row-component="detail-row-ship-summary"
          >
            <template slot="hull" scope="props">
              {{ props.rowData.getHull() }}
            </template>
            <template slot="cost" scope="props">
              {{ formatNumber( props.rowData.getCost() ) }}
            </template>
            <template slot="expand" scope="props">
              <f7-button fill color="blue" v-on:click="onExpandRow(props.rowData.hull)"><f7-icon color="white" material="expand_more"></f7-icon></f7-button>
            </template>
          </vuetable>
        </div>
      </f7-list-item>
      <f7-list-item>
        <f7-block-title class="content-center-text color-lightblue">Attributes</f7-block-title>
        <div class="data-table">
          <table>
            <tr>
              <td>
                 <strong>AI</strong> <help-ai></help-ai>
              </td>
              <td>
                <f7-input type="select" v-model="attributes.ai">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Armour</strong> <help-armour></help-armour>
              </td>
              <td>
                <f7-input type="select" v-model="attributes.armour">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'armour-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Bulk</strong> <help-bulk></help-bulk>
              </td>
              <td>
                <f7-input type="select" v-model="attributes.bulk">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'bulk-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Engine</strong> <help-engine></help-engine>
              </td>
              <td>
                <f7-input type="select" v-model="attributes.engine">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'engine-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Power</strong> <help-power></help-power>
              </td>
              <td>
                <f7-input type="select" v-model="attributes.power">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
          </table>
        </div>
        <f7-block-title class="content-center-text color-lightblue">Sub-Systems</f7-block-title>
        <div class="data-table">
          <table>
            <tr>
              <td>
                <strong>Autopilot</strong> <help-autopilot></help-autopilot>
              </td>
              <td>
                <f7-input type="select" v-model="systems.autopilot">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'autopilot-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>ECM</strong> <help-ecm></help-ecm>
              </td>
              <td>
                <f7-input type="select" v-model="systems.ecm">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ecm-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Navigation</strong> <help-navigation></help-navigation>
              </td>
              <td>
                <f7-input type="select" v-model="systems.navigation">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'navigation-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Operations</strong> <help-operations></help-operations>
              </td>
              <td>
                <f7-input type="select" v-model="systems.operations">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'operations-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Repair</strong> <help-repair></help-repair>
              </td>
              <td>
                <f7-input type="select" v-model="systems.repair">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'repair-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sensors</strong> <help-sensors></help-sensors>
              </td>
              <td>
                <f7-input type="select" v-model="systems.sensors">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'sensors-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Weapons</strong> <help-weapons></help-weapons>
              </td>
              <td>
                <f7-input type="select" v-model="systems.weapons">
                  <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'weapons-' + i">{{n}}</option>
                </f7-input>
              </td>
            </tr>
          </table>
        </div>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        temp: this.$bsFactory.getTemplate("ships"),
        ships: [],
        attributes: {
          ai: 1,
          armour: 1,
          bulk: 1,
          engine: 1,
          power: 1,
        },
        systems: {
          autopilot: 0,
          ecm: 0,
          navigation: 0,
          operations: 0,
          repair: 0,
          sensors: 0,
          weapons: 0,
        },
        fields: [
          {
            name: '__slot:hull',
            title: 'Hull',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          },
          {
            name: '__slot:cost',
            title: 'Cost',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          },
          {
            name: '__slot:expand',
            title: 'Expand',
            titleClass: 'center aligned',
            dataClass: 'center aligned'
          }
        ],
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
    },
    computed: {
      ai() { return this.attributes.ai; },
      armour() { return this.attributes.armour; },
      bulk() { return this.attributes.bulk; },
      engine() { return this.attributes.engine; },
      power() { return this.attributes.power; },
      autopilot() { return this.systems.autopilot; },
      ecm() { return this.systems.ecm; },
      navigation() { return this.systems.navigation; },
      operations() { return this.systems.operations; },
      repair() { return this.systems.repair; },
      sensors() { return this.systems.sensors; },
      weapons() { return this.systems.weapons; },
    },
    watch: {
      ai(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setAI(newVal);
        }
      },
      armour(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setArmour(newVal);
        }
      },
      bulk(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setBulk(newVal);
        }
      },
      engine(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setEngine(newVal);
        }
      },
      power(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setPower(newVal);
        }
      },
      autopilot(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setAutopilot(newVal);
        }
      },
      ecm(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setECM(newVal);
        }
      },
      navigation(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setNavigation(newVal);
        }
      },
      operation(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setOperations(newVal);
        }
      },
      repair(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setRepair(newVal);
        }
      },
      sensors(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setSensors(newVal);
        }
      },
      weapons(newVal) {
        for (var index = 0; index < this.ships.length; index++) {
          this.ships[index].setWeapons(newVal);
        }
      }
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      onExpandRow (id) {
        let index = this.$refs.hullsummarytable.visibleDetailRows.indexOf(id)
        this.$refs.hullsummarytable.visibleDetailRows = []
        if (index == -1) {
          this.$refs.hullsummarytable.showDetailRow(id)
        }
      }
		},
    mounted() {
      for (var index = 0; index < this.temp.categories.hulls.length; index++) {
        var s = this.$bsFactory.cloneShip();
        s.setHull(index);
        this.ships.push(s);
      }
    }
  }
</script>