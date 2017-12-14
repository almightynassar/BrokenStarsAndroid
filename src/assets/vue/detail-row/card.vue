<template>
  <card :card="rowData"></card>
</template>
<script>
  import Card from '../cards/card.vue'
  export default {
    components: {
      Card
    },
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      },
    }
  }
</script>
