<template>
  <v-card raised>
    <v-card-text>
      <p>We are using the Savage Worlds ruleset, so you should check out those rulebooks. The following table is provided as a reference only. Each rule has an associated category type (which is searchable):</p>
      <ul class="proper-list">
        <li>Action  are combat actions, if you are tired of simply just attacking.</li>
        <li>Combat  are rules specific to combat.</li>
				<li>Core  are basic rules that you should know.</li>
        <li>Misc. are rules that apply to specific situations.</li>
      </ul>
      <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
        ></v-text-field>
        <v-data-table
            :headers="fields"
            :items="rules"
            :search="search"
            hide-actions
            item-key="name"
        >
            <template slot="items" slot-scope="props">
                <tr>
                    <td><h3>{{ props.item.name | capitalize }}</h3></td>
                    <td><h3>{{ props.item.type | capitalize }}</h3></td>
                </tr>
                <tr>
                    <td colspan="2">{{ props.item.rule }}</td>
                </tr>
            </template>
        </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
	export default {
    data() {
      return {
        search: "",
        fields: [
          {
            text: 'Name',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Type',
            sortable: true,
            value: 'type'
          },
        ],
        rules: [
          {
						name: "Actions",
						type: "Combat",
            rule: "Actions are taken on your turn. Each character has 1 Action without penalty (and can also \
            move up to their Pace). You can take additional Actions on your turn that is not Move, but each \
            Action will incur a -2 Multi-Action penalty on ALL Checks that turn.",
					},
          {
						name: "Aces",
						type: "Core",
            rule: "Aces are when any die lands on its maximum value (except for damage rolls). The die is \
            rolled again and has the new number added to the previous number. This is cumulative and \
            repeats until a non-maximum number is rolled.",
          },
          {
						name: "Agility Trick",
						type: "Action",
            rule: "Agility Trick is an opposed Agility Check. On your Success the target gets a -2 Penalty to \
            their Parry until their next turn, and on a Raise they also become Shaken.",
					},
          {
            name: "Aid Roll",
            type: "Misc.",
            rule: "Any able and willing companions can aide another player with their action. Each companion \
            must have the skill in question (or a suitable helper skill). The companion will make a Check, and \
            each Success and Raise will add a +1 bonus for the target player (maximum bonus of +4, except for \
            Strength)."
          },
          {
						name: "Aim",
						type: "Action",
						rule: "Aim means you forfiet one of your Actions this turn to gain a bonus +2 Shooting bonus.",
					},
          {
						name: "Autofire",
						type: "Action",
            rule: "Autofire are for weapons with a Rate Of Fire (RoF) greater than 1. You make as many attacks \
            as stated by your RoF, each attack with a -2 Penalty (accounting for recoil etc). You only get to use \
            1 Wild Die. Each attack uses ammunition as specified by your RoF. Weapons without the Auto keyword \
            and a RoF greater than 1 must always Autofire.",
					},
          {
            name: "Bennies",
            type: "Core",
            rule: "Bennies are a special metagame currency the player can use to affect the game \
            mechanics. Each player will start each game session with 3 Bennies (but you can earn more \
            during play). Bennies cannot be 'saved' between sessions, but for each remaining benny at \
            the end of the game you can roll a d6; on a 5 or 6 you gain 1 EXP point. When you spend a \
            Bennie you can Reroll a Check (but not damage rolls); 'Soak' damage, which involves \
            rolling a Vigor Check; and Remove the Shaken status.",
          },
          {
						name: "Bleeding Out",
						type: "Combat",
            rule: "Bleeding Out is a character status effect you get when you fail your Incapacitated roll. \
            In this state, you must roll a Vigor Check every round until you are Stabilized. On a Failure \
            your character dies, a Success means you maintain the statues, and a Raise means you are now Stabilized.",
          },
          {
						name: "Called Shot",
						type: "Action",
            rule: "Called Shots allow you to target specific parts of your target (all attacks are assumed to be \
            aimed at the torso or equivalent). A called shot ranges from a -2 to -6 penalty, and may grant you a \
            bonus such as a +4 damage boost.",
          },
          {
						name: "Checks",
						type: "Core",
            rule: "Checks are made when you wish to do something that has a degree of risk, failure or \
            for any other reason your Game Master can dream up. You will be required to roll your Trait \
            or Skill dice, and the result (with relevant bonuses and penalties) is compared to a Target Number.",
          },
          {
            name: "Climbing",
            type: "Action",
            rule: "When scaling vertical surfaces, you need to make an Athletics Check (modified by your climbing \
            equipment and the type of surface). A Failure means you make no progress (a 1 or less means that you begin \
            to fall). A Success means that you move a number of squares equal to half your Strength. A Raise means that \
            move an additional 2 squares."
          },
          {
            name: "Cover",
            type: "Misc.",
            rule: "Apply the following penalties when Shooting or Noticing someone in Stealth: -1 for \
            Light cover, -2 for Medium cover, and -4 for Heavy."
          },
          {
            name: "Crawling",
            type: "Action",
            rule: "You can crawl up to 2 squares per turn. This counts as being Prone (-2 penalty for opposed \
            Notice (Stealth) and Shooting Checks when the opponent is more than 3 squares distant). In Melee, \
            you suffer a -2 penalty to your Parry and Fighting Checks. Getting up from prone costs 2 units of movement."
          },
          {
            name: "Crouching",
            type: "Action",
            rule: "You can crouch and move half your Pace. You may Run while crouching (half your Running result). \
            Crouching (without Running) counts as being Light Cover (-1 penalty) for opposed Notice (Stealth) and \
            Shooting Checks when the opponent is more than 3 squares distant)."
          },
          {
						name: "Damage",
						type: "Combat",
            rule: "Damage is calculated after an attack hits. You roll the specified damage die listed by \
            the attack/weapon against the targets Toughness. Each success and Raise inflicts the Shaken \
            status or a Wound.",
          },
          {
            name: "Darkness / Lighting",
            type: "Misc.",
            rule: "Apply the following penalties to any Checks that require vision, such as shooting and \
            stealth: -1 for Dim light, -2 for Darkness (where targets are not visible beyond 2 squares), \
            and -4 for Pitch Black."
          },
          {
						name: "Defend",
						type: "Action",
            rule: "Defend will grant you a +2 bonus to your Parry, but you cannot take any other action this turn \
            (except movement).",
          },
          {
            name: "Difficult Terrain",
            type: "Misc.",
            rule: "Each square of difficult terrain (mud, snow, hills, etc) counts as 2 for purposes of movement."
          },
          {
						name: "Disarm",
						type: "Action",
            rule: "Disarm allows you target the weapon of an opponent (with a -2 Penalty). On a hit, your target \
            must roll a Strength Check against your damage roll to be able to hold onto their weapon.",
					},
          {
						name: "Double Tap",
						type: "Action",
            rule: "Double Tap are for weapons with the Semi-Auto tag. You make a single attack roll with a +1 bonus \
            to the attack and the damage. You will use 2 rounds of ammunition.",
					},
          {
            name: "Dramatic Tasks",
            type: "Misc.",
            rule: "Use this rule when completing a complex and high pressure task. You must complete 5 successful \
            rolls to resolve the task. Most tasks come with a -2 penalty to represent the intense amount of pressure \
            the character is under. There may also be a time limit (represented by a number of rounds)."
          },
          {
            name: "Encumberance",
            type: "Misc.",
            rule: "Your character’s load limit is 3 x their Strength die (in kilograms). Each multiple above that \
            limit gives a -1 penalty to Agility and Strength (do not recalculate your load limit!) and all related \
            skills. You cannot carry weight that inflicts a penalty of more than -3."
          },
          {
            name: "Extra Checks",
            type: "Misc.",
            rule: "To quickly roll for a group of extras (such as henchmen), simply roll one Trait die and one Wild \
            die. Take the highest of the two as the average for the whole group."
          },
          {
            name: "Falling",
            type: "Misc.",
            rule: "You suffer 1d6+1 damage per 3 meters (2 squares), up to 10d6+10. Landing in water reduces \
            number of dice rolled by half (rounded down)."
          },
          {
            name: "Fatigue",
            type: "Misc.",
            rule: "Fatigue works similarly to Wounds, except you can only take 2 levels of Fatigue before you \
            are Incapacitated. Fatigue sources are usually Hazards such as heat, cold, and disease. Just like \
            Wounds, each level of Fatigue is a -1 penalty to all Checks.",
          },
          {
            name: "Fear",
            type: "Misc.",
            rule: "Make a Spirit Check. On a Failure, you are Shaken and suffer a level of Fatigue for the rest \
            of the encounter. You only need to roll the first time you experience the source of the fear."
          },
          {
						name: "Ganging Up",
						type: "Combat",
            rule: "Ganging Up is where you and your allies surround a target during Melee. You gain a +1 to your \
            Fighting Check for each ally (maximum of +4 bonus).",
					},
          {
						name: "Grappling",
						type: "Action",
            rule: "Grappling involves making an opposed Fighting Check to start. A Success means the grapple is \
            successful, a Raise means the opponent is Shaken. When grappled, the Target must make an opposed Strength \
            or Agility Check to escape (-4 penalty to all other actions). You can use an opposed Strength or Agility \
            Check to give damage to your grappled victim.",
					},
          {
            name: "Gravity",
            type: "Misc.",
            rule: "In high gravity, apply a -2 penalty to all Agility-based Checks and your pace . In low gravity, \
            apply a +2 bonus to all Agility-based Checks and your pace. In zero-g environments, a result of 1 on a \
            physical trait Check means you lose control and tumble (-2 to all Checks). To stabilise yourself while \
            you are tumbling, you must succeed on an Agility Check as a free action (and only if you have a way to \
            stabilise yourself)."
          },
          {
            name: "Group Checks",
            type: "Misc.",
            rule: "If a bunch of people decide to complete the same task, it becomes a Group Check. A Group Check will \
            only suceed if a majority of the individual Checks are successes (Raises can negate a failure). Each failure \
            on a Group Check represents a complication."
          },
          {
            name: "Hacking",
            type: "Misc.",
            rule: "Treat as a Dramatic Task. You will require access a physical I/O port (or a network connection). You will \
            then need to 'Open' the port (Security vs Security or Toughness), crack any authentication or encryption, \
            break the Software Firewalls, and then bypass any anti-virus and anti-malware.",
          },
          {
            name: "Healing",
            type: "Action",
            rule: "This type of healing can only apply within 1 hour of gaining a Wound; any treatment outside of that \
            time limit must follow Natural Healing rules instead. A character will take about 10 minutes to treat someone's \
            Wounds, making a Healing Check. They must apply the patient's Wound penalties to their check (in addition to their \
            own; double the penalty if you are treating yourself). If you do not have suitable medical supplies then you suffer \
            a -2 penalty. Each Success and Raise on your Healing Check removes 1 Wound (maximum of 2). You cannot treat old Wounds."
          },
          {
						name: "Hold",
						type: "Combat",
            rule: "Hold means that you chose to wait instead of taking an action. Holding lasts until it is \
            used (you do not get dealt Initiative at the start of a round if your are Holding). If you \
            interrupt someone while Holding, you must succeed at a contested Agility Check (actions \
            are simultaneous on a tie).",
					},
          {
						name: "Incapacitated",
						type: "Combat",
            rule: "Incapacitated is a character status effect you get when you reach your Wound limit. You \
            must make an immediate Vigor Check; a Failure means that you are Bleeding Out, a Success means \
            you are unconcious for 24 hours, and a Raise means you are just stunned (you still have 3 Wounds, \
            but are just Shaken instead of Incapacitated).",
          },
          {
						name: "Initiative",
						type: "Combat",
            rule: "Initiative is determined using playing cards. At the beginning of the round every player \
            and type of enemy is dealt one card. Highest cards go first (Ace to deuce, with suit order being \
            Spades, Hearts, Diamonds, and Clubs).",
					},
          {
						name: "Intimidate",
						type: "Action",
            rule: "Intimidate lets you roll your Intimidation Check against the Target's Spirit. If you win, you gain a \
            +2 bonus to your next action. A Raise means that the target is also Shaken.",
          },
          {
            name: "Holding your Breath",
            type: "Misc.",
            rule: "You can hold your breath for a number of rounds equal to 2 plus your Vigor die. Half this if you were \
            not prepared beforehand."
          },
          {
						name: "Jokers",
						type: "Combat",
            rule: "Jokers are a 'special' initiative card. A Joker allows you to go whenever you want in the \
            turn order, including interrupting someone else's turn. In addition, they get +2 to all Checks \
            during the round (including to damage rolls).",
          },
          {
            name: "Jumping",
            type: "Action",
            rule: "You can jump 1 square horizontally from a dead stop, or 2 squares with a Run up. A successful \
            Athletics roll grants one extra square of distance."
          },
          {
            name: "Movement",
            type: "Action",
            rule: "Each turn you may move up to your full Pace. This is considered a Free Action and does not \
            inflict the Multi-Action Penalty. Other movements include Crawling, Prone, Crouching, Jumping and \
            running. Your movement may be affected by Difficult Terrain modifiers."
          },
          {
						name: "Multi-Action Penalty",
						type: "Combat",
            rule: "Each character has 1 Action without penalty and can also move up to their Pace. You can take \
            additional Actions on your turn that is not Move, but each Action will incur a -2 Multi-Action penalty \
            on ALL Checks that turn.",
					},
          {
            name: "Natural Healing",
            type: "Misc.",
            rule: "If you have any Wounds left over after Combat and normal Healing, you must make a Vigor Check \
            every 5 in-game days. You remove 1 Wound level (or Incapacitated status) with each Success and Raise \
            (maximum 2 per check). Snake Eyes gives you a Wound. Apply Wound penalties as per usual. You also get \
            a -2 penalty if you are receiving no medical attention, are travelling rough, or in a poor environment. \
            You get a +2 bonus if you spend the whole time in a state of the art medical facility."
          },
          {
						name: "Persuasion",
						type: "Action",
            rule: "Persuasion should never be used on other Player Characters; attitudes should be decided entirely \
            by the player themselves. NPC's, on the other hand, start as one of the following: Hostile, Uncooperative, \
            Neutral, Friendly, or Helpful. A Successful Persuasion roll improves attitude by one step, two with a Raise, \
            and decreases with a Failure, or two on a 1. You cannot chain Persuasion attempts in a single encounter.",
          },
          {
            name: "Prone",
            type: "Action",
            rule: "Going Prone counts as Medium Cover (-2 penalty) for opposed Notice (Stealth) and Shooting Checks \
            when the opponent is more than 3 squares distant. In Melee, you suffer a -2 penalty to your Parry and \
            Fighting Checks. Getting up from prone costs 2 units of movement."
          },
          {
						name: "Raises",
						type: "Core",
            rule: "Raises are when the Check beats the Target Number by 4. Every 4 points beyond that is \
            another raise. This is important for the Game Master to know.",
          },
          {
            name: "Running",
            type: "Action",
            rule: "You may run an additional 1d6 squares during your turn. You suffer a -2 penalty to all other \
            actions made while running (in addition to normal Multi-Action Penalties)."
          },
          {
						name: "Shaken",
						type: "Combat",
            rule: "Shaken is a character status effect you get when you first take damage. You can only \
            move half your Pace while Shaken, and can take no Actions until you succeed on a Spirit Check. \
            Failure means you remain Shaken, a Success means you can remove the status, and any Raises \
            means you can immediately take Actions as normal. Note that gaining the Shaken status while \
            already Shaken means you get a Wound instead.",
					},
          {
						name: "Skills,",
						type: "Core",
            rule: "Skills, like Shooting and Knowledge, are the things that your character are good at. \
            They are linked to your attributes (mainly for levelling up), and are also represented as a \
            die type (such as a d4, all the way up to a d12).",
          },
          {
						name: "Smarts Trick",
						type: "Action",
            rule: "Smarts Trick is an opposed Smarts Check. On your Success the target gets a -2 Penalty to \
            their Parry until their next turn, and on a Raise they also become Shaken.",
					},
          {
						name: "Snake Eyes",
						type: "Core",
            rule: "Snake Eyes occur when both the Trait and Wild Die both come up as 1's. This is a \
            critical failure, and the Game Master must decide on something bad!",
					},
          {
            name: "Soak",
            type: "Combat",
            rule: "When you take damage, you can spend a Benny to Soak it. You must make a Vigor Check; \
            Each Raise and success removes one immediate Wound (existing Wounds cannot be soaked). \
            Soaking all Wounds this way will remove the Shaken status effect."
          },
          {
            name: "Social Conflict",
            type: "Misc.",
            rule: "Social conflicts are broken down into three rounds. Each round the participants will \
            roleplay their arguments and make an oppossed Checks (Persuasion; if Knowledge is involved, \
            then the lowest Skill die should be used). The GM can award bonuses and penalties for specific \
            arguments. Each side gains points for each success and raise. At the end, the side with the \
            most points wins. On ties, neither side is convinced and must wait for new evidence. With 5+ \
            points, the other side is thoroughly convinced."
          },
          {
						name: "Stabilized",
						type: "Combat",
            rule: "Stabilized  is a character status effect you get after you were Bleeding Out. You get into \
            this state by either getting a Raise on your Vigor Check or when you receive some sort of Healing.",
          },
          {
            name: "Stealth",
            type: "Misc.",
            rule: "Opponents are either Inactive or Active. To beat Inactive, you will make a Stealth Check \
            against a Target Number of 4 (with bonuses and penalties depending on Cover, Darkness, and Movement \
            speed); on a Failure they become Active. Active opponents need to make a Notice Check (apply bonuses and \
            penalties) and beat your Stealth Check; on a Success they notice you. The last 6 squares around an \
            opponent will always make them Active. Outside of Combat, each Stealth check lasts for 5 minutes; \
            Stealth in Combat only lasts for a single round of movement."
          },
          {
						name: "Suppressing Fire",
						type: "Action",
            rule: "Suppressing Fire follows normal Autofire and Ranged attack rules (and penalties; don't \
            include Cover). If you fail your roll then the target area deviates by 1d10. Targets caught in \
            a Medium Burst (2 square radius) must make a Spirit roll, and a failure means they become \
            Shaken. Critical Failures mean that they are also hit.",
          },
          {
            name: "Swimming",
            type: "Action",
            rule: "Your Pace while in the water is half your Atheletic skill in squares. Choppy water halves \
            your Pace. You cannot use the 'Running' mechanic while swimming."
          },
          {
						name: "Target Number",
						type: "Core",
            rule: "Target Number is selected by the Game Master and reflects the difficulty of the task \
            at hand. The standard unmodified Target Number is 4.",
          },
          {
						name: "Taunt",
						type: "Action",
            rule: "Taunt lets you roll your Taunt Check against your Target's Smarts. If you win, you gain \
            a +2 bonus to your next action against them. A Raise means that the target is also Shaken.",
					},
          {
						name: "Traits,",
						type: "Core",
            rule: "Traits, like Strength and Smarts, are your core attributes. They are represented as a die \
            type (such as a d4, all the way up to a d12).",
          },
          {
						name: "Three Round Burst",
						type: "Action",
            rule: "Three Round Burst are for weapons with the 3RB tag. You make a single attack roll with \
            a +2 bonus to the attack and the damage. You will use 3 rounds of ammunition.",
					},
          {
						name: "Wild Attack",
						type: "Action",
            rule: "Wild Attack is a special melee move that grants you a +2 bonus to Fighting and Damage, \
            but you take a -2 Penalty to Parry until your next turn.",
					},
          {
						name: "Wild Die",
						type: "Core",
            rule: "Wild Die are a special d6 that are given to special characters when they make their \
            Checks, like the players. The Wild Die is rolled alongside the Trait or Skill dice, and the \
            player can choose either result. Wild Die can Ace.",
					},
          {
            name: "Withdraw",
            type: "Combat",
            rule: "Withdraw simply means making a move away from adjacent enemies. Each adjacent enemy is granted \
            1 free attack. Can be used with Defend.",
          },
          {
						name: "Wounds",
						type: "Combat",
            rule: "Wounds represent how much damage you can take. All main characters can take 3 Wounds \
            until they are Incapacitated. Wounds are inflicted when a character suffers a Success or \
            Raise on damage rolls while Shaken (each Raise is it's own Wound). Each Wound you have gives \
            you a -1 Penalty to all future Checks.",
					},
          {
            name: "Unskilled Checks",
            type: "Core",
            rule: "If you are Unskilled then your roll is a d4 with a –2 penalty"
          }
        ]
      }
    }
  }
</script>