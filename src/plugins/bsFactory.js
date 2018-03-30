export default {
  /**
   * Local data variables that are used within this plugin
   */
  data: {
    // Dynamic loaded objects
    templates: null,
    // Dynamic loaded name objects
    names: {},
    // IndexedDB reference
    database: null,
    // IndexedDB database version
    version: 5,
    // IndexedDB database details
    db: {
      name: "BrokenStars",
      tables: [
        // Stores our Map Marker information
        {
          name: "MarkerStore",
          keyPath: "name",
          autoIncrement: false,
          indices: [
            "icon",
            "x",
            "y"
          ],
          populate(store) {}
        },
        // Stores our Stored Power information
        {
          name: "PowerStore",
          keyPath: "name",
          autoIncrement: false,
          indices: [],
          /**
           * Handles the dynamic loading of power list files.
           * We read all root files in src/data/names and create an object array
           * of the file contents. We then input this object into our database
           */
          populate(store) {
            var powerFiles = require.context("../data/powers", false, /\.js$/);
            var powerData = [];
            powerFiles.keys().forEach(function (file) {
              powerData.push( (powerFiles(file)).default );
            });
            powerData.forEach(function (v) {
              v.list.forEach(function (p) {
                store.put(p);
              })
            });
          }
        },
        // Stores our Setting information
        {
          name: "SettingStore",
          keyPath: "name",
          autoIncrement: false,
          indices: [],
          populate(store) {}
        },
        // Stores our Ship Information
        {
          name: "ShipStore",
          keyPath: "uuid",
          autoIncrement: false,
          indices: [
            "name"
          ],
          populate(store) {}
        }
      ]
    }
  },

  /**
   * Loads the default database
   */
  loadDefaultDB(database) {
    // Creates each of the tables defined in this.data.db.tables
    this.data.db.tables.forEach( function(table) {
      if(!database.objectStoreNames.contains(table.name)) {
        console.log("Making " + table.name)
        let objectStore = database.createObjectStore(table.name, { keyPath: table.keyPath, autoIncrement: table.autoIncrement })
        table.indices.forEach( function(index) {
          objectStore.createIndex(index, index, { unique: false })
        })
        table.populate(objectStore)
      }
    })
  },

  /**
   * Sanitizes the template object array
   * 
   * @param {object} values
   * @returns Local template object
   */
  loadTemplates(values) {
    if (typeof values === "object" && values !== null) {
      this.data.templates = values;
    } else {
      this.data.templates = {};
    }
    return this.data.templates;
  },

  /**
   * Builds each Markov name list from the array of input values
   * 
   * @param {object} values
   * @returns Local names object
   */
  loadNames(values) {
    if (typeof this.data.templates.names !== "object" || this.data.templates.names === null) {
      console.error("loadNames(): Names object template is undefined");
      throw new Error();
    }
    if (Array.isArray(values) && values !== null) {
      var self = this;
      // Builds our markov chain for the given list
      values.forEach(function (v) {
        self.data.names[v.name] = _.cloneDeep(self.data.templates.names);
        self.data.names[v.name].construct(v.list);
        self.data.names[v.name].description = v.description;
      });
    } else {
      this.data.names = {};
    }
    return this.data.names;
  },

  /**
   * Sanitizes the region object array
   * 
   * @param {object} values
   * @returns Local region object
   */
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
   * 
   * Inside Vue.prototype.$bsFactory:
   *  - use 'self' to reference anything outside of the prototype scope
   *  - use 'this' to reference anything inside of the prototype scope
   */
  install(Vue, options) {
    //Reference for callback functions (especially the prototype)
    let self = this

    // Initiliase the database when the device is ready
    Vue.cordova.on('deviceready', () => {
      // Ensure an implementation of indexedDB exists
      let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

      try {
        // Open (or create) a database connection and store the result to this.data.database
        let dbOpenRequest = indexedDB.open(self.data.db.name, self.data.version)
        dbOpenRequest.onsuccess = function(e){
          self.data.database = e.target.result
          self.data.database.onerror = function(e) {
            console.error("DB ERROR: " + e.target.errorCode);
          }
          console.log("Database Opened")
        }

        // This event handles the event when a new version of the database needs to be created
        dbOpenRequest.onupgradeneeded = function(e){
          console.warn("Database upgrade needed")
          let localDatabase = e.target.result

          // Creates each of the tables defined in this.data.db.tables
          self.loadDefaultDB(localDatabase)
        }

        // These two events handles errors and blockages when opening IndexedDB
        dbOpenRequest.onerror = function(e){
          console.error("DB Open Request Error: " + e.target.errorCode)
        }
        dbOpenRequest.onblocked = function(e){
          console.error("DB Open Request Blocked: " + e.target.errorCode)
        }
      } catch (e) {
        console.error("DB Open Request Error: " + e.target.errorCode)
      }
    })

    /**
     * VUE PLUGIN OBJECT
     * 
     * This is where the rest of the app will interface with this plugin
     */
    Vue.prototype.$bsFactory = {
      /**
       * Return a template object (named the same as the imported source data file)
       * 
       * @param {string} list 
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
        let clonedShip = _.cloneDeep(self.data.templates.ships)
        clonedShip.uuid = clonedShip.generateShipDesignation()
        return clonedShip
      },

      /**
       * Get various Database Object Stores
       * 
       * @param {string} storename The IndexedDB storename to grab
       */
      getStore(storename) {
        let store = _.startCase(_.toLower(storename)) + "Store"
        return self.data.database.transaction(store, 'readwrite').objectStore(store)
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
       * @param {string} list
       */
      getNameGenerator(list) {
        if (typeof self.data.templates.names !== "object" || self.data.templates.names === null) {
          console.error("getNameGenerator(): Names object template is undefined");
          throw new Error();
        }
        return self.data.names[list];
      },

      /**
       * Grabs the table information
       * 
       * @param {string} storename The IndexedDB storename to grab
       */
      getTable(storename) {
        let name = _.startCase(_.toLower(storename)) + "Store"
        return _.find(self.data.db.tables, function(t) { return t.name === name; })
      }
    }
  }
}