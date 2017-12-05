<template>
	<f7-page>
        <f7-buttons>
            <f7-button tab-link="#builder" active>Builder</f7-button>
            <f7-button tab-link="#list">List</f7-button>
        </f7-buttons>
        <f7-tabs>
            <f7-tab id="builder" active>
                <builder></builder>
            </f7-tab>
            <f7-tab id="list">
                <list></list>
            </f7-tab>
        </f7-tabs>
    </f7-page>
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