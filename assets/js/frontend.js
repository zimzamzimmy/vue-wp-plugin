pluginWebpack([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'App'
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_LubeRecommenderBlock_vue__ = __webpack_require__(28);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    LubeRecommenderBlock: __WEBPACK_IMPORTED_MODULE_0__blocks_LubeRecommenderBlock_vue__["a" /* default */]
  },
  data() {
    return {};
  },
  computed: {
    tiles() {
      return [{
        title: 'Air Compressor Oil',
        route: 'air_compressor_oil',
        icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/compressor.svg'
      }, {
        title: 'Circulating Oil',
        route: 'circulating_oil',
        icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/circulation.svg'
      }, {
        title: 'Gear Oil',
        route: 'gear_oil',
        icon: 'https://qa.pli-portal.com/public/assets/images/icons/lube-recommender/gears.svg'
      }];
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['tile'],
  data() {
    return {};
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_IconBlock_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_PlainBlock_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_TempBlock_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_MultiBlock_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_ProductBlock_vue__ = __webpack_require__(40);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    IconBlock: __WEBPACK_IMPORTED_MODULE_0__blocks_IconBlock_vue__["a" /* default */],
    PlainBlock: __WEBPACK_IMPORTED_MODULE_1__blocks_PlainBlock_vue__["a" /* default */],
    TempBlock: __WEBPACK_IMPORTED_MODULE_2__blocks_TempBlock_vue__["a" /* default */],
    MultiBlock: __WEBPACK_IMPORTED_MODULE_3__blocks_MultiBlock_vue__["a" /* default */],
    ProductBlock: __WEBPACK_IMPORTED_MODULE_4__blocks_ProductBlock_vue__["a" /* default */]
  },
  data() {
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
    };
  },
  mounted() {
    this.levelIndicator();
    this.fromTitle();
    this.fromProduct();
  },
  methods: {
    nextStep(event) {
      console.log('CLICK', event);
      this.routeId = this.routeId + event.id;
      console.log('TITLE: ', event.title);
      this.title[this.level] = event.title;
      this.levelUp();
      this.fromTitle();
      this.levelIndicator();
      this.isProduct(this.routeId);
      this.findNextStep(this.routeId);
    },
    tempChoice(index) {
      this.show = false;
      if (this.isMetric) {
        this.title[this.level] = this.temperatures[index].c;
      } else {
        this.title[this.level] = this.temperatures[index].f;
      }
      for (const option of this.quizData.options) {
        if (option.tempOptions.includes(index)) {
          this.routeId = this.routeId + option.id;
          this.levelUp();
          this.fromTitle();
          this.levelIndicator();
          this.isProduct(this.routeId);
          this.findNextStep(this.routeId);
        }
      }
    },
    findNextStep(id) {
      for (const step of this.steps) {
        if (step.ids.includes(id) === true) {
          this.type = step.type;
          this.quizData = step;
          this.options = step.options;
          this.question = step.question;
          if (step.type === 'MultiBlock') {
            this.multi.multiOptions = step.multiOptions;
            this.multi.arrayLength = step.multiOptions.length;
            this.multi.choices = new Array(this.multi.arrayLength).fill(0);
            // console.log('ARRAY: ', this.multi.choices)
          }
        }
      }
    },
    levelUp() {
      this.level = this.level + 1;
      if (this.level === this.levels) {
        this.levels = this.levels + 1;
      }
    },
    isProduct(id) {
      for (const route of this.routes) {
        if (route.steps.includes(id) === true) {
          // console.log('PRODUCT: ', route)
          this.goToProduct(route.productId);
        }
      }
    },
    goBackwards(id) {
      this.routeId = id.slice(0, -1);
      this.title = this.title.slice(0, -1);
      this.level = this.level - 1;
      this.fromTitle();
      this.levelIndicator();
      if (id.length > 1) {
        this.findNextStep(this.routeId);
      } else {
        this.title = [this.$route.meta.title];
        this.quizData = this.$route.meta.tool;
        this.question = this.$route.meta.tool.question;
        this.options = this.$route.meta.tool.options;
        this.type = this.$route.meta.tool.type;
      }
    },
    indexToAlphabet(index) {
      const alphabet = 'ABCDEFGH';
      return alphabet.charAt(index);
    },
    selectedChoices() {
      if (this.type === 'MultiBlock') {
        this.multi.arrayLength = this.multi.multiOptions.length;
      }
    },
    selectedBlock(value) {
      console.log('VALUE: ', value);
      this.multi.choices[value.id] = value.isChosen;
      this.multi.isSelected[value.id] = value.istitle;
      this.optionString();
    },
    optionString() {
      this.multi.chosenOptions = this.multi.choices.toString().replace(/,/g, '');
      this.title[this.level] = this.multi.isSelected.filter(element => element !== null).join(', ');
      // console.log('CHOICE', this.multi.chosenOptions)
    },
    multiButton(event) {
      for (const option of this.options) {
        if (option.selection.includes(this.multi.chosenOptions)) {
          // console.log('OPTIONS', option)
          this.routeId = this.routeId + option.id;
          this.levelUp();
          this.fromTitle();
          this.levelIndicator();
          this.isProduct(this.routeId);
          this.findNextStep(this.routeId);
          this.multi.chosenOptions = '000';
          this.multi.isSelected = [null, null, null];
        }
      }
    },
    goToProduct(id) {
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
      });
    },
    levelIndicator() {
      this.percent = Math.round(this.level / this.levels * 100) + 'px';
    },
    fromProduct() {
      if (this.$route.params.from && this.$route.params.from.name === 'product') {
        this.level = this.$route.params.level;
        this.title = this.$route.params.title;
        this.goBackwards(this.$route.params.routeId);
      }
    },
    fromTitle() {
      var newArray = this.title.filter(element => element !== undefined);
      this.formattedTitle = newArray.join(' - ');
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['data', 'index', 'click'],
  methods: {
    iconUrl(title) {
      title = title.toLowerCase().replace(/\//g, '').replace(/ /g, '-').replace(/--/g, '-');
      return `../app/plugins/vue-lube-recommender/assets/images/lube-recommender/${title}.svg`;
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['data', 'index', 'click']
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['data', 'index', 'click', 'metric']
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['data', 'index'],
  data() {
    return {
      isChosen: false,
      choice: 0
    };
  },
  computed: {
    idClass() {
      const index = this.index + 1;
      return 'id-' + index;
    },
    classSelected() {
      if (this.isChosen === true) {
        return 'selected';
      }
      return '';
    }
  },
  methods: {
    toggle() {
      this.isChosen = !this.isChosen;
      var isTitle = null;
      if (this.isChosen === true) {
        this.choice = 1;
        isTitle = this.data.title;
      } else {
        this.choice = 0;
        isTitle = null;
      }
      this.newData = this.index + ':' + this.isChosen;
      this.$emit('selected', { isChosen: this.choice, id: this.index, istitle: isTitle });
    },
    indexToAlphabet(index) {
      const alphabet = 'ABCDEFGH';
      return alphabet.charAt(index);
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_products_json__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_products_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_products_json__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['data', 'index', 'click'],
  data() {
    return {
      Products: __WEBPACK_IMPORTED_MODULE_0__data_products_json___default.a,
      id: Number(this.data.productID),
      product: {}
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.product = this.Products.find(product => product.id === this.id);
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [{"id":100,"product":"Compressor A Syn PAO","type":"Compressor Oils","grade":"Supreme","viscosity":"32 - 68 cSt","benefits":["Excellent varnish and deposits control","Excellent thermal and oxidation stability","Excellent low volatility","High air release and foam stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/371P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/371P_ssic_ENG.pdf"},"nid":2975},{"id":101,"product":"Compressor A Syn POE","type":"Compressor Oils","grade":"Supreme","viscosity":"46 - 68 cSt","benefits":["Excellent varnish and deposits control","Excellent thermal and oxidation stability","Low volatility","Excellent rust & corrosion protection"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/368P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/368P_ssic_ENG.pdf"},"nid":2977},{"id":102,"product":"Compressor A Syn PAG","type":"Compressor Oils","grade":"Supreme","viscosity":"150 - 680 cSt","benefits":["Excellent varnish and deposits control","Excellent thermal and oxidation stability","Low volatility","Excellent rust & corrosion protection"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/375P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/375P_ssic_ENG.pdf"},"nid":3002},{"id":210,"product":"Compressor A M2","type":"Compressor Oils","grade":"Standard","viscosity":"32 - 100 cSt","benefits":["Very good varnish and deposit control","Very good thermal and oxidation stability","Very good rust & corrosion protection","Very good air release and foam stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/509P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/509P_ssic_ENG.pdf"},"nid":2982},{"id":211,"product":"Compressor A M4","type":"Compressor Oils","grade":"Premium","viscosity":"32 - 100 cSt","benefits":["High varnish and deposit control","High thermal and oxidation stability","High rust & corrosion protection","High air release and foam stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/425P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/425P_ssic_ENG.pdf"},"nid":2985},{"id":212,"product":"Jenteram","type":"Turbine Oils","grade":"Standard","viscosity":"32 - 100 cSt","benefits":["Very good anti-wear protection","Very good thermal and oxidation stability","Very good rust & corrosion protection","Very good air release and foam stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/427P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/427P_ssic_ENG.pdf"},"nid":2978},{"id":213,"product":"Jenteram G","type":"Turbine Oils","grade":"Premium","viscosity":"32 - 68 cSt","benefits":["High anti-wear protection","Excellent filterability","Excellent thermal and oxidation stability","Very good varnish control"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/423P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/423P_ssic_ENG.pdf"},"nid":2996},{"id":214,"product":"Jenteram Syn","type":"Turbine Oils","grade":"Supreme","viscosity":"32 - 68 cSt","benefits":["High anti-wear protection","Excellent filterability","Excellent thermal and oxidation stability","Very good varnish control"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/418P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/418P_ssic_ENG.pdf"},"nid":2974},{"id":215,"product":"Jenteram U","type":"Turbine Oils","grade":"Premium","viscosity":"32 - 68 cSt","benefits":["Very good water separability","High multi metal compatibility","High compatibility with most seal and elastomers"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/533P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/533P_ssic_ENG.pdf"},"nid":2987},{"id":241,"product":"Gear FL","type":"Gear Oils","grade":"Premium","viscosity":"150 - 320 cSt","benefits":["Excellent micro-pitting resistance","Excellent extreme pressure protection","Excellent anti-wear protection","Excellent thermal and oxidation stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/304P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/304P_ssic_ENG.pdf"},"nid":3001},{"id":242,"product":"Circula Mill","type":"Pulp & Paper","pid":1145,"grade":"Standard","viscosity":"460 cSt","benefits":["Excellent water separability","Very good oxidation stability","High rust & corrosion protection","Excellent foam stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/306P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/507P_ssic_ENG.pdf"},"nid":2998},{"id":243,"product":"Gear Syn FG","type":"Gear Oils","grade":"Supreme","viscosity":"150 - 680 cSt","benefits":["Very good rust & corrosion protection","Very good seal & paint compatibility","Very good multi metal compatibility"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/PETRONAS_Gear%20SYN%20Series_v2_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/351P_ssic_ENG.pdf"},"nid":2988},{"id":276,"product":"Gear Syn Series","type":"Gear Oils","grade":"Premium","viscosity":"150 - 680 cSt","benefits":["Very good rust & corrosion protection","Very good seal & paint compatibility","Very good multi metal compatibility"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/PETRONAS_Gear%20SYN%20Series_v2_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/351P_ssic_ENG.pdf"},"nid":2988},{"id":244,"product":"Circula","type":"Pulp & Paper","pid":1144,"grade":"Standard","viscosity":"150 - 460 cSt","benefits":["Very good anti-wear protection","High oxidation stability","Very good rust & corrosion protection","Very good water separability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/480P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/480P_ssic_ENG.pdf"},"nid":2967},{"id":245,"product":"Gear MEP","type":"Gear Oils","grade":"Premium","viscosity":"68 - 1000 cSt","benefits":["Excellent extreme pressure protection","Excellent anti-wear protection","Excellent thermal and oxidation stability","High resistance to sludging"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/PETRONAS_Gear%20MEP%20Series_v2.%2023%2005%202016_0.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/432P_ssic_ENG.pdf"},"nid":2968},{"id":246,"product":"Hydraulic ESF","type":"Hydraulic Oils","grade":"Supreme","viscosity":"46 - 68 cSt","benefits":["Excellent extreme pressure protection","Excellent anti-wear protection","Excellent thermal and oxidation stability","High resistance to sludging"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/PETRONAS_Hydraulic%20ESF%20Series_v2.%2023%2005%202016.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/581P_ssic_ENG.pdf"},"nid":2971},{"id":247,"product":"Hydraulic HV","type":"Hydraulic Oils","grade":"Premium","viscosity":"46 - 68 cSt","benefits":["Excellent extreme pressure protection","Excellent anti-wear protection","Excellent thermal and oxidation stability","High resistance to sludging"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/PETRONAS_Hydraulic%20HV%20Series_v2.%2023%2005%202016_1.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/413P_ssic_ENG.pdf"},"nid":2995},{"id":248,"product":"Hydraulic","type":"Hydraulic Oils","grade":"Standard","viscosity":"10 - 150 cSt","benefits":["Excellent extreme pressure protection","Excellent anti-wear protection","Excellent thermal and oxidation stability","High resistance to sludging"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/476P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/476P_ssic_ENG.pdf"},"nid":2991},{"id":249,"product":"Hydraulic ZF","type":"Hydraulic Oils","grade":"Premium","viscosity":"32 - 68 cSt","benefits":["Excellent extreme pressure protection","Excellent anti-wear protection","Excellent thermal and oxidation stability","High resistance to sludging"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/PETRONAS_Hydraulic%20ZF%20Series_v2.%2023%2005%202016_0.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/419P_ssic_ENG.pdf"},"nid":2979},{"id":250,"product":"Hydraulic HVZF","type":"Hydraulic Oils","grade":"Premium","viscosity":"46 - 68 cSt","benefits":["Excellent extreme pressure protection","Excellent anti-wear protection","Excellent thermal and oxidation stability","High resistance to sludging"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/PETRONAS_Hydraulic%20HVZF%20Series_v2.%2023%2005%202016.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/487P_ssic_ENG.pdf"},"nid":2973},{"id":251,"product":"Hydraulic HLPD","type":"Hydraulic Oils","grade":"Premium","viscosity":"32 - 68 cSt","benefits":["High water tolerance (up to 3%)","Low temperature protection","Excellent anti-wear protection","High thermal and oxidation stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/302P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/302P_ssic_ENG.pdf"},"nid":2980},{"id":252,"product":"Hydraulic FR","type":"Hydraulic Oils","grade":"Premium","viscosity":"42 - 68 cSt","benefits":["Excellent Fire resistance","High temperature applications","High anti-wear protection","High Viscosity Index"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/299P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/366P_ssic_ENG.pdf"},"nid":2976},{"id":253,"product":"Hydraulic HFC","type":"Hydraulic Oils","grade":"Standard","viscosity":"46 cSt","benefits":["Excellent Fire resistance","High temperature applications","High anti-wear protection","Very good thermal and oxidation stability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/366P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/366P_ssic_ENG.pdf"},"nid":2986},{"id":254,"product":"Hydraulic Syn Bio","type":"Hydraulic Oils","grade":"Supreme","viscosity":"32 - 46 cSt","benefits":["Very good rust & corrosion protection","Excellent air release and foam stability","Very good multi metal compatibility","Very good compatibility with most seal and elastomers"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/PETRONAS_Hydraulic%20SYN%20BYO%20Series_v2.%2016%2002%202018.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/366P_ssic_ENG.pdf"},"nid":2981},{"id":257,"product":"Gear PAG","type":"Gear Oils","grade":"Supreme","viscosity":"150 - 680 cSt","benefits":["Excellent anti-wear protection","Excellent thermal and oxidation stability","Excellent resistance to sludging","Very good rust & corrosion protection"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/356P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/356P_ssic_ENG.pdf"},"nid":2970},{"id":258,"product":"Circula Syn","type":"Pulp & Paper","pid":1148,"grade":"Supreme","viscosity":"150 - 680 cSt","benefits":["Excellent thermal and oxidation stability","Excellent anti-wear protection","Excellent resistance to sludging","Excellent water separability"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/345P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/345P_ssic_ENG.pdf"},"nid":2983},{"id":259,"product":"Gear Syn PAG","type":"Gear Oils","grade":"Supreme","viscosity":"150 - 680 cSt","benefits":["Excellent micro-pitting resistance","Low temperature protection","High viscosity index","Excellent extreme pressure protection"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/356P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/356P_ssic_ENG.pdf"},"nid":2970},{"id":260,"product":"Gear Syn PAO","type":"Gear Oils","grade":"Premium","viscosity":"150 - 680 cSt","benefits":["Excellent micro-pitting resistance","Low temperature protection","High viscosity index","Excellent extreme pressure protection"],"documentation":{"Product brochure":1,"Technical data sheet":"https://pli-portal.com/backend/system/files/ungrouped/428P_stecind_ENG.pdf","Safety data sheet":"https://pli-portal.com/backend/system/files/ungrouped/428P_ssic_ENG.pdf"},"nid":2997}]

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_products_json__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_products_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_products_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      Products: __WEBPACK_IMPORTED_MODULE_0__data_products_json___default.a,
      id: Number(this.$route.params.productID),
      product: {},
      headerClass: 'header top-container',
      formattedTitle: ''
    };
  },
  mounted() {
    this.getProduct();
    this.productClass();
    this.fromTitle();
  },
  methods: {
    getProduct() {
      this.product = this.Products.find(product => product.id === this.id);
    },
    productClass() {
      this.headerClass = this.product.grade.toLowerCase().trim() + ' header top-container';
    },
    brochureLink(doc, key, type, pid) {
      let filterName = 'Product Categories';
      let filterId = '1:field_product_categories:';
      let routeName = 'brochure-directory';
      let vid = 122;
      if (type === 'Pulp & Paper') {
        vid = 12;
        filterName = 'industry';
        filterId = '2:field_industry:';
        if (key === 'Technical data sheet' || key === 'Safety data sheet') {
          filterName = 'Product Name';
          filterId = '0:field_product_name:';
          vid = pid;
        }
      } else if (type === 'Compressor Oils') {
        vid = 123;
      } else if (type === 'Turbine Oils') {
        vid = 124;
      } else if (type === 'Gear Oils') {
        vid = 125;
      }
      if (key === 'Product brochure') {
        window.localStorage.removeItem('filter_1:field_product_categories:_/marketing-support/' + routeName);
        window.localStorage.removeItem('filter_2:field_industry:_/marketing-support/' + routeName);
      } else if (key === 'Technical data sheet') {
        routeName = 'technical-data-sheets';
        window.localStorage.removeItem('filter_1:field_product_categories:_/marketing-support/' + routeName);
        window.localStorage.removeItem('filter_0:field_product_name:_/marketing-support/' + routeName);
      } else {
        routeName = 'safety-data-sheets';
        window.localStorage.removeItem('filter_1:field_product_categories:_/marketing-support/' + routeName);
        window.localStorage.removeItem('filter_0:field_product_name:_/marketing-support/' + routeName);
      }
      const filterSet = 'filter_' + filterId + '_/marketing-support/' + routeName.replace('.', '/');
      const pageLink = {
        name: filterName,
        id: filterId,
        options: [{
          id: vid,
          name: type,
          selected: true
        }]
      };
      window.localStorage.setItem(filterSet, JSON.stringify(pageLink));
      this.$router.push({
        name: 'marketing-support.' + routeName
      });
    },
    fileIcon(key, type) {
      key = key.toLowerCase().trim().replace(/\s+/g, '-');
      type = type.toLowerCase().trim().replace(/\s+/g, '-');
      var image = '';
      if (key === 'product-brochure') {
        image = type;
      } else {
        image = key;
      }
      return '../app/plugins/vue-lube-recommender/assets/images/products/files/' + image + '-thumbnail.png';
    },
    goToRecommender() {
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
      });
    },
    goToRecommenderBeginning() {
      this.$router.push({
        name: 'lube_recommender_tools'
      });
    },
    fromTitle() {
      var newArray = this.$route.params.title.filter(element => element !== undefined);
      this.formattedTitle = newArray.join(' - ');
    }
  }
});

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(24);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  el: '#vue-frontend-app',
  router: _router2.default,
  render: function render(h) {
    return h(_App2.default);
  }
});

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(5);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_152fd186_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(23);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_152fd186_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-152fd186", Component.options)
  } else {
    hotAPI.reload("data-v-152fd186", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vue-frontend-app" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-152fd186", esExports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(4);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _LubeRecommenderTools = __webpack_require__(25);

var _LubeRecommenderTools2 = _interopRequireDefault(_LubeRecommenderTools);

var _LubeTree = __webpack_require__(31);

var _LubeTree2 = _interopRequireDefault(_LubeTree);

var _ProductPage = __webpack_require__(43);

var _ProductPage2 = _interopRequireDefault(_ProductPage);

var _gearOil = __webpack_require__(46);

var _gearOil2 = _interopRequireDefault(_gearOil);

var _airCompressor = __webpack_require__(47);

var _airCompressor2 = _interopRequireDefault(_airCompressor);

var _circulatingOil = __webpack_require__(48);

var _circulatingOil2 = _interopRequireDefault(_circulatingOil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'lube_recommender_tools',
    component: _LubeRecommenderTools2.default
  }, {
    path: '/lube-tools/gear-oil',
    name: 'gear_oil',
    component: _LubeTree2.default,
    meta: {
      title: 'Gear Oil',
      tool: _gearOil2.default
    }
  }, {
    path: '/lube-tools/gear-oil/air-compressor-oil',
    name: 'air_compressor_oil',
    component: _LubeTree2.default,
    meta: {
      title: 'Air Compressor Oil',
      tool: _airCompressor2.default
    }
  }, {
    path: '/lube-tools/circulating-oil',
    name: 'circulating_oil',
    component: _LubeTree2.default,
    meta: {
      title: 'Circulating Oil',
      tool: _circulatingOil2.default
    }
  }, {
    path: '/lube-tools/:productID',
    name: 'product',
    component: _ProductPage2.default,
    meta: {
      title: 'Product'
    }
  }]
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LubeRecommenderTools_vue__ = __webpack_require__(6);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4d0f35a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LubeRecommenderTools_vue__ = __webpack_require__(30);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LubeRecommenderTools_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4d0f35a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LubeRecommenderTools_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/LubeRecommenderTools.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b4d0f35a", Component.options)
  } else {
    hotAPI.reload("data-v-b4d0f35a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LubeRecommenderBlock_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aced3458_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LubeRecommenderBlock_vue__ = __webpack_require__(29);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LubeRecommenderBlock_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aced3458_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LubeRecommenderBlock_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/blocks/LubeRecommenderBlock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aced3458", Component.options)
  } else {
    hotAPI.reload("data-v-aced3458", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col gutter col-3" }, [
    _c(
      "div",
      { staticClass: "block lube-recommender-block" },
      [
        _c("router-link", { attrs: { to: { name: _vm.tile.route } } }, [
          _c("div", { staticClass: "inner" }, [
            _c("div", { staticClass: "image-block" }, [
              _c("img", { attrs: { src: _vm.tile.icon } })
            ]),
            _vm._v(" "),
            _c("h5", [
              _vm._v("\n          " + _vm._s(_vm.tile.title) + "\n        ")
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aced3458", esExports)
  }
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "lube-recommender-wrapper lube-recommender-overview tco-calculator-wrapper tco-overview"
    },
    [
      _c("div", { staticClass: "hero" }, [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c("div", { staticClass: "inner" }, [
          _c("div", { staticClass: "info" }, [
            _c("h1", [
              _vm._v(
                "\n          " +
                  _vm._s("Choose the right type of oil for your application") +
                  "\n        "
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n          " +
                  _vm._s("Select an option from below") +
                  "\n        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content-container" }, [
        _c(
          "div",
          { staticClass: "wrapper gutter blocks-wrapper" },
          _vm._l(_vm.tiles, function(tile, i) {
            return _c("lube-recommender-block", {
              key: i,
              attrs: { tile: tile }
            })
          })
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b4d0f35a", esExports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LubeTree_vue__ = __webpack_require__(8);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1abed47f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LubeTree_vue__ = __webpack_require__(42);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LubeTree_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1abed47f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LubeTree_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/LubeTree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1abed47f", Component.options)
  } else {
    hotAPI.reload("data-v-1abed47f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IconBlock_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7468880_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_IconBlock_vue__ = __webpack_require__(33);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IconBlock_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7468880_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_IconBlock_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/blocks/IconBlock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7468880", Component.options)
  } else {
    hotAPI.reload("data-v-b7468880", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col col-4 gutter" }, [
    _c(
      "div",
      {
        staticClass: "block lube-recommender-block icons-block",
        on: {
          click: function($event) {
            _vm.click(_vm.data)
          }
        }
      },
      [
        _c("div", { staticClass: "index" }, [_vm._v(_vm._s(_vm.index))]),
        _vm._v(" "),
        _c("div", { staticClass: "inner" }, [
          _c("img", {
            attrs: { src: _vm.iconUrl(_vm.data.title), height: "60" }
          }),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.data.title))]),
          _vm._v(" "),
          _vm.data.subtitle
            ? _c("div", [_vm._v(_vm._s(_vm.data.subtitle))])
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b7468880", esExports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PlainBlock_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04d88ce7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlainBlock_vue__ = __webpack_require__(35);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PlainBlock_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04d88ce7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlainBlock_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/blocks/PlainBlock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04d88ce7", Component.options)
  } else {
    hotAPI.reload("data-v-04d88ce7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col col-4 gutter" }, [
    _c(
      "div",
      {
        staticClass: "block lube-recommender-block plain-block",
        on: {
          click: function($event) {
            _vm.click(_vm.data)
          }
        }
      },
      [
        _c("div", { staticClass: "index" }, [_vm._v(_vm._s(_vm.data.id))]),
        _vm._v(" "),
        _c("div", { staticClass: "inner" }, [
          _c("div", [_vm._v(_vm._s(_vm.data.title))]),
          _vm._v(" "),
          _vm.data.subtitle
            ? _c("div", [_vm._v(_vm._s(_vm.data.subtitle))])
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04d88ce7", esExports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TempBlock_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9baa6a76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TempBlock_vue__ = __webpack_require__(37);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TempBlock_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9baa6a76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TempBlock_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/blocks/TempBlock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9baa6a76", Component.options)
  } else {
    hotAPI.reload("data-v-9baa6a76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      attrs: { value: _vm.index },
      on: {
        click: function($event) {
          _vm.click(_vm.index)
        }
      }
    },
    [
      _vm.metric
        ? _c("div", [_vm._v(_vm._s(_vm.data.c))])
        : _c("div", [_vm._v(_vm._s(_vm.data.f))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9baa6a76", esExports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MultiBlock_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_923e0350_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MultiBlock_vue__ = __webpack_require__(39);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MultiBlock_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_923e0350_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MultiBlock_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/blocks/MultiBlock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-923e0350", Component.options)
  } else {
    hotAPI.reload("data-v-923e0350", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col col-4 gutter" }, [
    _c(
      "div",
      {
        staticClass: "block lube-recommender-block plain-block",
        class: _vm.classSelected,
        on: { click: _vm.toggle }
      },
      [
        _c("div", { staticClass: "index", class: _vm.classSelected }, [
          _vm._v(_vm._s(_vm.indexToAlphabet(_vm.index)))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "inner" }, [
          _c("div", [_vm._v(_vm._s(_vm.data.title))]),
          _vm._v(" "),
          _vm.data.subtitle
            ? _c("div", [_vm._v(_vm._s(_vm.data.subtitle))])
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-923e0350", esExports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProductBlock_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69196f3c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProductBlock_vue__ = __webpack_require__(41);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProductBlock_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69196f3c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProductBlock_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/blocks/ProductBlock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69196f3c", Component.options)
  } else {
    hotAPI.reload("data-v-69196f3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col col-4 gutter" }, [
    _c(
      "div",
      {
        staticClass: "block lube-recommender-block plain-block",
        on: {
          click: function($event) {
            _vm.click(_vm.data)
          }
        }
      },
      [
        _c("div", { staticClass: "index" }, [_vm._v(_vm._s(_vm.index))]),
        _vm._v(" "),
        _c("div", { staticClass: "inner" }, [
          _c("div", [_vm._v(_vm._s(_vm.product.product))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.product.viscosity))])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69196f3c", esExports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "lube-recommender-tool-wrapper",
      style: {
        "background-image":
          "url(../app/plugins/vue-lube-recommender/assets/images/bg/login-bg.svg)"
      }
    },
    [
      _c("div", { staticClass: "flex-wrapper" }, [
        _c("div", { staticClass: "white-bg" }, [
          _c("div", { staticClass: "top-wrapper" }, [
            _c(
              "div",
              { staticClass: "col" },
              [
                _vm.routeId.length > 0
                  ? _c(
                      "a",
                      {
                        staticClass: "back",
                        on: {
                          click: function($event) {
                            _vm.goBackwards(_vm.routeId)
                          }
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "icon icon-arrow middle back-arrow"
                        }),
                        _vm._v("\n              Back\n            ")
                      ]
                    )
                  : _c(
                      "router-link",
                      {
                        staticClass: "back",
                        attrs: { to: { name: "lube_recommender_tools" } }
                      },
                      [
                        _c("span", {
                          staticClass: "icon icon-arrow middle back-arrow"
                        }),
                        _vm._v("\n              Back\n            ")
                      ]
                    )
              ],
              1
            ),
            _vm._v(" "),
            _vm.type === "TempBlock"
              ? _c(
                  "div",
                  { staticClass: "col col-main text-center top-heading" },
                  [
                    _c("h4", [_vm._v(_vm._s(_vm.formattedTitle))]),
                    _vm._v(" "),
                    _c("h1", [
                      _vm._v("Select maximum oil temperature in operation")
                    ])
                  ]
                )
              : _vm.type === "ProductBlock"
                ? _c(
                    "div",
                    { staticClass: "col col-main text-center top-heading" },
                    [
                      _c("h4", [_vm._v(_vm._s(_vm.formattedTitle))]),
                      _vm._v(" "),
                      _c("h1", [
                        _vm._v(
                          "Based on your selections the below PETRONAS Compressor Oils meet your requirements, select one to learn more"
                        )
                      ])
                    ]
                  )
                : _c(
                    "div",
                    { staticClass: "col col-main text-center top-heading" },
                    [
                      _c("h4", [_vm._v(_vm._s(_vm.formattedTitle))]),
                      _vm._v(" "),
                      _c("h1", [_vm._v(_vm._s(_vm.question))])
                    ]
                  ),
            _vm._v(" "),
            _vm.level > 0
              ? _c("div", { staticClass: "col text-right" }, [
                  _c("div", { staticClass: "progress" }, [
                    _vm._v(_vm._s(this.level) + " "),
                    _c("div", { staticClass: "progress-bar" }, [
                      _c("div", {
                        staticClass: "progress",
                        style: { width: _vm.percent }
                      })
                    ]),
                    _vm._v(" " + _vm._s(this.levels))
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "clearfix" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex-top-container" },
            [
              _vm.type === "TempBlock"
                ? _c("div", { staticClass: "temp-box flex-container" }, [
                    _c("div", { staticClass: "temp-tool col col-3" }, [
                      _c("div", { staticClass: "temp-type temp-head" }, [
                        _vm._v(
                          _vm._s("Preferred unit of measurement") +
                            "\n                  "
                        ),
                        _c(
                          "div",
                          {
                            staticClass: "button-group right",
                            attrs: {
                              role: "group",
                              "aria-label": "Basic example"
                            }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "button small inline",
                                class: { white: !_vm.isMetric },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.isMetric = true
                                  }
                                }
                              },
                              [_vm._v("°C")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "button small inline",
                                class: { white: _vm.isMetric },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.isMetric = false
                                  }
                                }
                              },
                              [_vm._v("°F")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "clearfix" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "temp-head dropdown",
                          on: {
                            click: function($event) {
                              _vm.show = !_vm.show
                            }
                          }
                        },
                        [_vm._v(_vm._s("Oil temperatures in operation"))]
                      ),
                      _vm._v(" "),
                      _vm.show
                        ? _c(
                            "div",
                            { staticClass: "block plain-block temp-block" },
                            [
                              _c("div", { staticClass: "inner" }, [
                                _c(
                                  "ul",
                                  _vm._l(_vm.temperatures, function(
                                    temp,
                                    index
                                  ) {
                                    return _c(_vm.type, {
                                      key: index,
                                      tag: "component",
                                      attrs: {
                                        index: index,
                                        metric: _vm.isMetric,
                                        click: _vm.tempChoice,
                                        data: temp
                                      }
                                    })
                                  })
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "clearfix" })
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                : _vm.type === "MultiBlock"
                  ? [
                      _c(
                        "div",
                        { staticClass: "flex-container" },
                        _vm._l(_vm.multi.multiOptions, function(option, index) {
                          return _c(_vm.type, {
                            key: index,
                            tag: "component",
                            attrs: { index: index, data: option },
                            on: { selected: _vm.selectedBlock }
                          })
                        })
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex-container small-padding" },
                        [
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.multi.chosenOptions !== "000",
                                  expression: "multi.chosenOptions !== '000'"
                                }
                              ],
                              staticClass: "button greenline",
                              on: { click: _vm.multiButton }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.multi.choices.reduce(function(x, y) {
                                    return x + y
                                  }) +
                                    " of " +
                                    _vm.multi.arrayLength
                                ) + " selected - continue  "
                              ),
                              _c("span", {
                                staticClass: "icon icon-arrow middle back-arrow"
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  : _c(
                      "div",
                      { staticClass: "quiz-box flex-container" },
                      _vm._l(_vm.options, function(option, index) {
                        return _c(_vm.type, {
                          key: index,
                          tag: "component",
                          attrs: {
                            index: _vm.indexToAlphabet(index),
                            click: _vm.nextStep,
                            data: option
                          }
                        })
                      })
                    )
            ],
            2
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1abed47f", esExports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProductPage_vue__ = __webpack_require__(15);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_922fe60e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProductPage_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProductPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_922fe60e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProductPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/ProductPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-922fe60e", Component.options)
  } else {
    hotAPI.reload("data-v-922fe60e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "lube-recommender-tool-wrapper product-page",
      style: {
        "background-image":
          "url(../app/plugins/vue-lube-recommender/assets/images/bg/login-bg.svg)"
      }
    },
    [
      _c("div", { staticClass: "flex-wrapper" }, [
        _c("div", { staticClass: "white-bg" }, [
          _c("div", { staticClass: "top-wrapper" }, [
            _vm.$route.params.from
              ? _c("div", { staticClass: "col" }, [
                  _c(
                    "a",
                    { staticClass: "back", on: { click: _vm.goToRecommender } },
                    [
                      _c("span", {
                        staticClass: "icon icon-arrow middle back-arrow"
                      }),
                      _vm._v("\n            Back\n          ")
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$route.params.from
              ? _c(
                  "div",
                  { staticClass: "col col-main text-center top-heading" },
                  [
                    _c("h4", [_vm._v(_vm._s(_vm.formattedTitle))]),
                    _vm._v(" "),
                    _c("h1", [_vm._v("Your recommended")]),
                    _vm._v(" "),
                    _c("h1", [
                      _vm._v(
                        _vm._s(_vm.$route.params.from.meta.title + " is...")
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$route.params.from
              ? _c("div", { staticClass: "col text-right" }, [
                  _c(
                    "a",
                    {
                      staticClass: "back",
                      on: { click: _vm.goToRecommenderBeginning }
                    },
                    [
                      _vm._v(
                        "\n            Start a new selection\n            "
                      ),
                      _c("span", {
                        staticClass: "icon icon-arrow middle forward-arrow"
                      })
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "clearfix" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex-top-container" }, [
            _c("div", { staticClass: "flex-container" }, [
              _c("div", { staticClass: "col col-product" }, [
                _vm.product
                  ? _c("div", { staticClass: "block product-block" }, [
                      _c("div", { staticClass: "inner" }, [
                        _c("div", { class: _vm.headerClass }, [
                          _c("div", { staticClass: "petronas-header" }, [
                            _vm._v("PETRONAS")
                          ]),
                          _vm._v(" "),
                          _c("h1", [_vm._v(_vm._s(_vm.product.product))]),
                          _vm._v(" "),
                          _c("h5", [_vm._v(_vm._s(_vm.product.viscosity))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "bottom-container" }, [
                          _c("div", { staticClass: "col col-2" }, [
                            _c("div", { staticClass: "top-header" }, [
                              _vm._v("Benefits")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "tick-list" },
                              _vm._l(_vm.product.benefits, function(benefit) {
                                return _c("li", { key: benefit }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(benefit) +
                                      "\n                      "
                                  )
                                ])
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col col-2" }, [
                            _c("div", { staticClass: "top-header" }, [
                              _vm._v("Additional product documentation")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "document-list" },
                              _vm._l(_vm.product.documentation, function(
                                doc,
                                key
                              ) {
                                return _c("li", { key: key }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: { target: "_blank" },
                                      on: {
                                        click: function($event) {
                                          _vm.brochureLink(
                                            doc,
                                            key,
                                            _vm.product.type,
                                            _vm.product.pid
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("div", [
                                        _c("img", {
                                          staticClass: "icon",
                                          attrs: {
                                            src: _vm.fileIcon(
                                              key,
                                              _vm.product.type
                                            )
                                          }
                                        })
                                      ]),
                                      _c("div", [_vm._v(_vm._s(key))])
                                    ]
                                  )
                                ])
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "clearfix" })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "clearfix" })
                      ])
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center oem-manual" }, [
              _c("span", {
                staticClass: "bell-icon",
                style: {
                  "background-image":
                    "url(../app/plugins/vue-lube-recommender/assets/images/icons/lube-recommender/bell.svg)"
                }
              }),
              _vm._v(" Check with OEM manual for viscosity grade")
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-922fe60e", esExports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {"name":"Gear Oil","levels":5,"title":"Gear Oil Selector","question":"Which type of gear drives do you have?","type":"IconBlock","options":[{"id":"A","title":"Spur / Bevel"},{"id":"B","title":"Helical / Spiral Bevel"},{"id":"C","title":"Hypoid"},{"id":"D","title":"Worm"}],"steps":[{"ids":["A","B","C","D"],"question":"Do you require a food grade lubricant","type":"PlainBlock","options":[{"id":"A","subtitle":"Yes"},{"id":"B","subtitle":"No"}]},{"ids":["AB","BB","CB","DB"],"question":"Select maximum oil temperature in operation","type":"PlainBlock","options":[{"id":"A","title":"EP Gear Oils","subtitle":"- 15-82°C"},{"id":"B","title":"Synthetic Gear Oils","subtitle":" - 30-180°C"}]},{"ids":["ABA","ABB","BBA","BBB","CBA","CBB","DBA"],"question":"Select the gearbox load","type":"PlainBlock","options":[{"id":"A","subtitle":"Low"},{"id":"B","subtitle":"High"}]},{"ids":["DBB"],"question":"Select the gearbox load","type":"PlainBlock","options":[{"id":"A","subtitle":"Low"},{"id":"B","subtitle":"Very high"}]},{"ids":["BBAA"],"level":6,"question":"Do you require Flender Approval?","type":"PlainBlock","options":[{"id":"A","subtitle":"Yes"},{"id":"B","subtitle":"No"}]}],"routes":[{"steps":["DBBB","BBBB","CBBB"],"product":"Gear SYN PAG","productId":259},{"steps":["AA","BA","CA","DA"],"product":"Gear SYN FG","productId":243},{"steps":["ABAA"],"product":"Circula Series","productId":244},{"steps":["ABAB","ABBA"],"product":"Circula SYN","productId":258},{"steps":["CBAB","DBBA","CBBA","ABBB","DBAB","BBAB","BBBA"],"product":"Gear SYN PAO","productId":260},{"steps":["DBAA","BBAAB","CBAA"],"product":"Gear MEP","productId":245},{"steps":["BBAAA"],"product":"Gear FL","productId":241}]}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {"name":"Air Compressor Oil","levels":3,"title":"Air Compressor Oil Selector","question":"Which air compressor do you have?","type":"IconBlock","options":[{"id":"A","title":"Rotary Vane"},{"title":"Rotary Screw","id":"B"},{"title":"Piston","id":"C"},{"title":"Centrifugal","id":"D"}],"steps":[{"ids":["A","B"],"question":"Select your operating cycle","type":"PlainBlock","options":[{"title":"Up to 2,000 hours","id":"A"},{"title":"2,000 - 4,000 hours","id":"B"},{"title":"8,000 hours","id":"C"},{"title":"12,000 hours","id":"D"}]},{"ids":["C"],"question":"Select your operating cycle","type":"PlainBlock","options":[{"title":"Up to 2,000 hours","id":"A"},{"title":"2,000 - 4,000 hours","id":"B"},{"title":"8,000 hours","id":"C"}]},{"ids":["D"],"question":"Select your operating cycle","type":"PlainBlock","options":[{"title":"4,000 hours","id":"A"},{"title":"8,000 hours","id":"B"},{"title":"12,000 hours","id":"C"}]}],"routes":[{"steps":["AD","BD","DC"],"product":"Compressor SYN POE","productId":101},{"steps":["AC","BC","CC","DB"],"product":"Compressor SYN PAO","productId":100},{"steps":["AB","BB","CB","DAB"],"product":"Compressor A M4","productId":211},{"steps":["AA","BA","CA"],"product":"Compressor A M2","productId":210},{"steps":["DA"],"product":"Jenteram","productId":212}]}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {"name":"Circulating Oil","levels":4,"title":"Circulating Oil Selector","question":"Which type of circulating systems do you have?","type":"IconBlock","options":[{"id":"A","title":"Gear Box"},{"id":"B","title":"Anti-friction Bearing"},{"id":"C","title":"Plain Bearing"}],"steps":[{"ids":["A"],"question":"Select your most critical anti-wear property","type":"MultiBlock","multiOptions":[{"title":"EP performance"},{"title":"Micro Pitting Performance"},{"title":"High temperature","subtitle":"Over 60°C / 140°F"}],"options":[{"id":"A","selection":["100"]},{"id":"B","selection":["010","110"]},{"id":"C","selection":["001"]},{"id":"D","selection":["111","011","101"]}]},{"ids":["B","C"],"question":"Select your most critical anti-wear property","type":"MultiBlock","multiOptions":[{"title":"Anti Wear Performance"},{"title":"High Water Tolerance"},{"title":"High temperature","subtitle":"Over 60°C / 140°F"}],"options":[{"id":"A","selection":["100"]},{"id":"B","selection":["110","010"]},{"id":"C","selection":["111","001","011","101"]}]},{"ids":["AA","AB","BA","CA","CB","BB"],"question":"Select your maximum operating oil temperature","title":"High water tolerance","type":"TempBlock","options":[{"tempOptions":[0,1,2,3,4,5,6,7],"id":"T"}]}],"temperatures":[{"c":"below 40°C","f":"below 105°F"},{"c":"40°C - 50°C","f":"105°F - 122°F"},{"c":"50°C - 60°C","f":"122°F - 140°F"},{"c":"60°C - 70°C","f":"140°F - 158°F"},{"c":"70°C - 80°C","f":"158°F - 176°F"},{"c":"80°C - 90°C","f":"176°F - 194°F"},{"c":"90°C - 100°C","f":"194°F - 212°F"},{"c":"over 100°C","f":"over 212°F"}],"routes":[{"steps":["AAT"],"product":"Gear MEP","productId":245},{"steps":["BAT","CAT"],"product":"Circula","productId":244},{"steps":["ABT"],"product":"Gear FL","productId":241},{"steps":["BBT","CBT"],"product":"Circula Mill","productId":242},{"steps":["AC"],"product":"Gear Syn Series","productId":276},{"steps":["AD"],"product":"Gear PAG","productId":257},{"steps":["BC","CC"],"product":"Circula Syn","productId":258}]}

/***/ })
],[19]);