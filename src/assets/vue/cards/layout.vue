<template>
    <v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow" v-model="tab">
                <v-tab href="#list"><strong>List</strong></v-tab>
                <v-tab href="#loot"><strong>Loot</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab" touchless>
            <v-tab-item id="list" >
                <card-list></card-list>
            </v-tab-item>
            <v-tab-item id="loot" >
                <card-loot></card-loot>
            </v-tab-item>
        </v-tabs-items>
	</v-container>
</template>
<script>
    import CardList from "./list.vue"
    import CardLoot from "./loot.vue"
    export default {
        data () {
            return {
                tab: 'list',
            }
        },
        components: {
            CardList,
            CardLoot,
        }
    }
</script>