<template>
  <div class="col col-4 gutter">
    <div class="block lube-recommender-block plain-block" @click="click(data)">
      <div class="index">{{ data.id }}</div>
      <div class="inner">
        <div>{{ data.title }}</div>
        <div v-if="data.subtitle">{{ data.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'index', 'click']
}
</script>
