<template>
    <v-container fluid>
        <v-tabs dark grow>
            <v-toolbar color="blue" dark>
                <v-tabs-bar class="blue">
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tabs-item href="#list"><strong>List</strong></v-tabs-item>
                    <v-tabs-item href="#builder"><strong>Builder</strong></v-tabs-item>
                </v-tabs-bar>
            </v-toolbar>
            <v-tabs-items>
                <v-tabs-content id="list" >
                    <list></list>
                </v-tabs-content>
                <v-tabs-content id="builder" >
                    <builder></builder>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
	</v-container>
</template>
<script>
    import Builder from "./builder.vue"
    import List from "./list.vue"
    export default {
        components: {
            Builder,
            List
        }
    }
</script>