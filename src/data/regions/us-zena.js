export default {
  name: "Zena",
  x: 0,
  y: 0,
  control: "us",
  zone: "green",
  star: {
    spectrum: "K",      // Light Orange
    temperature: "0",   // 0 is hottest in class, 9 is coolest
    size: "V"           // Dwarf
  },
  planets: [
    {
      name: "Marider",
      shape: "terrestrial",
      size: "medium",
      atmosphere: "trace",
      hydrosphere: "dry",
      biosphere: "remnants",
      population: 6,   // Millions
      government: "corporation",
      laws: "heavy",
      tech: "advanced",
      temperature: "cold",
      resources: "abundant",
      infrastructure: "high",
      spaceport: 10,     // Orbital, Shipyards
      satellites: 3,
      description: "Marider is controlled by various Thurid companies and boasts some of the best shipyards in US space.",
      tags: ["Multi-Corporate Control"]
    },
    {
      name: "Thurid",
      shape: "terrestrial",
      size: "medium",
      atmosphere: "standard",
      hydrosphere: "moderate",
      biosphere: "compatible",
      population: 8,   // Hundreds of millions
      government: "representative",
      laws: "heavy",
      tech: "interstellar",
      temperature: "cold",
      resources: "high",
      infrastructure: "substantial",
      spaceport: 9,     // Orbital, Shipyards for medium craft
      satellites: 1,
      description: "Thurid is known for it’s industrial output and lenient trading laws. The US council chambers are located here.",
      tags: ["US Capital"]
    }
  ],
  description: "While Al-Taleqani and Careeno are the superpowers of \
  interstellar politics, Zena is the close third. It’s position in the middle of the \
  United Systems’ territory has meant that it has become the de-facto capital."
}