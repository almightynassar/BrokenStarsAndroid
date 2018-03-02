// Import Vue, lodash and our SVG libraries
import Vue from 'vue'
import _ from 'lodash'
import SVG from 'svg.js'
import 'svg.filter.js'
import RollParser from 'roll-parser'

// Vue Plugins (Cordova,  vuetify, filters)
import Vue2Filters from 'vue2-filters'
import VueCordova from 'vue-cordova'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

// Import CSS
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.scss'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/sass/main.scss'

// Load template data files into our factory
import BsFactory from './plugins/bsFactory.js'
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
Vue.use(VueRouter)
Vue.use(BsFactory)
Vue.use(Vuetify)
Vue.use(Vue2Filters)

// Import Custom Plugins and Components
require('./assets/vue/help/loader.js')
require('./assets/vue/detail-row/loader.js')
import Timeline from './assets/vue/components/timeline.vue'
Vue.component("timeline", Timeline)

// Import Routes and Main App
import Routes from './routes.js'
import App from './main.vue'

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  // Our Routes
  router: Routes
})
