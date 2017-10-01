export default {
  sectors: [],
  // Categories
  categories: {
    star: {
      spectrum: {
        O: {
          colour: "Blue",
          temp: {
            min: 30000,
            max: 50000
          },
          description: "Very hot and very luminous, being bluish in color; in fact, most of their output is in the ultraviolet range.",
        },
        B: {
          colour: "Blue-White",
          temp: {
            min: 10000,
            max: 30000
          },
          description: "Extremely luminous and blue. As O and B stars are so powerful, they only live for a very short time, and thus they do not stray far from the area in which they were formed.",
        },
        A: {
          colour: "White",
          temp: {
            min: 7500,
            max: 10000
          },
          description: "Amongst the more common naked eye stars, and are white or bluish-white.",
        },
        F: {
          colour: "Yellow-White",
          temp: {
            min: 6000,
            max: 7500
          },
          description: "These stars' color is white with a slight tinge of yellow.",
        },
        G: {
          colour: "Yellow",
          temp: {
            min: 5200,
            max: 6000
          },
          description: "The best known Star type, if only for the reason that Sol is of this class.",
        },
        K: {
          colour: "Orange",
          temp: {
            min: 3700,
            max: 5200
          },
          description: "Orangish stars which are slightly cooler than Sol.",
        },
        M: {
          colour: "Red",
          temp: {
            min: 2400,
            max: 3700
          },
          description: "Class M stars are by far the most common. However, these stars have such low luminosities that none are bright enough to be seen with the unaided eye, unless under exceptional conditions."
        }
      },
      size: {
        "0": "Hypergiant",
        "I": "Supergiant",
        "II": "Bright Giant",
        "III": "Giant",
        "IV": "Subgiant",
        "V": "Dwarf"
      },
    },
    sector: {
      control: {
        "na": "No central control of the sector",
        "us": "United Systems",
        "ind": "Independant sector governance",
        "ssr": "Sakeena Stellar Republic",
        "gq": "Ghan Queendom"
      },
      zone: {
        "red": "Highly dangerous. Do not travel under any circumstances.",
        "amber": "Significant risk. Reconsider your need to travel.",
        "blue": "General risk. Exercise a high degree of caution.",
        "green": "Low risk. Exercise normal safety precautions."
      }
    },
    planet: {
      type: {
        asteroid: "An area of debris or small planetoids",
        jovian: "A gas giant",
        station: "An unbound artificial construction made for the purposes of habitation",
        terrestial: "A rocky, metallic or icy ball",
      },
      size: {
        trivial: "0-199",
        micro: "200-1,500",
        mini: "1,500-3,000",
        tiny: "3,000-5,000",
        dwarf: "5,000-7,500",
        small: "7,500-10,000",
        medium: "10,000-14,000",
        large: "14,000-18,000",
        huge: "18,000-25,000",
        massive: "25,000-60,000",
        giant: "60,000-240,000",
        colossal: "240,000+"
      },
      atmosphere: {
        corrosive: "Unbreathable mix of gasses in the atmosphere that requires both a protective suit and oxygen tanks.",
        exotic: "Unbreathable mix of gasses in the atmosphere that requires the use of oxygen tanks but no other protection.",
        insidious: "Similar to a corrosive atmosphere, but contiminants cause any protective measures to fail in 2 to 12 hours.",
        standard: "Normal atmosphere that is breathable without assitance.",
        tainted: "Atmosphere is mostly breathable but contains contiminants that require a filtration system.",
        thick: "A Thick atmosphere that is breathable without assitance.",
        thin: "A Thin atmosphere that is breathable without assitance.",
        trace: "Trace amounts of atmosphere, but not enough to support breathing. Requires a vacuum suit",
        vacuum: "No atmosphere. Requires a vacc suit."
      },
      hydrosphere: {
        none: "Little to no surface water (0-9%)",
        dry: "Trace amounts of surface water (10-24%)",
        arid: "Enough surface water to sustain a small population (25-44%)",
        moderate: "Suitable amount of surface water (45-64%)",
        wet: "Large amounts of surface water (65-89%)",
        water: "Surface is covered by water (90-100%)"
      },
      biosphere: {
        none: "No native life supported.",
        remnants: "A dead ecology with trace amounts of native lifeforms.",
        microbial: "Non-sentient micro-organisms such as amino acids, bacteria, fungii and slimes.",
        incompatible: "Native flora and fauna is biologically incompatible with normal nutritional needs. Microbial life could potentially be allergenic.",
        compatible: "Native flora and fauna is biologically compatible with normal nutritional needs (or it was terraformed to be so).",
        hybrid: "The ecology can support both native incompatible species and imported compatible species.",
        engineered: "The ecology is completely man-made."
      },
      population: {
        0: "Uninhabited.",
        1: "Less than a hundred",
        2: "Hundreds",
        3: "Thousands",
        4: "Tens of thousands",
        5: "Hundreds of thousands",
        6: "Millions",
        7: "Tens of millions",
        8: "Hundreds of millions",
        9: "Billions",
        10: "Tens of billions",
        11: "Hundreds of billions",
        12: "Trillions"
      },
      government: {
        autocratic: "Supreme power is concentrated into the hands of one person (or a select few).",
        balkanized: "No central planetary government, with nation states competing for dominance",
        captive: "Government is directly controlled by another as a conquered or vassalized territory.",
        colony: "Indirectly or directly controlled by an another government.",
        confederacy: "A loose collection of nation states operating together for mutual benefit.",
        corporation: "A corporation (or corporations) runs the location via managers, usually for a profit.",
        feudal: "A loose structure that defines an individual citizen's service and obligation to a ruler.",
        military: "Military rule.",
        none: "No formal government. Ranges from anarchy to tribal/clans.",
        oligarchy: "Supreme power is concentrated into the hands of small minority of privileged individuals.",
        participatory: "Participatory Democracy requires that all citizens have a direct say in how the government works, and individually votes on laws.",
        representative: "Representative Democracy requires that citizens elect some of their peers to handle government business on their behalf.",
        theocracy: "Religious rule.",
      },
      laws: {
        none: "No restrictions",
        minimal: "WMD and other dangerous technologies are restricted.",
        light: "WMD, Heavy Weapons and dangerous technologies are restricted.",
        moderate: "WMD, Most Weapons, unsafe narcotics and dangerous technologies are restricted.",
        heavy: "WMD, All firearms outside of home (Blade weapons are controlled), Specialized tools, unsafe narcotics and dangerous technologies are restricted.",
        ultra: "No weapons possesion allowed, rigid control of civilian movement, controlled goods, and bans on narcotics and dangerous technologies.",
        extreme: "No weapons possesion allowed, unrestricted invasion of privacy, legalized oppressive practices, rigid control of civilian movements, controlled goods, and bans on narcotics and dangerous technologies.",
      },
      tech: {
        none: "No technology.",
        primitive: "Stone tools & fire.",
        early: "Farming, sail, & steam.",
        industrial: "Factories, electricty, & telecommunications.",
        mechanical: "Automatation, planes, & machines.",
        atomic: "Rockets, satellites, & nuclear power.",
        foundational: "Computers, renewable energy, & nanotech.",
        intersolar: "Intersolar spacecraft, androids, & fusion power.",
        interstellar: "AI, FTL spacecraft, & cyberware.",
        advanced: "Terraforming, genetic engineering, & nanotech mastery",
        exotic: "Technology based on undiscovered scientific techniques"
      },
      temperature: {
        frozen: "Below habitable temperatures that cannot be endured without dedicated protection. Robotic and machine joints may lock.",
        cold: "Uncomfortably cold, but are survivable with suitable heavy clothing. Depending on humidity can be ice balls or barren rock.",
        temperate: "Temperature ranges that are similar to earth",
        warm: "Uncomfortably warm, but are survivable with precautions. Depending on humidity can range from jungles to deserts.",
        burning: "Above habitable temperatures that cannot be endured without dedicated protection. Soft metals, plastics and other materials may spontaneously melt.",
        varied: "A wide range of temperatues, either due to unique geology or varying orbits."
      },
      resources: {
        none: "No useful raw materials.",
        low: "Trace amounts of raw materials.",
        moderate: "Moderate amounts of raw materials.",
        high: "High amounts of raw materials.",
        abundant: "Abundant amounts of raw materials."
      },
      infrastructure: {
        none: "No infrastrucutre.",
        minimal: "Supports small hamlets.",
        limited: "Supports villages.",
        low: "Supports towns.",
        moderate: "Supports large towns.",
        high: "Supports cities.",
        considerable: "Supports large cities.",
        substantial: "Supports urban sprawl.",
        extensive: "Supports super-dense cities."
      },
      spaceport: {
        0: "No spaceport, terrestial or orbital.",
        1: "Primitive terrestial-only spaceport with no repair, refuel, or shipyard capabilities.",
        2: "Terrestial-only spaceport with limited refuelling options.",
        3: "Terrestial-only spaceport with limited repair and refuelling options.",
        4: "Terrestial-only spaceport with repair, refuelling and (limited) shipyard facilities for small spacecraft.",
        5: "Basic orbital spaceport (no artificial gravity) with limited repair and refuel options. Supports two spacecraft at a time.",
        6: "Standard orbital spaceport (with artificial gravity) with limited repair and refuel options. Supports several spacecraft at a time.",
        7: "Self-sustaining orbital spaceport with a small population. Decent repair and refuel capabilities.",
        8: "Orbital spaceport with a medium population. Decent repair and refuel capabilitiess. Shipyards capable of producing small spacecraft.",
        9: "Orbital spaceport with a large population. Significant repair and refuel capabilities. Shipyards capable of producing medium spacecraft.",
        10: "Orbital spaceport with a very large population. State-of-the-art repair and refuel capabilities. Shipyards capable of producing most types of spacecraft."
      }
    }
  },
  getTechNumber(tech) {
    switch (tech) {
      case "primitive":
        return 1;
      case "early":
        return 2;
      case "industrial":
        return 3;
      case "mechanical":
        return 4;
      case "atomic":
        return 5;
      case "foundational":
        return 6;
      case "intersolar":
        return 7;
      case "interstellar":
        return 8;
      case "advanced":
        return 9;
      case "exotic":
        return 10;
      default:
        return 0;
    }
  },
  getInfrastructureNumber(infrastructure) {
    switch (infrastructure) {
      case "minimal":
        return 1;
      case "limited":
        return 2;
      case "low":
        return 3;
      case "moderate":
        return 4;
      case "high":
        return 5;
      case "considerable":
        return 6;
      case "substantial":
        return 7;
      case "extensive":
        return 8;
      default:
        return 0;
    }
  },
  // Determine planetary codes depending on given criteria
  getPlanetTags(planet) {
    let tags = planet.tags
    // Agricultural Tag
    if (  ['thin', 'standard', 'thick', 'tainted'].includes(planet.atmosphere) &&
          ['moderate', 'wet'].includes(planet.hydrosphere) &&
          [4, 5, 6, 7].includes(planet.population) &&
          ['compatible', 'hybrid', 'engineered'].includes(planet.biosphere) &&
          ['minimal', 'limited', 'low', 'moderate'].includes(planet.infrastructure) &&
          ['cold', 'temperate', 'warm'].includes(planet.temperature)) {
      tags.push('Agriculture')
    }
    // Asteroid Belt Tag
    if ( ['asteroid'].includes(planet.type)) {
      tags.push('Asteroid Belt')
    }
    // Desert Tag
    if (  ['terrestial'].includes(planet.type) &&
          ['corrosive', 'exotic', 'insidious', 'standard', 'tainted', 'thick', 'thin'].includes(planet.atmosphere) &&
          ['none', 'dry'].includes(planet.hydrosphere)) {
      tags.push('Desert')
    }
    // Gas Giant Tag
    if (  ['jovian'].includes(planet.type) &&
          ['giant', 'colossal'].includes(planet.size)) {
      tags.push('Gas Giant')
    }
    // High Population Tag
    if ( [10, 11, 12].includes(planet.population)) {
      tags.push('High Population')
    }
    // High Technology Tag
    if (  ['advanced', 'exotic'].includes(planet.tech) &&
          ['considerable', 'substantial', 'extensive'].includes(planet.infrastructure)) {
      tags.push('High Technology')
    }
    // Ice Tag
    if (  ['terrestial'].includes(planet.type) &&
          ['corrosive', 'exotic', 'insidious', 'standard', 'tainted', 'thick', 'thin'].includes(planet.atmosphere) &&
          ['moderate', 'wet', 'water'].includes(planet.hydrosphere) &&
          ['frozen', 'cold'].includes(planet.temperature)) {
      tags.push('Ice')
    }
    // Industrial Tag
    if (  [7, 8, 9, 10, 11, 12].includes(planet.population) &&
          ['moderate', 'high', 'considerable', 'substantial', 'extensive'].includes(planet.infrastructure) &&
          ['moderate', 'high', 'abundant'].includes(planet.resources)) {
      tags.push('Industrial')
    }
    // Low Population Tag
    if ( [0, 1, 2, 3].includes(planet.population)) {
      tags.push('Low Population')
    }
    // Low Technology Tag
    if (  ['primitive', 'early', 'industrial'].includes(planet.tech) &&
          ['none', 'minimal', 'limited', 'low'].includes(planet.infrastructure)) {
      tags.push('Low Technology')
    }
    // Mining Tag
    if (  [4, 5, 6, 7].includes(planet.population) &&
          ['minimal', 'limited', 'low', 'moderate'].includes(planet.infrastructure) &&
          ['moderate', 'high', 'abundant'].includes(planet.resources)) {
      tags.push('Mining')
    }
    // Non-water Oceans Tag
    if (  ['corrosive', 'exotic', 'insidious'].includes(planet.atmosphere) &&
          ['arid', 'moderate', 'wet', 'water'].includes(planet.hydrosphere) &&
          ['incompatible'].includes(planet.biosphere)) {
      tags.push('Non-water Oceans')
    }
    // Sterile Tag
    if (  ['terrestial'].includes(planet.type) &&
          ['vacuum'].includes(planet.atmosphere) &&
          ['none'].includes(planet.biosphere)) {
      tags.push('Sterile')
    }
    // Water World Tag
    if (  ['terrestial'].includes(planet.type) &&
          ['corrosive', 'exotic', 'insidious', 'standard', 'tainted', 'thick', 'thin'].includes(planet.atmosphere) &&
          ['water'].includes(planet.hydrosphere) &&
          ['temperate', 'warm'].includes(planet.temperature)) {
      tags.push('Water World')
    }
    return tags.sort()
  },
  // Determine Trade number of a planet
  getPlanetTrade(planet) {
    // Determine Tech-Level Number
    let techNum = this.getTechNumber(planet.tech)
    // Determine Infrastructure Number
    let infrastructureNum = this.getInfrastructureNumber(planet.infrastructure)
    // Determine our econonmy number (Max = 10, Min = 0)
    let economyNum = Math.round( (parseInt(planet.population) + parseInt(infrastructureNum) + parseInt(techNum)) / 3 )
    // Determine our desirability modifier (Max = +5, Min = -5)
    let desirableMod = Math.round( (parseInt( planet.spaceport ) - economyNum) / 2 )
    return economyNum + desirableMod
  },
  // Determine Trade number of a sector
  getPlanetsCombinedTrade(planets) {
    let economyNum = 0
    if (planets.length > 0) {
      for (var index = 0; index < planets.length; index++) {
        economyNum += this.getPlanetTrade(planets[index])
      }
    }
    return economyNum
  },
  // Load our regional Datafiles
  load() {
    let self = this
    self.data.regions = []
    let regionFiles = require.context("../regions", false, /\.js$/);
    regionFiles.keys().forEach(function (file) {
      self.data.regions.push( (regionFiles(file)).default );
    })
  }
}