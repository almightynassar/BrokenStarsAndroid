export default {
    /**
     * Type of living organisms
     */
    biosphere: {
        none: "No native life supported.",
        remnants: "A dead ecology with trace amounts of native lifeforms.",
        microbial: "Non-sentient micro-organisms such as amino acids, bacteria, fungii and slimes.",
        incompatible: "Native flora and fauna is biologically incompatible with normal nutritional needs. Microbial life could potentially be allergenic.",
        compatible: "Native flora and fauna is biologically compatible with normal nutritional needs (or it was terraformed to be so).",
        hybrid: "The ecology can support both native incompatible species and imported compatible species.",
        engineered: "The ecology is completely man-made."
    },
    /**
     * Atmospheric composition
     */
    composition: {
        corrosive: {
            albedo: 0.1,
            greenhouse: 50,
            description: "Dangerously hostile gases that actively corrodes non-native materials.",
        },
        exotic: {
            albedo: 0.1,
            greenhouse: 100,
            description: "Unbreathable mix of gasses in the atmosphere.",
        },
        greenhouse: {
            albedo: 0.25,
            greenhouse: 150,
            description: "Greenhouse gases compose the majority of the atmosphere. These gases may include Carbon Dioxide (CO2), Methane (CH4), Nitrous Oxide (N2O), Chlorofluorocarbons (CFC) and Hydrofluorocarbons (HCFC). Not breathable."
        },
        none: {
            albedo: 0.05,
            greenhouse: 1,
            description: "There is no atmosphere. If there is atmospheric pressure, it is inconclusive what is causing it.",
        },
        standard: {
            albedo: 0.1,
            greenhouse: 1.75,
            description: "Oxygen composes around 18-25% of the atmosphere, with other inert gases such as Nitrogen and/or Argon making up the rest. Potentially breathable without assistance.",
        },
        tainted: {
            albedo: 0.1,
            greenhouse: 2,
            description: "Earth-like atmosphere that has contaminants. Requires a filtration system.",
        },
        toxic: {
            albedo: 0.1,
            greenhouse: 25,
            description: "Unbreathable mix of gases that are considered toxic when humanoids are exposed to them.",
        },
    },
    /**
     * Atmospheric pressure
     */
    pressure: {
        none: {
            atm: {
                min: 0,
                max: 0.06,
            },
            name: "None",
            albedo: 0.05,
            description: "Little to no atmospheric pressure. Exposure can be fatal.",
        },
        trace: {
            atm: {
                min: 0.06,
                max: 0.3,
            },
            name: "Trace",
            albedo: 0.09,
            description: "Enough atmospheric pressure to make exposure ok, but an aid is required in breathable atmospheres.",
        },
        thin: {
            atm: {
                min: 0.3,
                max: 0.8,
            },
            name: "Thin",
            albedo: 0.12,
            description: "Unaided breathing is fine in breathable atmospheres, although shortness of breath.",
        },
        standard:{
            atm: {
                min: 0.8,
                max: 1.4,
            },
            name: "Standard",
            albedo: 0.17,
            description: "Standard Earth-like atmospheric pressure.",
        },
        thick: {
            atm: {
                min: 1.4,
                max: 4,
            },
            name: "Thick",
            albedo: 0.24,
            description: "Unaided breathing is fine in breathable atmospheres, although difficulty in breathing.",
        },
        heavy: {
            atm: {
                min: 4,
                max: 80,
            },
            name: "Heavy",
            albedo: 0.35,
            description: "Exposure is ok, but too much atmospheric pressure means that a breathing aid is required.",
        },
        extreme: {
            atm: {
                min: 80,
                max: 1000,
            },
            name: "extreme",
            albedo: 0.45,
            description: "The pressure is extremely high. Exposure can be fatal.",
        },
    },
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
            description: "Little to no surface water.",
        },
        dry: {
            name: "Dry",
            percent: {
                min: 10,
                max: 24,
            },
            description: "Trace amounts of surface water.",
        },
        arid: {
            name: "Arid",
            percent: {
                min: 25,
                max: 44,
            },
            description: "Enough surface water to sustain a small population.",
        },
        moderate: {
            name: "Moderate",
            percent: {
                min: 45,
                max: 64,
            },
            description: "Suitable amount of surface water.",
        },
        wet: {
            name: "Wet",
            percent: {
                min: 65,
                max: 89,
            },
            description: "Large amounts of surface water.",
        },
        water: {
            name: "Water",
            percent: {
                min: 90,
                max: 100,
            },
            description: "Surface is covered by water."
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
     * 
     * - Mercury   = 166.85 °C
     * - Venus     = 456.85 °C
     * - Earth     = 13.85 °C
     * - Mars      = -55.15 °C
     * - Pluto     = -236.15 °C
     * 
     * @param {Number} L Luminosity
     * @param {Number} a Bond Albedo
     * @param {Number} D Distance (in AU)
     * @param {Number} ghf Greenhouse factor
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
     * Calculate the planetary albedo
     * 
     * - Mercury   = 0.12
     * - Venus     = 0.75
     * - Earth     = 0.3
     * - Mars      = 0.16
     * - Pluto     = 0.4
     * - Titan     = 0.22
     * - Ganymede  = 0.43
     * 
     * @param {Number} p Pressure-based albedo
     * @param {Number} c Composition-based albedo
     * @param {Number} h Hydrosphere percentage
     */
    albedo(p, c, h) {
        let a = p + c
        return (a + ((h/100)*(a*0.15)))
    },
    /**
     * Converts the relative mass to kg
     * 
     * @param {Number} m Relative Mass
     */
    getMass(m) {
        return m * (5.972*Math.pow(10, 24))
    },
    /**
     * Calculates the G Force
     * 
     * @param {Number} m Relative mass
     * @param {Number} d Diameter in km
     */
    getGravity(m, d) {
        let G = 6.67*Math.pow(10,-11)
        let M = this.getMass(m)
        let r = (d*1000)/2
        let F = (G*M)/Math.pow(r, 2)
        let gravity = (F / 9.81)
        return _.round(gravity, 2)
    },
    /**
     * Calculate the Volume
     * 
     * @param {Number} d Diameter in km
     */
    getVolume(d) {
        return (4/3)*Math.PI*Math.pow(((d*1000)/2), 3)
    },
    /**
     * Calculate the relative density
     * 
     * RESOURCES:
     *  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
     * 
     * @param {Number} m Relative mass
     * @param {Number} d Diameter in km
     */
    getDensity(m, d) {
        let base = 5495.125
        let M = this.getMass(m)
        let V = this.getVolume(d)
        let density = M/V
        let relative = density / base
        return _.round(relative, 3)
    },
    /**
     * Get Atmospheric Pressure details
     */
    getPressure(p) {
        return _.find(this.pressure, function(o) { return ( p >= o.atm.min && p <= o.atm.max )})
    },
    /**
     * Get Hydrosphere details
     */
    getHydrosphere(h) {
        return _.find(this.hydrosphere, function(o) { return ( h >= o.percent.min && h <= o.percent.max )})
    },
    /**
     * Get Size details
     */
    getSize(s) {
        return _.find(this.size, function(o) { return ( s >= o.limit.min && s <= o.limit.max )})
    },
    /**
     * Get Orbit time
     * 
     * @param {Number} d Distance in AU
     * @param {Number} m Mass of star
     */
    getOrbit(d, m) {
        // Get the basics
        let distance = d * (1.496*Math.pow(10, 11))
        let G = 6.67*Math.pow(10,-11)
        // Do some quick mafs
        let u = G * Number(m)
        // In seconds
        let T = 2*Math.PI*Math.sqrt(Math.pow(distance, 3)/u)
        // Return in days
        return Math.round((((T/60)/60)/24),1)
    },
    /**
     * Outputs an object with all the relevant planet information
     */
    details: function(star, planet) {
        // Grab reference data
        let composition = this.composition[planet.properties.composition]
        let hydro = this.getHydrosphere(planet.properties.hydrosphere)
        let pressure = this.getPressure(planet.properties.pressure)
        // Calculate some parts
        let albedo = this.albedo(pressure.albedo, composition.albedo, planet.properties.hydrosphere)
        let temperature = this.temperature(star.luminosity, albedo, planet.distance, composition.greenhouse)
        let details = {
            albedo: _.round(albedo, 2),
            biosphere: this.biosphere[planet.properties.biosphere],
            celsius: _.round(temperature - 273.15, 2),
            composition: composition,
            density: this.getDensity(planet.properties.mass, planet.diameter),
            gravity: this.getGravity(planet.properties.mass, planet.diameter),
            hydrosphere: hydro,
            mass: this.getMass(planet.properties.mass),
            pressure: pressure,
            size: this.getSize(planet.diameter),
            temperature: _.round(temperature, 2),
        }
        if (!planet.isSatellite) {
            details.orbit = this.getOrbit(planet.distance, star.mass)
        }
        return details
    },
    /**
     * Outputs target information for select controls
     */
    makeArray(target) {
        if (['biosphere',
            'composition'].includes(target)) {
            return _.values(_.mapValues(this[target], function(value, key) {
                value['id'] = key;
                return value; 
            }))
        }
        return []
    },
}