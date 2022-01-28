(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_views_Timeline_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SeparatorVirtualGrid',
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_PhotoSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/PhotoSearch */ "./src/services/PhotoSearch.js");
/* harmony import */ var _components_EmptyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EmptyContent */ "./src/components/EmptyContent.vue");
/* harmony import */ var _components_File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/File */ "./src/components/File.vue");
/* harmony import */ var _components_SeparatorVirtualGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SeparatorVirtualGrid */ "./src/components/SeparatorVirtualGrid.vue");
/* harmony import */ var vue_virtual_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-virtual-grid */ "./node_modules/vue-virtual-grid/dist/virtual-grid.common.js");
/* harmony import */ var vue_virtual_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader.vue");
/* harmony import */ var _utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/CancelableRequest */ "./src/utils/CancelableRequest.js");
/* harmony import */ var _mixins_GridConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/GridConfig */ "./src/mixins/GridConfig.js");
/* harmony import */ var _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/AllowedMimes */ "./src/services/AllowedMimes.js");
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Timeline',
  components: {
    EmptyContent: _components_EmptyContent__WEBPACK_IMPORTED_MODULE_2__.default,
    VirtualGrid: (vue_virtual_grid__WEBPACK_IMPORTED_MODULE_5___default()),
    Navigation: _components_Navigation__WEBPACK_IMPORTED_MODULE_6__.default
  },
  mixins: [_mixins_GridConfig__WEBPACK_IMPORTED_MODULE_9__.default],
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    onlyFavorites: {
      type: Boolean,
      default: false
    },
    mimesType: {
      type: Array,
      default: function _default() {
        return _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_10__.allMimes;
      }
    },
    rootTitle: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      cancelRequest: null,
      done: false,
      error: null,
      page: 0,
      lastSection: '',
      loaderComponent: _components_Loader__WEBPACK_IMPORTED_MODULE_7__.default
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_11__.mapGetters)(['files', 'timeline'])), {}, {
    // list of loaded medias
    fileList: function fileList() {
      var _this = this;

      return this.timeline.map(function (fileId) {
        return _this.files[fileId];
      });
    },
    // list of displayed content in the grid (titles + medias)
    contentList: function contentList() {
      var _this2 = this;

      /** The goal of this flat map is to return an array of images separated by titles (months)
       * ie: [{month1}, {image1}, {image2}, {month2}, {image3}, {image4}, {image5}]
       * First we get the current month+year of the image
       * We compare it to the previous image month+year
       * If there is a difference we have to insert a title object before the current image
       * If it's equal we just add the current image to the array
       * Note: the injected param of objects are used to pass custom params to the grid lib
       * In our case injected could be an image/video (aka file) or a title (year/month)
       * Note2: titles are rendered full width and images are rendered on 1 column and 256x256 ratio
       */
      return this.fileList.flatMap(function (file, index) {
        var finalArray = [];

        var currentSection = _this2.getFormatedDate(file.lastmod, 'YYYY MMMM');

        if (_this2.lastSection !== currentSection) {
          finalArray.push({
            id: "title-".concat(index),
            injected: {
              year: _this2.getFormatedDate(file.lastmod, 'YYYY'),
              month: _this2.getFormatedDate(file.lastmod, 'MMMM')
            },
            height: 90,
            columnSpan: 0,
            // means full width
            newRow: true,
            renderComponent: _components_SeparatorVirtualGrid__WEBPACK_IMPORTED_MODULE_4__.default
          });
          _this2.lastSection = currentSection; // we keep track of the last section for the next batch
        }

        finalArray.push({
          id: "img-".concat(file.fileid),
          injected: _objectSpread(_objectSpread({}, file), {}, {
            list: _this2.fileList,
            loadMore: _this2.getContent,
            canLoop: false
          }),
          width: 256,
          height: 256,
          columnSpan: 1,
          renderComponent: _components_File__WEBPACK_IMPORTED_MODULE_3__.default
        });
        return finalArray;
      });
    },
    // is current folder empty?
    isEmpty: function isEmpty() {
      return this.fileList.length === 0;
    }
  }),
  watch: {
    onlyFavorites: function onlyFavorites() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // reset component
                _this3.resetState();

                _this3.getContent();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    mimesType: function mimesType() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // reset component
                _this4.resetState();

                _this4.getContent();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    this.resetState();
    this.getContent();
  },
  beforeDestroy: function beforeDestroy() {
    // cancel any pending requests
    window.removeEventListener("click", this.checkClickSource);
    document.removeEventListener("scroll", this.onScroll);

    if (this.cancelRequest) {
      this.cancelRequest('Changed view');
    }

    this.resetState();
  },
  methods: {
    /** Return next batch of data depending on global offset
     * @param {boolean} doReturn Returns a Promise with the list instead of a boolean
     * @returns {Promise<boolean>} Returns a Promise with a boolean that stops infinite loading
     */
    getContent: function getContent(doReturn) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _cancelableRequest, request, cancel, numberOfImagesPerBatch, files;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this5.done) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", Promise.resolve(true));

              case 2:
                // cancel any pending requests
                if (_this5.cancelRequest) {
                  _this5.cancelRequest('Changed view');
                } // if we don't already have some cached data let's show a loader


                if (_this5.timeline.length === 0) {
                  _this5.$emit('update:loading', true);
                } // done loading even with errors


                _cancelableRequest = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__.default)(_services_PhotoSearch__WEBPACK_IMPORTED_MODULE_1__.default), request = _cancelableRequest.request, cancel = _cancelableRequest.cancel;
                _this5.cancelRequest = cancel;
                numberOfImagesPerBatch = _this5.gridConfig.count * 5; // loading 5 rows

                _context3.prev = 7;
                _context3.next = 10;
                return request(_this5.onlyFavorites, {
                  page: _this5.page,
                  perPage: numberOfImagesPerBatch,
                  mimesType: _this5.mimesType
                });

              case 10:
                files = _context3.sent;

                //debugger;
                // If we get less files than requested that means we got to the end
                if (files.length !== numberOfImagesPerBatch) {
                  _this5.done = true;
                }

                if (_this5.timeline.length <= _this5.page * numberOfImagesPerBatch) {
                  _this5.$store.dispatch('updateTimeline', files);

                  _this5.$store.dispatch('appendFiles', files);
                }

                _this5.page += 1;

                if (!doReturn) {
                  _context3.next = 16;
                  break;
                }

                return _context3.abrupt("return", Promise.resolve(files));

              case 16:
                return _context3.abrupt("return", Promise.resolve(false));

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](7);

                if (_context3.t0.response && _context3.t0.response.status) {
                  if (_context3.t0.response.status === 404) {
                    _this5.error = 404;
                    setTimeout(function () {
                      _this5.$router.push({
                        name: _this5.$route.name
                      });
                    }, 3000);
                  } else {
                    _this5.error = _context3.t0;
                  }
                } // cancelled request, moving on...


                _this5.$store.dispatch('resetTimeline');

                console.error('Error fetching timeline', _context3.t0);
                return _context3.abrupt("return", Promise.resolve(true));

              case 25:
                _context3.prev = 25;

                // done loading even with errors
                _this5.$emit('update:loading', false);

                _this5.cancelRequest = null;
                return _context3.finish(25);

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[7, 19, 25, 29]]);
      }))();
    },

    /**
     * Reset this component data to a pristine state
     */
    resetState: function resetState() {
      this.$store.dispatch('resetTimeline');
      this.done = false;
      this.error = null;
      this.page = 0;
      this.lastSection = '';
      this.$emit('update:loading', true); //this.$refs.virtualgrid.resetGrid()
    },
    getFormatedDate: function getFormatedDate(string, format) {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0___default()(string).format(format);
    }
  }
});

/***/ }),

/***/ "./src/mixins/GridConfig.js":
/*!**********************************!*\
  !*** ./src/mixins/GridConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_GridConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/GridConfig */ "./src/services/GridConfig.js");
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * Get the current used grid config
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      gridConfig: {}
    };
  },
  created: function created() {
    var _this = this;

    _services_GridConfig__WEBPACK_IMPORTED_MODULE_0__.default.$on('changed', function (val) {
      _this.gridConfig = val;
    });
    console.debug("[".concat("photos", "]"), 'Grid config', Object.assign({}, _services_GridConfig__WEBPACK_IMPORTED_MODULE_0__.default.gridConfig));
    this.gridConfig = _services_GridConfig__WEBPACK_IMPORTED_MODULE_0__.default.gridConfig;
  },
  beforeDestroy: function beforeDestroy() {
    _services_GridConfig__WEBPACK_IMPORTED_MODULE_0__.default.$off('changed', this.gridConfig);
  }
});

/***/ }),

/***/ "./src/services/GridConfig.js":
/*!************************************!*\
  !*** ./src/services/GridConfig.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _assets_grid_sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/grid-sizes */ "./src/assets/grid-sizes.js");
/* harmony import */ var _assets_grid_sizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_grid_sizes__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  data: function data() {
    return {
      gridConfig: _assets_grid_sizes__WEBPACK_IMPORTED_MODULE_0__.sizes.max
    };
  },
  watch: {
    gridConfig: function gridConfig(val) {
      this.$emit('changed', val);
    }
  },
  created: function created() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: {
    handleWindowResize: function handleWindowResize() {
      // find the first grid size that fit the current window width
      var currentSize = Object.keys(_assets_grid_sizes__WEBPACK_IMPORTED_MODULE_0__.sizes).find(function (size) {
        return size > document.documentElement.clientWidth;
      });
      this.gridConfig = _assets_grid_sizes__WEBPACK_IMPORTED_MODULE_0__.sizes[currentSize] || _assets_grid_sizes__WEBPACK_IMPORTED_MODULE_0__.sizes.max;
    }
  }
}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".grid-title[data-v-39804afc] {\n  grid-column: 1/8;\n  padding: 48px 0 12px 0;\n  margin: 0;\n}\n.grid-title span[data-v-39804afc] {\n  font-weight: normal;\n}\n.grid-title.first-title[data-v-39804afc] {\n  padding: 0 0 12px 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@media (min-width: 0px) and (max-width: 410px) {\n.grid-container[data-v-e945440a] {\n    padding: 0px 8px 256px 8px;\n}\n}\n@media (min-width: 410px) and (max-width: 700px) {\n.grid-container[data-v-e945440a] {\n    padding: 0px 8px 256px 8px;\n}\n}\n@media (min-width: 700px) and (max-width: 1024px) {\n.grid-container[data-v-e945440a] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1024px) and (max-width: 1320px) {\n.grid-container[data-v-e945440a] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1320px) and (max-width: 1600px) {\n.grid-container[data-v-e945440a] {\n    padding: 0px 66px 256px 66px;\n}\n}\n@media (min-width: 1600px) {\n.grid-container[data-v-e945440a] {\n    padding: 0px 88px 256px 88px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_style_index_0_id_39804afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_style_index_0_id_39804afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_style_index_0_id_39804afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/SeparatorVirtualGrid.vue":
/*!*************************************************!*\
  !*** ./src/components/SeparatorVirtualGrid.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SeparatorVirtualGrid_vue_vue_type_template_id_39804afc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true& */ "./src/components/SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true&");
/* harmony import */ var _SeparatorVirtualGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeparatorVirtualGrid.vue?vue&type=script&lang=js& */ "./src/components/SeparatorVirtualGrid.vue?vue&type=script&lang=js&");
/* harmony import */ var _SeparatorVirtualGrid_vue_vue_type_style_index_0_id_39804afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true& */ "./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SeparatorVirtualGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SeparatorVirtualGrid_vue_vue_type_template_id_39804afc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SeparatorVirtualGrid_vue_vue_type_template_id_39804afc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39804afc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SeparatorVirtualGrid.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/Timeline.vue":
/*!********************************!*\
  !*** ./src/views/Timeline.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=e945440a&scoped=true& */ "./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&");
/* harmony import */ var _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js& */ "./src/views/Timeline.vue?vue&type=script&lang=js&");
/* harmony import */ var _Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& */ "./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e945440a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Timeline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/SeparatorVirtualGrid.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/SeparatorVirtualGrid.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SeparatorVirtualGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_style_index_0_id_39804afc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=style&index=0&id=39804afc&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_template_id_39804afc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_template_id_39804afc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparatorVirtualGrid_vue_vue_type_template_id_39804afc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true&");


/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&":
/*!***************************************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=template&id=e945440a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SeparatorVirtualGrid.vue?vue&type=template&id=39804afc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "h2",
    { staticClass: "grid-title", style: { height: _vm.item.height + "px" } },
    [
      _vm._v("\n\t" + _vm._s(_vm.item.injected.month) + "\n\t"),
      _c("span", [_vm._v(_vm._s(_vm.item.injected.year))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.error === 404
    ? _c("EmptyContent", { attrs: { "illustration-name": "folder" } }, [
        _vm._v(
          "\n\t" + _vm._s(_vm.t("photos", "This folder does not exist")) + "\n"
        )
      ])
    : _vm.error
    ? _c("EmptyContent", [
        _vm._v("\n\t" + _vm._s(_vm.t("photos", "An error occurred")) + "\n")
      ])
    : !_vm.loading
    ? _c(
        "div",
        [
          _vm.isEmpty
            ? _c("Navigation", {
                key: "navigation",
                attrs: {
                  basename: _vm.path,
                  filename: "/",
                  "root-title": _vm.rootTitle
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.isEmpty
            ? _c("EmptyContent", { attrs: { "illustration-name": "empty" } }, [
                _vm._v(
                  "\n\t\t" +
                    _vm._s(_vm.t("photos", "No photos in here")) +
                    "\n\t"
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid-container" },
            [
              _c("VirtualGrid", {
                ref: "virtualgrid",
                attrs: {
                  items: _vm.contentList,
                  "update-function": _vm.getContent,
                  "get-column-count": function() {
                    return _vm.gridConfig.count
                  },
                  "get-grid-gap": function() {
                    return _vm.gridConfig.gap
                  },
                  "update-trigger-margin": 700,
                  loader: _vm.loaderComponent
                }
              })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=photos-src_views_Timeline_vue.js.map?v=95d3ae83438ec76813c4