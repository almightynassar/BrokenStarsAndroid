<template>
    <v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow" v-model="tab">
                <!-- <v-tab href="#analyse"><strong>Hull Analyse</strong></v-tab> -->
                <v-tab href="#fittings"><strong>Fittings</strong></v-tab>
                <v-tab href="#weapons"><strong>Weapons</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab" touchless>
            <!-- <v-tab-item id="analyse" >
                <analyse></analyse>
            </v-tab-item> -->
            <v-tab-item id="fittings" >
                <fittings></fittings>
            </v-tab-item>
            <v-tab-item id="weapons" >
                <weapons></weapons>
            </v-tab-item>
        </v-tabs-items>
	</v-container>
</template>
<script>
    // import Analyse from "./analyse.vue"
    import Fittings from "./fittings.vue"
    import Weapons from "./weapons.vue"
    export default {
        data () {
            return {
                tab: 'fittings',
            }
        },
        components: {
            // Analyse,
            Fittings,
            Weapons
        }
    }
</script>