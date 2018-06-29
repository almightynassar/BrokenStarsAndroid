import Governance from "./region/governance"
import Nations from "./region/nations"
import Planetoids from "./region/planetoids"
import Population from "./region/population"
import Stars from "./region/stars"
import Tags from "./region/tags"
export default {
  // Array of sectors (imported from files in src/data/regions)
  sectors: [],
  // Governance information
  governance: Governance,
  // Sector information
  nations: Nations,
  // Planet information
  planetoids: Planetoids,
  // Population information
  population: Population,
  // Star information
  stars: Stars,
  // Tag information
  tags: Tags,
  // Grab ALL population centres from the entry
  getPopulationCentres(objects) {
    let centres = []
    _.forEach(objects, function(object) {
      // Add to array if it has a population entry
      if (object.population) {
        centres.push(object)
      }
      // Add Satellites if they have a population entry
      if (object.satellites) {
        _.forEach(object.satellites, function(satellite) {
          if (satellite.population) {
            satellite.distance = object.distance
            satellite.satellites = 'Orbiting ' + object.name
            satellite.isSatellite = true
            centres.push(satellite)
          }
        })
      }
    })
    return centres
  },
  // Categories
  categories: {
    sector: {
      zone: {
        "red": "Highly dangerous. Do not travel under any circumstances.",
        "amber": "Significant risk. Reconsider your need to travel.",
        "blue": "General risk. Exercise a high degree of caution.",
        "green": "Low risk. Exercise normal safety precautions."
      }
    },
    /**
     * Object types
     */
    type: {
      asteroid: "An area of debris",
      jovian: "A gas giant",
      station: "An artificial construction",
      planetoid: "A rocky, metallic or icy ball",
    },
    planet: {
      shape: {
        asteroid: "An area of debris or small planetoids",
        jovian: "A gas giant",
        station: "An unbound artificial construction made for the purposes of habitation",
        terrestrial: "A rocky, metallic or icy ball",
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
        none: "No infrastrucutre. Supports isolated dwellings with very few people.",
        minimal: "Supports hamlets with a tiny population and has very few (if any) services.",
        limited: "Supports villages with a small population and has a few services.",
        low: "Supports towns with a population of up to 20,000 and has sufficient services.",
        moderate: "Supports large towns with a population of up to 100,000.",
        high: "Supports cities with a population of up to 300,000 and has an abundance of services.",
        considerable: "Supports large cities with a population of up to 1 million.",
        substantial: "Supports sprawling metropolises that consists of a large city with it's surrounding suburbs. Contains up to 3 million people",
        extensive: "Supports super-dense metropolises, with space becoming a luxury. Contains up to 10 million people.",
        extreme: "Supports a megalopolis that can support billions of people.",
        covered: "The entire planet's surface is covered with urban settlements such that no definitive area seperates the cities. Supports trillions of people."
      },
      spaceport: {
        0: "No spaceport, terrestrial or orbital.",
        1: "Primitive terrestrial-only spaceport with no repair, refuel, or shipyard capabilities.",
        2: "terrestrial-only spaceport with limited refuelling options.",
        3: "terrestrial-only spaceport with limited repair and refuelling options.",
        4: "terrestrial-only spaceport with repair, refuelling and (limited) shipyard facilities for small spacecraft.",
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
      case "extreme":
        return 9;
      case "covered":
        return 10;
      default:
        return 0;
    }
  },
  getZoneNumber(zone) {
    switch (zone) {
      case "green":
        return 1;
      case "blue":
        return 0.75;
      case "amber":
        return 0.5;
      default:
        return 0.25;
    }
  },
  // Determine the Gross Trade Product of a planet
  getPlanetTrade(planet) {
    // Determine Tech-Level Number (Between 0 and 10)
    let techNum = this.getTechNumber(planet.tech)
    // Determine Infrastructure Number (Between 0 and 10)
    let infrastructureNum = this.getInfrastructureNumber(planet.infrastructure)
    // Determine our econonmy potential number (Max = 10, Min = 0)
    let economyNum = Math.round( (parseInt(infrastructureNum) + parseInt(techNum)) / 2 )
    // Determine our desirability modifier (Max = +5, Min = -5)
    let desirableMod = Math.round( (parseInt( planet.spaceport ) - economyNum) / 2 )
    // Calculate the trade number
    let tradeNum = parseInt(planet.population) * (economyNum + desirableMod)
    return (tradeNum > 0) ? tradeNum : 0
  },
  // Determine Trade number of a sector
  getSectorTrade(sector) {
    // Some variables to track
    let economyNum = 0
    // Grab all of our economy values
    if (sector.objects.length > 0) {
      for (var index = 0; index < sector.objects.length; index++) {
        economyNum += parseInt( this.getPlanetTrade(sector.objects[index]) )
      }
    }
    return Math.round(economyNum * this.getZoneNumber(sector.zone))
  },
  // Load our regional Datafiles
  load() {
    let self = this
    self.data.regions = []
    let regionFiles = require.context("../regions", false, /\.js$/);
    regionFiles.keys().forEach(function (file) {
      self.data.regions.push( (regionFiles(file)).default );
    })
  },
  // Find a sector by it's x and y coordinates
  findSector(x, y) {
    let matching = this.sectors.filter(function(s) {
      return (s.x == this.x) && (s.y == this.y)
    }, {'x': x, 'y': y})
    if (matching.length == 1) {
      return matching[0]
    }
    return null
  }
}