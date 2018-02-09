import Vue from 'vue'

Vue.component('help-generic', require('./generic.vue'))

// SHIP
Vue.component('help-ship', require('./ship.vue'))

// REGION / SECTORS / STARS
Vue.component('help-sector', require('./region/sector.vue'))
Vue.component('help-star', require('./region/star.vue'))

// QUESTS
Vue.component('help-quest', require('./quest.vue'))

// POWERS
Vue.component('help-power', require('./power.vue'))