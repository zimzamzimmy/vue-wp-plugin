<template>
  <div class="lube-recommender-tool-wrapper product-page" :style="{'background-image': 'url(/public/assets/images/bg/login-bg.svg)'}">
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
          <div class="text-center oem-manual product-link">
            <router-link :to="{ name: 'products.product', params: { productId: product.nid, from: $route } }" class="oem-manual product-link" v-if="product.nid">Go to full product page <span class="icon icon-arrow" /></router-link>
          </div>
          <div class="text-center oem-manual"><span class="bell-icon" :style="{'background-image': 'url(/public/assets/images/icons/lube-recommender/bell.svg)'}"/> Check with OEM manual for viscosity grade</div>
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
      return '/public/assets/images/products/files/' + image + '-thumbnail.png'
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
