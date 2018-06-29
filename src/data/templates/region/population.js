export default {
    /**
     * The level of public infrastructure required for urban settlement
     * (such as telecommunications, sewers, roads and transportation)
     * 
     *  - Density is in people per square km
     */
    infrastructure: {
        none: {
            name: "None",
            density: {
                min: 0,
                max: 0.1
            },
            description: "A complete wilderness or abandoned facilty; if people live here they are isolated.",
        },
        minimal: {
            name: "Minimal",
            density: {
                min: 0.1,
                max: 0.5
            },
            description: "Vast open or natural spaces, with sparse populated areas.",
        },
        limited: {
            name: "Limited",
            density: {
                min: 0.5,
                max: 2
            },
            description: "Large open or natural spaces, but populated areas are not hard to find. (Ancient Earth)",
        },
        low: {
            name: "Low",
            density: {
                min: 2,
                max: 10
            },
            description: "Lot's of populated areas, but quiet open or natural spaces can be found. (1-1900's Earth)",
        },
        moderate: {
            name: "Moderate",
            density: {
                min: 10,
                max: 50
            },
            description: "A few pockets of crowded areas within the population centers, but open or natural areas still take up half the space. (1900-2000's Earth)",
        },
        high: {
            name: "High",
            density: {
                min: 50,
                max: 100
            },
            description: "Lot's of crowded areas within vast sprawling populated areas, with open and natural areas now taking up less than half of the space.",
        },
        considerable: {
            name: "Considerable",
            density: {
                min: 100,
                max: 500
            },
            description: "Mostly populated areas, with dwindling open or natural areas.",
        },
        substantial: {
            name: "Substantial",
            density: {
                min: 500,
                max: 1000
            },
            description: "Populated areas sprawl across the space. Purely open or natural areas are uncommon.",
        },
        extensive: {
            name: "Extensive",
            density: {
                min: 1000,
                max: 10000
            },
            description: "Population centres are large and crowded, but the outskirts still have some room to breath. Open or natural areas barely exist.",
        },
        extreme: {
            name: "Extreme",
            density: {
                min: 10000,
                max: 50000
            },
            description: "Large, sprawling and crowded. Open or natural areas are rare."
        },
        covered: {
            name: "Covered",
            density: {
                min: 50000,
                max: 150000
            },
            description: "Every centimeter of the space is crowded with people."
        }
    },
    /**
     * Tech level
     */
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
    /**
     * Get Infrastructure details
     * @param {Number} d Density (in people per square km)
     */
    getInfrastructure(d) {
        return _.find(this.infrastructure, function(o) { return ( d >= o.density.min && d <= o.density.max )})
    },
    /**
     * Get density
     * @param {String} t Type
     * @param {Number} p Population
     * @param {Number} s Size (Diameter of planet in km)
     * @param {Number} h Hydrosphere coverage in %
     */
    getDensity(t,p,s,h) {
        let d = 0
        if (t == 'planetoid') {
            let radius = s / 2
            let surfaceA = 4 * Math.PI * Math.pow(radius, 2)
            let livable = surfaceA * (100 - h)
            d = Math.round(p / livable)
        } else if (t == 'satellite') {

        }
        return d
    },
    /**
     * Outputs an object with all the relevant population information
     */
    details: function(planet) {
        let details = {}
        if (planet.population) {
            // Grab reference data
            details.density = this.getDensity(planet.type, planet.population.population, planet.diameter, (planet.properties) ? planet.properties.hydrosphere : 0)
            details.infrastructure = this.getInfrastructure(details.density)
            details.tech = this.tech[planet.population.tech]
        }
        return details
    },
    /**
     * Outputs target information for select controls
     */
    makeArray(target) {
        if (['tech',
            'infrastructure'].includes(target)) {
            return _.values(_.mapValues(this[target], function(value, key) {
                value['id'] = key;
                return value; 
            }))
        }
        return []
    },
}