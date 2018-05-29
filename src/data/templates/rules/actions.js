export default {
    type: "action",
    description: "Specific tasks with game mechanics that you can use in and out of combat.",
    rules: [
        {
            name: "Agility Trick",
            rule: "An opposed Agility Check. On your Success the target gets a -2 Penalty to \
            their Parry until their next turn, and on a Raise they also become Shaken.",
        },
        {
            name: "Aid",
            rule: "You may help another player with their action. You must have the skill in \
            question (or a suitable helper skill). You will make a Check, and each Success and \
            Raise will add a +1 bonus for the target player (maximum bonus of +4, except for \
            Strength)."
        },
        {
            name: "Aim",
            rule: "Forfiet one of your Actions this turn to gain a +2 Shooting bonus.",
        },
        {
            name: "Autofire",
            rule: "Limited to weapons with a Rate Of Fire (RoF) greater than 1. You make as many attacks \
            as stated by your RoF, each attack with a -2 Penalty (accounting for recoil etc). You only get to use \
            1 Wild Die. Each attack uses ammunition as specified by your RoF. Weapons without the Auto keyword \
            and a RoF greater than 1 must always Autofire.",
        },
        {
            name: "Called Shot",
            rule: "Allow you to target specific parts of your target (Normally all attacks are assumed to be \
            aimed at the torso or equivalent). A called shot ranges from a -2 to -6 penalty, and may grant you a \
            bonus such as a +4 damage boost.",
        },
        {
            name: "Climbing",
            rule: "When scaling vertical surfaces, you need to make an Athletics Check (modified by your climbing \
            equipment and the type of surface). A Failure means you make no progress (a 1 or less means that you begin \
            to fall). A Success means that you move a number of cm equal your Strength. A Raise means that \
            move an additional 5cm."
        },
        {
            name: "Crawling",
            rule: "You can crawl up to 5cm per turn. This counts as being Prone (-2 penalty for opposed \
            Notice (Stealth) and Shooting Checks when the opponent is more than 8cm distant). In Melee, \
            you suffer a -2 penalty to your Parry and Fighting Checks. Getting up from prone costs 2 units of movement."
        },
        {
            name: "Crouching",
            rule: "You can crouch and move half your Pace. You may Run while crouching (half your Running result). \
            Crouching (without Running) counts as being Light Cover (-1 penalty) for opposed Notice (Stealth) and \
            Shooting Checks when the opponent is more than 8cm distant)."
        },
        {
            name: "Defend",
            rule: "Defend will grant you a +2 bonus to your Parry, but you cannot take any other action this turn \
            (except movement).",
        },
        {
            name: "Disarm",
            rule: "Disarm allows you target the weapon of an opponent (with a -2 Penalty). On a hit, your target \
            must roll a Strength Check against your damage roll to be able to hold onto their weapon.",
        },
        {
            name: "Double Tap",
            rule: "Double Tap are for weapons with the Semi-Auto tag. You make a single attack roll with a +1 bonus \
            to the attack and the damage. You will use 2 rounds of ammunition.",
        },
        {
            name: "Dramatic Tasks",
            rule: "Use this rule when completing a complex and high pressure task. You must complete 5 successful \
            rolls to resolve the task. Most tasks come with a -2 penalty to represent the intense amount of pressure \
            the character is under. There may also be a time limit (represented by a number of rounds)."
        },
        {
            name: "Ganging Up",
            rule: "You and your allies surround a target during Melee. You gain a +1 to your \
            Fighting Check for each ally (maximum of +4 bonus).",
        },
        {
            name: "Grappling",
            rule: "Make an opposed Fighting Check. A Success means the grapple is successful, a Raise means the \
            opponent is Shaken. When grappled, the Target must make an opposed Strength or Agility Check to escape \
            (-4 penalty to all other actions). You can use an opposed Strength or Agility Check to give damage to your grappled victim.",
        },
        {
            name: "Group Checks",
            rule: "If a bunch of people decide to complete the same task, it becomes a Group Check. A Group Check will \
            only suceed if a majority of the individual Checks are successes (Raises can negate a failure). Each failure \
            on a Group Check represents a complication."
        },
        {
            name: "Hacking",
            rule: "Treat as a Dramatic Task. You will require access a physical I/O port (or a network connection). You will \
            then need to 'Open' the port (Security vs Security or Toughness), crack any authentication or encryption, \
            break the Software Firewalls, and then bypass any anti-virus and anti-malware.",
        },
        {
            name: "Healing",
            rule: "This type of healing can only apply within 1 hour of gaining a Wound; any treatment outside of that \
            time limit must follow Natural Healing rules instead. A character will take about 10 minutes to treat someone's \
            Wounds, making a Healing Check. They must apply the patient's Wound penalties to their check (in addition to their \
            own; double the penalty if you are treating yourself). If you do not have suitable medical supplies then you suffer \
            a -2 penalty. Each Success and Raise on your Healing Check removes 1 Wound (maximum of 2). You cannot treat old \
            Wounds using this Action."
        },
        {
            name: "Jumping",
            rule: "You can jump 2cm horizontally from a dead stop, or 5cm with a Run up. A successful \
            Athletics roll grants one extra cm of distance."
        },
        {
            name: "Movement",
            rule: "Each turn you may move up to your full Pace. This is considered a Free Action and does not \
            inflict the Multi-Action Penalty. Other movements include Crawling, Prone, Crouching, Jumping and \
            running. Your movement may be affected by Difficult Terrain modifiers."
        },
        {
            name: "NPC Checks",
            rule: "To quickly roll for a group of extras (such as henchmen), simply roll one Trait die and one Wild \
            die. Take the highest of the two as the average for the whole group."
        },
        {
            name: "Prone",
            rule: "Going Prone counts as Medium Cover (-2 penalty) for opposed Notice (Stealth) and Shooting Checks \
            when the opponent is more than 8cm distant. In Melee, you suffer a -2 penalty to your Parry and \
            Fighting Checks. Getting up from prone costs 2 units of movement."
        },
        {
            name: "Running",
            rule: "You may run an additional 1d6 cm (doubled) during your turn. You suffer a -2 penalty to all other \
            actions made while running (in addition to normal Multi-Action Penalties)."
        },
        {
            name: "Smarts Trick",
            rule: "An opposed Smarts Check. On your Success the target gets a -2 Penalty to \
            their Parry until their next turn, and on a Raise they also become Shaken.",
        },
        {
            name: "Suppressing Fire",
            rule: "You follow normal Autofire and Ranged attack rules (don't include Cover). If you fail your roll \
            then the target area deviates by 1d10 cm. Targets caught in a Medium Burst (5cm radius) must make a \
            Spirit roll, and a failure means they become Shaken. Critical Failures mean that they are also hit.",
        },
        {
            name: "Swimming",
            rule: "Your Pace while in the water is Atheletic skill in cm. Choppy water halves your Pace. You cannot \
            use the 'Running' mechanic while swimming."
        },
        {
            name: "Three Round Burst",
            rule: "Limited to weapons with the 3RB tag. You make a single attack roll with a +2 bonus to the attack and \
            the damage. You will use 3 rounds of ammunition.",
        },
        {
            name: "Wild Attack",
            rule: "A special melee move that grants you a +2 bonus to Fighting and Damage, but you take a -2 Penalty to \
            Parry until your next turn.",
        },
    ]
}