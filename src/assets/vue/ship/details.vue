<template>
    <v-container fluid>
        <v-tabs dark grow>
            <v-toolbar color="blue" dark>
                <v-tabs-bar class="blue">
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <!-- <v-tabs-item href="#analyse"><strong>Hull Analyse</strong></v-tabs-item> -->
                    <v-tabs-item href="#fittings"><strong>Fittings</strong></v-tabs-item>
                    <v-tabs-item href="#weapons"><strong>Weapons</strong></v-tabs-item>
                </v-tabs-bar>
            </v-toolbar>
            <v-tabs-items>
                <!-- <v-tabs-content id="analyse" >
                    <analyse></analyse>
                </v-tabs-content> -->
                <v-tabs-content id="fittings" >
                    <fittings></fittings>
                </v-tabs-content>
                <v-tabs-content id="weapons" >
                    <weapons></weapons>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
	</v-container>
</template>
<script>
    // import Analyse from "./analyse.vue"
    import Fittings from "./fittings.vue"
    import Weapons from "./weapons.vue"
    export default {
        components: {
            // Analyse,
            Fittings,
            Weapons
        }
    }
</script>