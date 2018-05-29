export default {
    type: "status",
    description: "These are the statuses, states and modifiers that affect you as a player.",
    rules: [
        {
            name: "Bleeding Out",
            rule: "Bleeding Out is a character status effect you get when you fail your Incapacitated roll. \
            In this state, you must roll a Vigor Check every round until you are Stabilized. On a Failure \
            your character dies, a Success means you maintain the statues, and a Raise means you are now Stabilized.",
        },
        {
            name: "Cover",
            rule: "Apply the following penalties when Shooting or Noticing someone in Stealth: -1 for \
            Light cover, -2 for Medium cover, and -4 for Heavy."
        },
        {
            name: "Darkness / Lighting",
            rule: "Apply the following penalties to any Checks that require vision, such as shooting and \
            stealth: -1 for Dim light, -2 for Darkness (where targets are not visible beyond 5cm), \
            and -4 for Pitch Black."
        },
        {
            name: "Difficult Terrain",
            rule: "Each 2cm of difficult terrain (mud, snow, hills, etc) counts as 2 for purposes of movement."
        },
        {
            name: "Encumbrance",
            rule: "Your character’s load limit is 3 x their Strength die (in kilograms). Each multiple above that \
            limit gives a -1 penalty to Agility and Strength (do not recalculate your load limit!) and all related \
            skills. You cannot carry weight that inflicts a penalty of more than -3."
        },
        {
            name: "Falling",
            rule: "You suffer 1d6+1 damage per 5cm, up to 10d6+10. Landing in water reduces \
            number of dice rolled by half (rounded down)."
        },
        {
            name: "Fatigue",
            rule: "Fatigue works similarly to Wounds, except you can only take 2 levels of Fatigue before you \
            are Incapacitated. Fatigue sources are usually Hazards such as heat, cold, and disease. Just like \
            Wounds, each level of Fatigue is a -1 penalty to all Checks.",
        },
        {
            name: "Fear",
            rule: "Make a Spirit Check. On a Failure, you are Shaken and suffer a level of Fatigue for the rest \
            of the encounter. You only need to roll the first time you experience the source of the fear."
        },
        {
            name: "Gravity",
            rule: "In high gravity, apply a -2 penalty to all Agility-based Checks and your pace . In low gravity, \
            apply a +2 bonus to all Agility-based Checks and your pace. In zero-g environments, a result of 1 on a \
            physical trait Check means you lose control and tumble (-2 to all Checks). To stabilise yourself while \
            you are tumbling, you must succeed on an Agility Check as a free action (and only if you have a way to \
            stabilise yourself)."
        },
        {
            name: "Holding your Breath",
            rule: "You can hold your breath for a number of rounds equal to 2 plus your Vigor die. Half this if you were \
            not prepared beforehand."
        },
        {
            name: "Incapacitated",
            rule: "Incapacitated is a character status effect you get when you reach your Wound limit. You \
            must make an immediate Vigor Check; a Failure means that you are Bleeding Out, a Success means \
            you are unconcious for 24 hours, and a Raise means you are just stunned (you still have 3 Wounds, \
            but are just Shaken instead of Incapacitated).",
        },
        {
            name: "Shaken",
            rule: "A character status effect you get when you first take damage. You can only \
            move half your Pace while Shaken, and can take no Actions until you succeed on a Spirit Check. \
            Failure means you remain Shaken, a Success means you can remove the status, and any Raises \
            means you can immediately take Actions as normal. Note that gaining the Shaken status while \
            already Shaken means you get a Wound instead.",
        },
        {
            name: "Stabilized",
            rule: "A character status effect you get after you were Bleeding Out. You get into \
            this state by either getting a Raise on your Vigor Check or when you receive some sort of Healing.",
        },
    ]
}