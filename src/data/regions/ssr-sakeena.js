export default {
  name: "Sakeena",
  x: 4,
  y: 2,
  control: "ssr",
  zone: "green",
  star: {
    spectrum: "G",      // Yellow
    temperature: "3",   // 0 is hottest in class, 9 is coolest
    size: "IV"           // Subgiant
  },
  planets: [
    {
      name: "Georghiou",
      shape: "terrestrial",
      size: "medium",
      atmosphere: "standard",
      hydrosphere: "wet",
      biosphere: "compatible",
      population: 4,   // Tens of thousands
      government: "colony",
      laws: "extreme",
      tech: "early",
      temperature: "warm",
      resources: "low",
      infrastructure: "low",
      spaceport: 3,     // terrestrial, Repair
      satellites: 0,
      description: "Farming colony for the SSR.",
      tags: ["Colony"]
    },
    {
      name: "Oeneus",
      shape: "terrestrial",
      size: "medium",
      atmosphere: "exotic",
      hydrosphere: "dry",
      biosphere: "incompatible",
      population: 6,   // Millions
      government: "colony",
      laws: "extreme",
      tech: "mechanical",
      temperature: "cold",
      resources: "abundant",
      infrastructure: "moderate",
      spaceport: 3,     // terrestrial, Repair
      satellites: 1,
      description: "Mining colony for the SSR.",
      tags: ["Colony"]
    },
    {
      name: "Sakeena",
      shape: "terrestrial",
      size: "huge",
      atmosphere: "thick",
      hydrosphere: "wet",
      biosphere: "hybrid",
      population: 9,   // Billions
      government: "oligarchy",
      laws: "extreme",
      tech: "advanced",
      temperature: "temperate",
      resources: "low",
      infrastructure: "considerable",
      spaceport: 10,     // terrestrial, Shipyards
      satellites: 1,
      description: "Sakeena is a single party state ruled by the 'Patriot's Party'. Their industry is \
      focused on military technologies, and their naval fleet is comparable to the US.",
      tags: ["SSR Capital", "Police State"]
    }
  ],
  description: "Sakeena is a largely self-sufficient star system that strictly follows a protectionist foreign policy. \
  They see the United Systems as a threat to their sovereignty, and actively work to make sure the United Systems do not \
  interfere with their ’sphere of influence’. Many think that the Sakeena system actively encourages the tensions within \
  the Mahallati and Yongheng systems so that they cannot join the United Systems.."
}