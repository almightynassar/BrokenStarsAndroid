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

// Import CSS
import MaterialIcons from 'material-design-icons-iconfont'
import AppStyles from './assets/sass/main.scss'

// Import Routes
import Routes from './routes.js'

// Import directives and filters
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

// Import App Component
import App from './main.vue'

// Import Custom Plugins and Components
import BsFactory from './plugins/bsFactory.js'
require('./assets/vue/help/loader.js')
require('./assets/vue/detail-row/loader.js')

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
// Load region data files into our factory
var regionFiles = require.context("./data/regions", false, /\.js$/);
var regionData = [];
regionFiles.keys().forEach(function (file) {
  regionData.push( (regionFiles(file)).default );
});
regionData.sort(function(a,b) {
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
});
BsFactory.loadRegions(regionData);

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
