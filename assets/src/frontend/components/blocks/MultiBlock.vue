<template>
  <div class="col col-4 gutter">
    <div class="block lube-recommender-block plain-block" :class="classSelected" @click="toggle">
      <div class="index" :class="classSelected">{{ indexToAlphabet(index) }}</div>
      <div class="inner">
        <div>{{ data.title }}</div>
        <div v-if="data.subtitle">{{ data.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'index'],
  data () {
    return {
      isChosen: false,
      choice: 0
    }
  },
  computed: {
    idClass () {
      const index = this.index + 1
      return 'id-' + index
    },
    classSelected () {
      if (this.isChosen === true) {
        return 'selected'
      }
      return ''
    }
  },
  methods: {
    toggle () {
      this.isChosen = !this.isChosen
      var isTitle = null
      if (this.isChosen === true) {
        this.choice = 1
        isTitle = this.data.title
      } else {
        this.choice = 0
        isTitle = null
      }
      this.newData = this.index + ':' + this.isChosen
      this.$emit('selected', { isChosen: this.choice, id: this.index, istitle: isTitle })
    },
    indexToAlphabet (index) {
      const alphabet = 'ABCDEFGH'
      return alphabet.charAt(index)
    }
  }
}
</script>
