export default {
  // User defined data
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
    if ( (index < 0) || (typeof index !== "number")) {
      return this.categories.dice[0];
    } else if (index >= this.categories.dice.length) {
      return this.categories.dice[this.categories.dice.length - 1];
    }
    return this.categories.dice[index];
  },
  getHullCategory(index) {
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
    return (value < 0) ? 0 : ((value >= this.categories.hull.length) ? this.categories.hull.length - 1 : value);
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
    var hullVal = parseInt(this.hull);
    return Math.ceil( hullVal - ((hullVal + 2 ) / 4) + 1 );
  },
  getBaseCrew() { return this.boundNearestFive(Math.floor(Math.pow(this.hull,1.5))+1); },
  getBasePower() { return this.boundNearestFive(Math.floor((this.hull*2.5)+Math.pow(this.hull,1.5))+5); },
  getBaseBulk() { return this.boundNearestTen(Math.floor((this.hull*2.5)+Math.pow(this.hull,2.5))+2); },
  getBaseAcceleration() { return this.boundNearestFive(Math.ceil((50-(Math.pow(this.hull,0.9)*5)))); },
  getBaseFTL() { return Math.abs(this.hull) + 1; },
  setHull(value) {
    var old = parseInt(this.hull);
    this.hull = this.boundHullValue(value);
    return (old !== this.hull);
  },
  // Derivatives
  getBulk() { return this.getBaseBulk(); },
  getCrew() { return this.getBaseCrew(); },
  getEvade() { return ( this.convertToDieValue(this.systems.autopilot) / 2) + 2; },
  getToughness() { return ( this.convertToDieValue(this.attributes.armour) / 2) + 2 + this.getSize(); },
  getPower() { return Math.ceil(this.getBasePower() * this.convertToDieMultiplier(this.attributes.power)); },
  getAcceleration() { return Math.ceil(this.getBaseAcceleration() * this.convertToDieMultiplier(this.attributes.engine)); },
  // Get price and creation points
  getPoints() {
    let points = 0
    for (var key in this.attributes) {
      if (this.attributes.hasOwnProperty(key)) {
        points += (parseInt(this.attributes[key]) - 1)
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
    let hullBasePrice = Math.pow(parseInt(this.hull)+1,2) * 10000
    let price = 0
    for (var key in this.attributes) {
      if (this.attributes.hasOwnProperty(key)) {
        price += (this.convertToDieMultiplier(this.attributes[key]) * hullBasePrice)
      }
    }
    for (var key in this.systems) {
      if (this.systems.hasOwnProperty(key)) {
        let temp = (this.convertToDieMultiplier(this.systems[key]) * hullBasePrice)
        price += (this.systems[key] > this.attributes.ai) ? (temp * 2) : temp
      }
    }
    return this.boundNearestFive(price)
  },
  // Data storage and retrieval functions

};