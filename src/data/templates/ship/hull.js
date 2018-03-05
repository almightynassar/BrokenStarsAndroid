export default {
    // Size categories
    categories: [
        "Pod",
        "Flyer",
        "Runabout",
        "Shuttle",
        "Corvette",
        "Frigate",
        "Light Cruiser",
        "Cruiser",
        "Heavy Cruiser",
        "Carrier",
        "Behemoth",
        "Leviathan",
        "Moonship",
        "Worldship",
        "Starship",
    ],
    /**
     * Converts the text version of the hull category into an integer value
     * 
     *  - Pod           = -2
     *  - Flyer         = -1
     *  - Runabout      = 0
     *  - Shuttle       = 1
     *  - Corvette      = 2
     *  - Frigate       = 3
     *  - Light Cruiser = 4
     *  - Cruiser       = 5
     *  - Heavy Cruiser = 6
     *  - Carrier       = 7
     *  - Behemoth      = 8
     *  - Leviathan     = 9
     *  - Moonship      = 10
     *  - Worldship     = 11
     *  - Starship      = 12
     */
    toValue(hull) {
        return this.categories.indexOf(hull) - 2
    },
    /**
     * Converts the text version of the hull category into an exponential multiplier
     * 
     *  - Pod           = 1
     *  - Flyer         = 2
     *  - Runabout      = 4
     *  - Shuttle       = 8
     *  - Corvette      = 16
     *  - Frigate       = 32
     *  - Light Cruiser = 64
     *  - Cruiser       = 128
     *  - Heavy Cruiser = 256
     *  - Carrier       = 512
     *  - Behemoth      = 1024
     *  - Leviathan     = 2048
     *  - Moonship      = 4096
     *  - Worldship     = 8192
     *  - Starship      = 16384
     */
    toMultiplier(hull) {
        let index = this.categories.indexOf(hull)
        return (2^(1+index))/2
    },
    /**
     * Ensures the provided field matches an entry in the catergory array 
     */
    bound(hull) {
        return (this.categories.indexOf(hull) < 0) ? 'Pod' : hull
    },
    /**
     * Select an option at random
     */
    random() {
        let index = this.categories.length * Math.random() << 0
        return this.categories[index]
    },
}