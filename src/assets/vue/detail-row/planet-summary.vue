<template>
  <v-card tile color="grey lighten-1">
    <v-card-text>
      <div><strong>Name</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ planet.name }}</div>
      <div><strong>Type</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ planet.type | capitalize}} <help-generic :popover="'planet-type-details'">{{regions.categories.type[planet.type]}}</help-generic></div>
      <div><strong>Distance</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ planet.distance }} AU</div>
      <div><strong>Satellites</strong></div>
      <div class="ml-4 mt-1 mb-1 bottom-border">{{ satellites }}</div>
      <div v-if="planet.description">
        <div><strong>Description</strong></div>
        <div class="ml-4 mt-1 mb-1 bottom-border">{{ planet.description }}</div>
      </div>
      <v-btn @click.native="dialog = true">More <v-icon>keyboard_arrow_right</v-icon></v-btn>
    </v-card-text>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ planet.name }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex sm12 md6 lg4 v-if="planet.description">
                <v-card flat>
                  <v-card-title class="small-caps">Description</v-card-title>
                  <v-card-text>
                    {{ planet.description }}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex sm12 md6 lg4 v-if="planet.type == 'planetoid'">
                <v-card flat>
                  <v-card-title class="small-caps">Details</v-card-title>
                  <v-card-text>
                    <div><strong>Size</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{ details.size.name }} <help-generic :popover="'planet-diameter-details'">{{details.size.description}} ({{planet.diameter}} km in diameter)</help-generic></div>
                    <div><strong>Mass</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{planet.properties.mass}} <help-generic :popover="'planet-mass-details'">{{details.mass}} kg</help-generic></div>
                    <div><strong>Surface Temperature</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{ details.celsius }} °C <help-generic :popover="'planet-temperature-details'">For science nerds, this achieved with a bond albedo of {{ details.albedo }}.</help-generic></div>
                    <div><strong>Biosphere</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{planet.properties.biosphere | capitalize}} <help-generic :popover="'planet-biosphere-details'">{{ details.biosphere }}</help-generic></div>
                    <div><strong>Hydrosphere</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{ details.hydrosphere.name }} <help-generic :popover="'planet-hydrosphere-details'">{{details.hydrosphere.description}} ({{planet.properties.hydrosphere}}% surface water)</help-generic></div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex sm12 md6 lg4 v-if="planet.type == 'planetoid'">
                <v-card flat>
                  <v-card-title class="small-caps">Misc.</v-card-title>
                  <v-card-text>
                    <div><strong>Atmosphere Density</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{details.pressure.name | capitalize}} <help-generic :popover="'planet-pressure-details'">{{ details.pressure.description }}</help-generic></div>
                    <div><strong>Atmosphere Composition</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{planet.properties.composition | capitalize}} <help-generic :popover="'planet-composition-details'">{{ details.composition.description }}</help-generic></div>
                    <div><strong>Gravity</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{details.gravity}} G <help-generic :popover="'planet-gravity-details'">Earth has a gravity force of 1 G.</help-generic></div>
                    <div><strong>Relative Density</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{details.density}} <help-generic :popover="'planet-density-details'">The density of the planet relative to Earth.</help-generic></div>
                    <div v-if="details.orbit">
                      <div><strong>Orbit</strong></div>
                      <div class="ml-4 mt-1 mb-1 bottom-border">{{details.orbit}} days</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex sm12 md6 lg4 v-if="planet.population">
                <v-card flat>
                  <v-card-title class="small-caps">Population</v-card-title>
                  <v-card-text>
                    <div><strong>Population</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{pop}}</div>
                    <div><strong>Tech</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{planet.population.tech | capitalize}} <help-generic :popover="'population-tech-details'">{{ population.tech }}</help-generic></div>
                    <div><strong>Density</strong></div>
                    <div class="ml-4 mt-1 mb-1 bottom-border">{{population.infrastructure.name | capitalize}}<help-generic :popover="'planet-gravity-details'">{{population.infrastructure.description}} This rating is achieved with a density of {{population.density}} people per square kilometre.</help-generic></div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex sm12 lg12 v-if="planet.satellites">
                <v-card flat>
                  <v-card-title class="small-caps">Satellites</v-card-title>
                  <v-card-text>
                    <v-data-table
                      :headers="fields"
                      :items="planet.satellites"
                      hide-actions
                      item-key="name"
                    >
                      <template slot="items" slot-scope="props">
                        <tr @click="props.expanded = !props.expanded">
                          <td>{{ props.item.name | capitalize}}</td>
                          <td>{{ props.item.type | capitalize}}</td>
                        </tr>
                      </template>
                      <template slot="expand" slot-scope="props">
                        <detail-row-planet-summary :star="details" :planet="props.item"></detail-row-planet-summary>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
  import Numeral from 'numeral'
  export default {
    props: {
      planet: {
        type: Object,
        required: true
      },
      star: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        regions: this.$bsFactory.getTemplate('regions'),
        dialog: false,
        fields: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Type',
            align: 'left',
            sortable: true,
            value: 'type'
          },
        ],
			}
    },
    computed: {
      details() {
        let deets = {}
        if (this.planet.type == 'planetoid') {
          deets = this.regions.planetoids.details(this.star, this.planet)
        }
        return deets
      },
      population() {
        let deets = {}
        if (this.planet.population) {
          deets = this.regions.population.details(this.planet)
        }
        return deets
      },
      pop() {
        return (this.planet.population) ? Numeral(this.planet.population.population).format('0[.]0 a') : 0
      },
      satellites() {
        return _.isArray(this.planet.satellites) ? this.planet.satellites.length : (_.isString(this.planet.satellites) ? this.planet.satellites : 0)
      }
    }
  }
</script>
