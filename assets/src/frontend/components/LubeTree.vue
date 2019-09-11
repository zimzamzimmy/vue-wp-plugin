<template>
    <div class="flex-wrapper">
      <div class="white-bg">
        <div class="top-wrapper">
          <div class="col">
            <a v-on:click="goBackwards(routeId)" class="back" v-if="routeId.length > 0">
              <span class="icon icon-arrow middle back-arrow"></span>
              Back
            </a>
            <!-- <router-link :to="{ name: $router.resolve(this.$route.meta.parent).route.name }" class="back" v-else>
              <span class="icon icon-arrow middle back-arrow"></span>
              Back
            </router-link> -->
          </div>

          <div class="col col-main text-center top-heading" v-if="type === 'TempBlock' ">
            <h4>{{ formattedTitle }}</h4>
            <h1>Select maximum oil temperature in operation</h1>
          </div>

          <div class="col col-main text-center top-heading" v-else-if="type === 'ProductBlock' ">
            <h4>{{ formattedTitle }}</h4>
            <h1>Based on your selections the below PETRONAS Compressor Oils meet your requirements, select one to learn more</h1>
          </div>

          <div class="col col-main text-center top-heading" v-else>
            <h4>{{ formattedTitle }}</h4>
            <h1>{{ question }}</h1>
          </div>

          <div class="col text-right" v-if="level > 0">
            <div class="progress">{{ this.level }} <div class="progress-bar"><div class="progress" :style="{ width: percent }"></div></div> {{this.levels }}</div>
          </div>

          <div class="clearfix"></div>
        </div>
        <!-- Temp boxes -->
        <div class="flex-top-container">
          <div class="temp-box flex-container" v-if="type === 'TempBlock' ">
            <div class="temp-tool col col-3">
              <div class="temp-type temp-head">{{ translate('Preferred unit of measurement') }}
                  <div class="button-group right" role="group" aria-label="Basic example">
                    <button type="button" class="button small inline" :class="{ white: !isMetric }" @click="isMetric = true">°C</button>
                    <button type="button" class="button small inline" :class="{ white: isMetric  }" @click="isMetric = false">°F</button>
                  </div>
                <div class="clearfix"></div>
              </div>
              <div class="temp-head dropdown" @click="show = !show">{{ translate('Oil temperatures in operation') }}</div>
              <div class="block plain-block temp-block" v-if="show">
                <div class="inner">
                  <ul>
                    <component
                      :is="type"
                      :index="index"
                      :key="index"
                      :metric="isMetric"
                      v-for="(temp, index) in temperatures"
                      :click="tempChoice"
                      :data="temp"
                    />
                  </ul>
                </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <!-- Multiblocks -->
        <template v-else-if="type === 'MultiBlock'">
          <div class="flex-container">
          <component
            :is="type"
            :index="index"
            :key="index"
            v-for="(option, index) in multi.multiOptions"
            :data="option"
            @selected="selectedBlock"
          /></div>
          <div class="flex-container small-padding">
            <button
              v-show="multi.chosenOptions !== '000'"
              @click="multiButton"
              class="button greenline"
            >{{ multi.choices.reduce((x, y) => x + y) + ' of ' + multi.arrayLength }} selected - continue  <span class="icon icon-arrow middle back-arrow"></span></button>
          </div>
        </template>
        <!-- All other blocks -->
        <div class="quiz-box flex-container" v-else>
          <component
            :is="type"
            :index="indexToAlphabet(index)"
            :key="index"
            v-for="(option, index) in options"
            :click="nextStep"
            :data="option"
          ></component>
        </div>
        <!-- {{ 'ID: ' + routeId }}<br>
        {{ 'Level ' + level }} -->
      </div>
    </div>
  </div>
</template>

<script>
import IconBlock from './blocks/IconBlock.vue'
import PlainBlock from './blocks/PlainBlock.vue'
import TempBlock from './blocks/TempBlock.vue'
import MultiBlock from './blocks/MultiBlock.vue'
import ProductBlock from './blocks/ProductBlock.vue'

export default {
  components: {
    IconBlock,
    PlainBlock,
    TempBlock,
    MultiBlock,
    ProductBlock
  },
  data () {
    return {
      quizData: this.$route.meta.tool,
      question: this.$route.meta.tool.question,
      options: this.$route.meta.tool.options,
      type: this.$route.meta.tool.type,
      levels: this.$route.meta.tool.levels,
      temperatures: this.$route.meta.tool.temperatures,
      steps: this.$route.meta.tool.steps,
      routes: this.$route.meta.tool.routes,
      formattedTitle: null,
      show: false,
      isMetric: true,
      level: 1,
      multi: {
        multiOptions: null,
        choices: null,
        arrayLength: null,
        chosenOptions: '000',
        isSelected: [null, null, null]
      },
      title: [this.$route.meta.title],
      percent: 0,
      tempOptions: null,
      routeId: ''
    }
  },
  mounted () {
    this.levelIndicator()
    this.fromTitle()
    this.fromProduct()
  },
  methods: {
    nextStep (event) {
      console.log('CLICK', event)
      this.routeId = this.routeId + event.id
      console.log('TITLE: ', event.title)
      this.title[this.level] = event.title
      this.levelUp()
      this.fromTitle()
      this.levelIndicator()
      this.isProduct(this.routeId)
      this.findNextStep(this.routeId)
    },
    tempChoice (index) {
      this.show = false
      if (this.isMetric) {
        this.title[this.level] = this.temperatures[index].c
      } else {
        this.title[this.level] = this.temperatures[index].f
      }
      for (const option of this.quizData.options) {
        if (option.tempOptions.includes(index)) {
          this.routeId = this.routeId + option.id
          this.levelUp()
          this.fromTitle()
          this.levelIndicator()
          this.isProduct(this.routeId)
          this.findNextStep(this.routeId)
        }
      }
    },
    findNextStep (id) {
      for (const step of this.steps) {
        if (step.ids.includes(id) === true) {
          this.type = step.type
          this.quizData = step
          this.options = step.options
          this.question = step.question
          if (step.type === 'MultiBlock') {
            this.multi.multiOptions = step.multiOptions
            this.multi.arrayLength = step.multiOptions.length
            this.multi.choices = new Array(this.multi.arrayLength).fill(0)
            // console.log('ARRAY: ', this.multi.choices)
          }
        }
      }
    },
    levelUp () {
      this.level = this.level + 1
      if (this.level === this.levels) {
        this.levels = this.levels + 1
      }
    },
    isProduct (id) {
      for (const route of this.routes) {
        if (route.steps.includes(id) === true) {
          // console.log('PRODUCT: ', route)
          this.goToProduct(route.productId)
        }
      }
    },
    goBackwards (id) {
      this.routeId = id.slice(0, -1)
      this.title = this.title.slice(0, -1)
      this.level = this.level - 1
      this.fromTitle()
      this.levelIndicator()
      if (id.length > 1) {
        this.findNextStep(this.routeId)
      } else {
        this.title = [this.$route.meta.title]
        this.quizData = this.$route.meta.tool
        this.question = this.$route.meta.tool.question
        this.options = this.$route.meta.tool.options
        this.type = this.$route.meta.tool.type
      }
    },
    indexToAlphabet (index) {
      const alphabet = 'ABCDEFGH'
      return alphabet.charAt(index)
    },
    selectedChoices () {
      if (this.type === 'MultiBlock') {
        this.multi.arrayLength = this.multi.multiOptions.length
      }
    },
    selectedBlock (value) {
      console.log('VALUE: ', value)
      this.multi.choices[value.id] = value.isChosen
      this.multi.isSelected[value.id] = value.istitle
      this.optionString()
    },
    optionString () {
      this.multi.chosenOptions = this.multi.choices.toString().replace(/,/g, '')
      this.title[this.level] = this.multi.isSelected.filter(element => element !== null).join(', ')
      // console.log('CHOICE', this.multi.chosenOptions)
    },
    multiButton (event) {
      for (const option of this.options) {
        if (option.selection.includes(this.multi.chosenOptions)) {
          // console.log('OPTIONS', option)
          this.routeId = this.routeId + option.id
          this.levelUp()
          this.fromTitle()
          this.levelIndicator()
          this.isProduct(this.routeId)
          this.findNextStep(this.routeId)
          this.multi.chosenOptions = '000'
          this.multi.isSelected = [null, null, null]
        }
      }
    },
    goToProduct (id) {
      this.$router.push({
        name: 'product',
        params: {
          productID: id,
          // data: this.quizData,
          from: this.$route,
          level: this.level,
          title: this.title,
          routeId: this.routeId
        }
      })
    },
    levelIndicator () {
      this.percent = Math.round(this.level / this.levels * 100) + 'px'
    },
    fromProduct () {
      if (this.$route.params.from && this.$route.params.from.name === 'product') {
        this.level = this.$route.params.level
        this.title = this.$route.params.title
        this.goBackwards(this.$route.params.routeId)
      }
    },
    fromTitle () {
      var newArray = this.title.filter(element => element !== undefined)
      this.formattedTitle = newArray.join(' - ')
    }
  }
}
</script>
