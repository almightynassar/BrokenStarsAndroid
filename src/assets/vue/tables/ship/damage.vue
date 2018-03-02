<template>
</template>

<script>
    export default {
        data() {
            return {
                diceExp: "2d6",
                results: {
                    2: "You have suffered a hull breech (roll to choose where). Roll a d4 for each unit of Integrity your ship has left. The result is amount of rounds you have left before the your atmosphere is completely empty.",
                    3: "Your generator has experienced a power surge. Your ship has lost all power; this has turned off ALL systems, including AI and Engines.",
                    4: "Your engines have completely stalled. You have lost all control over momentum (including stopping and changing direction.",
                    5: "Your engines are playing up. Halve your Speed.",
                    6: "Your sensors have been overloaded. You cannot use sensors (effectively 'flying blind').",
                    7: "Your sensors are malfunctioning. Take an accumalative -2 penalty to all rolls when using the sensors.",
                    8: "One of your weapons has been overloaded. Randomly select a weapon; that weapon is now disabled and require a Repair roll.",
                    9: "Your weapons systems have been overloaded. For each active weapon, roll a d6; if the result is 4 or higher, your weapon is not affected. Otherwise, it is disabled until repaired.",
                    10: "Your Life-Support is overloaded. Roll a d6 for each unit of Integrity your ship has left. The result is amount of rounds you have left before life-support completely fails.",
                    11: "Your AI core has been overloaded. The AI cannot contribute any more until repaired.",
                    12: "The damage was largely superficial. You do not suffer any negative effects."
                }
            }
        }
    }
</script>