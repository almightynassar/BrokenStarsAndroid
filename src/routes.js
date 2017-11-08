export default [
  // Information pages
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/setting/',
    component: require('./assets/vue/pages/setting.vue')
  },
  // Cards
  {
    path: '/cards/list/',
    component: require('./assets/vue/cards/list.vue')
  },
  // Generators
  {
    path: '/generator/name/',
    component: require('./assets/vue/generators/name.vue')
  },
  {
    path: '/generator/quest/',
    component: require('./assets/vue/generators/quest.vue')
  },
  {
    path: '/generator/region/',
    component: require('./assets/vue/generators/region.vue')
  },
  // Ship Information
  {
    path: '/ship/list/',
    component: require('./assets/vue/ship/list.vue')
  },
  {
    path: '/ship/form/',
    component: require('./assets/vue/ship/new.vue')
  },
  {
    path: '/ship/analyse/',
    component: require('./assets/vue/ship/analyse.vue')
  },
  {
    path: '/ship/view/:uuid',
    component: require('./assets/vue/ship/view.vue')
  },
  {
    path: '/ship/fittings/',
    component: require('./assets/vue/ship/fittings.vue')
  },
  {
    path: '/ship/weapons/',
    component: require('./assets/vue/ship/weapons.vue')
  },
  {
    path: '/ship/import/',
    component: require('./assets/vue/ship/import.vue')
  },
  // Region Information
  {
    path: '/regions/list/',
    component: require('./assets/vue/regions/list.vue')
  },
  {
    path: '/regions/map/',
    component: require('./assets/vue/regions/map.vue')
  },
  {
    path: '/regions/sector/view/:sector_x/:sector_y',
    component: require('./assets/vue/regions/viewSector.vue')
  },
  {
    path: '/regions/planet/view/:sector_x/:sector_y/:planet_index',
    component: require('./assets/vue/regions/viewPlanet.vue')
  },
]
