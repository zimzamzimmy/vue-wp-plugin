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
    <div class="clearfix"></div>
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
        }
      ]
    }
  }
}
</script>

<style lang="less">
@font-face {
  font-family: 'icomoon';
  src:  url('https://s3-eu-west-1.amazonaws.com/1038984-static-assets-production/icomoon/fonts/icomoon.eot');
  src:  url('https://s3-eu-west-1.amazonaws.com/1038984-static-assets-production/icomoon/fonts/icomoon.eot#iefix') format('embedded-opentype'),
    url('https://s3-eu-west-1.amazonaws.com/1038984-static-assets-production/icomoon/fonts/icomoon.woff2') format('woff2'),
    url('https://s3-eu-west-1.amazonaws.com/1038984-static-assets-production/icomoon/fonts/icomoon.ttf') format('truetype'),
    url('https://s3-eu-west-1.amazonaws.com/1038984-static-assets-production/icomoon/fonts/icomoon.woff') format('woff'),
    url('https://s3-eu-west-1.amazonaws.com/1038984-static-assets-production/icomoon/fonts/icomoon.svg#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-everlub:before {
  content: "\e962";
}
.icon-services-active:before {
  content: "\e964";
}
.icon-services:before {
  content: "\e965";
}
.icon-lube-recommender:before {
  content: "\e961";
}
.icon-brochure:before {
  content: "\e95f";
}
.icon-presentation:before {
  content: "\e960";
}
.icon-play:before {
  content: "\e95e";
}
.icon-chat-active:before {
  content: "\e95c";
}
.icon-chat:before {
  content: "\e95d";
}
.icon-success:before {
  content: "\e95b";
}
.icon-dot:before {
  content: "\e95a";
}
.icon-settings:before {
  content: "\e959";
}
.icon-company:before {
  content: "\e956";
}
.icon-portal:before {
  content: "\e957";
}
.icon-survey:before {
  content: "\e958";
}
.icon-team:before {
  content: "\e954";
}
.icon-team-active:before {
  content: "\e955";
}
.icon-bucket:before {
  content: "\e94e";
}
.icon-bulk:before {
  content: "\e94f";
}
.icon-can:before {
  content: "\e950";
}
.icon-crate:before {
  content: "\e951";
}
.icon-drum:before {
  content: "\e952";
}
.icon-tube:before {
  content: "\e953";
}
.icon-coverall:before {
  content: "\e944";
}
.icon-ear-protectors:before {
  content: "\e945";
}
.icon-gas-mask:before {
  content: "\e946";
}
.icon-helmet:before {
  content: "\e947";
}
.icon-hse-induction:before {
  content: "\e948";
}
.icon-safety-glasses:before {
  content: "\e949";
}
.icon-safety-jacket:before {
  content: "\e94a";
}
.icon-safety-shoes:before {
  content: "\e94b";
}
.icon-safety-sheet:before {
  content: "\e94c";
}
.icon-technical-sheet:before {
  content: "\e94d";
}
.icon-approval:before {
  content: "\e93d";
}
.icon-cost-ownership:before {
  content: "\e93e";
}
.icon-grease:before {
  content: "\e93f";
}
.icon-profitability:before {
  content: "\e940";
}
.icon-proof:before {
  content: "\e941";
}
.icon-technical:before {
  content: "\e942";
}
.icon-safety:before {
  content: "\e943";
}
.icon-edit-line:before {
  content: "\e93c";
}
.icon-exit:before {
  content: "\e93a";
}
.icon-lock:before {
  content: "\e93b";
}
.icon-oil-drop:before {
  content: "\e938";
}
.icon-rosette:before {
  content: "\e939";
}
.icon-delete:before {
  content: "\e935";
}
.icon-edit:before {
  content: "\e936";
}
.icon-info:before {
  content: "\e937";
}
.icon-bid:before {
  content: "\e92e";
}
.icon-business-plan:before {
  content: "\e92f";
}
.icon-contracts:before {
  content: "\e930";
}
.icon-experts:before {
  content: "\e931";
}
.icon-oil:before {
  content: "\e932";
}
.icon-plant-survey:before {
  content: "\e933";
}
.icon-pricing:before {
  content: "\e934";
}
.icon-contact:before {
  content: "\e92d";
}
.icon-mail:before {
  content: "\e92a";
}
.icon-mobile:before {
  content: "\e92b";
}
.icon-phone:before {
  content: "\e92c";
}
.icon-arrow:before {
  content: "\e929";
}
.icon-download:before {
  content: "\e927";
}
.icon-expiry:before {
  content: "\e928";
}
.icon-dropdown:before {
  content: "\e926";
}
.icon-calendar:before {
  content: "\e924";
}
.icon-filter:before {
  content: "\e925";
}
.icon-list-active:before {
  content: "\e91e";
}
.icon-more:before {
  content: "\e91f";
}
.icon-view-active:before {
  content: "\e920";
}
.icon-view:before {
  content: "\e923";
}
.icon-close-thick:before {
  content: "\e918";
}
.icon-tick-thick:before {
  content: "\e91d";
}
.icon-chevron:before {
  content: "\e917";
}
.icon-close:before {
  content: "\e916";
}
.icon-academy-active:before {
  content: "\e900";
}
.icon-academy:before {
  content: "\e901";
}
.icon-crm-active:before {
  content: "\e902";
}
.icon-crm:before {
  content: "\e903";
}
.icon-customers-active:before {
  content: "\e904";
}
.icon-customers:before {
  content: "\e905";
}
.icon-e-tools-active:before {
  content: "\e906";
}
.icon-e-tools:before {
  content: "\e907";
}
.icon-global-directories-active:before {
  content: "\e908";
}
.icon-global-directories:before {
  content: "\e909";
}
.icon-grid-active:before {
  content: "\e90a";
}
.icon-grid:before {
  content: "\e90b";
}
.icon-home-active:before {
  content: "\e90c";
}
.icon-home:before {
  content: "\e90d";
}
.icon-log-out:before {
  content: "\e90e";
}
.icon-marketing-support-active:before {
  content: "\e90f";
}
.icon-marketing-support:before {
  content: "\e910";
}
.icon-merchandise-active:before {
  content: "\e911";
}
.icon-merchandise:before {
  content: "\e912";
}
.icon-my-accounts-active:before {
  content: "\e913";
}
.icon-my-accounts:before {
  content: "\e914";
}
.icon-news-active:before {
  content: "\e915";
}
.icon-news:before {
  content: "\e919";
}
.icon-password:before {
  content: "\e91a";
}
.icon-products-active:before {
  content: "\e91b";
}
.icon-products:before {
  content: "\e91c";
}
.icon-search:before {
  content: "\e921";
}
.icon-warning:before {
  content: "\e922";
}
.icon-compare:before {
  content: '';
  background: url(/public/assets/images/icons/compare.svg) center center no-repeat;
  height: 15px;
  width: 15px;
  display: inline-block;
}

h1 {
  font-size: 28px;
  line-height: 32px;
  margin: 10px 0;
}
h5 {
  margin: 0;
}
a {
  text-decoration: none;
  color: #00a19c;
  transition: all .3s ease;
  cursor: pointer;
}

.hero {
  text-align: center;
}

.clearfix {
  display: block;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.col {
  position: relative;
  float: left;
  width: 100%;
  box-sizing: border-box;
  &.col-2 {
    width: 50%;
  }
  &.col-3 {
    width: 33.3333%;
  }
  &.col-4 {
    width: 25%;
  }
}

.col.gutter {
    padding: 0 .75vw;
    margin-bottom: 1.5vw;
    display: -ms-flexbox;
    display: flex;
}

.lube-recommender-wrapper {
  margin-top: 80px;
}

.lube-recommender-wrapper.lube-recommender-overview {
  .content-container {
    .col-3 {
      height: 80%;
    }
    display: block;
  } 
  .lube-recommender-block {
    padding: 4vw 0 3.75vw;
    h5 {
      text-transform: uppercase;
      margin-top: 30px;
      font-size: 14px;
    }
    .image-block {
      min-height: 92px;
    }
  }
}

.lube-recommender-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  .index {
    border-radius: 50%;
    background-color: #fff;
    color: #00a19c;
    border: 4px solid #33d4c5;
    width: 22px;
    height: 22px;
    padding: 10px;
    font-weight: 800;
    margin: -20px auto -10px;
  }
  .inner {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 15vw;
    padding: 1vw;
    font-weight: 300;
    img {
      padding-bottom: 20px;
    }
  }
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

.lube-recommender-tool-wrapper {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 62px);
  padding: 3.75vw;
  z-index: 2;
  box-sizing: border-box;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  .progress {
    color: #00A19C;
    font-size: 12px;
    font-weight: 900 
  }
  .progress-bar {
    width: 120px;
    display: inline-block;
    margin: 0 10px 2px;
    height: 3px;
    background-color: #eee;
    border-radius: 2px;
    .progress {
      height: 100%;
      border-radius: 2px;
      background-color: #00a19c;
    }
  }
  h1 {
    color: black;
    font-weight: 700;
    font-size: 24px;
  }
  .top-heading {
    h1 {
      font-weight: 800;
      font-size: 26px;
    }
    h4 {
      color: #00A19C;
      margin-bottom: 20px;
      font-size: 16px;
    }
  }
  .flex-wrapper {
    display: flex;
  }
  .white-bg {
    position: relative;
    display: block;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.20), 0 1px 3px 0 rgba(0, 0, 0, 0.10);
    border-radius: 2px;
    min-height: 100px;
    width: 100%;
    transition: all .3s ease;
    box-sizing: border-box;
    padding: 3.75vw;
    height: auto;
    min-height: calc(100vh - 7.5vw - 62px);
  }
  .back {
    position: relative;
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    .back-arrow {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      font-size: .9em;
      top: -1px;
      margin-right: 3px;
    }
    .forward-arrow {
      font-size: .9em;
      top: -1px;
      margin-left: 3px;
    }
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .lube-recommender-block {
    .inner {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      height: 15vw;
      padding: 1vw;
      font-weight: 300;
      img {
        padding-bottom: 20px;
      }
    }
    .index {
      border-radius: 50%;
      background-color: white;
      color: #00A19C;
      border: 4px solid #33D4C5;
      width: 22px;
      height: 22px;
      padding: 10px;
      font-weight: 800;
      margin: -20px auto -10px auto;
      &.selected {
        background-color: #1ABBB6;
        color: white;
      }
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .temp-block {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.20), 0 1px 3px 0 rgba(0, 0, 0, 0.10);
    ul {
      li {
        padding: 0.8vw 1.5vw;
        font-size: .85em;
        &:hover {
          background-color: #eee;
          cursor: pointer;
        }
      }
    }
  }
  .top-wrapper {
    .col {
      width: 20%;
      &.col-main {
        width: 60%;
      }
    }
  }
}

.temp-tool {
  hr {
    margin: 5px 0 0;
  }
  .temp-head {
    padding: 20px 0 10px;
    color: #3D3935;
    border-bottom: 1px solid #ccc;
    &.temp-type {
      margin-bottom: 20px;
    }
    &.dropdown {
      padding-right: 25px;
      appearance: none;
      cursor: pointer;
    }
  }
}
.button-group>.button:first-child {
    margin-left: 0;
}

.button-group.right {
    float: right;
    margin-bottom: 5px;
}
.button.white {
    background-color: #fff;
    color: #00A19C;
}

.button-group>.button {
    padding: 0.45rem 1rem;
    font-size: 0.9rem;
    line-height: 1.5;
}

.flex-top-container {
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  padding-bottom: 50px;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  &.small-padding {
    padding-top: 20px;
  }
}

</style>