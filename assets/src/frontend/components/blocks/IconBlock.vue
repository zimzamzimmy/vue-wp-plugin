<template>
  <div class="col col-4 gutter">
    <div class="block lube-recommender-block icons-block" @click="click(data)">
      <div class="index">{{ index }}</div>
      <div class="inner">
        <img :src="iconUrl(data.title)" height="60" >
        <div>{{ data.title }}</div>
        <div v-if="data.subtitle">{{ data.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'index', 'click'],
  methods: {
    iconUrl (title) {
      title = title.toLowerCase().replace(/\//g, '').replace(/ /g, '-').replace(/--/g, '-')
      return `https://qa.pli-portal.com/assets/images/icons/lube-recommender/${title}.svg`
    }
  }
}
</script>
