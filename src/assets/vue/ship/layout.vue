<template>
	<v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow" v-model="tab">
                <v-tab key="list" href="#list"><strong>List</strong></v-tab>
                <v-tab key="new" href="#new"><strong>New</strong></v-tab>
                <v-tab key="import" href="#import"><strong>Import</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab" touchless>
            <v-tab-item id="list">
                <ship-list></ship-list>
            </v-tab-item>
            <v-tab-item id="new">
                <new-ship></new-ship>
            </v-tab-item>
            <v-tab-item id="import">
                <import-ship></import-ship>
            </v-tab-item>
        </v-tabs-items>
	</v-container>
</template>
<script>
    import ShipList from "./list.vue"
    import NewShip from "./new.vue"
    import ImportShip from "./import.vue"
    export default {
        data () {
            return {
                tab: 'list',
            }
        },
        components: {
            ShipList,
            NewShip,
            ImportShip
        }
    }
</script>