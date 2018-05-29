export default {
    type: "core",
    description: "These are the rules that are core to the game.",
    rules: [
        {
            name: "Actions",
            rule: "Actions are taken on your turn. Each character has 1 Action without penalty (and can also \
            move up to their Pace). You can take additional Actions on your turn that is not Move, but each \
            Action will incur a -2 Multi-Action penalty on ALL Checks that turn.",
        },
        {
            name: "Aces",
            rule: "Aces are when any die lands on its maximum value (except for damage rolls). The die is \
            rolled again and has the new number added to the previous number. This is cumulative and \
            repeats until a non-maximum number is rolled.",
        },
        {
            name: "Bennies",
            rule: "A special metagame currency the player can use to affect the game \
            mechanics. Each player will start each game session with 3 Bennies (but you can earn more \
            during play). Bennies cannot be 'saved' between sessions, but for each remaining benny at \
            the end of the game you can roll a d6; on a 4, 5 or 6 you gain 1 random card. When you spend a \
            Bennie you can reroll a Check (but not damage rolls); 'Soak' damage, which involves \
            rolling a Vigor Check; and remove the Shaken status.",
        },
        {
            name: "Checks",
            rule: "Checks are made when you wish to do something that has a degree of risk, failure or \
            for any other reason your Game Master can dream up. You will be required to roll your Trait \
            or Skill dice, and the result (with relevant bonuses and penalties) is compared to a Target Number.",
        },
        {
            name: "Damage",
            rule: "Calculated after an attack hits. You roll the specified damage die listed by \
            the attack/weapon against the targets Toughness. Each success and Raise inflicts the Shaken \
            status or a Wound.",
        },
        {
            name: "Distance Conversion",
            rule: "Squares are 1 inch, which is about 2cm. Just double the numbers (Pace of 6 is 12cm)."
        },
        {
            name: "Hold",
            rule: "Hold means that you chose to wait instead of taking an action. Holding lasts until it is \
            used (you do not get dealt Initiative at the start of a round if your are Holding). If you \
            interrupt someone while Holding, you must succeed at a contested Agility Check (actions \
            are simultaneous on a tie).",
        },
        {
            name: "Initiative",
            rule: "Initiative is determined using playing cards. At the beginning of the round every player \
            and type of enemy is dealt one card. Highest cards go first (Ace to deuce, with suit order being \
            Spades, Hearts, Diamonds, and Clubs).",
        },
        {
            name: "Jokers",
            rule: "Jokers are a 'special' initiative card. A Joker allows you to go whenever you want in the \
            turn order, including interrupting someone else's turn. In addition, they get +2 to all Checks \
            during the round (including to damage rolls).",
        },
        {
            name: "Multi-Action Penalty",
            rule: "Each character has 1 Action without penalty and can also move up to their Pace. You can take \
            additional Actions on your turn that is not Move, but each Action will incur a -2 Multi-Action penalty \
            on ALL Checks that turn.",
        },
        {
            name: "Natural Healing",
            rule: "If you have any Wounds left over after Combat and normal Healing, you must make a Vigor Check \
            every 5 in-game days. You remove 1 Wound level (or Incapacitated status) with each Success and Raise \
            (maximum 2 per check). Snake Eyes gives you a Wound. Apply Wound penalties as per usual. You also get \
            a -2 penalty if you are receiving no medical attention, are travelling rough, or in a poor environment. \
            You get a +2 bonus if you spend the whole time in a state of the art medical facility."
        },
        {
            name: "Raises",
            rule: "Raises are when the Check beats the Target Number by 4. Every 4 points beyond that is \
            another raise. This is important for the Game Master to know.",
        },
        {
            name: "Skills,",
            rule: "Skills, like Shooting and Knowledge, are the things that your character are good at. \
            They are linked to your attributes (mainly for levelling up), and are also represented as a \
            die type (such as a d4, all the way up to a d12).",
        },
        {
            name: "Snake Eyes",
            rule: "Snake Eyes occur when both the Trait and Wild Die both come up as 1's. This is a \
            critical failure, and the Game Master must decide on something bad!",
        },
        {
            name: "Soak",
            rule: "When you take damage, you can spend a Benny to Soak it. You must make a Vigor Check; \
            Each Raise and success removes one immediate Wound (existing Wounds cannot be soaked). \
            Soaking all Wounds this way will remove the Shaken status effect."
        },
        {
            name: "Social Conflict",
            rule: "Social conflicts are broken down into three rounds. Each round the participants will \
            roleplay their arguments and make an oppossed Checks (Persuasion; if Knowledge is involved, \
            then the lowest Skill die should be used). The GM can award bonuses and penalties for specific \
            arguments. Each side gains points for each success and raise. At the end, the side with the \
            most points wins. On ties, neither side is convinced and must wait for new evidence. With 5+ \
            points, the other side is thoroughly convinced."
        },
        {
            name: "Target Number",
            rule: "Target Number is selected by the Game Master and reflects the difficulty of the task \
            at hand. The standard unmodified Target Number is 4.",
        },
        {
            name: "Traits,",
            rule: "Traits, like Strength and Smarts, are your core attributes. They are represented as a die \
            type (such as a d4, all the way up to a d12).",
        },
        {
            name: "Wild Die",
            rule: "Wild Die are a special d6 that are given to special characters when they make their \
            Checks, like the players. The Wild Die is rolled alongside the Trait or Skill dice, and the \
            player can choose either result. Wild Die can Ace.",
        },
        {
            name: "Withdraw",
            rule: "Withdraw simply means making a move away from adjacent enemies. Each adjacent enemy is granted \
            1 free attack. Can be used with Defend.",
        },
        {
            name: "Wounds",
            rule: "Wounds represent how much damage you can take. All main characters can take 3 Wounds \
            until they are Incapacitated. Wounds are inflicted when a character suffers a Success or \
            Raise on damage rolls while Shaken (each Raise is it's own Wound). Each Wound you have gives \
            you a -1 Penalty to all future Checks.",
        },
        {
            name: "Unskilled Checks",
            rule: "If you are Unskilled then your roll is a d4 with a –2 penalty"
        }
    ]
}