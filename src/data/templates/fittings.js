export default {
  fittings: [
    {
      id: "ASST",
      name: "Assisted Targeting Computer",
      storage: -1,
      power: -1,
      cost: 50000,
      description: "Attach to a single weapon. Provides a +1 bonus to a character's Shooting roll when using that weapon"
    },
    {
      id: "CLKDV",
      name: "Cloaking Device",
      storage: -1,
      power: -2,
      cost: 300000,
      description: "Need to purchase 1 device per level of Hull Size to effectively cloak (minimum of 1 device). On a successful Operations roll (either Ship AI or Character), your ship is practically hidden. Enemies take a -4 penalty on their Notice or Sensor rolls."
    },
    {
      id: "EMGCY",
      name: "Emergency Capsule",
      storage: -1,
      power: 0,
      cost: 5000,
      description: "Each capsule carries up to 6 people. Needs to be placed next the the exterior hull."
    },
    {
      id: "FLSCP",
      name: "Fuel Scoops",
      storage: -3,
      power: -1,
      cost: 15000,
      description: "Can scoop and convert fuel directly from gas giants, nebulae and other sources. Holds one unit of fuel internally that can be transferred to fuel tanks. Scooping 1 unit of fuel takes 24 hours."
    },
    {
      id: "FLTNK",
      name: "Fuel Tanks",
      storage: -1,
      power: 0,
      cost: 5000,
      description: "Holds 1 unit of FTL fuel. Can also be used to store other liquids and chemicals (it costs $500 to clean it thoroughly if you change chemicals)"
    },
    {
      id: "HYDRO",
      name: "Hydroponics",
      storage: -1,
      power: -2,
      cost: 10000,
      description: "Each Hydroponics unit produces enough food and water for 6 people"
    },
    {
      id: "MEDBY",
      name: "Med-bay",
      storage: -2,
      power: -1,
      cost: 10000,
      description: "Fully supplied and operational medical and surgery facility. Stocked with tools required for Medical actions"
    },
    {
      id: "PWRGN",
      name: "Power Generator",
      storage: -2,
      power: +1,
      cost: 20000,
      description: "Increases your available power"
    },
    {
      id: "QRTRA",
      name: "Quarters (Amenities)",
      storage: -5,
      power: -1,
      cost: 5000,
      description: "Provides showering, toilet, entertainment and kitchenette facilities (Suitable for up to 30 people)"
    },
    {
      id: "QRTRB",
      name: "Quarters (Barracks)",
      storage: -1,
      power: 0,
      cost: 2500,
      description: "Sleeps up to 4 people with only a single locker each"
    },
    {
      id: "QRTRL",
      name: "Quarters (Luxury)",
      storage: -3,
      power: 0,
      cost: 10000,
      description: "Provides comfortable accomodation for 1 person (and their partner). Includes private showering, kitchenettte and toilet facilities"
    },
    {
      id: "QRTRS",
      name: "Quarters (Standard)",
      storage: -1,
      power: 0,
      cost: 2500,
      description: "A small room for one person"
    },
    {
      id: "SGBIO",
      name: "Storage (Sealed Biological)",
      storage: -2,
      power: -1,
      cost: 10000,
      description: "1 Storage is kept atmospherically sealed by an adjacent storage unit (which takes up a whole storage space). It takes 1 hour to put or remove something from biological storage."
    },
    {
      id: "SGCRY",
      name: "Storage (Cryo)",
      storage: -2,
      power: -1,
      cost: 10000,
      description: "1 Storage is kept cool by an adjacent storage unit (which takes up a whole storage space). Can store up to 10 people in cryostatis (or foodstuff). It takes 1 hour to put or remove something from cryo storage."
    },
    {
      id: "WRKSP",
      name: "Workshop",
      storage: -3,
      power: -1,
      cost: 10000,
      description: "Workshop used for maintenance, repair and fabrication. Stock with tools fro Repair actions."
    }
  ],
  search(id) {
    return this.fittings.filter(function(fitting) { return fitting.id === this.id; } , {'id': id});
  }
}