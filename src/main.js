// Import Vue
import Vue from 'vue'

// Vue Cordova interface
import VueCordova from 'vue-cordova'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 Material Theme
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

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
})
