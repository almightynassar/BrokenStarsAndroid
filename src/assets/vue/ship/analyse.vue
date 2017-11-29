<template>
  <f7-block inset>
    <f7-block-title  class="content-center-text bottom-border small-caps">Hull analysis</f7-block-title>
    <p>This page allows you to compare different hull types and play with different attributes and sub-systems. This is useful to compare the different hulls against one another.</p>
    
    <!-- TABLE -->
    <div class="data-table">
      <vuetable
        ref="hullsummarytable"
        :api-mode="false"
        :data="ships"
        :fields="fields"
        track-by="hull"
      >
        <template slot="hull" scope="props">
          {{ props.rowData.getHull() }}
        </template>
        <template slot="cost" scope="props">
          <span v-if="showData == 'cost'">{{ formatNumber( props.rowData.getCost() ) }}</span>
          <span v-else-if="showData == 'aiActions'">{{ props.rowData.getActionsAI() }}</span>
          <span v-else-if="showData == 'aiEvade'">{{ props.rowData.getEvade() }}</span>
          <span v-else-if="showData == 'cargoCap'">{{ props.rowData.getBulk() * 100 }} tons</span>
          <span v-else-if="showData == 'ftlFuel'">{{ props.rowData.getFTL() }} units</span>
          <span v-else-if="showData == 'hardpoints'">{{ props.rowData.getHardpoints() }}</span>
          <span v-else-if="showData == 'integrity'">{{ props.rowData.getIntegrity() }}</span>
          <span v-else-if="showData == 'power'">{{ props.rowData.getPower() }}</span>
          <span v-else-if="showData == 'sizeMod'">{{ props.rowData.getSize() }}</span>
          <span v-else-if="showData == 'speedSpace'">{{ props.rowData.getAcceleration() }} spaces</span>
          <span v-else-if="showData == 'speedReal'">{{ props.rowData.getAccelerationConverted() }} m/s</span>
          <span v-else-if="showData == 'speedKmh'">{{ (props.rowData.getAccelerationConverted() * 18 ) /5}} km/h</span>
          <span v-else-if="showData == 'storage'">{{ props.rowData.getBulk() }}</span>
          <span v-else-if="showData == 'toughness'">{{ props.rowData.getToughness() }}</span>
        </template>
      </vuetable>
    </div>

    <!-- DATAPOINT -->
    <f7-block-title class="content-center-text color-lightblue bottom-border">Datapoint</f7-block-title>
    <select v-model="showData">
      <option value='aiActions' key='aiActions'>AI Actions</option>
      <option value='aiEvade' key='aiEvade'>AI Evade</option>
      <option value='cargoCap' key='cargoCap'>Cargo Capacity</option>
      <option value='cost' key='cost'>Cost</option>
      <option value='ftlFuel' key='ftlFuel'>Fuel per FTL jump</option>
      <option value='hardpoints' key='hardpoints'>Hardpoints</option>
      <option value='integrity' key='integrity'>Integrity</option>
      <option value='power' key='power'>Power</option>
      <option value='sizeMod' key='sizeMod'>Size Modifier</option>
      <option value='speedSpace' key='speedSpace'>Speed (Spaces)</option>
      <option value='speedReal' key='speedReal'>Speed (m/s)</option>
      <option value='speedKmh' key='speedKmh'>Speed (km/h)</option>
      <option value='storage' key='storage'>Storage</option>
      <option value='toughness' key='toughness'>Toughness</option>
    </select>

    <!-- ATTRIBUTES -->
    <f7-block-title class="content-center-text color-lightblue bottom-border">Attributes</f7-block-title>
    <div class="data-table custom-table">
      <table>
        <tr>
          <td>
              <strong>AI</strong> <help-ship-ai></help-ship-ai>
          </td>
          <td>
            <select v-model="attributes.ai">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Armour</strong> <help-ship-armour></help-ship-armour>
          </td>
          <td>
            <select v-model="attributes.armour">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'armour-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Bulk</strong> <help-ship-bulk></help-ship-bulk>
          </td>
          <td>
            <select v-model="attributes.bulk">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'bulk-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Engine</strong> <help-ship-engine></help-ship-engine>
          </td>
          <td>
            <select v-model="attributes.engine">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'engine-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Power</strong> <help-ship-power></help-ship-power>
          </td>
          <td>
            <select v-model="attributes.power">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
      </table>
    </div>

    <!-- SUB-SYSTEMS -->
    <f7-block-title class="content-center-text color-lightblue bottom-border">Sub-Systems</f7-block-title>
    <div class="data-table custom-table">
      <table>
        <tr>
          <td>
            <strong>Autopilot</strong> <help-ship-autopilot></help-ship-autopilot>
          </td>
          <td>
            <select v-model="systems.autopilot">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'autopilot-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>ECM</strong> <help-ship-ecm></help-ship-ecm>
          </td>
          <td>
            <select v-model="systems.ecm">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ecm-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Navigation</strong> <help-ship-navigation></help-ship-navigation>
          </td>
          <td>
            <select v-model="systems.navigation">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'navigation-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Operations</strong> <help-ship-operations></help-ship-operations>
          </td>
          <td>
            <select v-model="systems.operations">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'operations-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Repair</strong> <help-ship-repair></help-ship-repair>
          </td>
          <td>
            <select v-model="systems.repair">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'repair-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Sensors</strong> <help-ship-sensors></help-ship-sensors>
          </td>
          <td>
            <select v-model="systems.sensors">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'sensors-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Weapons</strong> <help-ship-weapons></help-ship-weapons>
          </td>
          <td>
            <select v-model="systems.weapons">
              <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'weapons-' + i">{{n}}</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  </f7-block>
</template>
<script>
  export default {
    data() {
      return {
        showData: 'cost',
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
            title: 'Datapoint',
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