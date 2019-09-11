<template>
  <li @click="click(index)" :value="index">
    <div v-if="metric">{{ data.c }}</div>
    <div v-else >{{ data.f }}</div>
  </li>
</template>

<script>
export default {
  props: ['data', 'index', 'click', 'metric']
}
</script>
