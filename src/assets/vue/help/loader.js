import Vue from 'vue'

// SHIP: ATTRIBUTES
Vue.component('help-ship-ai', require('./ship/ai.vue'))
Vue.component('help-ship-armour', require('./ship/armour.vue'))
Vue.component('help-ship-bulk', require('./ship/bulk.vue'))
Vue.component('help-ship-engine', require('./ship/engine.vue'))
Vue.component('help-ship-power', require('./ship/power.vue'))

// SHIP: SUB-SYSTEMS
Vue.component('help-ship-autopilot', require('./ship/autopilot.vue'))
Vue.component('help-ship-ecm', require('./ship/ecm.vue'))
Vue.component('help-ship-navigation', require('./ship/navigation.vue'))
Vue.component('help-ship-operations', require('./ship/operations.vue'))
Vue.component('help-ship-repair', require('./ship/repair.vue'))
Vue.component('help-ship-sensors', require('./ship/sensors.vue'))
Vue.component('help-ship-weapons', require('./ship/weapons.vue'))

// SHIP: VALUES
Vue.component('help-ship-ai-actions', require('./ship/ai-actions.vue'))
Vue.component('help-ship-designation', require('./ship/designation.vue'))
Vue.component('help-ship-evade', require('./ship/evade.vue'))
Vue.component('help-ship-breech', require('./ship/breech.vue'))
Vue.component('help-ship-crew', require('./ship/crew.vue'))
Vue.component('help-ship-fuel', require('./ship/fuel.vue'))
Vue.component('help-ship-hardpoints', require('./ship/hardpoints.vue'))
Vue.component('help-ship-hardpoints-used', require('./ship/hardpoints-used.vue'))
Vue.component('help-ship-size', require('./ship/size.vue'))
Vue.component('help-ship-integrity', require('./ship/integrity.vue'))
Vue.component('help-ship-power-total', require('./ship/power-total.vue'))
Vue.component('help-ship-power-used', require('./ship/power-used'))
Vue.component('help-ship-speed', require('./ship/speed.vue'))
Vue.component('help-ship-storage-total', require('./ship/storage-total.vue'))
Vue.component('help-ship-storage-used', require('./ship/storage-used.vue'))
Vue.component('help-ship-points', require('./ship/points.vue'))
Vue.component('help-ship-rank', require('./ship/rank.vue'))
Vue.component('help-ship-cost', require('./ship/cost.vue'))

// REGION: SECTORS
Vue.component('help-region-control', require('./region/control.vue'))
Vue.component('help-region-star', require('./region/star.vue'))
Vue.component('help-region-zone', require('./region/zone.vue'))