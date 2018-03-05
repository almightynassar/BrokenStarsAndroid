<template>
    <v-container fluid>
        <v-tabs dark grow>
            <v-toolbar color="blue" dark>
                <v-tabs-bar class="blue">
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tabs-item to="/regions/"><strong>Sectors</strong></v-tabs-item>
                    <v-tabs-item to="/regions/nations"><strong>Nations</strong></v-tabs-item>
                    <v-tabs-item to="/regions/map"><strong>Map</strong></v-tabs-item>
                </v-tabs-bar>
            </v-toolbar>
        </v-tabs>
        <router-view></router-view>
	</v-container>
</template>
<script>
    export default {}
</script>