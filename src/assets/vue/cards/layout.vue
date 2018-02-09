<template>
    <v-container fluid>
        <v-tabs dark grow>
            <v-toolbar color="blue" dark>
                <v-tabs-bar class="blue">
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tabs-item href="#list"><strong>List</strong></v-tabs-item>
                <v-tabs-item href="#loot"><strong>Loot</strong></v-tabs-item>
                </v-tabs-bar>
            </v-toolbar>
            <v-tabs-items>
                <v-tabs-content id="list" >
                    <card-list></card-list>
                </v-tabs-content>
                <v-tabs-content id="loot" >
                    <card-loot></card-loot>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
	</v-container>
</template>
<script>
    import CardList from "./list.vue"
    import CardLoot from "./loot.vue"
    export default {
        components: {
            CardList,
            CardLoot,
        }
    }
</script>