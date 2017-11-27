export default {
    art: {
        control: [
            {
                name: "Neglible",
                base: 2,
                description: "A gentle command that enhances or reduces the target/s existing \
                dispositon, or a slight nudge of movement."
            },
            {
                name: "Limited",
                base: 3,
                description: "The target/s are compelled to follow a single, one-word command, \
                or are moved up to 10 spaces."
            },
            {
                name: "Minor",
                base: 4,
                description: "The target/s are compelled to follow commands in the form of a 15 word \
                sentence, or are moved up to 50 spaces."
            },
            {
                name: "Major",
                base: 6,
                description: "The target/s are compelled to follow commands in the form of a 30 word \
                sentence, or are moved up to 100 spaces."
            },
            {
                name: "Virtual",
                base: 8,
                description: "The target/s can take orders in the form of multiple sentences, with \
                conditional statements (if - then - else), or are moved as far as the eye can see."
            },
            {
                name: "Complete",
                base: 10,
                description: "You have complete control over the target/s, and can move them as far \
                as you desire."
            },
        ],
        perceive: [
            {
                name: "Imprecise",
                base: 1,
                description: "Learn rough details about a visible property or suface thought, \
                or superficially alter one sense."
            },
            {
                name: "Accurate",
                base: 3,
                description: "Learn accurate details about a visible property or surface thought, \
                or enhance / reduce a sense."
            },
            {
                name: "Deep",
                base: 5,
                description: "Learn details about any property or deep thought, or add / remove \
                a sense."
            },
            {
                name: "Complete",
                base: 7,
                description: "Gain complete information on what you desire, or gain complete \
                control of the senses (including using senses at a distance)."
            }
        ],
        transform: [
            {
                name: "Superficial",
                base: 2,
                description: "Make a superficial, cosmetic change such as changing skin colour, \
                colour surface thoughts, or a small minor illusion."
            },
            {
                name: "Enhance / Reduce Attribute",
                base: 4,
                description: "Improve or degrade something that already exists in / about the \
                target/s"
            },
            {
                name: "Transform / Mutate",
                base: 6,
                description: "Convert something that exists in / about the target into something \
                different."
            },
            {
                name: "Add / Remove Attributes",
                base: 8,
                description: "Add something new to the target/s, or remove something completely."
            }
        ]
    },
    form: {
        biological: [
            {
                name: "Basic",
                base: 1,
                description: "Microscopic and tiny organisms such as Bacteria, Cells, and Fungii."
            },
            {
                name: "Simple",
                base: 2,
                description: "Small and simple organics such as Plants, Insects, and Body Parts \
                (Muscles, Bone, Skin)."
            },
            {
                name: "Moderate",
                base: 3,
                description: "Moderately complex organics such as Rodents, Birds, Cats, Dogs, \
                Trees and Organs (Eyes, Brain, Lungs)."
            },
            {
                name: "Complex",
                base: 4,
                description: "Large and extremely interconnected organic systems such as Humans, \
                Elephants, Sharks and Ecosystems."
            },
        ],
        digital: [
            {
                name: "Basic",
                base: 1,
                description: "Simple electronic properties such as Current, Voltage and Power."
            },
            {
                name: "Simple",
                base: 2,
                description: "Small simple circuits such as batteries, speakers, microchips, \
                and harddrives."
            },
            {
                name: "Moderate",
                base: 3,
                description: "Moderately complex software and applications."
            },
            {
                name: "Complex",
                base: 4,
                description: "Extremely complex systems such as Operating Systems and AI."
            },
        ],
        material : [
            {
                name: "Basic",
                base: 1,
                description: "Raw non-organic materials such as Metal, Dirt, and Water."
            },
            {
                name: "Simple",
                base: 2,
                description: "Processed materials such as Plastics, Steel, and Oil."
            },
            {
                name: "Moderate",
                base: 3,
                description: "Constructed, non-moving goods such as Furniture, Paper, \
                Clothing, and Fixtures."
            },
            {
                name: "Complex",
                base: 4,
                description: "Machinery such as Motors, Guns, Televisions and Devices."
            },
        ],
        mental: [
            {
                name: "Basic",
                base: 1,
                description: "Passing surface thought (Did I leave the iron on?)."
            },
            {
                name: "Simple",
                base: 2,
                description: "Familiarity (I’m sure I remember you)."
            },
            {
                name: "Moderate",
                base: 3,
                description: "Brief Memory (That one night)."
            },
            {
                name: "Complex",
                base: 4,
                description: "Inter-related Memories (What I remember of my mother)."
            },
        ]
    },
    attributes: {
        range: [
            {
                name: "Personal",
                base: 0,
                description: "Perform it on yourself."
            },
            {
                name: "Touch",
                base: 1,
                description: "Perform it on a target you are touching."
            },
            {
                name: "Smarts",
                base: 2,
                description: "Perform it on a target within range (distance in units is \
                your Smarts)."
            },
            {
                name: "Sense",
                base: 3,
                description: "Perform it on a target you can see, hear, smell, or otherwise sense."
            },
            {
                name: "Connected",
                base: 4,
                description: "Perform it on a target you have a psionic connection to."
            },
        ],
        duration: [
            {
                name: "Instant",
                base: 0,
                description: "Effects happen instantly."
            },
            {
                name: "Round",
                base: 1,
                description: "Effects last until end of the round (and required Concentration \
                to maintain)."
            },
            {
                name: "Minute",
                base: 2,
                description: "Effects last up to one minute (and required Concentration \
                to maintain)."
            },
            {
                name: "Hour",
                base: 4,
                description: "Effects last up to one hour (and required Concentration \
                to maintain)."
            },
            {
                name: "Day",
                base: 6,
                description: "Effects last up to one day (and required Concentration \
                to maintain)."
            },
        ],   
        target: [
            {
                name: "Single",
                base: 0,
                description: "One singular target."
            },
            {
                name: "Pair",
                base: 1,
                description: "Up to two selected targets, or an area with a radius of \
                half your Smarts in units (rounded down)."
            },
            {
                name: "Space",
                base: 4,
                description: "Up to three selected targets, or an area with a radius of \
                your Smarts in units."
            },
            {
                name: "Area",
                base: 6,
                description: "Up to five selected targets, or an area with a radius of \
                double your Smarts in units."
            },
        ],
        difficulty: [
            {
                name: "Trivial",
                base: -1,
                description: "The task is relatively trivial to perform."
            },
            {
                name: "Standard",
                base: 1,
                description: "The task is of average difficulty."
            },
            {
                name: "Moderate",
                base: 2,
                description: "The task is moderately complex."
            },
            {
                name: "Hard",
                base: 3,
                description: "The task is comparatively difficult to perform."
            },
            {
                name: "Difficult",
                base: 4,
                description: "The task is really hard to perform."
            },
            {
                name: "Impossible",
                base: 6,
                description: "The GM hates you, or doesn't understand fun."
            },
        ]
    },
    calculate(power) {
      return power.art.value + power.form.value + power.range + power.duration + power.target + power.difficulty;
    }
  }