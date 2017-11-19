<template>
	<f7-page>
        <f7-buttons>
            <f7-button tab-link="#tab1" active>List All</f7-button>
            <f7-button tab-link="#tab2">New</f7-button>
            <f7-button tab-link="#tab3">Import</f7-button>
        </f7-buttons>
        <f7-tabs>
            <f7-tab id="tab1" active>
                <list></list>
            </f7-tab>
            <f7-tab id="tab2">
                <new-ship></new-ship>
            </f7-tab>
            <f7-tab id="tab3">
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