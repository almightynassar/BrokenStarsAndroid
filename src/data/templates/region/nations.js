export default {
    /**
     * Regional powers
     */
    powers: {
        gq: {
            name: "Ghanate Queendom",
            colour: "#5E2605",
            governance: {
                status: "stable",
                source: "autocratic",
                structure: "unitary",
            },
            description: "The Ghanate Queendom governs over the ancestral home of the Ghan \
            and it's colonies. The Queen has absolute rule, although she delegates some \
            of her responsibilities to her Princesses (including governing planets, leading \
            fleets and attending diplomatic functions). The Queen selects a heir from among \
            her Princesses, who takes over when the Queen dies."
        },
        na: {
            name: "N/A",
            colour: "#555",
            governance: {
                status: "none",
                source: "kratocratic",
                structure: "anarchy",
            },
            description: "Absolutely anything goes in this territory."
        },
        ssr: {
            name: "Sakeena Stellar Republic",
            colour: "#CC1100",
            governance: {
                status: "stable",
                source: "oligarchic",
                structure: "hegemony",
            },
            description: "Each planet in the SSR is ruled by a Plantery Council, which is \
            subject to the rulings of the main council known as Central Command. Central \
            Command is headed by two Consuls that are chosen every three years. There is no \
            fixed size for a council, but new Councillers must be approved by a majority of \
            the existing Council. Councillers are usually chosen by a mixed criteria including \
            their wealth and social status."
        },
        us: {
            name: "United Systems",
            colour: "#23238E",
            governance: {
                status: "stable",
                source: "representative",
                structure: "federation",
            },
            description: "The United Systems is a representative democratic federation, with \
            every member planet sending 10 senators to serve on the federal government. Each \
            planet retains it's original government and culture, but work together to improve \
            the galaxy for everyone."
        },
    },
    /**
     * Grabs the regional color
     */
    colour(region) {
        return this.powers[region].colour;
    },
    /**
     * Grabs the region object
     */
    get(region) {
        if (_.has(this.powers, region)) {
            return this.powers[region];
        }
        return this.powers.na;
    },
    toArray() {
        return _.values(_.mapValues(this.powers, function(value, key) {
            value['id'] = key;
            return value; 
        }))
    }
}