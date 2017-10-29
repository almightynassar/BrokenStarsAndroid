// NPM clone library
var clone = require('clone');
export default {
  // User defined data
  uuid: "",
  name: "",
  // Categories
  categories: {
    dice: [
      "d4-2",
      "d4",
      "d6",
      "d8",
      "d10",
      "d12"
    ],
    hulls: [
      "Interceptor",
      "Shuttle",
      "Yacht",
      "Patrol",
      "Escort",
      "Corvette",
      "Frigate",
      "Cruiser",
      "Battleship",
      "Dreadnought",
      "Carrier",
      "Worldship"
    ],
  },
  getDiceCategory(index) {
    index = parseInt(index)
    if ( (index < 0) || (typeof index !== "number")) {
      return this.categories.dice[0];
    } else if (index >= this.categories.dice.length) {
      return this.categories.dice[this.categories.dice.length - 1];
    }
    return this.categories.dice[index];
  },
  getHullCategory(index) {
    index = parseInt(index)
    if ( (index < 0) || (typeof index !== "number")) {
      return this.categories.hulls[0];
    } else if (index >= this.categories.hulls.length) {
      return this.categories.hulls[this.categories.hulls.length - 1];
    }
    return this.categories.hulls[index];
  },
  // Utility Functions
  boundNearestFive(value) {
    value = parseInt(value);
    return (value > 10) ? Math.round(value / 5) * 5 : value;
  },
  boundNearestTen(value) {
    value = parseInt(value);
    return (value > 20) ? Math.round(value / 10) * 10 : value;
  },
  boundDiceValue(value) {
    value = parseInt(value);
    return (value < 0) ? 0 : ((value >= this.categories.dice.length) ? this.categories.dice.length - 1 : value);
  },
  boundHullValue(value) {
    value = parseInt(value)
    return (value < 0) ? 0 : ((value >= this.categories.hulls.length) ? this.categories.hulls.length - 1 : value);
  },
  convertToDieValue(value) { 
    value = parseInt(value) - 1;
    return parseInt(4 + (value * 2));
  },
  convertToDieMultiplier(value) {
    value = parseInt(value);
    return parseFloat((this.convertToDieValue(value) / 8) + 0.25);
  },
  // Attributes
  attributes: {
    ai: 1,
    armour: 1,
    bulk: 1,
    engine: 1,
    power: 1,
  },
  getAI() { return this.getDiceCategory(this.attributes.ai); },
  getArmour() { return this.getDiceCategory(this.attributes.armour); },
  getBulk() { return this.getDiceCategory(this.attributes.bulk); },
  getEngine() { return this.getDiceCategory(this.attributes.engine); },
  getPower() { return this.getDiceCategory(this.attributes.power); },
  setAI(value) {
    var old = parseInt(this.attributes.ai);
    this.attributes.ai = this.boundDiceValue(value);
    return (old !== this.attributes.ai);
  },
  setArmour(value) {
    var old = parseInt(this.attributes.armour);
    this.attributes.armour = this.boundDiceValue(value);
    return (old !== this.attributes.armour);
  },
  setBulk(value) {
    var old = parseInt(this.attributes.bulk);
    this.attributes.bulk = this.boundDiceValue(value);
    return (old !== this.attributes.bulk);
  },
  setEngine(value) {
    var old = parseInt(this.attributes.engine);
    this.attributes.engine = this.boundDiceValue(value);
    return (old !== this.attributes.engine);
  },
  setPower(value) {
    var old = parseInt(this.attributes.power);
    this.attributes.power = this.boundDiceValue(value);
    return (old !== this.attributes.power);
  },
  // Systems
  systems: {
    autopilot: 0,
    ecm: 0,
    navigation: 0,
    operations: 0,
    repair: 0,
    sensors: 0,
    weapons: 0,
  },
  getAutopilot() { return this.getDiceCategory(this.systems.autopilot); },
  getECM() { return this.getDiceCategory(this.systems.ecm); },
  getNavigation() { return this.getDiceCategory(this.systems.navigation); },
  getOperations() { return this.getDiceCategory(this.systems.operations); },
  getRepair() { return this.getDiceCategory(this.systems.repair); },
  getSensors() { return this.getDiceCategory(this.systems.sensors); },
  getWeapons() { return this.getDiceCategory(this.systems.weapons); },
  setAutopilot(value) {
    var old = parseInt(this.systems.autopilot);
    this.systems.autopilot = this.boundDiceValue(value);
    return (old !== this.systems.autopilot);
  },
  setECM(value) {
    var old = parseInt(this.systems.ecm);
    this.systems.ecm = this.boundDiceValue(value);
    return (old !== this.systems.ecm);
  },
  setNavigation(value) {
    var old = parseInt(this.systems.navigation);
    this.systems.navigation = this.boundDiceValue(value);
    return (old !== this.systems.navigation);
  },
  setOperations(value) {
    var old = parseInt(this.systems.operations);
    this.systems.operations = this.boundDiceValue(value);
    return (old !== this.systems.operations);
  },
  setRepair(value) {
    var old = parseInt(this.systems.repair);
    this.systems.repair = this.boundDiceValue(value);
    return (old !== this.systems.repair);
  },
  setSensors(value) {
    var old = parseInt(this.systems.sensors);
    this.systems.sensors = this.boundDiceValue(value);
    return (old !== this.systems.sensors);
  },
  setWeapons(value) {
    var old = parseInt(this.systems.weapons);
    this.systems.weapons = this.boundDiceValue(value);
    return (old !== this.systems.weapons);
  },
  // Hull information
  hull: 0,
  getHull() { return this.getHullCategory(this.hull); },
  getSize() { return parseInt(this.hull) - 1; },
  getIntegrity() {
    var hullInt = parseInt(this.hull);
    return Math.ceil( hullInt - ((hullInt + 2 ) / 4) + 1 );
  },
  getBasePower() {
    let hullInt = parseInt(this.hull)
    return Math.floor((hullInt*2) + Math.pow(hullInt,2)) + 4;
  },
  getBaseBulk() {
    let hullInt = parseInt(this.hull)
    return Math.floor((hullInt*2) + Math.pow(hullInt,2.5) + 2);
  },
  getBaseAcceleration() {
    let hullInt = parseInt(this.hull)
    return Math.ceil((50-(Math.pow(hullInt,0.9)*5)));
  },
  getBaseFTL() { return Math.ceil((this.hull + 1) / 2); },
  getBaseHardpoints() {
    let hullInt = parseInt(this.hull)
    return Math.ceil(((hullInt*2)+Math.pow(hullInt,2)) / 2);
  },
  setHull(value) {
    var old = parseInt(this.hull);
    this.hull = this.boundHullValue(value);
    return (old !== this.hull);
  },
  // Derivatives
  getActionsAI() { return (this.convertToDieValue(this.attributes.ai) / 2) -1; },
  getBulk() { return this.boundNearestTen(Math.ceil(this.getBaseBulk() * this.convertToDieMultiplier(this.attributes.bulk))); },
  getBulkUsed() {
    let bulk = 0
    for (var index = 0; index < this.fittings.length; index++) {
      bulk += parseInt(this.fittings[index].storage) * parseInt(this.fittings[index].total);
    }
    for (var index = 0; index < this.weapons.length; index++) {
      bulk += parseInt(this.weapons[index].storage) * parseInt(this.weapons[index].total);
    }
    return bulk;
  },
  getCrew() {
    let crewNum = 1
    for (var index = 0; index < this.fittings.length; index++) {
      crewNum += parseInt(this.fittings[index].crew) * parseInt(this.fittings[index].total);
    }
    return crewNum;
  },
  getEvade() { return ( this.convertToDieValue(this.systems.autopilot) / 2) + 2; },
  getToughness() { return ( this.convertToDieValue(this.attributes.armour) / 2) + 2 + this.getSize(); },
  getPower() { return this.boundNearestFive(Math.ceil(this.getBasePower() * this.convertToDieMultiplier(this.attributes.power))); },
  getPowerUsed() {
    let power = 0
    for (var index = 0; index < this.fittings.length; index++) {
      power += parseInt(this.fittings[index].power) * parseInt(this.fittings[index].active);
    }
    for (var index = 0; index < this.weapons.length; index++) {
      power += parseInt(this.weapons[index].power) * parseInt(this.weapons[index].active);
    }
    return power;
  },
  getAcceleration() { return Math.ceil(this.getBaseAcceleration() * this.convertToDieMultiplier(this.attributes.engine)) * 6; },
  getFTL() { return Math.ceil(this.getBaseFTL() * (2 - this.convertToDieMultiplier(this.attributes.engine))); },
  getHardpoints() { return Math.ceil(this.getBaseHardpoints() * this.convertToDieMultiplier(this.attributes.armour)); },
  getHardpointsUsed() {
    let points = 0
    for (var index = 0; index < this.weapons.length; index++) {
      points += parseInt(this.weapons[index].hardpoints) * parseInt(this.weapons[index].total);
    }
    return points;
  },
  // Get price and creation points
  getPoints() {
    let points = 0
    for (var key in this.attributes) {
      if (this.attributes.hasOwnProperty(key)) {
        points += (parseInt(this.attributes[key]) - 1)*2
      }
    }
    for (var key in this.systems) {
      if (this.systems.hasOwnProperty(key)) {
        let overflow = (this.systems[key] > this.attributes.ai) ? parseInt(this.systems[key]) - parseInt(this.attributes.ai) : 0
        let limit = (this.systems[key] > this.attributes.ai) ? parseInt(this.attributes.ai) : parseInt(this.systems[key])
        points += parseInt(limit + (overflow * 2))
      }
    }
    return points
  },
  getRank() {
    let points = this.getPoints()
    if ( points >= 60 ) {
      return "Superior"
    } else if ( points >= 40 ) {
      return "Advanced"
    } else if ( points >= 20 ) {
      return "Basic"
    }
    return "Budget"
  },
  getCost() {
    let hullBasePrice = this.boundNearestFive(Math.pow(parseInt(this.hull)+1,1.5) * 10)
    let price = 0
    for (var key in this.attributes) {
      if (this.attributes.hasOwnProperty(key)) {
        price += (this.convertToDieValue(this.attributes[key]) * hullBasePrice)
      }
    }
    for (var key in this.systems) {
      if (this.systems.hasOwnProperty(key)) {
        let temp = (this.convertToDieValue(this.systems[key]) * hullBasePrice)
        price += (this.systems[key] > this.attributes.ai) ? (temp * 2) : temp
      }
    }
    price += ( ( (this.getBulk() + this.getPower() + this.getHardpoints())/2) * hullBasePrice);
    price += (this.getPoints() * hullBasePrice);
    if (this.getPoints() > 20) {
      price = (price * (this.getPoints()/20))
    }
    return this.boundNearestFive(price) * 100
  },
  /**
   * Stores fittings, notes and weapons information
   */ 
  fittings: [],
  notes: [],
  weapons: [],
  sortFittings() {
    this.fittings.sort(function(a,b) {
      return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
    }); 
  },
  addFitting(fitting, total) {
    // Search if the fitting exists
    let index = this.searchFittingID(fitting.id)
    if (index >= 0) {
      // Add to existing fitting entry (deleting and adding it so that it triggers Vue)
      fitting['active'] = this.fittings[index].active + parseInt(total)
      fitting['total'] = this.fittings[index].total + parseInt(total)
      this.fittings.splice(index, 1)
    } else {
      // Create new fitting entry
      fitting['active'] = total
      fitting['total'] = total
    }
    this.fittings.push(fitting)
    this.sortFittings();
  },
  removeFitting(fitting, total) {
    // Search if the fitting exists
    let index = this.searchFittingID(fitting.id)
    if (index >= 0) {
      // Test if we are removing more than we have
      if (this.fittings[index].total <= total) {
        this.fittings.splice(index, 1);
      } else {
        this.fittings[index].total -= total
        // Bound our active number of fittings
        if (this.fittings[index].active >= this.fittings[index].total) {
          this.fittings[index].active = this.fittings[index].total
        }
      }
    }
    this.sortFittings();
  },
  activateFitting(fitting, total) {
    // Search if the fitting exists
    let index = this.searchFittingID(fitting.id)
    if (index >= 0) {
      // Update existing fitting entry (deleting and adding it so that it triggers Vue)
      let active = this.fittings[index].active + parseInt(total)
      let fTotal = this.fittings[index].total
      fitting['active'] = (active >= fTotal) ? fTotal : active
      fitting['total'] = fTotal
      this.fittings.splice(index, 1)
      this.fittings.push(fitting)
      this.sortFittings()
    }
  },
  deactivateFitting(fitting, total) {
    // Search if the fitting exists
    let index = this.searchFittingID(fitting.id)
    if (index >= 0) {
      // Update existing fitting entry (deleting and adding it so that it triggers Vue)
      let active = this.fittings[index].active - parseInt(total)
      let fTotal = this.fittings[index].total
      fitting['active'] = (active <= 0) ? 0 : active
      fitting['total'] = fTotal
      this.fittings.splice(index, 1)
      this.fittings.push(fitting)
      this.sortFittings()
    }
  },
  searchFitting(id) {
    return this.fittings.filter(function(fitting) { return fitting.id === this.id; } , {'id': id});
  },
  searchFittingID(id) {
    return this.fittings.findIndex(function(fitting) { return fitting.id === this.id; } , {'id': id});
  },
  sortWeapons() {
    this.weapons.sort(function(a,b) {
      return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
    }); 
  },
  addWeapon(weapon, total) {
    // Search if the weapon exists
    let index = this.searchWeaponID(weapon.id)
    if (index >= 0) {
      // Add to existing weapon entry (deleting and adding it so that it triggers Vue)
      weapon['active'] = this.weapons[index].active + parseInt(total)
      weapon['total'] = this.weapons[index].total + parseInt(total)
      this.weapons.splice(index, 1)
    } else {
      // Create new weapon entry
      weapon['active'] = total
      weapon['total'] = total
    }
    this.weapons.push(weapon)
    this.sortWeapons();
  },
  removeWeapon(weapon, total) {
    // Search if the weapon exists
    let index = this.searchWeaponID(weapon.id)
    if (index >= 0) {
      // Test if we are removing more than we have
      if (this.weapons[index].total <= total) {
        this.weapons.splice(index, 1);
      } else {
        this.weapons[index].total -= total
        // Bound our active number of weapons
        if (this.weapons[index].active >= this.weapons[index].total) {
          this.weapons[index].active = this.weapons[index].total
        }
      }
    }
    this.sortWeapons();
  },
  activateWeapon(weapon, total) {
    // Search if the weapon exists
    let index = this.searchWeaponID(weapon.id)
    if (index >= 0) {
      // Update existing weapon entry (deleting and adding it so that it triggers Vue)
      let active = this.weapons[index].active + parseInt(total)
      let fTotal = this.weapons[index].total
      weapon['active'] = (active >= fTotal) ? fTotal : active
      weapon['total'] = fTotal
      this.weapons.splice(index, 1)
      this.weapons.push(weapon)
      this.sortWeapons()
    }
  },
  deactivateWeapon(weapon, total) {
    // Search if the weapon exists
    let index = this.searchWeaponID(weapon.id)
    if (index >= 0) {
      // Update existing weapon entry (deleting and adding it so that it triggers Vue)
      let active = this.weapons[index].active - parseInt(total)
      let fTotal = this.weapons[index].total
      weapon['active'] = (active <= 0) ? 0 : active
      weapon['total'] = fTotal
      this.weapons.splice(index, 1)
      this.weapons.push(weapon)
      this.sortWeapons()
    }
  },
  searchWeapon(id) {
    return this.weapons.filter(function(weapon) { return weapon.id === this.id; } , {'id': id});
  },
  searchWeaponID(id) {
    return this.weapons.findIndex(function(weapon) { return weapon.id === this.id; } , {'id': id});
  },
  /**
   * Generatse a (hopefully) unique ship identifier
   */
  generateShipDesignation() {
    let length = Math.ceil(Math.random()*5) + 5
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1).toUpperCase();
  },
  /**
   * Convert Ship values into a JSON Object string
   */
  deflate() {
    return clone( {
      uuid: this.uuid,
      name: this.name,
      hull: this.hull,
      attributes: this.attributes,
      systems: this.systems,
      fittings: this.fittings,
      weapons: this.weapons,
      notes: this.notes
    })
  },
  /**
   * Load values from a JSON Object string
   * 
   * @param String name 
   * @param Object data 
   */
  hydrate(data) {
    this.name = data.name
    if (data.hasOwnProperty('hull')) {
      this.hull = this.boundHullValue(data.hull)
    }
    if (data.hasOwnProperty('attributes')) {
      this.attributes = data.attributes
    }
    if (data.hasOwnProperty('systems')) {
      this.systems = data.systems
    }
    if (data.hasOwnProperty('fittings')) {
      this.fittings = data.fittings
    }
    if (data.hasOwnProperty('weapons')) {
      this.weapons = data.weapons
    }
    if (data.hasOwnProperty('notes')) {
      this.notes = data.notes
    }
    if (data.hasOwnProperty('uuid')) {
      this.uuid = data.uuid.toUpperCase()
    } else {
      this.uuid = this.generateShipDesignation().toUpperCase()
    }
  }
};