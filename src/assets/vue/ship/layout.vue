<template>
	<v-container fluid>
        <v-tabs dark grow>
            <v-toolbar color="blue" dark>
                <v-tabs-bar class="blue">
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tabs-item href="#list"><strong>List</strong></v-tabs-item>
                    <v-tabs-item href="#new"><strong>New</strong></v-tabs-item>
                    <v-tabs-item href="#import"><strong>Import</strong></v-tabs-item>
                </v-tabs-bar>
            </v-toolbar>
            <v-tabs-items>
                <v-tabs-content id="list" >
                    <ship-list></ship-list>
                </v-tabs-content>
                <v-tabs-content id="new" >
                    <new-ship></new-ship>
                </v-tabs-content>
                <v-tabs-content id="import" >
                    <import-ship></import-ship>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
	</v-container>
</template>
<script>
    import ShipList from "./list.vue"
    import NewShip from "./new.vue"
    import ImportShip from "./import.vue"
    export default {
        components: {
            ShipList,
            NewShip,
            ImportShip
        }
    }
</script>