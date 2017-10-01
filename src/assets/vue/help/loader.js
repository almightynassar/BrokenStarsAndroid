import Vue from 'vue'

// SHIP: ATTRIBUTES
Vue.component('help-ai', require('./ai.vue'))
Vue.component('help-armour', require('./armour.vue'))
Vue.component('help-bulk', require('./bulk.vue'))
Vue.component('help-engine', require('./engine.vue'))
Vue.component('help-power', require('./power.vue'))

// SHIP: SUB-SYSTEMS
Vue.component('help-autopilot', require('./autopilot.vue'))
Vue.component('help-ecm', require('./ecm.vue'))
Vue.component('help-navigation', require('./navigation.vue'))
Vue.component('help-operations', require('./operations.vue'))
Vue.component('help-repair', require('./repair.vue'))
Vue.component('help-sensors', require('./sensors.vue'))
Vue.component('help-weapons', require('./weapons.vue'))

// SHIP: VALUES
Vue.component('help-ai-actions', require('./ai-actions.vue'))
Vue.component('help-evade', require('./evade.vue'))
Vue.component('help-breech', require('./breech.vue'))
Vue.component('help-crew', require('./crew.vue'))
Vue.component('help-fuel', require('./fuel.vue'))
Vue.component('help-hardpoints', require('./hardpoints.vue'))
Vue.component('help-hardpoints-used', require('./hardpoints-used.vue'))
Vue.component('help-size', require('./size.vue'))
Vue.component('help-integrity', require('./integrity.vue'))
Vue.component('help-power-total', require('./power-total.vue'))
Vue.component('help-power-used', require('./power-used'))
Vue.component('help-speed', require('./speed.vue'))
Vue.component('help-storage-total', require('./storage-total.vue'))
Vue.component('help-storage-used', require('./storage-used.vue'))
Vue.component('help-points', require('./points.vue'))
Vue.component('help-rank', require('./rank.vue'))
Vue.component('help-cost', require('./cost.vue'))

// REGION: SECTORS
Vue.component('help-sector-control', require('./sector-control.vue'))
Vue.component('help-star', require('./star.vue'))
Vue.component('help-zone', require('./zone.vue'))