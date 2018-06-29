export default {
  name: "Al-Taleqani",
  x: 0,
  y: 1,
  control: "us",
  zone: "green",
  star: {
    spectrum: "G",
    temperature: "2",
    size: "V"
  },
  objects: [
    {
      name: "Makan Harin",
      distance: 0.39,
      type: "planetoid",
      diameter: 4878,
      satellites: null,
      properties: {
        biosphere: "none",
        composition: "none",
        hydrosphere: 0,
        mass: 0.05527,
        pressure: 0,
      },
      population: null,
      tags: []
    },
    {
      name: "Makan Alhabi",
      distance: 0.723,
      type: "planetoid",
      diameter: 12104,
      satellites: null,
      properties: {
        biosphere: "none",
        composition: "greenhouse",
        hydrosphere: 0,
        mass: 0.81497,
        pressure: 93,
      },
      population: null,
      tags: []
    },
    {
      name: "Al-Sahhah",
      distance: 1,
      type: "planetoid",
      diameter: 12756,
      satellites: [
        {
          name: "Al-Hamoon",
          type: "planetoid",
          diameter: 3474,
          properties: {
            biosphere: "none",
            composition: "none",
            hydrosphere: 0,
            mass: 0.01335,
            pressure: 0,
          },
          population: {
            population: 200000,
            tech: "foundational",
            governance: {
              status: 'captive',
              structure: 'confederacy',
              source: 'representative',
              artificial: 'minimal',
              control: 'moderate',
              crime: 'moderate',
              narcotics: 'moderate',
              psionic: 'light',
              trade: 'light',
              weapons: 'moderate'
            }
          },
          description: "Literally overshadowed by it's big brother, Al-Hamoon clings defiantly onto it's individuality. Residents have a certain \
          nationalistic pride, rooted in their determination to survive on an airless ball of rock. They are initially wary of any  and their new \
          ideas, but are quick to welcome anyone who has proven themselves tough enough to survive the moon.",
          tags: []
        }
      ],
      properties: {
        biosphere: "compatible",
        composition: "standard",
        hydrosphere: 75,
        mass: 1,
        pressure: 1,
      },
      population: {
        population: 107000000000,
        tech: "interstellar",
        governance: {
          status: 'stable',
          structure: 'confederacy',
          source: 'representative',
          artificial: 'minimal',
          control: 'moderate',
          crime: 'moderate',
          narcotics: 'moderate',
          psionic: 'light',
          trade: 'light',
          weapons: 'moderate'
        },
      },
      description: "If Thurid in the Zena sector is considered the political center of the United Systems, then Al-Sahhah is definitely it's cultural \
      heart. The planet boasts the most diverse and multi-cultural diaspora in the entire known galaxy, making it a hotspot for new and innovative ways \
      of thinking. It also creates a diverse spread of market demand; so if you want to find something special, odds are that you can find it on Al-sahhah.",
      tags: ["Cultural Hub"]
    },
    {
      name: "Al-Khadim",
      distance: 1.52,
      type: "planetoid",
      diameter: 6787,
      satellites: null,
      properties: {
        biosphere: "compatible",
        composition: "standard",
        hydrosphere: 25,
        mass: 0.10745,
        pressure: 0.5,
      },
      population: {
        population: 89000,
        tech: "interstellar",
        governance: {
          status: 'captive',
          structure: 'corporation',
          source: 'technocratic',
          artificial: 'minimal',
          control: 'minimal',
          crime: 'heavy',
          narcotics: 'minimal',
          psionic: 'minimal',
          trade: 'minimal',
          weapons: 'minimal'
        },
      },
      description: "Early space explorers from Al-Sahhah had noticed that their nearest planetary neighbour had the bare necessities for supporting life. \
      It was soon established that Al-Khadim was a nearly completed terraforming project from before the Surge. A rush of pilgrims quickly made their way \
      to the planet, attempting to find any intact relics from before the Surge. While nothing significant was found, many pilgrams decided to stay as a \
      testament to the efforts of their ancestors.",
      tags: ["Colony", "New World"]
    },
    {
      name: "Hizam Alsakhra",
      distance: 3.2,
      type: "asteroid",
      diameter: 950,
      satellites: null,
      properties: null,
      population: null,
      tags: []
    },
    {
      name: "Makan Ghaz",
      distance: 5.2,
      type: "jovian",
      diameter: 142796,
      satellites: null,
      properties: null,
      population: null,
      tags: []
    },
  ],
  description: "The most populous, culturally diverse star system in the known Black. \
  Many make their way to Al-Taleqani in the hopes of striking it rich in the mines of \
  Khadim, in a popular Al-Rhul Productions sim-sense experience, or in the hustle and \
  bustle of the streets of Al-Sahhah. The prominent ideology of the system generally \
  focuses on liberty, individual freedoms and the unity and growth of the United Systems."
}