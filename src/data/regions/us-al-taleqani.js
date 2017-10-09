export default {
  name: "Al-Taleqani",
  x: 0,
  y: 1,
  control: "us",
  zone: "green",
  // Earth-like
  star: {
    spectrum: "G",      // Yellow
    temperature: "2",   // 0 is hottest in class, 9 is coolest
    size: "V"           // Dwarf
  },
  planets: [
    {
      name: "Al-Taleqani asteroid belt",
      shape: "asteroid",
      size: "trivial",
      atmosphere: "vacuum",
      hydrosphere: "none",
      biosphere: "none",
      population: 0,   // Uninhabited
      government: "none",
      laws: "none",
      tech: "none",
      temperature: "varied",
      resources: "low",
      infrastructure: "none",
      spaceport: 0,     // None
      satellites: 0,
      description: "A standard asteroid belt. Star-ward is burning, Space-ward is frozen.",
      tags: []
    },
    {
      name: "Al-sahhah",
      shape: "terrestrial",
      size: "large",
      atmosphere: "standard",
      hydrosphere: "wet",
      biosphere: "compatible",
      population: 10,   // Tens of billions
      government: "representative",
      laws: "moderate",
      tech: "interstellar",
      temperature: "temperate",
      resources: "low",
      infrastructure: "extensive",
      spaceport: 9,     // Orbital, Shipyards for medium craft
      satellites: 1,
      description: "If you want to find something special, \
      odds are that you can find it on Al-sahhah.",
      tags: ["Cultural Hub"]
    },
    {
      name: "Khadim",
      shape: "terrestrial",
      size: "medium",
      atmosphere: "thick",
      hydrosphere: "arid",
      biosphere: "incompatible",
      population: 4,   // Hundreds of thousands
      government: "colony",
      laws: "light",
      tech: "industrial",
      temperature: "cold",
      resources: "abundant",
      infrastructure: "limited",
      spaceport: 3,     // terrestrial, Repair, Refuel, No Shipyards
      satellites: 0,
      description: "A colony of Al-sahhah, provides much of the raw materials for \
      it's bigger brother.",
      tags: ["Colony", "New World"]
    }
  ],
  description: "The most populous star system and a cultural force in \
  the known Black. Despite it’s Arabic name, the sector is culturally diverse \
  and boasts the largest population of Ay-Matak in th \
  sector. Many across the Black make their way to Al-\
  Taleqani in the hopes of striking it rich in the mines of \
  Khadim, in a popular Al-Rhul Productions sim-sens \
  experience, or in the hustle and bustle of the streets of \
  Al-sahhah. The prominent ideology of the system generally fo-\
  cuses on liberty, individual freedoms and the unity and growth of the United Systems."
}