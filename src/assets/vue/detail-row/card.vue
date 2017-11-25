<template>
  <div class="power-card">
    <div :class="['card-main', rowData.rarity]">
      <div class="card-content">
        <div class="header">
          <h1 class="title">{{ rowData.name }}</h1>
          <h2 class="rarity">{{ rowData.rarity | capitalize }}</h2>
        </div>

        <div class="art">
          <img :src="'static/'+rowData.art" :data-src="'static/'+rowData.art" :alt="'Card Art for: '+rowData.name"/>
        </div>

        <div class="textBox">
          <p>{{ rowData.effect }}</p>
        </div>
      </div>
    </div>
    <footer>
      <p>™ &amp; © {{ rowData.credit | capitalize }}</p>
    </footer>
  </div>
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
