<template>
  <div class="col gutter col-3">
    <div class="block lube-recommender-block">
      <router-link :to="{ name: tile.route }" >
        <div class="inner">
          <div class="image-block">
            <img :src="tile.icon" />
          </div>
          <h5>
            {{ tile.title }}
          </h5>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  props: ['tile'],
  data () {
    return {}
  }
}
</script>
