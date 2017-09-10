// Import Vue
import Vue from 'vue'

// Vue Plugins (Cordova, vuetable-2)
import VueCordova from 'vue-cordova'
import VueTable2 from 'vuetable-2'

// Import F7, Theme and Vue Plugin
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './main.vue'

// Import Custom Plugins
import BsFactory from './plugins/bsFactory.js'

// Load up Help popover components

// ATTRIBUTES
import BsHelpAI from './assets/vue/help/ai.vue'
Vue.component('help-ai', BsHelpAI)
import BsHelpArmour from './assets/vue/help/armour.vue'
Vue.component('help-armour', BsHelpArmour)
import BsHelpBulk from './assets/vue/help/bulk.vue'
Vue.component('help-bulk', BsHelpBulk)
import BsHelpEngine from './assets/vue/help/engine.vue'
Vue.component('help-engine', BsHelpEngine)
import BsHelpPower from './assets/vue/help/power.vue'
Vue.component('help-power', BsHelpPower)

// SUB-SYSTEMS
import BsHelpAutopilot from './assets/vue/help/autopilot.vue'
Vue.component('help-autopilot', BsHelpAutopilot)
import BsHelpECM from './assets/vue/help/ecm.vue'
Vue.component('help-ecm', BsHelpECM)
import BsHelpNavigation from './assets/vue/help/navigation.vue'
Vue.component('help-navigation', BsHelpNavigation)
import BsHelpOperations from './assets/vue/help/operations.vue'
Vue.component('help-operations', BsHelpOperations)
import BsHelpRepair from './assets/vue/help/repair.vue'
Vue.component('help-repair', BsHelpRepair)
import BsHelpSensors from './assets/vue/help/sensors.vue'
Vue.component('help-sensors', BsHelpSensors)
import BsHelpWeapons from './assets/vue/help/weapons.vue'
Vue.component('help-weapons', BsHelpWeapons)

// Values
import BsHelpAiActions from './assets/vue/help/ai-actions.vue'
Vue.component('help-ai-actions', BsHelpAiActions)
import BsHelpEvade from './assets/vue/help/evade.vue'
Vue.component('help-evade', BsHelpEvade)
import BsHelpBreech from './assets/vue/help/breech.vue'
Vue.component('help-breech', BsHelpBreech)
import BsHelpCrew from './assets/vue/help/crew.vue'
Vue.component('help-crew', BsHelpCrew)
import BsHelpFuel from './assets/vue/help/fuel.vue'
Vue.component('help-fuel', BsHelpFuel)
import BsHelpHardpoints from './assets/vue/help/hardpoints.vue'
Vue.component('help-hardpoints', BsHelpHardpoints)
import BsHelpHardpointsUsed from './assets/vue/help/hardpoints-used.vue'
Vue.component('help-hardpoints-used', BsHelpHardpointsUsed)
import BsHelpSize from './assets/vue/help/size.vue'
Vue.component('help-size', BsHelpSize)
import BsHelpIntegrity from './assets/vue/help/integrity.vue'
Vue.component('help-integrity', BsHelpIntegrity)
import BsHelpPowerTotal from './assets/vue/help/power-total.vue'
Vue.component('help-power-total', BsHelpPowerTotal)
import BsPowerUsed from './assets/vue/help/power-used.vue'
Vue.component('help-power-used', BsPowerUsed)
import BsHelpSpeed from './assets/vue/help/speed.vue'
Vue.component('help-speed', BsHelpSpeed)
import BsHelpStorageTotal from './assets/vue/help/storage-total.vue'
Vue.component('help-storage-total', BsHelpStorageTotal)
import BsHelpStorageUsed from './assets/vue/help/storage-used.vue'
Vue.component('help-storage-used', BsHelpStorageUsed)
import BsHelpPoints from './assets/vue/help/points.vue'
Vue.component('help-points', BsHelpPoints)
import BsHelpRank from './assets/vue/help/rank.vue'
Vue.component('help-rank', BsHelpRank)
import BsHelpCost from './assets/vue/help/cost.vue'
Vue.component('help-cost', BsHelpCost)

// Load template data files into our factory
var templateFiles = require.context("./data/templates", false, /\.js$/);
var templateData = {};
templateFiles.keys().forEach(function (file) {
  templateData[file.split('\\').pop().split('/').pop().split('.').shift()] = (templateFiles(file)).default;
});
BsFactory.loadTemplates(templateData);
// Load name data files into our factory
var nameFiles = require.context("./data/names", false, /\.js$/);
var nameData = [];
nameFiles.keys().forEach(function (file) {
  nameData.push( (nameFiles(file)).default );
});
BsFactory.loadNames(nameData);

// Init Vue Plugins
Vue.use(VueCordova)
Vue.use(Framework7Vue)
Vue.use(BsFactory)
Vue.use(VueTable2)
Vue.component("vuetable", VueTable2)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    material: true,
    routes: Routes,
    modalTitle: "Broken Stars"
  },
  // Register App Component
  components: {
    app: App
  }
})
