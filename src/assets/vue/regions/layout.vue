<template>
    <v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow">
                <v-tab to="/regions/"><strong>Sectors</strong></v-tab>
                <v-tab to="/regions/nations"><strong>Nations</strong></v-tab>
                <v-tab to="/regions/map"><strong>Map</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <router-view></router-view>
	</v-container>
</template>
<script>
    export default {}
</script>