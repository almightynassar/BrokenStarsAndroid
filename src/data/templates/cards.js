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
        id: "AMBSH",
        name: "Sudden Ambush",
        rarity: "copper",
        art: "AMBUSH.jpg",
        credit: "Tierno Beauregard",
        effect: "You and your allies are ambushed by a group of hostile creatures."
      },
      {
        id: "BLDLST",
        name: "Bloodlust",
        rarity: "copper",
        art: "spacemarines___last_stand_by_shockbolt.jpg",
        credit: "Raymond E Gaustadnes",
        effect: "When you incapacitate an enemy (or reduce them to below 0 hit points), \
        you can choose an enemy that you can see and make a second attack."
      },
      {
        id: "LNGTMNS",
        name: "Long Time, No See",
        rarity: "copper",
        art: "man_s_best_friend_by_thomaswievegg-d9eazom.jpg",
        credit: "Thomas Wievegg",
        effect: "An NPC you have never encountered before enters the scene. From this \
        point forward, you and the new NPC have been lifelong acquaintances."
      },
      {
        id: "RSRCFL",
        name: "Resourceful",
        rarity: "copper",
        art: "delicious_doomsday_by_alexiuss.jpg",
        credit: "Vitaly S. Alexius",
        effect: "You now have a piece of mundane equipment (that is not a weapon, \
        piece of armour, or a critical 'quest' item)."
      },
      {
        id: "THSWHCMBFR",
        name: "Those who came before",
        rarity: "copper",
        art: "ruins_by_vityar83.jpg",
        credit: "Ratushnyak Vitaliy",
        effect: "You have a historic connection to a location, current event, object, \
        or group. This connection may grant you additional knowledge or connections."
      },
      {
        id: "ONTHERUN",
        name: "On The Run",
        rarity: "copper",
        art: "chase_by_bpsola-d53c4x5.jpg",
        credit: "Bryan Marvin P. Sola",
        effect: "You come across a NPC, creature or group that are being pursued by, \
        or escaping from, something."
      },
      {
        id: "AGTTR",
        name: "Agitator",
        rarity: "copper",
        art: "ANARCHY.jpg",
        credit: "Angelz666",
        effect: "Use on an NPC you have never met before. That NPC now has secret, \
        subversive motivations against some authority or powerful figure."
      },
      {
        id: "RDSHRT",
        name: "Red Shirt",
        rarity: "copper",
        art: "romulan_spy_by_lady_vaako.jpg",
        credit: "Alien Fodder",
        effect: "Use to create a basic NPC that is willing to work for you. This NPC is \
        willing to complete any task, no matter how dangerous the work sounds."
      },
      // Silver cards
      {
        id: "BTTLSCR",
        name: "Battle Scar",
        rarity: "silver",
        art: "damaged_predator_2012_by_cantas78-d5eldcp.jpg",
        credit: "Gürcan",
        effect: "Use this card when you take damage. You no longer take the damage, \
        but instead gain some other permanent effect (or scar) based on the type \
        of attack that was negated. This 'effect' cannot be negated or removed \
        normally."
      },
      {
        id: "CHPSHT",
        name: "Cheap Shot",
        rarity: "silver",
        art: "super_punch_by_godtail.jpg",
        credit: "GODTAIL",
        effect: "Use this card when you hit with an attack. The target is also dazed \
        until the end of your next turn."
      },
      {
        id: "CHRM",
        name: "Charm",
        rarity: "silver",
        art: "BLACK_WIDOW.jpg",
        credit: "Michael Calandra",
        effect: "Add +3 to your Charisma modifier during your next skill check."
      },
      {
        id: "NMSS",
        name: "Nemesis",
        rarity: "silver",
        art: "the_last_line_by_hokunin-d1xzfrg.jpg",
        credit: "Prokopii Osipov",
        effect: "Choose a hostile NPC or creature. The chosen target is now a \
        recurring antagonist for your character. If you are in a combat encounter, \
        your nemesis will somehow escape if you win."
      },
      {
        id: "PTHTC",
        name: "Pathetic!",
        rarity: "silver",
        art: "just_for_fun___action_by_shockbolt.jpg",
        credit: "Raymond E Gaustadnes",
        effect: "Use when an enemy has hit you with an attack. They reroll that \
        attack, and must use the worse of the two results."
      },
      {
        id: "THNKFST",
        name: "Think Fast",
        rarity: "silver",
        art: "e151450eaccc1c96ec2174e068f056c9.jpg",
        credit: "John Barry Ballaran",
        effect: "Use this card instead of determining normal initiative. You \
        automatically gain first priority in initiative."
      },
      // Gold cards
      {
        id: "ACTNSRGE",
        name: "Action Surge",
        rarity: "gold",
        art: "brakage_wip__by_remton-d5374x5.jpg",
        credit: "Rémi",
        effect: "Use this card on your turn during a combat encounter. You may take an \
        additional action."
      },
      {
        id: "BLZOFGLRY",
        name: "In a Blaze of Glory",
        rarity: "gold",
        art: "rage_by_pjacubinas.jpg",
        credit: "Peter Jacubinas",
        effect: "Until the end of the combat encounter (within reason), your \
        character cannot be incapacitated or die. They gain immunity to all status \
        effects. They gain a +2 bonus to all rolls. At the end of the 5 rounds or the \
        combat encounter your character dies in such a way that they cannot be revived, \
        reskinned, backed up, or otherwise returned to the game."
      },
      {
        id: "DRMTCXT",
        name: "Dramatic Exit",
        rarity: "gold",
        art: "rim_runner_s_end_by_unusualsuspex-dbkll2t.jpg",
        credit: "Nige",
        effect: "Use this card when your character dies. Instead of dying, you leave \
        the scene in some fashion, only to return later (bruised and injured, but \
        otherwise alive)."
      },
      {
        id: "FACEOFF",
        name: "Face Off",
        rarity: "gold",
        art: "duel_by_syarul.jpg",
        credit: "Shahrul Nizam Selamat",
        effect: "Use before a combat encounter starts. Select one opponent; you \
        and that opponent will agree to an one-on-one duel. You and the opponent \
        may negotiate the terms of this duel. If anyone intefers during the duel, \
        the duel is called off and a normal combat encounter begins (penalties may \
        be given if the GM is not satisfied)."
      },
      {
        id: "PRTG",
        name: "Protégé",
        rarity: "gold",
        art: "shadow_of_tomorrow____jacker_by_ianllanas-d7gcbh0.jpg",
        credit: "Ian Llanas",
        effect: "Use this card on an existing NPC, or an NPC you have not met \
        before (GM's discretion). That NPC expresses an interest in becoming your \
        apprentice and learn from you."
      },
      {
        id: "3SCRWD",
        name: "Three's a Crowd",
        rarity: "gold",
        art: "battle_by_mariasemelevich-d83yal8.jpg",
        credit: "MariaSemelevich",
        effect: "Use this card during a combat encounter. A third force that is \
        hostile to both you and your enemies arrive to join the fight."
      },
      {
        id: "WHTHVWDN",
        name: "What Have We Done?!",
        rarity: "gold",
        art: "wine_solo_by_barontieri-d3covks.jpg",
        credit: "Thierry Doizon",
        effect: "Use at the start of a game session. You draw 3 new cards. The GM \
        also draws 3 cards and uses them as they see fit."
      },
      // Platinum cards
      {
        id: "AWESOME",
        name: "Who's Awesome?",
        rarity: "platinum",
        art: "old_ass_version_by_sharpwriter-d33u385.jpg",
        credit: "Jason ODIN Heuser",
        effect: "You're awesome. Automatically succeed on your last roll or dice test."
      },
      {
        id: "BGNNRSLCK",
        name: "Beginner's Luck",
        rarity: "platinum",
        art: "celsius_13___farmer_by_jan_wes-d92e7zk.jpg",
        credit: "Jan Weßbecher",
        effect: "Play this card before performing a skill test. Instead of your normal \
        skill dice, use a d12 instead."
      },
      {
        id: "DSXMCHN",
        name: "Deus Ex Machina",
        rarity: "platinum",
        art: "BIRTH_OF_A_STAR.jpg",
        credit: "Parker Droverson",
        effect: "An enemy or obstacle is dealt with by some outside force that is \
        neutral to you and your allies (GM's choice)."
      },
      {
        id: "MYSTRYSTRNGR",
        name: "Mysterious Stranger",
        rarity: "platinum",
        art: "mom_said_he_always_was_a_mysterious_fella____by_peixeserra-d9g2wpt.jpg",
        credit: "Pei the Pupper",
        effect: "A mysterious individual comes to your aide, only to leave as abruptly \
        as they came."
      },
      {
        id: "RNFRCMNTS",
        name: "Reinforcements!",
        rarity: "platinum",
        art: "reinforcements_by_intelman-d6cnrku.jpg",
        credit: "Indra Setiawan",
        effect: "An external force that is allied to you arrives to assist."
      },
      {
        id: "WNDFLL",
        name: "Windfall",
        rarity: "platinum",
        art: "3d_workshop___luxurious_spaceship_interior_by_stormxf3-d8laysr.jpg",
        credit: "StormXF3",
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