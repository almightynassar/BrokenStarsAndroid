export default {
  /**
   * List of available fittings
   */
  list: [
    {
      id: "ADTRM",
      name: "Auditorium",
      storage: -5,
      power: -1,
      crew: 0,
      cost: 12000,
      description: "Provides a space designed with acoustics and artistic appreciation in mind."
    },
    {
      id: "ARMY",
      name: "Armoury",
      storage: -1,
      power: -1,
      crew: 0,
      cost: 2000,
      description: "Safe and secure storage for weapons and armour."
    },
    {
      id: "ATCOM",
      name: "Automatic Targeting Computer",
      storage: -1,
      power: -2,
      crew: 0,
      cost: 100000,
      description: "Attached to a single ship-mounted weapon. Fires that weapon independantly (using Ship's Weapons attribute) and without using one of your Ship's actions"
    },
    {
      id: "AUTOS",
      name: "Automation Support",
      storage: -1,
      power: -2,
      crew: 0,
      cost: 25000,
      description: "Attached to a single fitting. Operates that system independantly (using an appropriate Ship attribute such as Operations) and without using on of your Ship's actions"
    },
    {
      id: "BRCHT",
      name: "Breeching Tunnels",
      storage: -1,
      power: -1,
      crew: 0,
      cost: 25000,
      description: "Allows spacecraft to breech and board the hull of a target."
    },
    {
      id: "CLKDV",
      name: "Cloaking Device",
      storage: -1,
      power: -3,
      crew: 0,
      cost: 1500000,
      description: "Need to purchase 1 device per level of Hull Size to effectively cloak (minimum of 1 device). On a successful Operations roll (either Ship AI or Character), your ship is practically hidden. Enemies take a -4 penalty on their Notice or Sensor rolls."
    },
    {
      id: "CMMNR",
      name: "Common Room",
      storage: -3,
      power: 0,
      crew: 0,
      cost: 1000,
      description: "General purpose hall used for entertainment or training purposes."
    },
    {
      id: "DNGHL",
      name: "Dining Hall",
      storage: -3,
      power: 0,
      crew: 0,
      cost: 1000,
      description: "Seating and tables for eating meals."
    },
    {
      id: "DEFDRN",
      name: "Defensive Drones",
      storage: -3,
      power: -2,
      crew: 0,
      cost: 25000,
      description: "Stores 5 launchable Defensive Drones. These drones intercept weapons fire but are destroyed in the process. On an enemy's success, if deployed make an ECM roll (Target number 6); on a success the drone takes the hit instead of the ship. Each drone is worth $250."
    },
    {
      id: "EMGCY",
      name: "Emergency Capsule",
      storage: -1,
      power: 0,
      crew: 0,
      cost: 1000,
      description: "Each capsule carries up to 6 people. Needs to be placed next the the exterior hull."
    },
    {
      id: "EXTRT",
      name: "Extractor",
      storage: -3,
      power: -2,
      crew: 0,
      cost: 25000,
      description: "Mining and refinery facilities. Extract materials from space-borne objects."
    },
    {
      id: "FCTRY",
      name: "Factory",
      storage: -6,
      power: -3,
      crew: 0,
      cost: 200000,
      description: "Factory and repair facilities. Can utilise raw materials to fabricate most items."
    },
    {
      id: "FLSCP",
      name: "Fuel Scoops",
      storage: -3,
      power: -1,
      crew: 0,
      cost: 5000,
      description: "Can scoop and convert fuel directly from gas giants, nebulae and other sources. Holds one unit of fuel internally that can be transferred to fuel tanks. Scooping 1 unit of fuel takes 24 hours."
    },
    {
      id: "FLTNK",
      name: "Fuel Tanks",
      storage: -1,
      power: 0,
      crew: 0,
      cost: 1000,
      description: "Holds 5 units of FTL fuel. Can also be used to store other liquids and chemicals (it costs $500 to clean it thoroughly if you change chemicals)"
    },
    {
      id: "HLDCLL",
      name: "Holding Cell",
      storage: -1,
      power: 0,
      crew: 0,
      cost: 1500,
      description: "Secure room meant to hold a prisoner."
    },
    {
      id: "HYDRO",
      name: "Hydroponics",
      storage: -6,
      power: -3,
      crew: 0,
      cost: 10000,
      description: "Each Hydroponics unit produces enough food and water for 30 people"
    },
    {
      id: "KTCHN",
      name: "Kitchen",
      storage: -3,
      power: -1,
      crew: 0,
      cost: 2500,
      description: "Cooking facilities (use for cooking and preparing meals using fresh ingredients)."
    },
    {
      id: "LIBCOM",
      name: "Library Computer",
      storage: -1,
      power: -1,
      crew: 0,
      cost: 2500,
      description: "Stores digital copies of a certain type of information. Whenever you are docked, you can change the catalogue to a subject of your choice (General information will be an assortment of media sources, entertainment and non-fiction material)."
    },
    {
      id: "MAGGP",
      name: "Magnetic Grappler",
      storage: -5,
      power: -2,
      crew: 0,
      cost: 15000,
      description: "Magnetic hook that grapples another ship. Range of 2, Shooting vs Evade. Once grappled, needs an opposed ECM roll to demagnetise the affected hull area."
    },
    {
      id: "MEDBY",
      name: "Med-bay",
      storage: -2,
      power: -1,
      crew: 0,
      cost: 5000,
      description: "Fully supplied and operational medical and surgery facility. Stocked with tools required for Medical actions"
    },
    {
      id: "MERCH",
      name: "Merchant",
      storage: -5,
      power: -1,
      crew: 0,
      cost: 30000,
      description: "Restaurant, commissary, or speciality store. Allows on-board commerce."
    },
    {
      id: "NAVCOM",
      name: "Navigation Computer",
      storage: -1,
      power: -1,
      crew: 0,
      cost: 2500,
      description: "Stores history of all previous FTL Jumps. Well-travelled routes become auto-successes (but takes normal amount of fuel)."
    },
    {
      id: "PNTDF",
      name: "Point Defence Lasers",
      storage: -3,
      power: -3,
      crew: 0,
      cost: 35000,
      description: "Short-range lasers meant to disable incoming missiles or large ballistics. Requires a successful ECM roll (Target number 6) to counter one missile or ballistics projectile."
    },
    {
      id: "PWRGN",
      name: "Power Generator",
      storage: -2,
      power: +1,
      crew: 0,
      cost: 2000,
      description: "Increases your available power by 1"
    },
    {
      id: "QRTRA",
      name: "Quarters (Amenities)",
      storage: -5,
      power: -1,
      crew: 0,
      cost: 2500,
      description: "Provides showers (5), toilets (5), and a laundromat."
    },
    {
      id: "QRTRB",
      name: "Quarters (Barracks)",
      storage: -1,
      power: 0,
      crew: 4,
      cost: 2500,
      description: "Sleeps up to 4 people with only a single locker each. Your ship will already have Barracks-quality quarters built-in for it's default crew contingent."
    },
    {
      id: "QRTRL",
      name: "Quarters (Luxury)",
      storage: -3,
      power: 0,
      crew: 1,
      cost: 5000,
      description: "Provides comfortable accomodation for 1 person (and their partner). Includes private showering, kitchenettte and toilet facilities"
    },
    {
      id: "QRTRS",
      name: "Quarters (Standard)",
      storage: -1,
      power: 0,
      crew: 1,
      cost: 1000,
      description: "A small, private room for one person (and their partner). Does not include amenities."
    },
    {
      id: "SCILB",
      name: "Science Lab",
      storage: -2,
      power: -2,
      crew: 0,
      cost: 10000,
      description: "Provides the resources and tools for scientific analysis and research."
    },
    {
      id: "SGBIO",
      name: "Storage (Sealed Biological)",
      storage: -2,
      power: -1,
      crew: 0,
      cost: 5000,
      description: "1 Storage is kept atmospherically sealed by an adjacent storage unit (which takes up a whole storage space). It takes 1 hour to put or remove something from biological storage."
    },
    {
      id: "SGCHEM",
      name: "Storage (Chemical)",
      storage: -1,
      power: 0,
      crew: 0,
      cost: 1000,
      description: "Storage suitable for storing chemicals of any sort. (See also 'Fuel Tank'"
    },
    {
      id: "SGCRY",
      name: "Storage (Cryo)",
      storage: -2,
      power: -1,
      crew: 0,
      cost: 10000,
      description: "1 Storage is kept cool by an adjacent storage unit (which takes up a whole storage space). Can store up to 10 people in cryostatis (or foodstuff). It takes 1 hour to put or remove something from cryo storage."
    },
    {
      id: "SGLIV",
      name: "Storage (Livestock)",
      storage: -2,
      power: 0,
      crew: 0,
      cost: 5000,
      description: "2.5m x 10m Animal pen suitable for carrying various animals. Includes automatic feeding dispenser and climate controls."
    },
    {
      id: "SHPBL",
      name: "Ship Bay (Large)",
      storage: -20,
      power: 0,
      crew: 0,
      cost: 750000,
      description: "Fittings to hold and launch a single small spacecraft (Add target craft's Size + Storage. Total number must be smaller than 20)."
    },
    {
      id: "SHPBS",
      name: "Ship Bay (Small)",
      storage: -5,
      power: 0,
      crew: 0,
      cost: 100000,
      description: "Fittings to hold and launch a single Interceptor-class spacecraft."
    },
    {
      id: "SMGHD",
      name: "Smuggler's Hold",
      storage: -1,
      power: 0,
      crew: 0,
      cost: 5000,
      description: "Well-hidden storage space that can usually pass visual inspection and most forms of EM scanning."
    },
    {
      id: "STLTH",
      name: "Stealth System",
      storage: -1,
      power: -2,
      crew: 0,
      cost: 500000,
      description: "Need to purchase 1 system per level of Hull Size to effectively stealth (minimum of 1 device). On a successful Operations roll (either Ship AI or Character), your ship is difficult to detect. Enemies take a -2 penalty on their Notice or Sensor rolls."
    },
    {
      id: "WRKSP",
      name: "Workshop",
      storage: -3,
      power: -1,
      crew: 0,
      cost: 5000,
      description: "Workshop used for maintenance and repair. Stocked with tools and resources for Repair actions."
    }
  ],
  /**
   * The selected fittings
   */
  selected: [],
  /**
   * Sort the selected fittings list
   */
  sort() {
    this.selected.sort(function(a,b) {
      return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)
    });
  },
  /**
   * Search for a specific fitting element in available list
   */
  searchList(id) {
    return this.list.find(function(fitting) { return fitting.id === this.id; } , {'id': id});
  },
  /**
   * Search for the specific fitting id in available list
   */
  searchListForIndex(id) {
    return this.list.findIndex(function(fitting) { return fitting.id === this.id; } , {'id': id});
  },
  /**
   * Search for a specific fitting element in selected list
   */
  searchSelected(id) {
    return this.selected.find(function(fitting) { return fitting.id === this.id; } , {'id': id});
  },
  /**
   * Search for the specific fitting id in selected list
   */
  searchSelectedForIndex(id) {
    return this.selected.findIndex(function(fitting) { return fitting.id === this.id; } , {'id': id});
  },
  /**
   * Update the selected list
   */
  update(id, total) {
    // Search if the fitting exists
    let index = this.searchSelectedForIndex(id)
    let fitting = this.searchSelected(id)
    // Make sure the total is an integer
    total = parseInt(total)
    if ( (typeof fitting !== "undefined") && index >= 0) {
      // Add to existing fitting entry (deleting and adding it so that it triggers Vue)
      fitting.active = this.selected[index].active + total
      fitting.total = this.selected[index].total + total
      this.selected.splice(index, 1)
    } else {
      // Create new fitting entry if it exists in the list
      fitting = this.searchList(id)
      if (typeof fitting !== "undefined") {
        fitting.active = total
        fitting.total = total
      } else { 
        fitting = {
          total: -1
        }
      }
    }
    // Make sure we have a postive non-zero total
    if (fitting.total > 0) {
      // Bound our active number of fittings
      if (fitting.active >= fitting.total) {
        fitting.active = fitting.total
      } else if (fitting.active < 0) {
        fitting.active = 0
      }
      this.selected.push(fitting)
    }
    this.sort()
    return fitting
  },
  /**
   * Activate a fitting
   */
  activate(id, total) {
    // Search if the fitting exists
    let index = this.searchSelectedForIndex(id)
    let fitting = this.searchSelected(id)
    // Make sure the total is an integer
    total = parseInt(total)
    if ( (typeof fitting !== "undefined") && index >= 0) {
      let active = fitting.active + total
      fitting.active = (active >= fitting.total) ? fitting.total : ( (active <= 0) ? 0 : active )
      // Update existing fitting entry (deleting and adding it so that it triggers Vue)
      this.selected.splice(index, 1)
      this.selected.push(fitting)
      this.sort()
    }
  },
  /**
   * Clears the selected list
   */
  clear() {
    this.selected = []
  }
}