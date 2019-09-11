<template>
  <a @click="goToLink" class="block dashboard-block e-tools-link-block">
    <div class="top-container wrapper">
      <div class="col col-2 full-height">
        <div class="block-title"><span class="icon middle space-right icon-products"/>
          Industrial Lube Selector
        </div>
        <img :src="image" class="etool-icon"/>
      </div>
      <div class="col col-2 full-height inverse">
        <div class="title">
          <h4>Use our Industrial lube selector tool to choose the right type of {{ title }} for you
            <span class="icon icon-arrow middle space-left"></span>
          </h4>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('routes', ['setRoute']),
    goToLink () {
      this.setRoute({ route: this.$route.path, name: 'Return to ' + this.title + ' comparison' })
      this.$router.push({ name: this.link })
    }
  }
}
</script>
