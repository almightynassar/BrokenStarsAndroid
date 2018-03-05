export default {
    /**
     * Composition of the atmosphere
     */
    atmosphere: {
        corrosivethin: {
            name: "Corrosive (Thin)",
            albedo: 0.15,
            greenhouse: 2,
            description: "Dangerously hostile and thin atmosphere that actively corrodes non-native materials.",
        },
        corrosive: {
            name: "Corrosive",
            albedo: 0.3,
            greenhouse: 25,
            description: "Dangerously hostile atmosphere that actively corrodes non-native materials.",
        },
        corrosivethick: {
            name: "Corrosive (Thick)",
            albedo: 0.45,
            greenhouse: 50,
            description: "Dangerously hostile and thick atmosphere that actively corrodes non-native materials..",
        },
        corrosivevery: {
            name: "Corrosive (Super Dense)",
            albedo: 0.75,
            greenhouse: 100,
            description: "Dangerously hostile and dense atmosphere that actively corrodes non-native materials.",
        },
        exoticthin: {
            name: "Exotic (Thin)",
            albedo: 0.15,
            greenhouse: 2,
            description: "Unbreathable mix of thin gasses in the atmosphere.",
        },
        exotic: {
            name: "Exotic",
            albedo: 0.3,
            greenhouse: 25,
            description: "Unbreathable mix of gasses in the atmosphere.",
        },
        exoticthick: {
            name: "Exotic (Thick)",
            albedo: 0.45,
            greenhouse: 50,
            description: "Unbreathable mix of thick gasses in the atmosphere.",
        },
        exoticvery: {
            name: "Exotic (Super Dense)",
            albedo: 0.75,
            greenhouse: 100,
            description: "Unbreathable mix of super-dense gasses in the atmosphere.",
        },
        exotic: {
            albedo: 0.4,
            description: "Unbreathable mix of gasses in the atmosphere that requires the use of oxygen tanks but no other protection.",
        },
        standard: {
            name: "Standard (Oxygen-Nitrogen)",
            albedo: 0.27,
            greenhouse: 1.75,
            description: "Earth-like atmosphere that is breathable without assitance.",
        },
        tainted: {
            name: "Tainted",
            albedo: 0.27,
            greenhouse: 1.9,
            description: "Earth-like atmosphere that has contaminants. Requires a filtration system.",
        },
        thick: {
            name: "Thick (Oxygen-Nitrogen)",
            albedo: 0.32,
            greenhouse: 2.5,
            description: "Earth-like atmosphere that is thicker but still breathable without assitance.",
        },
        thin: {
            name: "Thin (Oxygen-Nitrogen)",
            albedo: 0.22,
            greenhouse: 1.25,
            description: "Earth-like atmosphere that is thinner but still breathable without assitance.",
        },
        trace: {
            name: "Trace",
            albedo: 0.1,
            greenhouse: 1,
            description: "Barely any atmosphere of any description, so requires a vacuum suit",
        },
        vacuum: {
            name: "Vacuum",
            albedo: 0,
            greenhouse: 1,
            description: "No atmosphere. Requires a vacc suit."
        },
    },
    /**
     * Type of living organisms
     */
    // biosphere: {
    //     none: "No native life supported.",
    //     remnants: "A dead ecology with trace amounts of native lifeforms.",
    //     microbial: "Non-sentient micro-organisms such as amino acids, bacteria, fungii and slimes.",
    //     incompatible: "Native flora and fauna is biologically incompatible with normal nutritional needs. Microbial life could potentially be allergenic.",
    //     compatible: "Native flora and fauna is biologically compatible with normal nutritional needs (or it was terraformed to be so).",
    //     hybrid: "The ecology can support both native incompatible species and imported compatible species.",
    //     engineered: "The ecology is completely man-made."
    // },
    /**
     * Percentage of water covering the surface
     */
    hydrosphere: {
        none: {
            name: "None",
            percent: {
                min: 0,
                max: 9,
            },
            description: "Little to no surface water",
        },
        dry: {
            name: "Dry",
            percent: {
                min: 10,
                max: 24,
            },
            description: "Trace amounts of surface water",
        },
        arid: {
            name: "Arid",
            percent: {
                min: 25,
                max: 44,
            },
            description: "Enough surface water to sustain a small population",
        },
        moderate: {
            name: "Moderate",
            percent: {
                min: 45,
                max: 64,
            },
            description: "Suitable amount of surface water",
        },
        wet: {
            name: "Wet",
            percent: {
                min: 65,
                max: 89,
            },
            description: "Large amounts of surface water",
        },
        water: {
            name: "Water",
            percent: {
                min: 90,
                max: 100,
            },
            description: "Surface is covered by water"
        },
    },
    /**
     * The level of public infrastructure required for urban settlement
     * (such as telecommunications, sewers, roads and transportation)
     * 
     *  - Density is in people per square km
     */
    // infrastructure: {
    //     none: {
    //         density: {
    //             min: 0,
    //             max: 0
    //         },
    //         description: "The planet is complete wilderness, and if people live here they are in isolated hamlets or villages.",
    //     },
    //     minimal: {
    //         density: {
    //             min: 0.01,
    //             max: 0.5
    //         },
    //         description: "The planet is mostly natural areas, with a few towns and uncommon city.",
    //     },
    //     limited: {
    //         density: {
    //             min: 0.5,
    //             max: 2
    //         },
    //         description: "The planet has vast natural areas, with many towns and the occasional city. (Ancient Earth)",
    //     },
    //     low: {
    //         density: {
    //             min: 2,
    //             max: 10
    //         },
    //         description: "The planet is mostly towns, with a few cities and metropolises. (1-1900's Earth)",
    //     },
    //     moderate: {
    //         density: {
    //             min: 10,
    //             max: 50
    //         },
    //         description: "The planet has many cities and metropolises, but is still mostly towns and 'rural' areas. (1900-2000's Earth)",
    //     },
    //     high: {
    //         density: {
    //             min: 50,
    //             max: 100
    //         },
    //         description: "The planet is mostly cities and metropolises, with natural areas now taking up less than half of the planet's land surface.",
    //     },
    //     considerable: {
    //         density: {
    //             min: 100,
    //             max: 500
    //         },
    //         description: "The planet is mostly large cities and metropolises. Dwindling natural areas seperate the urban areas.",
    //     },
    //     substantial: {
    //         density: {
    //             min: 500,
    //             max: 1000
    //         },
    //         description: "The planet is mostly sprawling metropolises and it's surrounding suburbs. Purely natural areas are uncommon.",
    //     },
    //     extensive: {
    //         density: {
    //             min: 1000,
    //             max: 10000
    //         },
    //         description: "The planet is mostly super-dense metropolises, where space is a luxury. Some natural areas still exist.",
    //     },
    //     extreme: {
    //         density: {
    //             min: 10000,
    //             max: 50000
    //         },
    //         description: "The planet is dotted with large urban regions, or Megalopolises, with only a few natural areas."
    //     },
    //     covered: {
    //         density: {
    //             min: 50000,
    //             max: 150000
    //         },
    //         description: "The entire planet's surface is practically covered with urban settlements such that no definitive seperate cities exist."
    //     }
    // },
    /**
     * Metallic / Silicate element composition of the planet
     */
    metallic: {
        trivial: {
            name: "Trivial",
            percent: {
                min: 0,
                max: 15
            },
            description: "Barely contains any metals compared to silicates."
        },
        minimal: {
            name: "Minimal",
            percent: {
                min: 16,
                max: 30
            },
            description: "Contains a few metals."
        },
        medium: {
            name: "Medium",
            percent: {
                min: 31,
                max: 50
            },
            description: "Like Earth, contains more Silicate than Metallic elements."
        },
        majority: {
            name: "Majority",
            percent: {
                min: 51,
                max: 70
            },
            description: "Metallic elements makes up more than half of the planet's composition."
        },
        metallic: {
            name: "Metallic",
            percent: {
                min: 71,
                max: 100
            },
            description: "Most of the planet's composition is made of Metallic elements."
        },
    },
    /**
     * Size is diameter of planet in km
     */
    size: {
        trivial: {
            name: "Trivial",
            limit: {
                min: 0,
                max: 1000
            },
            description: "Barely qualifies as a planet, and is little more than a moon or asteroid."
        },
        dwarf: {
            name: "Dwarf",
            limit: {
                min: 1001,
                max: 3000
            },
            description: "A small but servicable planet. Pluto was of this type."
        },
        tiny: {
            name: "Tiny",
            limit: {
                min: 3001,
                max: 6000
            },
            description: "A tiny planet. Mercury was of this type."
        },
        small: {
            name: "Small",
            limit: {
                min: 6001,
                max: 10000
            },
            description: "A small planet. Mars was of this type."
        },
        medium: {
            name: "Medium",
            limit: {
                min: 10001,
                max: 20000
            },
            description: "Since Earth and Venus was of this type, this is considered the standard."
        },
        large: {
            name: "Large",
            limit: {
                min: 20001,
                max: 30000
            },
            description: "A large planet."
        },
        huge: {
            name: "Huge",
            limit: {
                min: 30001,
                max: 50000
            },
            description: "A huge planet. Neptune (Gas Giant) was of this type."
        },
    },
    /**
     * Calculate the surface temperature
     * 
     * RESOURCES:
     *  - http://www.astro.indiana.edu/ala/PlanetTemp/index.html#fourthpage
     *  - https://astronomy.stackexchange.com/questions/10113/how-to-calculate-the-expected-surface-temperature-of-a-planet
     */
    temperature(L, a, D, ghf) {
        // Distance (D) will be in AU, so convert to meters
        let d = D * 149000000000
        // The Stefan-Boltzmann constant
        let ơ = 5.670373 * Math.pow(10, -8)
        // The Greenhouse Effect factor (also the absorption factor)
        let gh = ghf / 4
        // Parts of the Effective Temperature
        let eff_top = L * (1-a)
        let eff_bottom = 4*Math.PI*Math.pow(d,2)*ơ
        // Calculate T in Kelvin
        return Math.pow(gh * (eff_top / eff_bottom),0.25)
    },
    /**
     * Get Hydrosphere details
     */
    getHydrosphere(h) {
        return _.find(this.hydrosphere, function(o) { return ( h >= o.percent.min && h <= o.percent.max )})
    },
    /**
     * Get Metallic details
     */
    getMetallic(m) {
        return _.find(this.metallic, function(o) { return ( m >= o.percent.min && m <= o.percent.max )})
    },
    /**
     * Get Size details
     */
    getSize(s) {
        return _.find(this.size, function(o) { return ( s >= o.limit.min && s <= o.limit.max )})
    },
    /**
     * Outputs an object with all the relevant planet information
     */
    details: function(star, planet) {
        // Grab reference data
        let atmo = this.atmosphere[planet.atmosphere]
        let hydro = this.getHydrosphere(planet.hydrosphere)
        let metallic = this.getMetallic(planet.metallic)
        let size = this.getSize(planet.size)
        // Calculate some parts
        let albedo = (atmo.albedo + ((planet.hydrosphere/100)*(atmo.albedo*0.15)))
        let temperature = this.temperature(star.luminosity, albedo, planet.distance, atmo.greenhouse)
        return {
            albedo: albedo.toFixed(2),
            celsius: (temperature - 273.15).toFixed(2),
            hydrosphere: hydro,
            metallic: metallic,
            temperature: temperature.toFixed(2),
            size: size,
            // s: s,
            // t: t,
            // y: y,
            // class: s+t+y,
            // type: this.class[s].colour + " " + this.size[y].name,
            // description: this.class[s].description,
            // temperature: this.temperature(s, t),
            // luminosity: this.luminosity(s, t, y).toPrecision(4),
            // luminosityRelative: this.luminosityRelative(s, t, y),
            // radius: this.radius(s, t, y).toPrecision(4),
            // radiusRelative: this.radiusRelative(s, t, y),
            // mass: this.mass(s, t, y).toPrecision(4),
            // massRelative: this.massRelative(s, t, y)
        }
    },
    /**
     * Outputs target information for select controls
     */
    makeArray(target) {
        if (['atmosphere',
            'hydrosphere',
            'infrastructure',
            'size'].includes(target)) {
            return _.values(_.mapValues(this[target], function(value, key) {
                value['id'] = key;
                return value; 
            }))
        }
        return []
    },
}