import Vue from 'vue'
import Router from 'vue-router'
import Home from 'frontend/components/Home.vue'
import Profile from 'frontend/components/Profile.vue'
import LubeRecommenderTools from 'frontend/components/LubeRecommenderTools.vue'
import LubeTree from 'frontend/components/LubeTree.vue'
import ProductPage from 'frontend/components/ProductPage.vue'
import GearOilData from 'frontend/components/data/gear-oil.json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/lube-tools',
      name: 'lube_recommender_tools',
      component: LubeRecommenderTools
    },
    {
      path: '/lube-tools/gear-oil',
      name: 'gear_oil',
      component: LubeTree,
      meta: {
        title: 'Gear Oil',
        tool: GearOilData
      }
    },
    {
      path: '/lube-tools/:productID',
      name: 'product',
      component: ProductPage,
      meta: {
        title: 'Product'
      }
    }
  ]
})
