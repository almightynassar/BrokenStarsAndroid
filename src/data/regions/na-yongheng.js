export default {
  name: "Yongheng",
  x: 4,
  y: -1,
  control: "na",
  zone: "red",
  star: {
    spectrum: "F",      // White
    temperature: "8",   // 0 is hottest in class, 9 is coolest
    size: "V"           // Dwarf
  },
  planets: [
    {
      name: "Theano",
      shape: "terrestrial",
      size: "large",
      atmosphere: "thick",
      hydrosphere: "moderate",
      biosphere: "hybrid",
      population: 4,   // Tens of thousands
      government: "captive",
      laws: "none",
      tech: "none",
      temperature: "warm",
      resources: "high",
      infrastructure: "minimal",
      spaceport: 3,     // terrestrial, Repair
      satellites: 0,
      description: "Most of the fighting is conducted here.",
      tags: ["Outpost", "Civil War"]
    },
    {
      name: "Vargos",
      shape: "terrestrial",
      size: "medium",
      atmosphere: "thick",
      hydrosphere: "moderate",
      biosphere: "hybrid",
      population: 9,   // Billions
      government: "balkanized",
      laws: "ultra",
      tech: "intersolar",
      temperature: "temperate",
      resources: "low",
      infrastructure: "extensive",
      spaceport: 4,     // terrestrial, Shipyards
      satellites: 2,
      description: "Vargos has been spared from most of the fighting due to a 'gentlemans' agreement \
      by the factions. The mood among the populace is, however, extremely tense.",
      tags: ["Warlords"]
    }
  ],
  description: "The Yongheng system is embroiled in a decades long civil war. \
  The war originally broke out after the planet Theano was colonized, with six factions \
  claiming ownership. The six factions are: Associated States of Yongheng (ASY), Federated States of New \
  Shanghai (FSNS), South Sodality (SS), Theano Pact (TP), Union of Vargos (UV), and the Vargos Commonality (VC)."
}