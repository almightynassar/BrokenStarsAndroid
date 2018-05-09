<template>
    <v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow">
                <v-tab to="/cards/"><strong>List</strong></v-tab>
                <v-tab to="/cards/loot"><strong>Loot</strong></v-tab>
                <v-tab to="/cards/hand"><strong>Hand</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <router-view></router-view>
	</v-container>
</template>
<script>
    export default {}
</script>