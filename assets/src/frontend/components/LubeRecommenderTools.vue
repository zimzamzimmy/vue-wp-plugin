<template>
  <div class="lube-recommender-wrapper lube-recommender-overview tco-calculator-wrapper tco-overview">
    <div class="hero">
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

<style lang="less">
.lube-recommender-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
}
.block {
  position: relative;
  display: block;
  background-color: $white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.20), 0 1px 3px 0 rgba(0, 0, 0, 0.10);
  border-radius: 2px;
  min-height: 100px;
  width: 100%;
  transition: all .3s ease;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.26), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>