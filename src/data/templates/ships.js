import Dice from './generic/dice'
import Fittings from './ship/fittings'
import Hull from './ship/hull'
import Weapons from './ship/weapons'
export default {
  // User defined data
  uuid: "",
  name: "",

  // Components
  dice: Dice,
  hulls: Hull,

  // Utility Functions
  boundNearestFive(value) {
    value = parseInt(value);
    return (value > 10) ? Math.round(value / 5) * 5 : value;
  },
  boundNearestTen(value) {
    value = parseInt(value);
    return (value > 20) ? Math.round(value / 10) * 10 : value;
  },

  // Attributes
  attributes: {
    ai: 'd4',
    armour: 'd4',
    bulk: 'd4',
    engine: 'd4',
    power: 'd4',
  },
  getAI() { return this.attributes.ai; },
  getArmour() { return this.attributes.armour; },
  getBulk() { return this.attributes.bulk; },
  getEngine() { return this.attributes.engine; },
  getPower() { return this.attributes.power; },
  setAI(value) {
    var old = this.attributes.ai;
    this.attributes.ai = this.dice.bound(value);
    return (old !== this.attributes.ai);
  },
  setArmour(value) {
    var old = this.attributes.armour;
    this.attributes.armour = this.dice.bound(value);
    return (old !== this.attributes.armour);
  },
  setBulk(value) {
    var old = this.attributes.bulk;
    this.attributes.bulk = this.dice.bound(value);
    return (old !== this.attributes.bulk);
  },
  setEngine(value) {
    var old = this.attributes.engine;
    this.attributes.engine = this.dice.bound(value);
    return (old !== this.attributes.engine);
  },
  setPower(value) {
    var old = this.attributes.power;
    this.attributes.power = this.dice.bound(value);
    return (old !== this.attributes.power);
  },

  // Systems
  systems: {
    autopilot: 'd4-2',
    ecm: 'd4-2',
    navigation: 'd4-2',
    operations: 'd4-2',
    repair: 'd4-2',
    sensors: 'd4-2',
    weapons: 'd4-2',
  },
  getAutopilot() { return this.systems.autopilot; },
  getECM() { return this.systems.ecm; },
  getNavigation() { return this.systems.navigation; },
  getOperations() { return this.systems.operations; },
  getRepair() { return this.systems.repair; },
  getSensors() { return this.systems.sensors; },
  getWeapons() { return this.systems.weapons; },
  setAutopilot(value) {
    var old = this.systems.autopilot;
    this.systems.autopilot = this.dice.bound(value);
    return (old !== this.systems.autopilot);
  },
  setECM(value) {
    var old = this.systems.ecm;
    this.systems.ecm = this.dice.bound(value);
    return (old !== this.systems.ecm);
  },
  setNavigation(value) {
    var old = this.systems.navigation;
    this.systems.navigation = this.dice.bound(value);
    return (old !== this.systems.navigation);
  },
  setOperations(value) {
    var old = this.systems.operations;
    this.systems.operations = this.dice.bound(value);
    return (old !== this.systems.operations);
  },
  setRepair(value) {
    var old = this.systems.repair;
    this.systems.repair = this.dice.bound(value);
    return (old !== this.systems.repair);
  },
  setSensors(value) {
    var old = this.systems.sensors;
    this.systems.sensors = this.dice.bound(value);
    return (old !== this.systems.sensors);
  },
  setWeapons(value) {
    var old = this.systems.weapons;
    this.systems.weapons = this.dice.bound(value);
    return (old !== this.systems.weapons);
  },

  // Hull information
  hull: 'Pod',
  getHull() { return this.hull },
  getSize() { return this.hulls.toValue(this.hull) },
  getIntegrity() {
    let hullInt = this.hulls.toValue(this.hull) + 2
    return Math.ceil( hullInt - ((hullInt + 2 ) / 4) + 1 );
  },
  getBasePower() {
    let hullInt = this.hulls.toValue(this.hull) + 2
    return Math.floor((hullInt*2) + Math.pow(hullInt,2)) + 4;
  },
  getBaseBulk() {
    let hullInt = this.hulls.toValue(this.hull) + 2
    return Math.floor((hullInt*2) + Math.pow(hullInt,2.5) + 2);
  },
  getBaseAcceleration() {
    let hullInt = this.hulls.toValue(this.hull) + 2
    return Math.ceil((50-(Math.pow(hullInt,0.9)*5)));
  },
  getBaseFTL() { return Math.ceil((this.hull + 1) / 2); },
  getBaseHardpoints() {
    let hullInt = this.hulls.toValue(this.hull) + 2
    return Math.ceil(((hullInt*2)+Math.pow(hullInt,2)) / 2);
  },
  setHull(value) {
    var old = this.hull;
    this.hull = this.hulls.bound(value);
    return (old !== this.hull);
  },

  // Derivatives
  getActionsAI() { return (this.dice.toValue(this.attributes.ai) / 2) -1; },
  getBulk() { return this.boundNearestTen(Math.ceil(this.getBaseBulk() * this.dice.toMultiplier(this.attributes.bulk))); },
  getBulkUsed() {
    let bulk = 0
    // for (var index = 0; index < this.fittings.length; index++) {
    //   bulk += parseInt(this.fittings[index].storage) * parseInt(this.fittings[index].total);
    // }
    // for (var index = 0; index < this.weapons.length; index++) {
    //   bulk += parseInt(this.weapons[index].storage) * parseInt(this.weapons[index].total);
    // }
    return bulk;
  },
  getCrew() {
    let crewNum = 1
    // for (var index = 0; index < this.fittings.length; index++) {
    //   crewNum += parseInt(this.fittings[index].crew) * parseInt(this.fittings[index].total);
    // }
    return crewNum;
  },
  getEvade() { return ( this.dice.toValue(this.systems.autopilot) / 2) + 2; },
  getToughness() { return ( this.dice.toValue(this.attributes.armour) / 2) + 2 + this.getSize(); },
  getPower() { return this.boundNearestFive(Math.ceil(this.getBasePower() * this.dice.toMultiplier(this.attributes.power))); },
  getPowerUsed() {
    let power = 0
    // for (var index = 0; index < this.fittings.length; index++) {
    //   power += parseInt(this.fittings[index].power) * parseInt(this.fittings[index].active);
    // }
    // for (var index = 0; index < this.weapons.length; index++) {
    //   power += parseInt(this.weapons[index].power) * parseInt(this.weapons[index].active);
    // }
    return power;
  },
  getAcceleration() { return Math.ceil(this.getBaseAcceleration() * this.dice.toMultiplier(this.attributes.engine)) * 6; },
  getAccelerationConverted() { return ((this.getAcceleration() * 5) * 1.5) / 6; },
  getFTL() { return Math.ceil(this.getBaseFTL() * (2 - this.dice.toMultiplier(this.attributes.engine))); },
  getHardpoints() { return Math.ceil(this.getBaseHardpoints() * this.dice.toMultiplier(this.attributes.armour)); },
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
        price += (this.dice.toValue(this.attributes[key]) * hullBasePrice)
      }
    }
    for (var key in this.systems) {
      if (this.systems.hasOwnProperty(key)) {
        let temp = (this.dice.toValue(this.systems[key]) * hullBasePrice)
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
  getMaintenanceCost() {
    return 0.5 * parseInt(this.getCost())
  },
  getMaintenanceDays() {
    return this.hulls.toValue(this.hull)
  },

  /**
   * Stores fittings, notes and weapons information
   */ 
  fittings: Fittings,
  notes: [],
  weapons: Weapons,
  
  /**
   * Generates a (hopefully) unique ship identifier
   */
  generateShipDesignation() {
    let length = Math.ceil(Math.random()*5) + 5
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1).toUpperCase();
  },

  /**
   * Convert Ship values into a JSON Object string
   */
  deflate() {
    return _.cloneDeep( {
      uuid: this.uuid,
      name: this.name,
      hull: this.hull,
      attributes: this.attributes,
      systems: this.systems,
      fittings: this.fittings.selected,
      weapons: this.weapons.selected,
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
      this.hull = this.hulls.bound(data.hull)
    }
    if (data.hasOwnProperty('attributes')) {
      this.attributes = data.attributes
    }
    if (data.hasOwnProperty('systems')) {
      this.systems = data.systems
    }
    if (data.hasOwnProperty('fittings')) {
      this.fittings.selected = data.fittings
    }
    if (data.hasOwnProperty('weapons')) {
      this.weapons.selected = data.weapons
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