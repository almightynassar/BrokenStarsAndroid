<template>
    <f7-block>
        <f7-block-title>Ship Combat</f7-block-title>
        <f7-block inset>
            <p>Combat is similar to standard Savage Worlds combat, except some terms have been replaced to make them relevant to ship-to-ship space combat. For those who know Savage Worlds combat, please not the following:</p>
            <ul>
                <li><em>Parry</em> and other defenses have now been replaced by <em>Evade</em>, which is calculated from your Ships Auto-Pilot sub-system score. If you have a pilot, they can make a Piloting roll to change the Evade target number.</li>
                <li><em>Shaken</em> has been kept but with changes. Instead of making a <em>Vigor</em> roll, your crew (or Ship AI) must make a Repair roll to recover from Shaken status. Damage taken during Shaken incurs Integrity loss as normal.</li>
                <li><em>Toughness</em> has been replaced by <em>Breech</em>, which represents the target value for damage rolls before a loss of Integrity occurs.</li>
                <li><em>Rounds</em> has been split into two phases to ensure all spacecraft has a chance to contribute. The two phases are the <strong>Manoeuvre</strong> phase and the <strong>Fire</strong> phase.</li>
                <li><em>Wounds</em> has been replaced by <em>Intregity</em>. Integrity is calculated based on Hull type, so your spacecraft may have more or less than 3 Integrity. Instead of Wound penalties, the loss of Intregity requires a roll on the <strong>Ship Damage Table</strong> (see below).</li>
            </ul>
        </f7-block>
        <f7-block-title>Turn Order</f7-block-title>
        <f7-block inset>
            <p>When entering Ship-to-Ship combat, follow these steps:</p>
            <ol>
                <li>Note down the number of potential actions of each ship. This is the number of crew actions plus the number of Ship AI actions. (<em>Note: Ship AI actions should be distributed evenly between players whose characters are not expected to be much involved during combat</em>).</li>
                <li>Note down the number of active weapons. Unpowered weapons do not count, and will take 1 round to become fully powered (<em>Note: Depowering a fitting will also take 1 round</em>).</li>
                <li><strong>ROUND START</strong>. Each ship involved takes one card. Everyone on a ship will act on the Ship's turn card during each of the phases.</li>
                <li><strong>MANOEUVRE PHASE</strong>. This is the planning, movement, and repair / recovery phase. Everyone on a ship will act on their Ship's turn. Almost every action other than firing a ship's weapons is allowed on this turn. This includes:
                    <ul>
                        <li>Boarding actions and character-to-character combat (who will act on their respective ship turns)</li>
                        <li>Determining who will use their action to fire each weapon during the fire phase</li>
                        <li>Defer an action until another Ship has acted</li>
                        <li>Ramming action. It will be a Piloting vs Piloting skill test. On an attacker's success, both Ships are Shaken due to the impact. To calculate damage, roll the attacker's Armour versus the defender's Breech.</li>
                        <li>Using any skill that comes in handy during the course of the battle, such as first aid or sabotage.</li>
                        <li>Using the <em>Astrogation</em> skill or <em>Navigation</em> sub-system to navigate difficult areas safely (such as Asteroid belts), or help perform a difficult and tight manoeuvre (each success and raise is a +1 to Piloting rolls)</li>
                        <li>Using the <em>Operations</em> skill or <em>ECM</em> sub-system to co-ordinate ship defences and disrupt enemy sensors (each success and raise is a +1 boost to Evade)</em>
                        <li>Using the <em>Operations</em> skill or <em>Sensors</em> sub-system to discover weaknesses that your weapons can exploit (each success and raise is a +1 boost to a single weapon's Shooting roll)</li>
                        <li>Using the <em>Piloting</em> skill or <em>Auto-pilot</em> sub-system to increase the Ship's Evade (each success and raise is a +1 boost to Evade)</em>
                        <li>Using the <em>Repair</em> skill to recover from the Shaken status, or fix damage that occurs during combat.</li>
                    </ul>
                    Leftover actions will be used during the Fire phase. (<em>Note that you cannot perform any Manoeuvre Phase actions during the Fire phase as you can only fire a ship's weapon</em>).
                </li>
                <li>Once every ship has taken their turn during the Manoeuvre phase and all actions have been declared, we can enter the next phase.</li>
                <li><strong>FIRE PHASE</strong>. Unlike the previous phase, a Ship does not take all their actions at once. Instead, the Fire phase operates as follows:
                    <ul>
                        <li>The Ship that won initiative fires one and only one weapon. That weapon cannot be fired again during this phase.</li>
                        <li>Initiative passes to the next ship in turn order, and they fire one and only one weapon. That weapon cannot be fired again during this phase.</li>
                        <li>Repeat the above step until all Ships have fired at least one weapon, after which initiative returns to the first ship</li>
                        <li>The Fire Phase continues until all Ships have used up the rest of their actions, run out of active weapons to fire, or are simply knocked out of combat</li>
                    </ul>
                </li>
                <li><strong>ROUND END</strong>. Once the Fire Phase has been completed, we redraw initiative and begin the Manoeuvre phase again. Repeat until the end of Combat</li>
            </ol>
        </f7-block>
         <f7-block-title>Ship Damage Table</f7-block-title>
        <f7-block inset>
            <p>Roll 2d6 and consult the following table:</p>
            <table>
                <tr>
                    <th>ROLL</th>
                    <th>DAMAGE</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Your power has been reduced a die type. If you are reduce to below d4-2, your ship has lost all power and is effectively dead (include Ship AI) until power is restored. A Repair skill roll is restore 1 die type to your Power.</td>
                </tr>
            </table>
        </f7-block>
    </f7-block>
</template>

<script>
	export default {}
</script>