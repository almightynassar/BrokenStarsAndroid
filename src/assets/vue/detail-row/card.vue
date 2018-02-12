<template>
  <card :card="card"></card>
</template>
<script>
  import Card from '../cards/card.vue'
  export default {
    components: {
      Card
    },
    props: {
      card: {
        type: Object,
        required: true
      }
    }
  }
</script>
