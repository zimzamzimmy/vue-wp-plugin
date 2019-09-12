import Vue from 'vue'
import Router from 'vue-router'
import LubeRecommenderTools from 'frontend/components/LubeRecommenderTools.vue'
import LubeTree from 'frontend/components/LubeTree.vue'
import ProductPage from 'frontend/components/ProductPage.vue'
import GearOilData from 'frontend/components/data/gear-oil.json'
import AirCompressorData from 'frontend/components/data/air-compressor.json'
import CirculatingOilData from 'frontend/components/data/circulating-oil.json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/lube-tools/gear-oil/air-compressor-oil',
      name: 'air_compressor_oil',
      component: LubeTree,
      meta: {
        title: 'Air Compressor Oil',
        tool: AirCompressorData
      }
    },
    {
      path: '/lube-tools/circulating-oil',
      name: 'circulating_oil',
      component: LubeTree,
      meta: {
        title: 'Circulating Oil',
        tool: CirculatingOilData
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
