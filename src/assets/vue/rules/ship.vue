<template>
    <div>
        <v-card flat>
            <v-card-text>
                <p>Spaceships are similar in many ways to player characters; they have Attributes, Skills (flavoured as sub-systems), and a personality through the ship's AI. Many concepts from the player rules can be transferred over, but take note on some of the following flavour changes:</p>
                <ul class="proper-list">
                    <li><em>Parry</em> is replaced by <em>Evade</em>, which is calculated from your Ships Auto-Pilot sub-system score. If you have a pilot, they can make a Piloting roll to replace the Evade target number.</li>
                    <li><em>Shaken</em> has been kept but with changes. Instead of making a <em>Vigor</em> roll, your crew (or Ship AI) must make a Repair roll to recover from Shaken status. Damage taken during Shaken incurs Integrity loss as normal.</li>
                    <li><em>Rounds</em> has been split into two phases to ensure all spacecraft has a chance to contribute. The two phases are the <strong>Manoeuvre</strong> phase and the <strong>Fire</strong> phase (outlined below).</li>
                    <li><em>Wounds</em> has been replaced by <em>Intregity</em>. Integrity is calculated based on Hull type, so your spacecraft may have more or less than 3 Integrity. Instead of Wound penalties, the loss of Intregity requires a roll on the <strong>Ship Damage Table</strong> (see the Tables section).</li>
                </ul>
            </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title class="small-caps">FTL Travel</v-card-title>
            <v-card-text>
                <p>When performing interstellar travel, the players must jump from one adjacent sector to another. Each Jump requires an Astrogation Check to ensure you perform the Jump safely. Successes and failure affect how long the jump takes and how much fuel you used.</p>
                <ul class="proper-list">
                    <li><strong>Travel Time</strong> from one sector to another is roughly five days with a Success (-1 day for each Raise, minimum of 1 day). On a failure, roll a d6 and add the result to the normal 5 days.</li>
                    <li><strong>Fuel Usage</strong> is largely dependant on your hull type. A success means you use your listed fuel usage (-1 unit for each raise, minimum of 1 Fuel). On a failure, roll a d4 and add the result to your normal fuel usage.</li>
                    <li><strong>Snake Eyes</strong> means your destination is randomly chosen (along with the above failure states).</li>
                </ul>
            </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title class="small-caps">Maintenance</v-card-title>
            <v-card-text>
                <p>Your ship requires regular maintenance every month to be spaceworthy. You must have full Integrity to perform maintenance on your ship; performing maintenance with Integrity loss will result in an automatic failure.</p>
                <p>Maintenance usually costs 0.5% of your ship's base value and takes a certain amount of days as determined by your ship's hull type. These values are modified as follows:</p>
                <ul class="proper-list">
                    <li>Days are reduced by 1 for every person performing a Repair Check after the first (minimum of 1 day).</li>
                    <li>Treat the Repair as a Group Check. Remember that Raises can cancel out Failures. If there are no Failures, then reduce the cost by 25%. If the Group Check fails, increase the cost by 25%.</li>
                </ul>
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-title class="small-caps">Combat</v-card-title>
            <v-card-text>
                <p>When entering Ship-to-Ship combat, follow these steps:</p>
                <ol class="proper-list">
                    <li>Note down the number of potential actions of each ship. This is the number of crew actions plus the number of Ship AI actions. (<em>Note: NPC and Ship AI actions should be distributed evenly between players whose characters are not expected to be much involved</em>).</li>
                    <li>Note down the number of active weapons. Unpowered weapons do not count, and will take 1 round to become fully powered (<em>Note: Depowering a fitting will also take 1 round</em>).</li>
                    <li><strong>ROUND START</strong>. Each ship involved takes one card. Everyone on a ship will act on the Ship's turn card during each of the phases.</li>
                    <li><strong>MANOEUVRE PHASE</strong>. This is the planning, movement, and repair / recovery phase. Everyone on a ship will act on their Ship's turn. Almost every action other than firing a ship's weapons is allowed on this turn. This includes:
                        <ul class="proper-list">
                            <li>Boarding actions and character-to-character combat (who will act on their respective ship turns)</li>
                            <li>Determining who will use their action to fire each weapon during the fire phase</li>
                            <li>Defer an action until another Ship has acted</li>
                            <li>Ramming action. It will be a Piloting vs Piloting skill test. On an attacker's success, both Ships are Shaken due to the impact. To calculate damage, roll the attacker's Armour versus the defender's Breech.</li>
                            <li>Using any skill that comes in handy during the course of the battle, such as first aid or sabotage.</li>
                            <li>Using the <em>Astrogation</em> skill or <em>Navigation</em> sub-system to navigate difficult areas safely (such as Asteroid belts), or help perform a difficult and tight manoeuvre (each success and raise is a +1 to Piloting rolls)</li>
                            <li>Using the <em>Operations</em> skill or <em>ECM</em> sub-system to co-ordinate ship defences and disrupt enemy sensors (each success and raise is a +1 boost to Evade)</li>
                            <li>Using the <em>Operations</em> skill or <em>Sensors</em> sub-system to discover weaknesses that your weapons can exploit (each success and raise is a +1 boost to a single weapon's Shooting roll)</li>
                            <li>Using the <em>Piloting</em> skill or <em>Auto-pilot</em> sub-system to increase the Ship's Evade (each success and raise is a +1 boost to Evade)</li>
                            <li>Using the <em>Repair</em> skill to recover from the Shaken status, or fix damage that occurs during combat.</li>
                        </ul>
                        Leftover actions will be used during the Fire phase. (<em>Note that you cannot perform any Manoeuvre Phase actions during the Fire phase as you can only fire a ship's weapon</em>).
                    </li>
                    <li>Once every ship has taken their turn during the Manoeuvre phase and all actions have been declared, we can enter the next phase.</li>
                    <li><strong>FIRE PHASE</strong>. Unlike the previous phase, a Ship does not take all their actions at once. Instead, the Fire phase operates as follows:
                        <ul class="proper-list">
                            <li>The Ship that won initiative fires one and only one weapon. That weapon cannot be fired again during this phase.</li>
                            <li>Initiative passes to the next ship in turn order, and they fire one and only one weapon. That weapon cannot be fired again during this phase.</li>
                            <li>Repeat the above step until all Ships have fired at least one weapon, after which initiative returns to the first ship</li>
                            <li>The Fire Phase continues until all Ships have used up the rest of their actions, run out of active weapons to fire, or are simply knocked out of combat</li>
                        </ul>
                    </li>
                    <li><strong>ROUND END</strong>. Once the Fire Phase has been completed, we redraw initiative and begin the Manoeuvre phase again. Repeat until the end of Combat</li>
                </ol>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
	export default {}
</script>