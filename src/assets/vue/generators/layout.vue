<template>
    <v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow" v-model="tab">
                <v-tab href="#name"><strong>Name</strong></v-tab>
                <v-tab href="#quest"><strong>Quest</strong></v-tab>
                <v-tab href="#region"><strong>Region</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab" touchless>
            <v-tab-item id="name" >
                <name-generator></name-generator>
            </v-tab-item>
            <v-tab-item id="quest" >
                <quest-generator></quest-generator>
            </v-tab-item>
            <v-tab-item id="region" >
                <region-generator></region-generator>
            </v-tab-item>
        </v-tabs-items>
	</v-container>
</template>
<script>
    import NameGenerator from "./name.vue"
    import QuestGenerator from "./quest.vue"
    import RegionGenerator from "./region.vue"
    export default {
        data () {
            return {
                tab: 'name',
            }
        },
        components: {
            NameGenerator,
            QuestGenerator,
            RegionGenerator,
        }
    }
</script>