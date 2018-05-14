import Locations from "./quests/location"
import Npc from "./quests/npc"
import Trait from "./quests/trait"
export default {
  getArtificial() {
    // The template
    let starter = {
      name: "",
      traits: []
    }
    // Select an option at random
    starter.name = Npc.artificial[Math.round(Math.random() * (Npc.artificial.length -1))]
    // Determine the traits
    let number_of_traits = Math.round(Math.random() * 2) + 1
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = Trait.artificial[Math.round(Math.random() * (Trait.artificial.length -1))]
      if ( ! starter.traits.includes(newValue)) {
        starter.traits.push( newValue )
      }
    }
    // Return the object
    return starter
  },
  getAlly() {
    // The template
    let starter = {
      name: "",
      traits: []
    }
    // Combined arrays
    let combined = [].concat(Npc.job, Npc.civilian, Npc.rogue)
    // Select an option at random
    starter.name = combined[Math.round(Math.random() * (combined.length -1))]
    // Determine the traits
    let number_of_traits = Math.round(Math.random() * 3) + 1
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = Trait.biological[Math.round(Math.random() * (Trait.biological.length -1))]
      if ( ! starter.traits.includes(newValue)) {
        starter.traits.push( newValue )
      }
    }
    // Return the object
    return starter
  },
  getEnemy() {
    // The template
    let enemy = {
      name: "",
      traits: []
    }
    // Combined arrays
    let combined = [].concat(Npc.illegal, Npc.rogue)
    // Select an option at random
    enemy.name = combined[Math.round(Math.random() * (combined.length -1))]
    // Determine the traits
    let number_of_traits = Math.round(Math.random() * 3) + 1
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = Trait.biological[Math.round(Math.random() * (Trait.biological.length -1))]
      if ( ! enemy.traits.includes(newValue)) {
        enemy.traits.push( newValue )
      }
    }
    // Return the object
    return enemy
  },
  getGroup() {
    // The template
    let starter = {
      name: "",
      traits: []
    }
    // Select an option at random
    starter.name = Npc.group[Math.round(Math.random() * (Npc.group.length -1))]
    // Determine the traits
    let number_of_traits = Math.round(Math.random() * 2) + 1
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = Trait.group[Math.round(Math.random() * (Trait.group.length -1))]
      if ( ! starter.traits.includes(newValue)) {
        starter.traits.push( newValue )
      }
    }
    // Return the object
    return starter
  },
  getOther() {
    // The template
    let starter = {
      name: "",
      traits: []
    }
    // Select an option at random
    starter.name = Npc.source[Math.round(Math.random() * (Npc.source.length -1))]
    // Return the object
    return starter
  },
  /**
   * Quest Starter format
   * {
   *    name: "String",
   *    traits: [
   *      "List of trait strings"
   *    ]
   * }
   */
  getStarter() {
    let name = Math.round(Math.random() * 3) + 1
    if (name == 1) {
      return this.getArtificial()
    } else if ( name == 2) {
      return this.getGroup()
    } else if ( name == 3) {
      return this.getOther()
    }
    return this.getAlly()
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
  getQuest() {
    // The template
    let quest = {
      name: "",
      traits: []
    }
    // Select an option at random
    quest.name = Npc.quest[Math.round(Math.random() * (Npc.quest.length -1))]
    // Determine the traits
    let number_of_traits = Math.round(Math.random()) + 1
    for (var i = 0; i < number_of_traits; i++) {
      let newValue = Trait.quest[Math.round(Math.random() * (Trait.quest.length -1))]
      if ( ! quest.traits.includes(newValue)) {
        quest.traits.push( newValue )
      }
    }
    // Is there a side mission component?
    if (Math.round(Math.random())) {
      let side = Npc.quest[Math.round(Math.random() * (Npc.quest.length -1))]
      if (side !== quest.name) {
        quest.side = side
      }
      let number_of_traits = Math.round(Math.random()) + 1
      for (var i = 0; i < number_of_traits; i++) {
        let newValue = Trait.quest[Math.round(Math.random() * (Trait.quest.length -1))]
        if ( ! quest.side.traits.includes(newValue)) {
          quest.side.traits.push( newValue )
        }
      }
    }
    // Return the object
    return quest
  },
  /**
   * Quest neutral format
   * {
   *    name: "String",
   *    traits: [
   *      "List of trait strings"
   *    ]
   * }
   */
  getNeutral() {
    let name = Math.round(Math.random() * 2) + 1
    if (name == 1) {
      return this.getArtificial()
    } else if ( name == 2) {
      return this.getGroup()
    }
    return this.getAlly()
  },
  /**
   * Quest antagonist format
   * {
   *    name: "String",
   *    traits: [
   *      "List of trait strings"
   *    ]
   * }
   */
  getAntagonist() {
    let name = Math.round(Math.random() * 2) + 1
    if (name == 1) {
      return this.getGroup()
    }
    return this.getEnemy()
  },
  // Locations only have it's type
  getLocation() {
    let combined = [].concat(Locations.rural, Locations.space, Locations.urban)
    // Select an option at random
    return combined[Math.round(Math.random() * (combined.length -1))]
  }
}