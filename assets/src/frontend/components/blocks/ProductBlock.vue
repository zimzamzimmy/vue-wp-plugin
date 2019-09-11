<template>
  <div class="col col-4 gutter">
    <div class="block lube-recommender-block plain-block" @click="click(data)">
      <div class="index">{{ index }}</div>
      <div class="inner">
        <div>{{ product.product }}</div>
        <div>{{ product.viscosity }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '../data/products.json'

export default {
  props: ['data', 'index', 'click'],
  data () {
    return {
      Products,
      id: Number(this.data.productID),
      product: {}
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      this.product = this.Products.find(product => product.id === this.id)
    }
  }
}
</script>
