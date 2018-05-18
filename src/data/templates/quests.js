import Locations from "./quests/location"
import Npc from "./quests/npc"
import Trait from "./quests/trait"
export default {
  /**
   * Get a trait depending on the type
   * 
   * @param {String} type The type of trait to return
   * @returns String
   */
  getTrait(type) {
    let result = ''
    switch(type) {
      case 'artificial':
        result = Trait.artificial[Math.round(Math.random() * (Trait.artificial.length -1))]
        break;
      case 'biological':
        result = Trait.biological[Math.round(Math.random() * (Trait.biological.length -1))]
        break;
      case 'group':
        result = Trait.group[Math.round(Math.random() * (Trait.group.length -1))]
        break;
      default:
        result = Trait.quest[Math.round(Math.random() * (Trait.quest.length -1))]
        break;
    }
    return result
  },
  /**
   * Generate an individual as an object
   * 
   * {
   *    name: "",
   *    traits: []
   * }
   * 
   * @param {Boolean} alignment Hints at legal status
   * @return Object
   */
  getIndividual(alignment) {
    let result = {
      name: "",
      traits: []
    }
    // Valid lists
    let legal = ['artificial','job','civilian']
    let illegal = ['illegal','rogue']
    let chosen = (alignment) ? legal[Math.round(Math.random() * (legal.length -1))] : illegal[Math.round(Math.random() * (illegal.length -1))]
    // Grab from a name list
    result.name = Npc[chosen][Math.round(Math.random() * (Npc[chosen].length -1))]
    // Determine the traits
    let number_of_traits = Math.round(Math.random() * 3) + 1
    // Grab traits
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = (chosen !== 'artificial') ? this.getTrait('biological') : this.getTrait('artificial')
      if ( ! result.traits.includes(newValue)) {
        result.traits.push( newValue )
      }
    }
    return result
  },
  /**
   * Generate a faction as an object
   * 
   * {
   *    name: "",
   *    traits: [],
   *    members: []
   * }
   * 
   * @return Object
   */
  getFaction() {
    let result = {
      name: Npc.group[Math.round(Math.random() * (Npc.group.length -1))],
      traits: [],
      members: []
    }
    let alignment = Math.round(Math.random())
    // Determine the traits
    let number_of_traits = Math.round(Math.random() * 3) + 1
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = this.getTrait('group')
      if ( ! result.traits.includes(newValue)) {
        result.traits.push( newValue )
      }
    }
    // Determine the members
    let number_of_members = Math.round(Math.random() * 2) + 2
    for (var i = 0; i < number_of_members; i++) {
      alignment = (i >= (number_of_members/2)) ? 1 : alignment
      result.members.push(this.getIndividual(alignment) )
    }
    // Return the object
    return result
  },
  /**
   * Return a potential source to discover the quest
   * 
   * @return String
   */
  getSource() {
    return Npc.source[Math.round(Math.random() * (Npc.source.length -1))]
  },
  /**
   * Quest format
   * {
   *    name: "String",
   *    side: "String",
   *    traits: [
   *      "List of trait strings"
   *    ]
   * }
   */
  getQuest(isSide) {
    // The template
    let quest = {
      name: "",
      traits: []
    }
    // Select an option at random
    quest.name = Npc.quest[Math.round(Math.random() * (Npc.quest.length -1))]
    // Determine the traits
    let number_of_traits = Math.round(Math.random() * 2) + 1
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = this.getTrait()
      if ( ! quest.traits.includes(newValue)) {
        quest.traits.push( newValue )
      }
    }
    // Is there a side mission component?
    if (!isSide && Math.round(Math.random())) {
      quest.side = this.getQuest(true)
    }
    // Return the object
    return quest
  },
  /**
   * Locations only have it's type
   */
  getLocation() {
    let combined = [].concat(Locations.rural, Locations.space, Locations.urban)
    // Select an option at random
    return combined[Math.round(Math.random() * (combined.length -1))]
  },
  /**
   * Get a full quest packet
   * {
   *    quest: {},
   *    locations: [],
   *    factions: [],
   *    others: [],
   *    sources: [],
   * }
   * 
   * @return Object
   */
  get() {
    let result = {
      quest: this.getQuest(),
      locations: [],
      factions: [],
      others: [],
      sources: []
    }
    // Get location
    let locations = Math.round(Math.random() * 2) + 2
    for (var i = 0; i < locations; i++) {
      let newValue = this.getLocation()
      if ( ! result.locations.includes(newValue)) {
        result.locations.push( newValue )
      }
    }
    // Get factions
    let factions = Math.round(Math.random() * 2) + 2
    for (var i = 0; i < factions; i++) {
      result.factions.push( this.getFaction() )
    }
    // Get Others
    let others = Math.round(Math.random() * 3) + 2
    for (var i = 0; i < others; i++) {
      result.others.push( this.getIndividual(Math.round(Math.random)) )
    }
    // Get Sources
    let sources = Math.round(Math.random()) + 2
    for (var i = 0; i < sources; i++) {
      let newValue = this.getSource()
      if ( ! result.sources.includes(newValue)) {
        result.sources.push( newValue )
      }
    }
    return result
  }
}