export default {
    categories: [
        "d4-2",
        "d4",
        "d6",
        "d8",
        "d10",
        "d12"
    ],
    /**
     * Converts the text version of the dice category into an integer value
     * 
     *  - d4-2  = 2
     *  - d4    = 4
     *  - d6    = 6
     *  - d8    = 8
     *  - d10   = 10
     *  - d12   = 12
     */
    toValue(dice) {
        let value = this.categories.indexOf(dice) - 1;
        return parseInt(4 + (value * 2));
    },
    /**
     * Converts the text version of the dice category into a multiple of 4
     * 
     *  - d4-2  = 0.5
     *  - d4    = 1
     *  - d6    = 1.5
     *  - d8    = 2
     *  - d10   = 2.5
     *  - d12   = 3
     */
    toMultiplier(dice) {
        let value = this.toValue(dice);
        return parseFloat(value / 4);
    },
    /**
     * Ensures the provided field matches an entry in the catergory array 
     */
    bound(dice) {
        return (this.categories.indexOf(dice) < 0) ? 'd4-2' : dice
    },
    /**
     * Select an option at random
     */
    random() {
        let index = this.categories.length * Math.random() << 0
        return this.categories[index]
    },
}