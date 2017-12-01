<template>
	<f7-page>
        <f7-buttons>
            <f7-button tab-link="#analyse" active>Analyse</f7-button>
            <f7-button tab-link="#fittings">Fittings</f7-button>
            <f7-button tab-link="#weapons">Weapons</f7-button>
        </f7-buttons>
        <f7-tabs>
            <f7-tab id="analyse" active>
                <analyse></analyse>
            </f7-tab>
            <f7-tab id="fittings">
                <fittings></fittings>
            </f7-tab>
            <f7-tab id="weapons">
                <weapons></weapons>
            </f7-tab>
        </f7-tabs>
    </f7-page>
</template>
<script>
    import Analyse from "./analyse.vue"
    import Fittings from "./fittings.vue"
    import Weapons from "./weapons.vue"
    export default {
        components: {
            Analyse,
            Fittings,
            Weapons
        }
    }
</script>