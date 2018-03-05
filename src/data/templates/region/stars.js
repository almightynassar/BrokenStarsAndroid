
/** 
 * Helpful resources:
 *  - http://www.isthe.com/chongo/tech/astro/HR-temp-mass-table-byhrclass.html
 *  - http://www.atlasoftheuniverse.com/startype.html
 *  - http://www.idialstars.com/april2013.htm
 *  - https://astronomy.stackexchange.com/questions/10113/how-to-calculate-the-expected-surface-temperature-of-a-planet
 */
export default {
    /**
     * Star Class Definitions
     * 
     *  - Temperature is measured in Kelvin (K)
     *  - Temperature range is split up between 10 (0-9) data points
     *  - Colour is represented by the color matrix
     *  - Based on Harvard spectral classification
     */
    class: {
        O: {
            colour: "Blue",
            temp: { min: 30000, max: 50000 },
            description: "Very hot and very luminous, being bluish in color; in fact, most \
            of their output is in the ultraviolet range.",
            matrix: [ 
                1, 0, 0, 0, 0,
                0, 1, 0, 0, 0,
                0, 0, 1, 0, 0.2,
                0, 0, 0, 1, 0,
            ]
        },
        B: {
            colour: "Blue-White",
            temp: { min: 10000, max: 30000 },
            description: "Extremely luminous and blue. As O and B stars are so powerful, \
            they only live for a very short time, and thus they do not stray far from the \
            area in which they were formed.",
            matrix: [ 
                1, 1, 0, 0, 0,
                1, 1, 0, 0, 0,
                1, 1, 1, 0, 0.5,
                0, 0, 0, 1, 0,
            ]
        },
        A: {
            colour: "White",
            temp: { min: 7500, max: 10000 },
            description: "Amongst the more common naked eye stars, and are white or \
            bluish-white.",
            matrix: [ 
                1, 1, 1, 0, 0,
                1, 1, 1, 0, 0,
                1, 1, 1, 0, 0,
                0, 0, 0, 1, 0,
            ]
        },
        F: {
            colour: "Yellow-White",
            temp: { min: 6000, max: 7500 },
            description: "These stars' color is white with a slight tinge of yellow.",
            matrix: [ 
                1, 1, 1, 0, 0,
                1, 1, 1, 0, 0,
                0, 0, 0.5, 0, 0,
                0, 0, 0, 1, 0,
            ]
        },
        G: {
            colour: "Yellow",
            temp: { min: 5200, max: 6000 },
            description: "The best known Star type, if only for the reason that Sol is of \
            this class.",
            matrix: [ 
                1, 1, 0, 0, 0.2,
                0, 1, 1, 0, 0.2,
                0, 0, 0, 0, 0,
                0, 0, 0, 1, 0,
            ]
        },
        K: {
            colour: "Orange",
            temp: { min: 3700, max: 5200 },
            description: "Orangish stars which are slightly cooler than Sol.",
            matrix: [ 
                1, 0.5, 1, 0, 0,
                0, 0.5, 0.5, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 1, 0,
            ]
        },
        M: {
            colour: "Red",
            temp: { min: 2400, max: 3700 },
            description: "Class M stars are by far the most common. However, these stars \
            have such low luminosities that none are bright enough to be seen with the \
            unaided eye, unless under exceptional conditions.",
            matrix: [ 
                1, 1, 1, 0, 0,
                0, 0.5, 0, 0, 0,
                0, 0, 0.5, 0, 0,
                0, 0, 0, 1, 0,
            ]
        },
    },
    /** 
     * Star Yerkes Luminosity
     * 
     *  - Star 'size' is linked to luminosity, and is relative for each harvard spectrum class
     *  - Based on Yerkes luminosity classes
     *  - Bolometric Magnitude is a measure of luminosity on a logarithmic magnitude scale
     *  - Mass is relative to our Sun/Sol (1.989E+30 kg)
     *  - Max-Min values are relative to the star's temperature
     */
    size: {
        "0": {
            name: "Hypergiant",
            magnitude: {
                O: { min: -9.9, max: -14.1 },
                B: { min: -8, max: -11.2 },
                A: { min: -8.9, max: -7.8 },
                F: { min: -8, max: -8.9 },
                G: { min: -10.4, max: -8 },
                K: { min: -10.9, max: -8.6 },
                M: { min: -17.4, max: -8.9 },
            },
            mass: {
                O: { min: 63.1, max: 160 },
                B: { min: 15.3, max: 50.1 },
                A: { min: 10.8, max: 15.8 },
                F: { min: 8.5, max: 12.6 },
                G: { min: 8.1, max: 6.3 },
                K: { min: 11.1, max: 8.2 },
                M: { min: 10, max: 13.3 },
            },
        },
        "I": {
            name: "Supergiant",
            magnitude: {
                O: { min: -9, max: -11.2 },
                B: { min: -6.1, max: -9.7 },
                A: { min: -5.3, max: -5.7 },
                F: { min: -4.8, max: -5.3 },
                G: { min: -5.7, max: -4.9 },
                K: { min: -7, max: -5.8 },
                M: { min: -13.4, max: -7.2 },
            },
            mass: {
                O: { min: 54.5, max: 140 },
                B: { min: 12.9, max: 39.2 },
                A: { min: 9, max: 11.5 },
                F: { min: 7, max: 12.6 },
                G: { min: 3.8, max: 2.5 },
                K: { min: 6.3, max: 3.9 },
                M: { min: 8, max: 10.7 },
            },
        },
        "II": {
            name: "Bright Giant",
            magnitude: {
                O: { min: -8.9, max: -11 },
                B: { min: -4.3, max: -8.5 },
                A: { min: -2.7, max: -3.8 },
                F: { min: -2.4, max: -2.6 },
                G: { min: -3.5, max: -2.5 },
                K: { min: -4.2, max: -3.6 },
                M: { min: -11.4, max: -4.3 },
            },
            mass: {
                O: { min: 45.9, max: 130 },
                B: { min: 10.5, max: 33.8 },
                A: { min: 7.1, max: 9.4 },
                F: { min: 5.6, max: 8.9 },
                G: { min: 3, max: 2.1 },
                K: { min: 4.9, max: 3.1 },
                M: { min: 6, max: 8.2 },
            },
        },
        "III": {
            name: "Giant",
            magnitude: {
                O: { min: -8.3, max: -11 },
                B: { min: -1.4, max: -7.9 },
                A: { min: 1.2, max: -0.7 },
                F: { min: 1, max: 1.4 },
                G: { min: -2.2, max: -0.6 },
                K: { min: -0.6, max: -2.2 },
                M: { min: -8.4, max: -2.4 },
            },
            mass: {
                O: { min: 37.3, max: 120 },
                B: { min: 8.1, max: 28.4 },
                A: { min: 5.3, max: 7.2 },
                F: { min: 4.1, max: 5.3 },
                G: { min: 2.3, max: 1.8 },
                K: { min: 3.4, max: 2.3 },
                M: { min: 4.1, max: 5.6 },
            },
        },
        "IV": {
            name: "Subgiant",
            magnitude: {
                O: { min: -7.9, max: -10.6 },
                B: { min: -0.8, max: -7.5 },
                A: { min: 1.9, max: -0.1 },
                F: { min: 2.5, max: 2.1 },
                G: { min: 2.6, max: 2.8 },
                K: { min: 1.5, max: 2.6 },
                M: { min: -5, max: 1.2 },
            },
            mass: {
                O: { min: 28.6, max: 110 },
                B: { min: 5.7, max: 22.9 },
                A: { min: 3.5, max: 5.1 },
                F: { min: 2.6, max: 3.4 },
                G: { min: 1.6, max: 1.4 },
                K: { min: 2, max: 1.6 },
                M: { min: 2.1, max: 3.1 },
            },
        },
        "V": {
            name: "Dwarf",
            magnitude: {
                O: { min: -7.2, max: -10.5 },
                B: { min: -0.4, max: -6.7 },
                A: { min: 2.4, max: 0.2 },
                F: { min: 4, max: 2.5 },
                G: { min: 5.4, max: 4.5 },
                K: { min: 6.9, max: 5.4 },
                M: { min: 10.7, max: 7 },
            },
            mass: {
                O: { min: 20, max: 100 },
                B: { min: 3.4, max: 17.5 },
                A: { min: 1.7, max: 2.9 },
                F: { min: 1.1, max: 1.6 },
                G: { min: 0.8, max: 1.1 },
                K: { min: 0.5, max: 0.8 },
                M: { min: 0.1, max: 0.5 },
            },
        }
    },
    /**
     * Calculates the luminosity of a star relative to Sol/Sun
     * 
     * The inputs refer to the classification of the star, not their exact values.
     * 
     * i.e. To calculate relative luminosity for our Sun (a G2V star), we would call:
     * 
     * luminosityRelative('G', 2, 'V')
     */
    luminosityRelative: function(s, t, y) {
        let magnitude = this.size[y].magnitude[s];
        let dir = (magnitude.min > magnitude.max) ? -1 : 1;
        let step = ((magnitude.min > magnitude.max) ? (magnitude.min - magnitude.max) : (magnitude.max - magnitude.min)) / 9
        let mBolometric = magnitude.min + ((step * (9 - t)) * dir)
        return Math.pow(10, (4.75 - mBolometric)/2.5 ).toPrecision(2)
    },
    /**
     * Calculates the luminosity in Watts (W)
     */
    luminosity: function(s, t, y) {
        return this.luminosityRelative(s, t, y) * (3.846 * Math.pow(10,26))
    },
    /**
     * Calculates the temperature in Kelvin (K)
     */
    temperature: function(s, t) {
        let temp = this.class[s].temp
        let step = Math.round((temp.max - temp.min) / 9)
        return (step * (9 - t)) + temp.min
    },
    /**
     * Calculates the relative radius of a star relative to our Sun/Sol
     */
    radiusRelative: function(s, t, y) {
        let lumRel = this.luminosityRelative(s, t, y)
        let temp = this.temperature(s, t)
        return (Math.pow(5800 / temp, 2) * Math.pow(lumRel, 0.5)).toPrecision(2)
    },
    /**
     * Calculates the radius in meters (m)
     */
    radius: function(s, t, y) {
        return this.radiusRelative(s, t, y) * (6.957 * Math.pow(10,8))
    },
    /**
     * Calculates the mass of a star relative to Sol/Sun
     * 
     * The inputs refer to the classification of the star, not their exact values.
     * 
     * i.e. To calculate relative mass for our Sun (a G2V star), we would call:
     * 
     * massRelative('G', 2, 'V')
     */
    massRelative: function(s, t, y) {
        let mass = this.size[y].mass[s];
        let dir = (mass.min > mass.max) ? -1 : 1;
        let step = ((mass.min > mass.max) ? (mass.min - mass.max) : (mass.max - mass.min)) / 9
        return (mass.min + ((step * (9 - t)) * dir)).toPrecision(2)
    },
    /**
     * Calculates the mass in kilograms (kg)
     */
    mass: function(s, t, y) {
        return this.massRelative(s, t, y) * (1.989 * Math.pow(10,30))
    },
    /**
     * Outputs an object with all the relevant star information
     */
    details: function(s, t, y) {
        return {
            s: s,
            t: t,
            y: y,
            class: s+t+y,
            type: this.class[s].colour + " " + this.size[y].name,
            description: this.class[s].description,
            temperature: this.temperature(s, t),
            luminosity: this.luminosity(s, t, y).toPrecision(4),
            luminosityRelative: this.luminosityRelative(s, t, y),
            radius: this.radius(s, t, y).toPrecision(4),
            radiusRelative: this.radiusRelative(s, t, y),
            mass: this.mass(s, t, y).toPrecision(4),
            massRelative: this.massRelative(s, t, y)
        }
    },
    /**
     * Outputs target information for select controls
     */
    makeArray(target) {
        if (['class',
            'size'].includes(target)) {
            return _.values(_.mapValues(this[target], function(value, key) {
                value['id'] = key;
                return value; 
            }))
        }
        return []
    },
}