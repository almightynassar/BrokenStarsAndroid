export default {
    // Art: The function of the magic
    art: {
        Control: {
            base: 1,
            description: "Exert limited control over the target or property."
        },
        Perceive: {
            base: 0,
            description: "Learn about the properties or secrets of the target."
        },
        Mutate: {
            base: 2,
            description: "Transform, Add or Remove properties of the target."
        }
    },
    // Art Specialisation: How "complex" the magic is
    art_specialisation: {
        Neglible: {
            base: 1,
            description: "The effect is barely noticiable, superficial, cosmetic, or barely enhances or reduces \
            existing properties. It does not inflict any damage."
        },
        Limited: {
            base: 2,
            description: "The effect has a noticiable impact, and can enhance or reduce existing properties. Information \
            gained is more accurate as you penetrate further than the superficial surface layer. It inflicts a minimun \
            of d4 damage (or boon)."
        },
        Minor: {
            base: 3,
            description: "The effect has a minor impact, and can learn deeply held secrets or truths about the properties \
            of the target. It can also transform properties into improved (or detrimental) versions (iron into steel or \
            rusty metal). It inflicts a minimum of d6 damage (or boon)."
        },
        Major: {
            base: 4,
            description: "The effect has a major impact, and can incept ideas and actions that the target is not averse \
            to. You can learn the exact details of secrets or properties of the target, and can convert properties into \
            something completely different (arms into swords). It inflicts a minimum of d8 damage (or boon)."
        },
        Complete: {
            base: 5,
            description: "You have complete mastery of the art. You can add or remove ideas, properties, or senses. \
            It inflicts a minimum of d10 damage (or boon)."
        },
    },
    // Form: The medium of the magic 
    form: {
        Biological: {
            base: 1,
            description: "Targets organic materials and the physical systems required to give life to organisms."
        },
        Digital: {
            base: 2,
            description: "Targets both the physical and digital systems required to get electronics working."
        },
        Material : {
            base: 0,
            description: "Only targets the inorganic and artificial materials that make up our reality."
        },
        Mental: {
            base: 2,
            description: "Targets the thoughts and perceived senses of sentient organisms."
        }
    },
    // Form Specialisation: How "complex" the target is
    form_specialisation: {
        Basic: {
            base: 1,
            description: "The most basic form. It is a passing surface thought, basic organism \
            (bacteria, virus, fungus), raw inert material (raw metal ore, dirt, water), or \
            electrical property (Current, Power, Voltage)."
        },
        Simple: {
            base: 2,
            description: "A simple construction of the form. It is a simple organism (insect, \
            plant, bodypart), processed or refined material (steel, plastics, oil), a single \
            targeted thought, or simple electrical product (battery, circuit, switch)."
        },
        Moderate: {
            base: 3,
            description: "A construction of the form. It is a small or uncomplex organism (small \
            animal, trees, organ), inanimate composite goods (furniture, toys, fixtures), multiple \
            thoughts, or complex circuitry and software (E-mail, computers, cameras)."
        },
        Complex: {
            base: 4,
            description: "The most complex construction of the form. It is large or sentient organisms \
            (humans, aliens, ecosystems), machinery (engines, guns ,motors), complex inter-related thoughts \
            and memories, and extremely secure computer systems (operating systems, alarms, firewalls)."
        },
    },
    attributes: {
        range: {
            Personal: {
                base: 0,
                description: "Perform it on yourself."
            },
            Touch: {
                base: 1,
                description: "Perform it on a target you are touching."
            },
            Smarts: {
                base: 2,
                description: "Perform it on a target within range (distance in units is \
                your Smarts)."
            },
            Sense: {
                base: 3,
                description: "Perform it on a target you can see, hear, smell, or otherwise sense."
            },
        },
        duration: {
            Instant: {
                base: 0,
                description: "Effects happen instantly (or requires Concentration to maintain)."
            },
            Round: {
                base: 1,
                description: "Once casted, effects are maintained until end of the round."
            },
            Minute: {
                base: 2,
                description: "Once casted, effects are maintained up to one minute."
            },
            Hour: {
                base: 3,
                description: "Once casted, effects are maintained up to one hour."
            },
            Day: {
                base: 5,
                description: "Once casted, effects are maintained up to one day."
            },
        },   
        target: {
            Single: {
                base: 0,
                description: "One singular target."
            },
            Pair: {
                base: 1,
                description: "Up to two selected targets, or an area with a radius of \
                half your Smarts in units (rounded down)."
            },
            Space: {
                base: 2,
                description: "Up to three selected targets, or an area with a radius of \
                your Smarts in units."
            },
            Area: {
                base: 3,
                description: "Up to five selected targets, or an area with a radius of \
                double your Smarts in units."
            },
        },
        difficulty: {
            Trivial: {
                base: -1,
                description: "The task is relatively trivial to perform."
            },
            Standard: {
                base: 0,
                description: "The task is of average difficulty."
            },
            Moderate: {
                base: 1,
                description: "The task is moderately complex."
            },
            Hard: {
                base: 2,
                description: "The task is comparatively difficult to perform."
            },
            Difficult: {
                base: 3,
                description: "The task is really hard to perform."
            },
            Impossible: {
                base: 4,
                description: "The GM hates you, or doesn't understand fun."
            },
        }
    },
    calculate(power, spntns) {
        let art = this.art[power.art].base + this.art_specialisation[power.art_specialisation].base
        let form = this.form[power.form].base + this.form_specialisation[power.form_specialisation].base
        let range = this.attributes.range[power.range].base
        let duration = this.attributes.duration[power.duration].base
        let target = this.attributes.target[power.target].base
        let difficulty = this.attributes.difficulty[power.difficulty].base
        let spontaneous = (spntns) ? 2 : 0
        return art + form + range + duration + target + difficulty + spontaneous;
    }
}