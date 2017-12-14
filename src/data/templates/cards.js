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
      /**
       * COPPER
       * 
       * Copper cards generally have a minimal impact on game mechanics, and have a
       * minor impact on role play. They are meant to spice up a session by introducing
       * interesting things the players can do or use.
       */
      {
        id: "AGTTR",
        name: "Agitator",
        rarity: "copper",
        art: "ANARCHY.jpg",
        credit: "Angelz666",
        source: "https://www.deviantart.com/art/Anarchy-25147533",
        effect: "Play at the start of a game session. The GM will secretly select an NPC \
        you will encounter during the game session. That NPC now has secret, subversive \
        motivations against some authority or powerful figure. They will take action on \
        their secret plans during the session."
      },
      {
        id: "AMBSH",
        name: "Sudden Ambush",
        rarity: "copper",
        art: "AMBUSH.jpg",
        credit: "Tierno Beauregard",
        source: "https://ourlak.deviantart.com/art/Ambush-178992855",
        effect: "Play at the start of a game session. You or your allies are going to \
        be ambushed by a group of hostiles. The ambush can happen off-scene and away \
        from the player's characters; if so, the player's characters must learn about \
        the ambush during the game session."
      },
      {
        id: "CRMINPRGRSS",
        name: "Crime in Progress",
        rarity: "copper",
        art: "cornered_by_dream_monger-d5avmrl.jpg",
        credit: "AK-ART",
        source: "https://adamkuczek.deviantart.com/art/Cornered-320602881",
        effect: "Play at the start of a game session. During the session, you will somehow \
        stumble into a crime, terrorist attack or other illegal activity that is currently \
        in progress. As you enter, the authorities mount their response."
      },
      {
        id: "DSSTR",
        name: "Disaster",
        rarity: "copper",
        art: "sabotage_by_kingcloud-d542n1l.jpg",
        credit: "Jordan Grimmer",
        source: "https://www.deviantart.com/art/Sabotage-309172521",
        effect: "Play at the start of a game session. During the session, you will somehow \
        stumble into a disaster (natural or otherwise). The disaster will begin while you \
        are on the planet, space station or ship. The disaster is not the result of sabotage \
        or terrorism."
      },
      {
        id: "EMBRRSSNG",
        name: "Embarrassing",
        rarity: "copper",
        art: "hold_up_by_messiah972-d9b59iz.jpg",
        credit: "Raymond SEBASTIEN",
        source: "https://messiah972.deviantart.com/art/Hold-up-562916987",
        effect: "When played, randomly select a significant character in the scene \
        (including player characters, allies, hostiles, and active neutrals). That \
        character will suddenly fall to an embarrassing but harmless situations (as \
        chosen by the GM)."
      },
      {
        id: "GMBLR",
        name: "Gambler",
        rarity: "copper",
        art: "the_grim_gambler_by_telmand-dax0yrj.jpg",
        credit: "Przemek",
        source: "https://telmand.deviantart.com/art/The-Grim-Gambler-660134143",
        effect: "Play before you make a skill test. Every raise you make on this skill \
        test will allow you to draw one extra card. However, failing the skill test will \
        mean you must discard one of your cards from your hand. If you have no cards then \
        you must randomly discard a card from another player's hand (not including the GM). \
        You must resolve this card before any bennies or rerolls take effect."
      },
      {
        id: "INQSTN",
        name: "Inquisition",
        rarity: "copper",
        art: "the_interrogation_by_estreet-d7y9eua.jpg",
        credit: "Ian Grainger",
        source: "https://estreet.deviantart.com/art/The-Interrogation-480809314",
        effect: "Play at the start of a game session. You or your allies are going to \
        be subjected to an unexepected inquistion or interrogation. The reason for the \
        inquisition may be real or fabricated, legal or illegal, and for any faction. \
        The tools used by the inquisitors are surprise, fear, ruthless efficiency, and a \
        fanatical devotion to the cause."
      },
      {
        id: "LNGTMNS",
        name: "Long Time, No See",
        rarity: "copper",
        art: "man_s_best_friend_by_thomaswievegg-d9eazom.jpg",
        credit: "Thomas Wievegg",
        source: "https://thomaswievegg.deviantart.com/art/Man-s-best-friend-568223014",
        effect: "Play when you first meet a NPC. From this point forward, you and the NPC \
        have been lifelong acquaintances (you may or may not have been on friendly terms). \
        The GM and yourself will use your background to determine the story of how you first \
        met. This does not change the motives or intentions the NPC had prior to meeting you \
        again, but it will colour it."
      },
      {
        id: "MYOLDHNT",
        name: "My Old Haunt",
        rarity: "copper",
        art: "robot_bar_tender_by_neisbeis-d4e0bwa.jpg",
        credit: "Ignacio Bazán Lazcano",
        source: "https://neisbeis.deviantart.com/art/Robot-bar-tender-265394746",
        effect: "Play when you are in an urban or populated area. You know of, or stumble \
        across, an old favourite place of yours. This place may be a dive bar, nightclub, \
        café, library, or other place with your favourite past-time. This place is added to \
        your background. The staff and clientele may or may not remember you, depending on \
        how long you were away."
      },
      {
        id: "NMSS",
        name: "Nemesis",
        rarity: "copper",
        art: "the_last_line_by_hokunin-d1xzfrg.jpg",
        credit: "Prokopii Osipov",
        source: "https://hokunin.deviantart.com/art/The-Last-Line-117546892",
        effect: "Choose a hostile NPC or creature (they do not have to be currently in \
        the scene). The chosen target is now a recurring antagonist for your character. \
        If you are currently in a combat encounter, your nemesis will somehow escape if \
        you win (and plot your eventual demise)."
      },
      {
        id: "ONTHERUN",
        name: "On The Run",
        rarity: "copper",
        art: "chase_by_bpsola-d53c4x5.jpg",
        credit: "Bryan Marvin P. Sola",
        source: "https://bpsola.deviantart.com/art/Chase-307935977",
        effect: "Play at the start of the game session. You will come across a NPC, \
        creature or group that are being pursued by, or are escaping from, something. \
        The chased or the chasers may seek your aid in some fashion."
      },
      {
        id: "PRPRTODIE",
        name: "Prepare to Die!",
        rarity: "copper",
        art: "217_365_on_the_hunt_by_snatti89-d9tg6fk.jpg",
        credit: "Atey Majeed Ghailan",
        source: "https://www.deviantart.com/art/217-365-On-the-hunt-593659280",
        effect: "Play at the start of the game session. You will come across a NPC \
        or group that wants revenge on you and/or your allies. The slight may be real \
        or imagined; their reasons and motivations are up to the GM."
      },
      {
        id: "PRSNLSTK",
        name: "Personal Stake",
        rarity: "copper",
        art: "commission__akachi_by_tjota-dbbhbu0.jpg",
        credit: "Jackson Tjota",
        source: "https://tjota.deviantart.com/art/Commission-Akachi-684412200",
        effect: "Use to create a personal stake in the plot. Randomly select a player's \
        character that is currently involved in the scene. The character now has a personal \
        stake in the active quest (or an additional stake if they were already invested). \
        This stake can include familial ties, love interests, political ideology or financial \
        incentives."
      },
      {
        id: "RSRCFL",
        name: "Resourceful",
        rarity: "copper",
        art: "delicious_doomsday_by_alexiuss.jpg",
        credit: "Vitaly S. Alexius",
        source: "https://alexiuss.deviantart.com/art/Delicious-doomsday-171336787",
        effect: "You 'find' a piece of mundane equipment that makes sense for the \
        location and environment. This equipment CANNOT be a weapon, piece of armour, \
        or a plot critical 'quest' item. Some examples of equipment that can be found \
        include clothing, electronics, food, medical supplies, and tools."
      },
      {
        id: "RMNC",
        name: "Romance",
        rarity: "copper",
        art: "romance_beyond_understanding_by_thatuliel-d9kfx49.jpg",
        credit: "Ulises",
        source: "https://ulielart.deviantart.com/art/Romance-Beyond-Understanding-578530665",
        effect: "Use to create a romantic connection between characters. Randomly select \
        a character that is currently involved in the scene (including players, neutrals \
        and hostiles), then randomly select a valid romance target (taking into account the \
        character's preferences). These two characters will now have some sort of complicated \
        romantic relationship (one-way interest, forbidden love, or some other complication)."
      },
      {
        id: "RSRCH",
        name: "Research",
        rarity: "copper",
        art: "dragon_dreams_ii_by_tjota-dbueqpc.jpg",
        credit: "Jackson Tjota",
        source: "https://tjota.deviantart.com/art/Dragon-Dreams-II-716204208",
        effect: "You discover, stumble upon, or otherwise find a clue or piece of \
        information related to the current plot. The GM determines the detail and nature \
        of this clue."
      },
      {
        id: "THSWHCMBFR",
        name: "Those who came before",
        rarity: "copper",
        art: "ruins_by_vityar83.jpg",
        credit: "Ratushnyak Vitaliy",
        source: "https://vityar83.deviantart.com/art/Ruins-140495002",
        effect: "You have a historic connection to a location, current event, object, \
        or group. This connection may grant you additional knowledge or connections. \
        This connection now forms an integral part of your character's backstory."
      },
      {
        id: "TRVLNGMRCHT",
        name: "Travelling Merchant",
        rarity: "copper",
        art: "rogues_galaxy___the_crafty_merchant_by_alexkonstad-d8d4ubr.jpg",
        credit: "Alex Konstad",
        source: "https://alexkonstad.deviantart.com/art/Rogues-Galaxy-The-crafty-merchant-505790343",
        effect: "Play at the start of the game session. You will come across a \
        travelling merchant that has many exotic and rare goods for sale. The merchant \
        may or may not require you to go on a quest in return for one of his most precious \
        items."
      },
      {
        id: "XOTICVSTR",
        name: "Exotic Visitor",
        rarity: "copper",
        art: "alien_space_commander_by_concept_art_house-d63m7wq.jpg",
        credit: "Concept Art House",
        source: "https://concept-art-house.deviantart.com/art/Alien-Space-Commander-368872586",
        effect: "Play at the start of a session. You will come across one or more \
        NPCs travellers who are from a place you have never visited before. The exotic \
        visitors will request your aid in something."
      },
      /**
       * SILVER
       * 
       * Silver cards generally have a minor impact on game mechanics, or an impact
       * on role play. They are meant to be a bonus to the player during an encounter.
       */
      // Dramatic flourish (do some stunt using athletics, persuasion or taunt to add +2 bonus to attack)
      {
        id: "BLDLST",
        name: "Bloodlust",
        rarity: "silver",
        art: "spacemarines___last_stand_by_shockbolt.jpg",
        credit: "Raymond E Gaustadnes",
        source: "https://shockbolt.deviantart.com/art/Spacemarines-Last-stand-87768363",
        effect: "When you incapacitate an enemy (or reduce them to below 0 hit points), \
        you can choose another enemy that you can see and make a second attack."
      }, 
      {
        id: "BTTLSCR",
        name: "Battle Scar",
        rarity: "silver",
        art: "damaged_predator_2012_by_cantas78-d5eldcp.jpg",
        credit: "Gürcan",
        source: "https://www.deviantart.com/art/damaged-Predator-2012-326842585",
        effect: "Use this card when you take damage. You no longer take that damage, \
        but instead gain some other permanent effect (or scar) based on the type \
        of attack that was negated. This 'effect' cannot be negated or removed \
        normally. You cannot use this card if the damage would result in your character \
        dying, becoming incapacitated or reduced to below 0 hit points."
      },
      {
        id: "CHPSHT",
        name: "Cheap Shot",
        rarity: "silver",
        art: "super_punch_by_godtail.jpg",
        credit: "GODTAIL",
        source: "https://godtail.deviantart.com/art/Super-punch-136235824",
        effect: "Use this card when you hit with an attack. The target is also dazed \
        until the end of your next turn."
      },
      {
        id: "CHRM",
        name: "Charm",
        rarity: "silver",
        art: "BLACK_WIDOW.jpg",
        credit: "Michael Calandra",
        source: "http://www.calandrastudio.com/blackwidow.html",
        effect: "Add +2 to your Charisma modifier during your next skill check."
      },
      {
        id: "PTHTC",
        name: "Pathetic!",
        rarity: "silver",
        art: "just_for_fun___action_by_shockbolt.jpg",
        credit: "Raymond E Gaustadnes",
        source: "https://www.deviantart.com/art/Just-for-fun-action-109819599",
        effect: "Use when an enemy has hit you with an attack. They reroll that \
        attack, and must use the worse of the two results."
      },
      {
        id: "RDSHRT",
        name: "Red Shirt",
        rarity: "silver",
        art: "romulan_spy_by_lady_vaako.jpg",
        credit: "Alien Fodder",
        source: "https://alienfodder.deviantart.com/art/Romulan-Spy-78356132",
        effect: "Use to create a basic unskilled NPC that is willing to work for you. \
        This NPC is willing to complete almost any task, no matter how dangerous the \
        work sounds (however, they will not commit suicide and have some sense of self-\
        preservation)."
      },
      {
        id: "THNKFST",
        name: "Think Fast",
        rarity: "silver",
        art: "e151450eaccc1c96ec2174e068f056c9.jpg",
        credit: "John Barry Ballaran",
        source: "https://jbballaran.deviantart.com/art/assault-armor-s1-1-117968882",
        effect: "Use this card instead of determining normal initiative. You \
        automatically gain first priority in initiative."
      },
      /**
       * GOLD
       * 
       * Silver cards generally have a big impact on game mechanics or role play. 
       * They are meant to have a big impact on the session as a whole.
       */
      // Pray I do not alter it further (alter one and only aspect of a quest)
      // Parlay (Change combat to social encounter)
      {
        id: "ACTNSRGE",
        name: "Action Surge",
        rarity: "gold",
        art: "brakage_wip__by_remton-d5374x5.jpg",
        credit: "Rémi",
        source: "https://www.deviantart.com/art/BRAKAGE-WIP-307702697",
        effect: "Use this card on your turn during a combat encounter. You may take an \
        additional action."
      },
      {
        id: "BLZOFGLRY",
        name: "In a Blaze of Glory",
        rarity: "gold",
        art: "rage_by_pjacubinas.jpg",
        credit: "Peter Jacubinas",
        source: "https://pjacubinas.deviantart.com/art/Rage-169762670",
        effect: "Until the end of the combat encounter (within reason), your character \
        cannot be incapacitated or die. They gain immunity to all status effects. They \
        gain a +2 bonus to all rolls. At the end of the 5 rounds or the combat encounter \
        (whichever comes first), your character dies in such a way that they cannot be \
        revived, reskinned, backed up, or otherwise returned to the game."
      },
      {
        id: "DRMTCXT",
        name: "Dramatic Exit",
        rarity: "gold",
        art: "rim_runner_s_end_by_unusualsuspex-dbkll2t.jpg",
        credit: "Nige",
        source: "https://www.deviantart.com/art/Rim-Runner-s-End-699727349",
        effect: "Use this card when your character dies. Instead of dying, you leave \
        the scene in some fashion, only to return later (bruised and injured, but \
        otherwise alive). You also gain some other permanent effect (or scar) based on \
        the type of attack that was negated. This 'effect' cannot be negated or removed \
        normally."
      },
      {
        id: "FACEOFF",
        name: "Face Off",
        rarity: "gold",
        art: "duel_by_syarul.jpg",
        credit: "Shahrul Nizam Selamat",
        source: "https://syarul.deviantart.com/art/duel-123103888",
        effect: "Use before a combat encounter starts. You and the hostiles will somehow \
        agree to a duel, selecting one and only one combatant from each group (as there may \
        be more than two factions). You and the opponent(s) may negotiate the terms and \
        rules of this duel. If anyone intefers with the duel, the duel is called off and a \
        normal combat encounter begins (with penalties decided by the GM)."
      },
      {
        id: "PRTG",
        name: "Protégé",
        rarity: "gold",
        art: "shadow_of_tomorrow____jacker_by_ianllanas-d7gcbh0.jpg",
        credit: "Ian Llanas",
        source: "https://ianllanas.deviantart.com/art/Shadow-of-Tomorrow-Jacker-450711828",
        effect: "Use to create a low level skilled NPC that is willing to work and learn \
        under you. This NPC has expressed a keen interest in becoming your apprentice and \
        will complete most tasks set out for them (however, they will not commit suicide \
        and have some sense of self-preservation)."
      },
      {
        id: "3SCRWD",
        name: "Three's a Crowd",
        rarity: "gold",
        art: "battle_by_mariasemelevich-d83yal8.jpg",
        credit: "MariaSemelevich",
        source: "https://mariasemelevich.deviantart.com/art/Battle-490368284",
        effect: "A third force that is hostile to both you and your enemies arrive. \
        This third force must be willing to attack both sides equally (the 'who' is \
        up to the GM)"
      },
      {
        id: "WHTHVWDN",
        name: "What Have We Done?!",
        rarity: "gold",
        art: "wine_solo_by_barontieri-d3covks.jpg",
        credit: "Thierry Doizon",
        source: "https://barontieri.deviantart.com/art/Wine-solo-202714588",
        effect: "Use at the start of a game session. You draw 3 new cards. The GM \
        also draws 3 cards and uses them as they see fit. The GM loses these cards \
        at the end of the game session. The GM is not required to show you the cards \
        that they have drawn."
      },
      /**
       * PLATINUM
       * 
       * Platinum cards should be prized among all else. They alter game rules,
       * or impact the game overall in a big way.
       */
      {
        id: "AWESOME",
        name: "Who's Awesome?",
        rarity: "platinum",
        art: "old_ass_version_by_sharpwriter-d33u385.jpg",
        credit: "Jason ODIN Heuser",
        source: "https://sharpwriter.deviantart.com/art/Old-ass-Version-187841237",
        effect: "You're awesome. Automatically succeed on your last roll or dice test."
      },
      {
        id: "BGNNRSLCK",
        name: "Beginner's Luck",
        rarity: "platinum",
        art: "celsius_13___farmer_by_jan_wes-d92e7zk.jpg",
        credit: "Jan Weßbecher",
        source: "https://jan-wes.deviantart.com/art/Celsius-13-Farmer-548218352",
        effect: "Play this card before performing a skill test. Instead of your normal \
        skill dice, use a d12 instead. This d12 replaces your normal skill dice for this \
        and only this test (in case you are forced to reroll this test)."
      },
      {
        id: "DSXMCHN",
        name: "Deus Ex Machina",
        rarity: "platinum",
        art: "BIRTH_OF_A_STAR.jpg",
        credit: "Parker Droverson",
        source: "https://parkerslaundrybasket.wordpress.com/2012/05/07/birth-of-a-star/",
        effect: "An enemy or obstacle is dealt with by some outside force that is \
        neutral to you and your allies (the 'who' or 'what' is up to the GM)."
      },
      {
        id: "MYSTRYSTRNGR",
        name: "Mysterious Stranger",
        rarity: "platinum",
        art: "mom_said_he_always_was_a_mysterious_fella____by_peixeserra-d9g2wpt.jpg",
        credit: "Pei the Pupper",
        source: "https://www.deviantart.com/art/Mom-said-he-always-was-a-mysterious-fella-571205153",
        effect: "A mysterious individual comes to your aide, only to leave as abruptly \
        as they came. They leave absolutely no clues behind."
      },
      {
        id: "RNFRCMNTS",
        name: "Reinforcements!",
        rarity: "platinum",
        art: "reinforcements_by_intelman-d6cnrku.jpg",
        credit: "Indra Setiawan",
        source: "https://www.deviantart.com/art/Reinforcements-384061278",
        effect: "An external force that is allied to you arrives to assist (the 'who' is \
        up to the GM)."
      },
      {
        id: "WNDFLL",
        name: "Windfall",
        rarity: "platinum",
        art: "3d_workshop___luxurious_spaceship_interior_by_stormxf3-d8laysr.jpg",
        credit: "StormXF3",
        source: "https://www.deviantart.com/art/3D-Workshop-Luxurious-Spaceship-Interior-519513003",
        effect: "You inherit, find, or otherwise stumble upon an opportunity that \
        will increase your wealth substantially (note that you do not recieve the new \
        wealth immediately, and may need to quest for it)."
      },
    ],
    /**
     * This matrix has the following probabilities
     * PLAT   = 5.56%
     * GOLD   = 11.12%
     * SILVER = 27.77%
     * COPPER = 55.56%
     */
    rarityMatrix: {
      2: "platinum",
      3: "gold",
      4: "silver",
      5: "copper",
      6: "copper",
      7: "copper",
      8: "copper",
      9: "silver",
      10: "silver",
      11: "gold",
      12: "platinum"
    },
    /**
     * Roll 1 dice with variable sides
     * 
     * @param {*} sides 
     */
    rollDie(sides) {
      if( !sides) {
        sides = 6;
      }
      return 1 + Math.floor(Math.random() * sides);
    },
    /**
     * Roll multiple dice with variable sides
     * 
     * @param {*} number
     * @param {*} sides
     */
    rollDice(number, sides) {
      var total = 0;
      while (number-- > 0) {
        total += this.rollDie(sides)
      }
      return total;
    },
    /**
     * Search and return the card with the specified id
     * 
     * @param {*} id 
     */
    search(id) {
      return this.cards.find(function(card) { return card.id === this.id; } , {'id': id});
    },
    /**
     * Returns an array of cards that meet the rarity criteria
     * 
     * @param {*} rarity 
     */
    getRarity(rarity) {
      return this.cards.filter(function(card) { return card.rarity === this.rarity; } , {'rarity': rarity})
    },
    /**
     * Grab a set of cards at random
     * 
     * @param {*} num 
     */
    grab(num) {
      let hand = []
      for (var index = 0; index < num; index++) {
        let chance = this.rollDice(2, 6)
        let rarity = (this.rarityMatrix[chance]) ? this.rarityMatrix[chance] : 'copper'
        let plucked = this.getRarity(rarity)
        let selected = Math.abs(Math.ceil(Math.random()*(plucked.length - 1)))
        console.log('RARITY: '+rarity)
        console.log(selected)
        console.log(plucked.length)
        hand.push( clone(plucked[selected]) )
      }
      return hand
    },
    /**
     * Return a statistics object with information about the deck
     */
    statistics() {
      return {
        copper: this.getRarity('copper').length,
        silver: this.getRarity('silver').length,
        gold: this.getRarity('gold').length,
        platinum: this.getRarity('platinum').length,
      }
    }
  }