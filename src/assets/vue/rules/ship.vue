<template>
	<f7-page>
        <f7-buttons>
            <f7-button tab-link="#combat" active>Combat</f7-button>
        </f7-buttons>
        <f7-tabs>
            <f7-tab id="combat" active>
                <ship-combat></ship-combat>
            </f7-tab>
        </f7-tabs>
    </f7-page>
</template>
<script>
    import ShipCombat from "./ship-combat.vue"
    export default {
        components: {
            ShipCombat
        }
    }
</script>