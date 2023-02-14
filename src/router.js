import { createRouter, createWebHashHistory } from 'vue-router'

import FishListView from './views/FishListView.vue'
import MakeAFishView from './views/MakeAFishView.vue'
import FishCalculatorView from './views/FishCalculatorView.vue'
import FishStoreView from './views/FishStoreView.vue'
import PropsView from './views/PropsView.vue'
import RandomFishView from './views/RandomFishView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: FishListView,
      path: '/FishListView'
    },
    {
      component: MakeAFishView,
      path: '/MakeAFishView'
    },
    {
      component: FishCalculatorView,
      path: '/FishCalculatorView'
    },
    {
      component: FishStoreView,
      path: '/FishStoreView'
    },
    {
      component: PropsView,
      path: '/PropsView'
    },
    {
      component: RandomFishView,
      path: '/FishListView/:randomFish'
    }
  ]
})
