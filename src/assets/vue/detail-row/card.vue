<template>
  <dl>
    <dt><strong>Name</strong></dt>
    <dd class="bottom-border">{{ rowData.name }}</dd>
    <dt><strong>Rarity</strong></dt>
    <dd class="bottom-border">{{ rowData.rarity | capitalize }}</dd>
    <dt><strong>Effect</strong></dt>
    <dd class="bottom-border">{{ rowData.effect }}</dd>
  </dl>
</template>
<script>
  export default {
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
