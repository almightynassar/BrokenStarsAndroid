<template>
  <div class="power-card">
    <div :class="['card-main', card.rarity]">
      <div class="card-content">
        <div class="header">
          <h1 class="title">{{ card.name }}</h1>
          <h2 class="rarity">{{ card.rarity | capitalize }}</h2>
        </div>

        <div class="art">
          <img :src="'static/'+card.art" :data-src="'static/'+card.art" :alt="'Card Art for: '+card.name"/>
        </div>

        <div class="textBox">
          <p>{{ card.effect }}</p>
        </div>
      </div>
    </div>
    <footer>
      <p>Art is owned, ™ &amp; © by {{ card.credit | capitalize }}</p>
      <small>{{card.source}}</small>
    </footer>
  </div>
</template>
<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    }
  }
</script>
