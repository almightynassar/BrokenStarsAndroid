<template>
	<f7-page>
        <f7-buttons>
            <f7-button tab-link="#list" active>List All</f7-button>
            <f7-button tab-link="#loot">Loot</f7-button>
        </f7-buttons>
        <f7-tabs>
            <f7-tab id="list" active>
                <card-list></card-list>
            </f7-tab>
            <f7-tab id="loot">
                <card-loot></card-loot>
            </f7-tab>
        </f7-tabs>
    </f7-page>
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