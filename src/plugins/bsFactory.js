// NPM clone library
var clone = require('clone');
export default {
  /**
   * Local Data variables
   * 
   * Stores variables to be used within this plugin
   */
  data: {
    templates: null,
    names: {},
    database: null,
    ships: []
  },
  /**
   * TEMPLATES and NAMES
   * 
   * Handles loading of templates and names (sourced from data files)
   */ 
  loadTemplates(values) {
    if (typeof values === "object" && values !== null) {
      this.data.templates = values;
    } else {
      this.data.templates = {};
    }
    return this.data.templates;
  },
  loadNames(values) {
    if (typeof this.data.templates.names !== "object" || this.data.templates.names === null) {
      console.error("loadNames(): Names object template is undefined");
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
  /**
   * VUE PLUGIN INSTALLATION
   */
  install(Vue, options) {
    /**
     * Reference for callback functions (especially the prototype)
     * 
     * Inside Vue.prototype.$bsFactory:
     *  - use 'self' to reference anything outside of the prototype scope
     *  - use 'this' to reference anything inside of the prototype scope
     */
    let self = this
    // Initiliase the database when the device is ready
    Vue.cordova.on('deviceready', () => {
      // Test Sqlite is installed and running
      window.sqlitePlugin.echoTest(() => {
        console.log("DB is installed");
      }, () => {
        console.error("ERROR: DB :Sqlite is not installed");
        throw new Error();
      });
      // Open connection to the database
      self.data.database = window.sqlitePlugin.openDatabase({name: 'brokenstars.db', location: 'default'})
      // Create Table structure and load ships
      self.data.database.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS ships (id integer primary key, name text, data text)');
        var query = "SELECT * FROM ships";
        tx.executeSql(query, [], function (tx, resultSet) {
          for(var x = 0; x < resultSet.rows.length; x++) {
            let tempShip = clone(self.data.templates.ships)
            tempShip.hydrate(resultSet.rows.item(x).name, resultSet.rows.item(x).data)
            console.log("LOADING: " + tempShip.name + ", Hull: " + tempShip)
            self.data.ships.push({
              name: resultSet.rows.item(x).name,
              ship: tempShip
            })
          }
        }, function (tx, error) {
            console.error('ERROR : DB SELECT => All ships : ' + error.message);
        });
      }, function(tx, e) {
          console.error("ERROR : DB : " + e.message);
      });
    });
    /**
     * VUE PLUGIN OBJECT
     * 
     * This is where the rest of the app will interface with this plugin
     */
    Vue.prototype.$bsFactory = {
      /**
       * Link to internal data
       */
      _data: {
        ships: self.data.ships
      },
      /**
       * Return a template object (named the same as the imported source data file)
       * 
       * @param String list 
       */
      getTemplate(list) {
        if (typeof self.data.templates[list] !== "object" || self.data.templates[list] === null) {
          console.error("getTemplate(): " + list + " object template is undefined");
          throw new Error();
        }
        return self.data.templates[list];
      },
      /**
       * Return a clone of the templated ship object
       */
      cloneShip() {
        return clone(self.data.templates.ships)
      },
      /**
       * Get a ship by it's name
       * 
       * @param String name 
       */
      getShip(name) {
        return self.data.ships.filter(function(ship) { return ship.name === this.name; } , {'name': name});
      },
      /**
       * Get a ship's ID by it's name
       * 
       * @param String name 
       */
      getShipID(name) {
        return self.data.ships.findIndex(function(ship) { return ship.name === this.name; } , {'name': name});
      },
      /**
       * Save a Ship object to the local array (and sync the database)
       * 
       * @param Ship ship 
       */
      saveShip(ship) {
        if (ship.hasOwnProperty('name') && ship.hasOwnProperty('hull') && ship.hasOwnProperty('attributes') && ship.hasOwnProperty('systems') && ship.hasOwnProperty('fittings') && ship.hasOwnProperty('weapons') && ship.hasOwnProperty('deflate')) {
          let findExistingShip = this.getShipID(ship.name)
          if (findExistingShip >= 0) {
            self.data.ships[findExistingShip].name = ship.name
            self.data.ships[findExistingShip].ship = ship
          } else {
            self.data.ships.push({
              name: ship.name,
              ship: ship
            })
          }
          this.syncShips()
          return (findExistingShip >= 0) ? 1 : 2;
        }
        return -1
      },
      /**
       * Synchronises database with internal storage
       */
      syncShips() {
        // Loop through array and save to database
        for (var index = 0; index < self.data.ships.length; index++) {
          this.storeShipInDB(self.data.ships[index].ship)
        }
      },
      /**
       * Save a Ship object to the local database
       * 
       * @param Ship ship 
       */
      storeShipInDB(ship) {
        if (ship.hasOwnProperty('name') && ship.hasOwnProperty('hull') && ship.hasOwnProperty('attributes') && ship.hasOwnProperty('systems') && ship.hasOwnProperty('fittings') && ship.hasOwnProperty('weapons') && ship.hasOwnProperty('deflate')) {
          let name = ship.name
          let data = ship.deflate()
          self.data.database.transaction(function(tx) {
            // Update if row exists
            tx.executeSql("UPDATE ships SET name = ?, data = ? WHERE name = ?;", [name, data, name], function(tx, res) {
              if (res.rowsAffected  > 0) {
                console.log("DB UPDATE => ship: " + name)
              }
            },
            function(tx, error) {
              console.error('ERROR : DB UPDATE : ' + error.message)
            });
            // Insert if Update failed
            tx.executeSql("INSERT INTO ships (name, data) SELECT ?, ? WHERE (SELECT Changes() = 0);", [name, data], function(tx, res) {
              if (res.rowsAffected  > 0) {
                console.log("DB INSERT => ship: " + name)
              }
            },
            function(tx, error) {
              console.error('ERROR : DB INSERT : ' + error.message);
            });
          }, function(tx, e) {
            console.error("ERROR : DB : " + e.message);
          })
        }
      },
      /**
       * Grab the object/array of Names
       */
      getNames() {
        if (typeof self.data.names !== "object" || self.data.names === null) {
          console.error("getNames(): Names object template is undefined");
          throw new Error();
        }
        return self.data.names;
      },
      /**
       * Generate using a specific name list
       * 
       * @param String list
       */
      getNameGenerator(list) {
        if (typeof self.data.templates.names !== "object" || self.data.templates.names === null) {
          console.error("getNameGenerator(): Names object template is undefined");
          throw new Error();
        }
        return self.data.names[list];
      }
    };
  }
};