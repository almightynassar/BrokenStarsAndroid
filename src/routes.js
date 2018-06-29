import VueRouter from 'vue-router'

const router = new VueRouter({
  routes: [
    // Information pages
    {
      path: '/',
      component: require('./assets/vue/pages/about.vue')
    },
    {
      path: '/setting/',
      component: require('./assets/vue/pages/setting.vue')
    },
    // Cards
    {
      path: '/cards/',
      component: require('./assets/vue/cards/layout.vue'),
      children: [
        {
          path: '',
          component: require('./assets/vue/cards/list.vue')
        },
        {
          path: 'loot',
          component: require('./assets/vue/cards/loot.vue')
        },
        {
          path: 'hand',
          component: require('./assets/vue/cards/hand.vue')
        }
      ]
    },
    // Powers
    {
      path: '/powers/',
      component: require('./assets/vue/powers/layout.vue')
    },
    // Generators
    {
      path: '/generators/',
      component: require('./assets/vue/generators/layout.vue')
    },
    // Ship Information
    {
      path: '/ship/',
      component: require('./assets/vue/ship/layout.vue')
    },
    {
      path: '/ship/details/',
      component: require('./assets/vue/ship/details.vue')
    },
    {
      path: '/ship/view/:uuid',
      component: require('./assets/vue/ship/view.vue'),
      props: true
    },
    // Region Information
    {
      path: '/regions/',
      component: require('./assets/vue/regions/layout.vue'),
      children: [
        {
          path: '',
          component: require('./assets/vue/regions/sector/list.vue')
        },
        {
          path: 'nations',
          component: require('./assets/vue/regions/nation/list.vue')
        },
        {
          path: 'map',
          component: require('./assets/vue/regions/map.vue')
        }
      ]
    },
    {
      path: '/regions/sector/view/:sector_x/:sector_y',
      component: require('./assets/vue/regions/sector/view.vue'),
      props: true
    },
    // Rules
    {
      path: '/rules/', 
      component: require('./assets/vue/rules/layout.vue'),
    },
  ]
})

export default router;