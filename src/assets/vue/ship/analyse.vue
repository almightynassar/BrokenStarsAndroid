<template>
	<f7-page>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell">Type</th>
            <th class="numeric-cell">Size</th>
            <th class="numeric-cell">Integrity</th>
            <th class="numeric-cell">Toughness</th>
            <th class="numeric-cell">Crew</th>
            <th class="numeric-cell">Power</th>
            <th class="numeric-cell">Storage</th>
            <th class="numeric-cell">Speed</th>
            <th class="numeric-cell">FTL Fuel per Jump</th>
            <th class="numeric-cell">Weapon Hardpoints</th>
            <th class="numeric-cell">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in ships" :key="s.name">
            <td class="label-cell">{{ s.getHull() }}</td>
            <td class="numeric-cell">{{ s.getSize() }}</td>
            <td class="numeric-cell">{{ s.getIntegrity() }}</td>
            <td class="numeric-cell">{{ s.getToughness() }}</td>
            <td class="numeric-cell">{{ s.getCrew() }}</td>
            <td class="numeric-cell">{{ s.getPower() }}</td>
            <td class="numeric-cell">{{ s.getBulk() }}</td>
            <td class="numeric-cell">{{ s.getAcceleration() }}</td>
            <td class="numeric-cell">{{ s.getFTL() }}</td>
            <td class="numeric-cell">{{ s.getHardpoints() }}</td>
            <td class="numeric-cell">{{ formatNumber( s.getCost() ) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <f7-accordion>
      <f7-accordion-item class="content-border border-lightblue">
        <f7-accordion-toggle class="content-center-text color-lightblue">Attributes</f7-accordion-toggle>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item>
              <f7-grid>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>AI</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="attributes.ai">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Armour</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="attributes.armour">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'armour-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Bulk</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="attributes.bulk">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'bulk-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="25">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Engine</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="attributes.engine">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'engine-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Power</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="attributes.power">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ai-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
              </f7-grid>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-accordion-item>
      <hr>
      <f7-accordion-item class="content-border border-lightblue">
        <f7-accordion-toggle class="content-center-text color-lightblue">Sub-Systems</f7-accordion-toggle>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item>
              <f7-grid>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Autopilot</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="systems.autopilot">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'autopilot-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>ECM</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="systems.ecm">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'ecm-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Navigation</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="systems.navigation">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'navigation-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Operations</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="systems.operations">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'operations-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Repair</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="systems.repair">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'repair-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Sensors</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="systems.sensors">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'sensors-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
                <f7-col width="100" tablet-width="50">
                  <f7-grid>
                    <f7-col width="50" tablet-width="25"><strong>Weapons</strong></f7-col>
                    <f7-col width="50" tablet-width="25">
                      <f7-input type="select" v-model="systems.weapons">
                        <option v-for="(n,i) in temp.categories.dice" :value="i" :key="'weapons-' + i">{{n}}</option>
                      </f7-input>
                    </f7-col>
                  </f7-grid>
                </f7-col>
              </f7-grid>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-accordion-item>
    </f7-accordion>
    <hr>
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