var clone = require('clone');
export default {
  // Local Data storage
  data: {
    templates: null,
    names: {},
    database: null,
  },
  // Load template data files
  loadTemplates(values) {
    if (typeof values === "object" && values !== null) {
      this.data.templates = values;
    } else {
      this.data.templates = {};
    }
    return this.data.templates;
  },
  // Load name data files
  loadNames(values) {
    if (typeof this.data.templates.names !== "object" || this.data.templates.names === null) {
      console.log("loadNames(): Names object template is undefined");
      throw new Error();
    }
    if (Array.isArray(values) && values !== null) {
      var self = this;
      values.forEach(function (v) {
        self.data.names[v.name] = clone(self.data.templates.names);
        self.data.names[v.name].construct(v.list);
      });
    } else {
      this.data.names = {};
    }
    return this.data.names;
  },
  // Required Vue plugin installation function
  install(Vue, options) {
    // Reference for callback functions
    var self = this;
    // Initiliase the Database when the device is ready
    Vue.cordova.on('deviceready', () => {
      console.log('Setting up the database');
      // Test Sqlite is installed and running
      window.sqlitePlugin.echoTest(() => {
        console.log("Sqlite is installed");
      }, () => {
        console.log("ERROR: Sqlite is not installed");
        throw new Error();
      });
      // Open connection to the database
      self.database = window.sqlitePlugin.openDatabase({name: 'brokenstars.db', location: 'default'})
      // Create Table structure
      self.database.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS ships (id integer primary key, name text, data text)');
      }, function(tx, e) {
          console.log("ERROR: " + e.message);
      });
    });
    Vue.prototype.$bsFactory = {
      getTemplate(list) {
        if (typeof self.data.templates[list] !== "object" || self.data.templates[list] === null) {
          console.log("getTemplate(): " + list + " object template is undefined");
          throw new Error();
        }
        return self.data.templates[list];
      },
      getShip() {
        return clone(self.data.templates.ships)
      },
      getNames() {
        if (typeof self.data.names !== "object" || self.data.names === null) {
          console.log("getNames(): Names object template is undefined");
          throw new Error();
        }
        return self.data.names;
      },
      getNameGenerator(list) {
        if (typeof self.data.templates.names !== "object" || self.data.templates.names === null) {
          console.log("getNameGenerator(): Names object template is undefined");
          throw new Error();
        }
        return self.data.names[list];
      }
    };
  }
};