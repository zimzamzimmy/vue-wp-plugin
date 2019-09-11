<template>
  <div class="lube-recommender-wrapper lube-recommender-overview tco-calculator-wrapper tco-overview">
    <div class="hero"
         :style="{ 'background': 'url(/public/assets/images/bg/oil-selector-card-bg.png) center center no-repeat', 'background-size': 'cover', 'background-position': '50% 50%' }">
      <div class="overlay"></div>
      <div class="inner">
        <div class="info">
          <h1>
            {{ 'Choose the right type of oil for your application' }}
          </h1>
          <p>
            {{ 'Select an option from below' }}
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="content-container">
      <div class="wrapper gutter blocks-wrapper">
        <lube-recommender-block
          v-for="(tile, i) in tiles"
          :key="i"
          :tile="tile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LubeRecommenderBlock from './blocks/LubeRecommenderBlock.vue'
export default {
  components: {
    LubeRecommenderBlock
  },
  data () {
    return {}
  },
  computed: {
    tiles () {
      return [
        {
          title: 'Air Compressor Oil',
          route: 'air_compressor_oil',
          icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/compressor.svg'
        },
        {
          title: 'Circulating Oil',
          route: 'circulating_oil',
          icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/circulation.svg'
        },
        {
          title: 'Gear Oil',
          route: 'gear_oil',
          icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/gears.svg'
        },
        {
          title: 'Hydraulic Oil',
          route: 'hydraulic_oil',
          icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/hydraulic-oil.svg'
        },
        {
          title: 'Turbine Oil',
          route: 'turbine_oil',
          icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/turbine.svg'
        }
      ]
    }
  }
}
</script>

<style>
.lube-recommender-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
}
</style>