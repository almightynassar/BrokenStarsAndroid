export default {
    type: "skill",
    description: "Upgradeable abilities that your character can unlock and use. Your proficiency in a skill is represented \
    by a die type. Each skill is limited by and linked to an associated attribute.",
    rules: [
        {
            name: "Athletics",
            rule: "Linked to Strength. You can perform feats of athleticism such as climbing, jumping, swimming and endurance running."
        },
        {
            name: "Fighting",
            rule: "Linked to Agility. This covers all melee-based attacks. The Target Number to hit an opponent is their Parry (2 plus half \
            their Fighting die type, or 2 if they are not skilled). On a hit, you deal damage (roll your strength and add your weapon's damage). \
            On a raise, add a +1d6 to your damage roll."
        },
        {
            name: "Insight",
            rule: "Linked to Smarts. You know how to read people and social situations. You can scrutinize other characters to see if they are lying, \
            frightened, and so on. This skill is modified by your Charisma. To get information from people, use Streetwise. To get information about a \
            scene, use Notice. To gain information through written sources, use Research."
        },
        {
            name: "Intimidation",
            rule: "Linked to Spirit. You are proficient in the art of frightening opponents through sheer force of will. In Combat, you can make an \
            Intimidate action that lets you roll a Check against the Target's Spirit. If you win, you gain a +2 bonus to your next action. A Raise \
            means that the target is also Shaken."
        },
        {
            name: "Knowledge (General)",
            rule: "Linked to Smarts. You are well-studied and read, and are able to handle (simple) tasks dealing in maths, geography, sciences, history, \
            and other topics. Common Knowledge that the average person should know are covered by a basic Smarts Check. See also: Knowledge (Specialised)."
        },
        {
            name: "Knowledge (Specialised)",
            rule: "Linked to Smarts. Choose a single area of knowledge. You are dedicated in pursuing this area, and can deal with advance tasks involving \
            your specialiaty. Common Knowledge that the average person should know are covered by a basic Smarts Check. See also: Knowledge (General)."
        },
        {
            name: "Medicine",
            rule: "Linked in Smarts. The art of stopping wounds and treating injuries. Does not include more advanced techniques such as surgery, etc. \
            See also: Healing."
        },
        {
            name: "Notice",
            rule: "Linked to Smarts. Your general alertness and ability to search for items and clues. This also covers the use of your senses such as \
            hearing, smell, and vision. To get information from people, use Streetwise. To get information about a scene, use Notice. \
            To gain information through written sources, use Research."
        },
        {
            name: "Persuasion",
            rule: "Linked to Spirit. The ability to convince others to do what you want, or to make them believe what you say is true. This skill is \
            modified by your Charisma. This skill should never be used on other Player Characters; attitudes should be decided entirely through roleplay. \
            NPC's, on the other hand, start as one of the following: Hostile, Uncooperative, Neutral, Friendly, or Helpful. A successful Persuasion roll \
            improves attitude by one step, two with a Raise, and decreases with a Failure, or two on a 1. You cannot chain Persuasion attempts in a single \
            encounter. See also: Social Conflict."
        },
        {
            name: "Piloting",
            rule: "Linked to Agility. You can pilot almost any vehicle such as spaceships, hovercars, boats, and other any thing with a stick or a \
            steering wheel."
        },
        {
            name: "Programming",
            rule: "Linked to Smarts. You understand the inner workings of computers. You can create or modify programs and other digital systems."
        },
        {
            name: "Psionics",
            rule: "Linked to Smarts. If you have the Edge, allows you to channel and use your powers. Without the Edge, you have specific knowledge \
            about Psionics and their abilities."
        },
        {
            name: "Repair",
            rule: "Linked to Smarts. You have the ability to fix gadgets, vehicles, weapons, and other machines. If you do not have the proper tools you take a \
            -2 penalty to your roll. A Raise halves the time required by the task."
        },
        {
            name: "Research",
            rule: "Linked to Smarts. You know how to make good use of resources such as libraries, newspapers, the internet and other written \
            sources. To get information from people, use Streetwise. To get information about a scene, use Notice. To gain information about \
            a person's mental or emotional state, use Insight."
        },
        {
            name: "Security",
            rule: "Linked to Smarts. The ability to bypass or disarm mechanical and electronic security systems. Also covers setting up a security system."
        },
        {
            name: "Ship Operations",
            rule: "Linked to Smarts. The ability to use various Spaceship systems, including Navigation, Sensors, ECM, and other miscellanous systems. You \
            still need Piloting to fly the spaceship, Shooting to use it's weapons, and Repair to fix the spaceship."
        },
        {
            name: "Shooting",
            attribute: "Agility",
            rule: "Linked to Agility. The ability to hit targets with a ranged or thrown weapon. Using a weapon at it's Short range sets the Target Number \
            at 4; Medium at 6; and Long at 8. Ranges are in metres, and 1cm on the tabletop = 0.5m in the real world. The target number is also modified by \
            factors such as Cover and Movement status."
        },
        {
            name: "Stealth",
            rule: "Linked to Agility. This covers both the ability to move quietly, as well as palm objets and pick pockets. In play, Opponents are either \
            Inactive or Active. To beat Inactive, you will make a Check against a Target Number of 4 (with bonuses and penalties depending on Cover, Darkness, \
            and Movement speed); on a Failure they become Active. Active opponents need to make a Notice Check (apply bonuses and penalties) and beat your \
            Check; on a Success they notice you. Moving into the last 12cm around an opponent will always make them Active. Outside of Combat, each Stealth \
            check lasts for 5 minutes; in Combat it only lasts for a single round of movement."
        },
        {
            name: "Streetwise",
            rule: "Linked in Smarts. You know how to gain information from people, whether from the scene or through contacts. Methods includes bribing, \
            threats, and carousing. This skill is modified by your Charisma. To get information from written sources, use Research. To get \
            information about a scene, use Notice. To gain information about a person's mental or emotional state, use Insight."
        },
        {
            name: "Survival",
            attribute: "Smarts",
            rule: "Linkd to Smarts. You can find food, water, shelter in a variety of environments. You can make one roll per day. A Success results in \
            you finding enough sustenance for two adults, a Raise meaning you find enough for 5 adults. Large beasts count as 2 adults. Children \
            and small beasts count as half."
        },
        {
            name: "Taunt",
            rule: "Linked to Smarts. You are skilled in the art of ridicule, jokes, and one-upmanship. In Combat, Taunt lets you roll a Check against \
            your Target's Smarts. If you win, you gain a +2 bonus to your next action against them. A Raise means that the target is also Shaken."
        },
        {
            name: "Tracking",
            rule: "Linked to Smarts. Allows you to follow the tracks of one or more individuals in any type of terrain. Each roll generally covers 2 \
            kilometres. +2 bonus when tracking a group and/or through mud or snow. -2 penalty for tracks older than 1 day and/or raining."
        },
    ]
}