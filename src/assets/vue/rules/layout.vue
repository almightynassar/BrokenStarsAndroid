<template>
    <v-container fluid>
        <v-tabs dark grow>
            <v-toolbar color="blue" dark>
                <v-tabs-bar class="blue">
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tabs-item href="#player"><strong>Player</strong></v-tabs-item>
                    <v-tabs-item href="#skills"><strong>Skills</strong></v-tabs-item>
                    <v-tabs-item href="#talents"><strong>Talents</strong></v-tabs-item>
                    <v-tabs-item href="#ship"><strong>Ship</strong></v-tabs-item>
                    <v-tabs-item href="#hazard"><strong>Hazards</strong></v-tabs-item>
                </v-tabs-bar>
            </v-toolbar>
            <v-tabs-items>
                <v-tabs-content id="player" >
                    <player-rules></player-rules>
                </v-tabs-content>
                <v-tabs-content id="skills" >
                    <skill-rules></skill-rules>
                </v-tabs-content>
                <v-tabs-content id="talents" >
                    <talent-rules></talent-rules>
                </v-tabs-content>
                <v-tabs-content id="ship" >
                    <ship-rules></ship-rules>
                </v-tabs-content>
                <v-tabs-content id="hazard" >
                    <hazard-rules></hazard-rules>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
	</v-container>
</template>
<script>
    import PlayerRules from "./player.vue"
    import SkillRules from "./skills.vue"
    import ShipRules from "./ship.vue"
    import TalentRules from "./talents.vue"
    import HazardRules from "./hazard.vue"
    export default {
        components: {
            PlayerRules,
            SkillRules,
            ShipRules,
            TalentRules,
            HazardRules
        }
    }
</script>