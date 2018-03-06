export default {
    /**
     * List of available talent trees
     */
    list: [
        {
            id: "ACRO",
            name: "Acrobatics",
            requirement: [
                {
                    trait: "Agility",
                    min: "d6",
                }
            ],
            base: {
                name: "Handspring",
                effect: "When you are Prone, standing up only costs 1 square of movement instead of the usual 2."
            },
            capstone: {
                name: "Agile",
                effect: "You gain a +1 Bonus to Agility Checks when performing acrobatic manuevers, a +1 bonus to \
                evade area effect attacks, and attackers must take a -1 penalty for ranged attacks."
            },
            talents: [
                [
                    {
                        name: "Tumble",
                        effect: "As a free action, you may move through the space of a hostile to a location on the \
                        other side (you must have enough movement to reach)"
                    },
                    {
                        name: "Acrobat",
                        effect: "A +1 Bonus to Agility Checks when performing acrobatic manuevers (includes Agility Tricks)"
                    }
                ],
                [
                    {
                        name: "Free Running",
                        effect: "When you are wearing no or light armour and take the Run action, you can run on vertical \
                        surfaces, along thin edges, hop from one outcropping to another, and otherwise ignore Difficult \
                        Terrain penalties."
                    },
                    {
                        name: "Quick",
                        effect: "Whenever you are dealt a 5 or lower in Initiative, you may discard and draw again until \
                        you get a card higher than 5."
                    }
                ],
                [
                    {
                        name: "Slippery",
                        effect: "When a trap has been triggered, you may make an immediate Agility check to escape it's \
                        effects (as long as there is somewhere safe to escape to)."
                    },
                    {
                        name: "Dodge",
                        effect: "Unless you are suprised or taken unaware, attackers must take a -1 penalty for ranged \
                        attacks and you gain +1 bonus to your parry."
                    }
                ],
            ],
        },
        {
            id: "ATHL",
            name: "Athletics",
            requirement: [
                {
                    trait: "Athletics",
                    min: "d4",
                }
            ],
            base: {
                name: "Jumper",
                effect: "Add an additional 1 square to all jump distances."
            },
            capstone: {
                name: "Olympian",
                effect: "You gain a +1 bonus to your Toughness, Pace, and all Grappling checks. You also can swim \
                up to your full Athletics die in squares (instead of the usual half)."
            },
            talents: [
                [
                    {
                        name: "Jogger",
                        effect: "+1 bonus to your Pace, and you roll a d8 when Running"
                    },
                    {
                        name: "Sprinter",
                        effect: "+1 bonus to your Pace, and you roll a d10 when Running"
                    }
                ],
                [
                    {
                        name: "Climber",
                        effect: "On a successful Athletics Check during Climbing, you move up to your full Strength \
                        die in squares (instead of the usual half)."
                    },
                    {
                        name: "Strong Grip",
                        effect: "You do not incur any penalties for climbing difficult surfaces. You also have a +2 \
                        bonus to rolls to avoid being Disarmed."
                    }
                ],
                [
                    {
                        name: "Lifter",
                        effect: "Double your Encumberance limit."
                    },
                    {
                        name: "Strong",
                        effect: "You can use a free action to automatically break out of restraints, and you gain a +1 bonus \
                        to all Grappling Checks."
                    }
                ],
            ],
        },
    ],
}