var clone = require('clone')
/**
 * A card is defined as follows:
 *  - id: Unique identifier
 *  - name: Title of the card
 *  - rarity: Either "copper", "silver", "gold" or "platinum"
 *  - effect: The card's effect on gameplay
 */
export default {
    cards: [
      // Copper Cards
      {
        id: "LNGTMNS",
        name: "Long Time, No See",
        rarity: "copper",
        effect: "An NPC you have never encountered before enters the scene. From this \
        point forward, you and the new NPC have been lifelong acquaintances."
      },
      {
        id: "AMBSH",
        name: "Sudden Ambush",
        rarity: "copper",
        effect: "You and your allies are ambushed by a group of hostile creatures."
      },
      {
        id: "RSRCFL",
        name: "Resourceful",
        rarity: "copper",
        effect: "You now have a piece of mundane equipment (that is not a weapon, \
        piece of armour, or a critical 'quest' item)."
      },
      {
        id: "THSWHCMBFR",
        name: "Those who came before",
        rarity: "copper",
        effect: "You have a historic connection to a location, current event, object, \
        or group. This connection may grant you additional knowledge or connections."
      },
      {
        id: "ONTHERUN",
        name: "On The Run",
        rarity: "copper",
        effect: "You come across a NPC, creature or group that are being pursued by, \
        or escaping from, something."
      },
      // Silver cards
      {
        id: "BLDLST",
        name: "Bloodlust",
        rarity: "silver",
        effect: "When you incapacitate an enemy (or reduce them to below 0 hit points), \
        you can choose a nearby enemy and make a second attack."
      },
      {
        id: "BTTLSCR",
        name: "Battle Scar",
        rarity: "silver",
        effect: "Use this card when your character would normally die or become \
        incapacitated. You no longer take the damage that would have kill you, \
        but instead gain some other permanent effect (or scar) based on the type \
        of attack that was negated. This 'effect' cannot be negated or removed \
        normally."
      },
      {
        id: "CHPSHT",
        name: "Cheap Shot",
        rarity: "silver",
        effect: "Use this card when you hit with an attack. The target is also dazed \
        until the end of your next turn."
      },
      {
        id: "CHRM",
        name: "Charm",
        rarity: "silver",
        effect: "Add +3 to your Charisma modifier during your next skill check."
      },
      {
        id: "NMSS",
        name: "Nemesis",
        rarity: "silver",
        effect: "Choose a hostile NPC or creature. The chosen target is now a \
        recurring antagonist for your character. If you are in a combat encounter, \
        your nemesis will somehow escape if you win."
      },
      {
        id: "PTHTC",
        name: "Pathetic!",
        rarity: "silver",
        effect: "Use when an enemy has hit you with an attack. They reroll that \
        attack, and must use the worse of the two results."
      },
      {
        id: "THNKFST",
        name: "Think Fast",
        rarity: "silver",
        effect: "Use this card instead of determining normal initiative. You \
        automatically gain first priority in initiative."
      },
      // Gold cards
      {
        id: "ACTNSRGE",
        name: "Action Surge",
        rarity: "gold",
        effect: "Use this card on your turn during a combat encounter. You may take an \
        additional action."
      },
      {
        id: "BLZOFGLRY",
        name: "In a Blaze of Glory",
        rarity: "gold",
        effect: "For the next 5 turns or until the end of the combat encounter, your \
        character cannot be incapacitated or die. They gain immunity to all status \
        effects. They gain a +2 bonus to all rolls. At the end of the 5 rounds or the \
        combat encounter your character dies in such a way that they cannot be revived, \
        reskinned, backed up, or otherwise returned to the game."
      },
      {
        id: "DRMTCXT",
        name: "Dramatic Exit",
        rarity: "gold",
        effect: "Use this card when your character would normally die or become \
        incapacitated. Instead of dying, you leave the scene in some fashion, \
        only to return later (bruised and injured, but otherwise alive)."
      },
      {
        id: "FACEOFF",
        name: "Face Off",
        rarity: "gold",
        effect: "Use before a combat encounter starts. Select one opponent; you \
        and that opponent will agree to an one-on-one duel. You and the opponent \
        may negotiate the terms of this duel (including the 'prizes'). If anyone \
        intefers during the duel, the duel is called off and a normal combat \
        encounter begins. Your GM may give out penalties if the terms of the duel \
        is not satisfied."
      },
      {
        id: "PRTG",
        name: "Protege",
        rarity: "gold",
        effect: "Use this card on an existing NPC, or an NPC you have not met \
        before (GM's discretion). That NPC expresses an interest in becoming your \
        apprentice and learn from you."
      },
      {
        id: "3SCRWD",
        name: "Three's a Crowd",
        rarity: "gold",
        effect: "Use this card during a combat encounter. A third force that is \
        hostile to both you and your enemies arrive to join the fight."
      },
      {
        id: "WHTHVWDN",
        name: "What Have We Done?!",
        rarity: "gold",
        effect: "You draw 3 new cards. The GM also draws 3 cards and uses them as \
        they see fit."
      },
      // Platinum cards
      {
        id: "AWESOME",
        name: "Who's Awesome?",
        rarity: "platinum",
        effect: "You're awesome. Automatically succeed on your last roll or dice test."
      },
      {
        id: "BGNNRSLCK",
        name: "Beginner's Luck",
        rarity: "platinum",
        effect: "When you play this card, chose a skill that you are untrained in. For \
        the next hour, you cannot fail skill checks in that skill (you must still roll \
        the check)."
      },
      {
        id: "DSXMCHN",
        name: "Deus Ex Machina",
        rarity: "platinum",
        effect: "An enemy or obstacle is dealt with by some outside force that is \
        neutral to you and your allies (GM's choice)."
      },
      {
        id: "MYSTRYSTRNGR",
        name: "Mysterious Stranger",
        rarity: "platinum",
        effect: "A mysterious individual comes to your aide, only to leave as abruptly \
        as they came."
      },
      {
        id: "RNFRCMNTS",
        name: "Reinforcements!",
        rarity: "platinum",
        effect: "An external force that is allied to you arrives to help assist."
      },
      {
        id: "WNDFLL",
        name: "Windfall",
        rarity: "platinum",
        effect: "You inherit, find, or an opportunity otherwise presents itself that \
        will increase your wealth substantially (note that you do not recieve the new \
        wealth immediately)."
      },
    ],
    search(id) {
      return this.cards.filter(function(card) { return card.id === this.id; } , {'id': id});
    },
    getRarity(rarity) {
      return this.cards.filter(function(card) { return card.rarity === this.rarity; } , {'rarity': rarity})
    },
    grab(num) {
      let hand = []
      for (var index = 0; index < num; index++) {
        /**
         * 'Roll' a number between 1 and 20.
         * - 1 to 10 = copper
         * - 11 to 15 = silver
         * - 16 to 19 = gold
         * - 20 = platinum
         */
        let rarityChance = Math.floor(Math.random() * 19) + 1
        let rarity = (rarityChance <= 10) ? 'copper' : ((rarityChance <= 16) ? 'silver' : ((rarityChance <= 19) ? 'gold' : 'platinum')) 
        let selected = this.getRarity(rarity)
        hand.push( clone(selected[Math.floor(Math.random()*selected.length)]) )
      }
      return hand
    }
  }