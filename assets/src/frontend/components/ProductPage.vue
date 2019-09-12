<template>
  <div class="lube-recommender-tool-wrapper product-page" :style="{'background-image': 'url(../app/plugins/vue-wp-plugin/assets/images/bg/login-bg.svg)'}">
    <div class="flex-wrapper">
      <div class="white-bg">
        <div class="top-wrapper">
          <div  v-if="$route.params.from" class="col">

            <a @click="goToRecommender" class="back">
              <span class="icon icon-arrow middle back-arrow"/>
              Back
            </a>
          </div>
          <div v-if="$route.params.from" class="col col-main text-center top-heading">
            <h4 >{{ formattedTitle }}</h4>
            <h1>Your recommended</h1>
            <h1>{{ $route.params.from.meta.title + ' is...' }}</h1>
          </div>
          <div  v-if="$route.params.from" class="col text-right">
            <!-- ID: {{ $route.params.routeId }}<br>
            LEVEL: {{ $route.params.level }} -->
            <a @click="goToRecommenderBeginning" class="back">
              Start a new selection
              <span class="icon icon-arrow middle forward-arrow"/>
            </a>
          </div>
          <div class="clearfix"/>
        </div>
        <div class="flex-top-container">
          <div class="flex-container">
            <div class="col col-product">
              <div class="block product-block" v-if="product">
                <div class="inner">
                  <div :class="headerClass">
                    <div class="petronas-header">PETRONAS</div>
                    <h1>{{ product.product }}</h1>
                    <h5>{{ product.viscosity }}</h5>
                  </div>
                  <div class="bottom-container">
                    <div class="col col-2">
                      <div class="top-header">Benefits</div>
                      <ul class="tick-list">
                        <li v-for="benefit of product.benefits" :key="benefit">
                          {{ benefit }}
                        </li>
                      </ul>
                    </div>
                    <div class="col col-2">
                      <div class="top-header">Additional product documentation</div>
                      <ul class="document-list">
                        <li v-for="(doc, key) of product.documentation" :key="key">
                          <a @click="brochureLink(doc, key, product.type, product.pid)" target="_blank"><div><img :src="fileIcon(key, product.type)" class="icon"></div><div>{{ key }}</div></a>
                        </li>
                      </ul>
                    </div>
                    <div class="clearfix"/>
                  </div>
                  <div class="clearfix"/>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center oem-manual"><span class="bell-icon" :style="{'background-image': 'url(../app/plugins/vue-wp-plugin/assets/images/icons/lube-recommender/bell.svg)'}"/> Check with OEM manual for viscosity grade</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from './data/products.json'

export default {
  data () {
    return {
      Products,
      id: Number(this.$route.params.productID),
      product: {},
      headerClass: 'header top-container',
      formattedTitle: ''
    }
  },
  mounted () {
    this.getProduct()
    this.productClass()
    this.fromTitle()
  },
  methods: {
    getProduct () {
      this.product = this.Products.find(product => product.id === this.id)
    },
    productClass () {
      this.headerClass = this.product.grade.toLowerCase().trim() + ' header top-container'
    },
    brochureLink (doc, key, type, pid) {
      let filterName = 'Product Categories'
      let filterId = '1:field_product_categories:'
      let routeName = 'brochure-directory'
      let vid = 122
      if (type === 'Pulp & Paper') {
        vid = 12
        filterName = 'industry'
        filterId = '2:field_industry:'
        if (key === 'Technical data sheet' || key === 'Safety data sheet') {
          filterName = 'Product Name'
          filterId = '0:field_product_name:'
          vid = pid
        }
      } else if (type === 'Compressor Oils') {
        vid = 123
      } else if (type === 'Turbine Oils') {
        vid = 124
      } else if (type === 'Gear Oils') {
        vid = 125
      }
      if (key === 'Product brochure') {
        window.localStorage.removeItem('filter_1:field_product_categories:_/marketing-support/' + routeName)
        window.localStorage.removeItem('filter_2:field_industry:_/marketing-support/' + routeName)
      } else if (key === 'Technical data sheet') {
        routeName = 'technical-data-sheets'
        window.localStorage.removeItem('filter_1:field_product_categories:_/marketing-support/' + routeName)
        window.localStorage.removeItem('filter_0:field_product_name:_/marketing-support/' + routeName)
      } else {
        routeName = 'safety-data-sheets'
        window.localStorage.removeItem('filter_1:field_product_categories:_/marketing-support/' + routeName)
        window.localStorage.removeItem('filter_0:field_product_name:_/marketing-support/' + routeName)
      }
      const filterSet = 'filter_' + filterId + '_/marketing-support/' + routeName.replace('.', '/')
      const pageLink = {
        name: filterName,
        id: filterId,
        options: [{
          id: vid,
          name: type,
          selected: true
        }]
      }
      window.localStorage.setItem(filterSet, JSON.stringify(pageLink))
      this.$router.push({
        name: 'marketing-support.' + routeName
      })
    },
    fileIcon (key, type) {
      key = key.toLowerCase().trim().replace(/\s+/g, '-')
      type = type.toLowerCase().trim().replace(/\s+/g, '-')
      var image = ''
      if (key === 'product-brochure') {
        image = type
      } else {
        image = key
      }
      return '../app/plugins/vue-wp-plugin/assets/images/products/files/' + image + '-thumbnail.png'
    },
    goToRecommender () {
      this.$router.push({
        name: this.$route.params.from.name,
        params: {
          productID: this.$route.params.productID,
          // data: this.quizData,
          from: this.$route,
          level: this.$route.params.level,
          title: this.$route.params.title,
          routeId: this.$route.params.routeId
        }
      })
    },
    goToRecommenderBeginning () {
      this.$router.push({
        name: 'lube_recommender_tools'
      })
    },
    fromTitle () {
      var newArray = this.$route.params.title.filter(element => element !== undefined)
      this.formattedTitle = newArray.join(' - ')
    }
  }
}
</script>

<style lang="less">
.product-page {
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  .ul {
    list-style: none;
  }
  .spinner-container {
    position: relative;
    display: block;
    margin: 50px;
    transition: all .3s ease;
    .spinner {
      &:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid #8DDADA;
        border-top-color: #00A19C;
        animation: spinner .6s linear infinite;
      }
    }
  }
  .block {
    &:hover {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.20), 0 1px 3px 0 rgba(0, 0, 0, 0.10);
    }
  }
  .top-container {
    .petronas-header {
      text-transform: uppercase;
      color: #00A19C;
      font-size: 12px;
      font-weight: 800;
    }
    h1 {
      font-weight: 400;
    }
    h5 {
      font-size: 14px;
    }
    text-align: center;
    padding: 20px;
    border-bottom: 6px solid #006D68;
    &.standard {
      border-color: #006D68;
    }
    &.premium {
      border-color: #A4A7AA;
    }
    &.supreme {
      border-color: #C49F05;
    }
  }
  .col-product {
    width: 60%;
    max-width: 700px;
  }
  .top-header {
    font-size: 14px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .flex-container {
    height: auto;
    min-height: auto;
  }
  .bottom-container {
    background-color: #fafafa;
    .col {
      padding: 30px 40px;
    }
    .footnote {
      margin-top: 20px;
      margin-bottom: -20px;
      padding-left: 30px;
      p {
        font-size: 11px;
        color: #ccc;
        line-height: 1.4;
      }
    }
  }
  .oem-manual {
    color: #00A19C;
    font-size: 12px;
    margin-top: 30px;
    .bell-icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-bottom: -3px;
      margin-right: 8px;
    }
  }
}
.tick-list {
  padding: 0;
  li {
    padding: 10px 0;
    padding-left: 30px;
    &:before {
      font-family: "icomoon";
      content: "\e91d";
      display: inline-block;
      margin-left: -30px;
      width: 30px;
      color: #1ABBB6;
      font-size: 20px;
    }
  }
}

.document-list {
  padding-top: 5px;
  li {
    @include shadow-1;
    margin: 10px 0;
    background-color: $white;
    a {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: center;
      color: #333;
      :nth-child(2) {
        padding-left: 25px;
      }
    }
    
    &:hover {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.20), 0 1px 3px 0 rgba(0, 0, 0, 0.10);
    }
    img {
      height: 75px;
      width: 75px;
      vertical-align: middle;
    }
  }
}
</style>
