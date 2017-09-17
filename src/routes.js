export default [
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/nameGenerator/',
    component: require('./assets/vue/pages/nameGenerator.vue')
  },
  {
    path: '/shipList/',
    component: require('./assets/vue/ship/list.vue')
  },
  {
    path: '/shipForm/',
    component: require('./assets/vue/ship/new.vue')
  },
  {
    path: '/shipAnalyse/',
    component: require('./assets/vue/ship/analyse.vue')
  },
  {
    path: '/shipView/:index',
    component: require('./assets/vue/ship/view.vue')
  },
  {
    path: '/fittingsList/',
    component: require('./assets/vue/ship/fittings.vue')
  },
  {
    path: '/weaponsList/',
    component: require('./assets/vue/ship/weapons.vue')
  }
]
