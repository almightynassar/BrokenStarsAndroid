<template>
    <v-container fluid>
        <v-toolbar color="blue" dark tabs>
            <v-tabs dark grow color="blue" slider-color="yellow" v-model="tab">
                <v-tab href="#list"><strong>List</strong></v-tab>
                <v-tab href="#builder"><strong>Builder</strong></v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab" touchless>
            <v-tab-item id="list" >
                <list></list>
            </v-tab-item>
            <v-tab-item id="builder" >
                <builder></builder>
            </v-tab-item>
        </v-tabs-items>
	</v-container>
</template>
<script>
    import Builder from "./builder.vue"
    import List from "./list.vue"
    export default {
        data () {
            return {
                tab: 'list',
            }
        },
        components: {
            Builder,
            List
        }
    }
</script>