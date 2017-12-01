<template>
	<f7-page>
        <f7-buttons>
            <f7-button tab-link="#list" active>List All</f7-button>
            <f7-button tab-link="#new">New</f7-button>
            <f7-button tab-link="#import">Import</f7-button>
        </f7-buttons>
        <f7-tabs>
            <f7-tab id="list" active>
                <list></list>
            </f7-tab>
            <f7-tab id="new">
                <new-ship></new-ship>
            </f7-tab>
            <f7-tab id="import">
                <import-ship></import-ship>
            </f7-tab>
        </f7-tabs>
    </f7-page>
</template>
<script>
    import List from "./list.vue"
    import NewShip from "./new.vue"
    import ImportShip from "./import.vue"
    export default {
        components: {
            List,
            NewShip,
            ImportShip
        }
    }
</script>