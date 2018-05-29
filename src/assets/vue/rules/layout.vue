<template>
    <v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow" v-model="tab">
                <v-tab href="#player"><strong>Player</strong></v-tab>
                <v-tab href="#talents"><strong>Talents</strong></v-tab>
                <v-tab href="#ship"><strong>Ship</strong></v-tab>
                <v-tab href="#hazard"><strong>Hazards</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab" touchless>
            <v-tab-item id="player">
                <player-rules></player-rules>
            </v-tab-item>
            <v-tab-item id="talents" >
                <talent-rules></talent-rules>
            </v-tab-item>
            <v-tab-item id="ship" >
                <ship-rules></ship-rules>
            </v-tab-item>
            <v-tab-item id="hazard" >
                <hazard-rules></hazard-rules>
            </v-tab-item>
        </v-tabs-items>
	</v-container>
</template>
<script>
    import PlayerRules from "./player.vue"
    import ShipRules from "./ship.vue"
    import TalentRules from "./talents.vue"
    import HazardRules from "./hazard.vue"
    export default {
        data () {
            return {
                tab: 'player',
            }
        },
        components: {
            PlayerRules,
            ShipRules,
            TalentRules,
            HazardRules
        }
    }
</script>