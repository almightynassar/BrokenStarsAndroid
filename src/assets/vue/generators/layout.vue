<template>
    <v-container fluid>
        <v-tabs dark grow>
            <v-toolbar color="blue" dark>
                <v-tabs-bar class="blue">
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tabs-item href="#name"><strong>Name</strong></v-tabs-item>
                    <v-tabs-item href="#quest"><strong>Quest</strong></v-tabs-item>
                    <v-tabs-item href="#region"><strong>Region</strong></v-tabs-item>
                </v-tabs-bar>
            </v-toolbar>
            <v-tabs-items>
                <v-tabs-content id="name" >
                    <name-generator></name-generator>
                </v-tabs-content>
                <v-tabs-content id="quest" >
                    <quest-generator></quest-generator>
                </v-tabs-content>
                <v-tabs-content id="region" >
                    <region-generator></region-generator>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
	</v-container>
</template>
<script>
    import NameGenerator from "./name.vue"
    import QuestGenerator from "./quest.vue"
    import RegionGenerator from "./region.vue"
    export default {
        components: {
            NameGenerator,
            QuestGenerator,
            RegionGenerator,
        }
    }
</script>