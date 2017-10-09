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
    ships: [],
    store: {
      ship: null
    },
    version: 2
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
  loadRegions(values) {
    if (typeof this.data.templates.regions !== "object" || this.data.templates.regions === null) {
      console.error("loadRegions(): Regions object template is undefined");
      throw new Error();
    }
    if (Array.isArray(values) && values !== null) {
      this.data.templates.regions.sectors = values
    }
    return this.data.templates.regions.sectors;
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
      // Ensure an implementation of indexedDB exists
      let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      try {
        // Open (or create) a database connection
        let dbOpenRequest = indexedDB.open("BrokenStars", self.data.version)
        // Handles database opening success event
        dbOpenRequest.onsuccess = function(e){
          // Store the result of opening the database
          self.data.database = e.target.result
          // Handles general errors on the database
          self.data.database.onerror = function(e) {
            console.error("DB ERROR: " + e.target.errorCode);
          }
          self.data.database.onversionchange = function(e){
            console.warn("Version change triggered")
            // Creating the Ship object store
            if(!self.data.database.objectStoreNames.contains("ShipStore")) {
              console.log("Making Ship Object Store");
              var objectStore = self.data.database.createObjectStore("ShipStore", { keyPath: "name", autoIncrement:false });
              objectStore.createIndex("hull", "hull", { unique: false })
              objectStore.createIndex("attributes", "attributes", { unique: false });
              objectStore.createIndex("systems", "systems", { unique: false });
              objectStore.createIndex("fittings", "fittings", { unique: false });
              objectStore.createIndex("notes", "notes", { unique: false });
              objectStore.createIndex("weapons", "weapons", { unique: false });
            }
          }
          console.log("Database Opened")
          let store = self.data.database.transaction('ShipStore').objectStore('ShipStore')
          let resultSet = store.getAll()
          resultSet.onsuccess = function() {
            if (resultSet.result && resultSet.result.constructor === Array) {
              for(var x = 0; x < resultSet.result.length; x++) {
                let tempShip = clone(self.data.templates.ships)
                tempShip.hydrate(resultSet.result[x])
                self.data.ships.push( tempShip )
              }
            }
          };
          resultSet.onerror = function() {
            console.error( 'DB FAILURE: Cannot load existing ships' );
          };
        }
        // This event handles the event whereby a new version of
        // the database needs to be created
        dbOpenRequest.onupgradeneeded = function(e){
          console.warn("Database upgrade needed")
          let localDatabase = e.target.result
          // Creating the Ship object store
          if(!localDatabase.objectStoreNames.contains("ShipStore")) {
            console.log("Making Ship Object Store");
            var objectStore = localDatabase.createObjectStore("ShipStore", { keyPath: "name", autoIncrement:false });
            objectStore.createIndex("hull", "hull", { unique: false });
            objectStore.createIndex("attributes", "attributes", { unique: false });
            objectStore.createIndex("systems", "systems", { unique: false });
            objectStore.createIndex("fittings", "fittings", { unique: false });
            objectStore.createIndex("notes", "notes", { unique: false });
            objectStore.createIndex("weapons", "weapons", { unique: false });
          }
        }
        dbOpenRequest.onerror = function(e){
          console.error("DB Open Request Error: " + e.target.errorCode)
        }
        dbOpenRequest.onblocked = function(e){
          console.error("DB Open Request Blocked: " + e.target.errorCode)
        }
      } catch (e) {
        console.error("DB Open Request Error: " + e.target.errorCode)
      }
    });
    /**
     * VUE PLUGIN OBJECT
     * 
     * This is where the rest of the app will interface with this plugin
     */
    Vue.prototype.$bsFactory = {
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
        let clonedShip = clone(self.data.templates.ships)
        clonedShip.uuid = clonedShip.generateShipDesignation()
        return clonedShip
      },
      /**
       * Sort the ships alphabetically
       */
      sortShips() {
        self.data.ships.sort(function(a,b) {
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
        }); 
      },
      /**
       * Get all ships
       */
      getShips() {
        this.sortShips()
        return self.data.ships
      },
      /**
       * Get a ship by it's name
       * 
       * @param String name 
       */
      getShip(name) {
        return self.data.ships.filter(function(ship) { return ship.name === this.name; } , {'name': name});
      },
      // Find a ship by it's uuid
      findShipByDesignation(uuid) {
        let matching = self.data.ships.filter(function(s) {
          return (s.uuid == this.uuid)
        }, {'uuid': uuid})
        if (matching.length == 1) {
          return matching[0]
        }
        return null
      },
      /**
       * Get a ship's ID by it's name
       * 
       * @param String name 
       */
      getShipID(uuid) {
        return self.data.ships.findIndex(function(ship) { return ship.uuid === this.uuid; } , {'uuid': uuid});
      },
      /**
       * Delete a named
       * 
       * @param String name 
       */
      deleteShip(name) {
        let index = this.getShipID(name)
        // Delete from variable
        self.data.ships.splice(index, 1)
        // Delete from database
        this.deleteShipInDB(name)
      },
      /**
       * Save a Ship object to the local array (and sync the database)
       * 
       * @param Ship ship 
       */
      saveShip(ship) {
        if (ship.hasOwnProperty('name') && ship.hasOwnProperty('hull') && ship.hasOwnProperty('attributes') && ship.hasOwnProperty('systems') && ship.hasOwnProperty('fittings') && ship.hasOwnProperty('weapons') && ship.hasOwnProperty('deflate')) {
          let findExistingShip = this.getShipID(ship.uuid)
          if (findExistingShip >= 0) {
            self.data.ships[findExistingShip] = ship
          } else {
            self.data.ships.push( ship )
          }
          this.storeShipInDB(ship)
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
          this.storeShipInDB(self.data.ships[index])
        }
      },
      /**
       * Get all Ships from the database
       */
      getAllShipsInSB() {
        let store = self.data.database.transaction('ShipStore').objectStore('ShipStore')
        let resultSet = store.getAll()
        self.data.ships = []
        resultSet.onsuccess = function() {
          if (typeof resultSet.request instanceof 'Array') {
            for(var x = 0; x < resultSet.request.length; x++) {
              let tempShip = clone(self.data.templates.ships)
              tempShip.hydrate(resultSet.request)
              self.data.ships.push( tempShip )
            }
          }
        };
        resultSet.onerror = function() {
          console.error( 'DB FAILURE: Cannot load existing ships' );
        };
      },
      /**
       * Save a Ship object to the local database
       * 
       * @param Ship ship 
       */
      storeShipInDB(ship) {
        if (ship.hasOwnProperty('name') && ship.hasOwnProperty('hull') && ship.hasOwnProperty('attributes') && ship.hasOwnProperty('systems') && ship.hasOwnProperty('fittings') && ship.hasOwnProperty('weapons') && ship.hasOwnProperty('deflate')) {
          let data = ship.deflate()
          let store = self.data.database.transaction('ShipStore', 'readwrite').objectStore('ShipStore')
          let resultSet = store.put(data);
          resultSet.onsuccess = function() {
            console.log( 'Ship successfully saved in database' );
          };
          resultSet.onerror = function() {
            console.error( 'DB FAILURE: Cannot save ship in database' );
          };
        }
      },
      /**
       * Delete a Ship object from the local database
       * 
       * @param String name
       */
      deleteShipInDB(name) {
        let store = self.data.database.transaction('ShipStore', 'readwrite').objectStore('ShipStore')
        let resultSet = store.delete(name)
        resultSet.onsuccess = function() {
          console.log( 'Ship successfully deleted in database' );
        };
        resultSet.onerror = function() {
          console.log( 'FAILURE' );
        };
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