(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_assets_grid-sizes_js-src_utils_CancelableRequest_js-src_components_EmptyContent_vue-src_c-6300f8"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EmptyContent',
  props: {
    illustrationName: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      illustration: ''
    };
  },
  computed: {
    /**
     * Does this component have an illustration
     *
     * @returns {boolean}
     */
    haveIllustration: function haveIllustration() {
      return this.illustrationName !== '';
    },

    /**
     * Is the illustration loaded
     *
     * @returns {boolean}
     */
    isLoaded: function isLoaded() {
      if (!this.haveIllustration) {
        return true;
      }

      return this.illustration !== '';
    },

    /**
     * The component is ready if the illustration
     * is done loading or if there is none
     *
     * @returns {boolean}
     */
    isReady: function isReady() {
      return !this.haveIllustration || this.haveIllustration && this.isLoaded;
    }
  },

  /**
   * Fetch the new illustration as soon as it changes
   */
  watch: {
    illustrationName: function illustrationName() {
      this.getIllustration();
    }
  },
  beforeMount: function beforeMount() {
    this.getIllustration();
  },
  methods: {
    /**
     * Fetch the illustration as webpack chunk
     */
    getIllustration: function getIllustration() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var illustration;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.illustration = '';

                if (!(_this.illustrationName !== '')) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return __webpack_require__("./src/assets/Illustrations lazy recursive !./node_modules/raw-loader/dist/cjs.js! ^\\.\\/.*\\.svg$")("./".concat(_this.illustrationName, ".svg"));

              case 5:
                illustration = _context.sent;
                _this.illustration = illustration.default;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.error('Could not get the error illustration', _context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/UserConfig */ "./src/mixins/UserConfig.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'File',
  mixins: [_mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__.default],
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      loaded: false,
      error: false
    };
  },
  computed: {
    davPath: function davPath() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)("dav/files") + this.item.injected.filename;
    },
    ariaUuid: function ariaUuid() {
      return "image-".concat(this.item.injected.fileid);
    },
    ariaLabel: function ariaLabel() {
      return t('photos', 'Open the full size "{name}" image', {
        name: this.item.injected.basename
      });
    },
    isImage: function isImage() {
      return this.item.injected.mime.startsWith('image');
    },
    src: function src() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 256, "&y=", 256, "&a=").concat(!this.croppedLayout, "&v=").concat(this.item.injected.etag));
    }
  },
  beforeDestroy: function beforeDestroy() {
    // cancel any pending load
    this.$refs.src = '';
  },
  methods: {
    openViewer: function openViewer() {
      var _this = this;

      OCA.Viewer.open({
        path: this.item.injected.filename,
        list: this.item.injected.list,
        loadMore: this.item.injected.loadMore ? /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.item.injected.loadMore(true);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })) : function () {
          return [];
        },
        canLoop: this.item.injected.canLoop
      });
    },

    /** When the image is fully loaded by browser we remove the placeholder */
    onLoad: function onLoad() {
      this.loaded = true;
    },
    onError: function onError() {
      this.error = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Navigation',
  components: {
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default()),
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default())
  },
  inheritAttrs: false,
  props: {
    basename: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      required: true
    },
    showActions: {
      type: Boolean,
      default: false
    },
    rootTitle: {
      type: String,
      default: t('photos', 'Photos')
    }
  },
  computed: {
    isRoot: function isRoot() {
      return this.filename === '/';
    },
    name: function name() {
      if (this.isRoot) {
        return this.rootTitle;
      }

      return this.basename;
    },
    parentPath: function parentPath() {
      var path = this.filename.split('/');
      path.pop();
      var parent = path.join('/');
      return this.isRoot || parent.trim() === '' ? '/' : path.join('/');
    },
    parentName: function parentName() {
      return this.parentPath && this.parentPath.split('/').pop();
    },
    backToText: function backToText() {
      if (this.parentPath === '/') {
        return t('photos', 'Back to {folder}', {
          folder: this.rootTitle
        });
      }

      return t('photos', 'Back to {folder}', {
        folder: this.parentName
      });
    },

    /**
     * We do not want encoded slashes when browsing by folder
     * so we generate a new valid route object, get the final url back
     * decode it and use it as a direct string, which vue-router
     * does not encode afterwards
     *
     * @returns {string|object}
     */
    to: function to() {
      // always remove first slash, the router
      // manage it automatically
      var regex = /^\/?(.*)/i;
      var path = regex.exec(this.parentPath)[1]; // apply to current route

      var _Object$assign = Object.assign({}, this.$route, {
        params: {
          path: path
        }
      }),
          name = _Object$assign.name,
          params = _Object$assign.params; // return the full object as we don't care about
      // an empty path if this is route


      if (path === '') {
        return {
          name: name
        };
      } // returning a string prevent vue-router to encode it again


      return decodeURIComponent(this.$router.resolve({
        name: name,
        params: params
      }).resolved.path);
    }
  },
  methods: {
    folderUp: function folderUp() {
      this.$router.push(this.to);
    },
    showSidebar: function showSidebar() {
      OCA.Files.Sidebar.open(this.filename);
    }
  }
});

/***/ }),

/***/ "./src/assets/grid-sizes.js":
/*!**********************************!*\
  !*** ./src/assets/grid-sizes.js ***!
  \**********************************/
/***/ ((module) => {

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
// for now we want to keep the same gap everywhere
var gap = 8;
/**
 * Define the max width proportions
 * The number (key) indicate the MAX size
 *
 * needs to be ompatible with webpack config
 * so no export default {}
 */

module.exports = {
  sizes: {
    410: {
      marginTop: 66,
      // same as grid-gap
      marginW: gap,
      // same as grid-gap
      count: 2,
      gap: gap
    },
    700: {
      marginTop: 66,
      marginW: 8,
      // same as grid-gap
      count: 3,
      gap: gap
    },
    1024: {
      marginTop: 66,
      marginW: 44,
      count: 4,
      gap: gap
    },
    1280: {
      marginTop: 66,
      marginW: 44,
      count: 5,
      gap: gap
    },
    1600: {
      marginTop: 88,
      marginW: 66,
      count: 6,
      gap: gap
    },
    max: {
      marginTop: 88,
      marginW: 88,
      count: 6,
      gap: gap
    }
  }
};

/***/ }),

/***/ "./src/utils/CancelableRequest.js":
/*!****************************************!*\
  !*** ./src/utils/CancelableRequest.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
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

/**
 * Create a cancel token
 * @returns {CancelTokenSource}
 */

var createCancelToken = function createCancelToken() {
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.CancelToken.source();
};
/**
 * Creates a cancelable axios 'request object'.
 *
 * @param {function} request the axios promise request
 * @returns {Object}
 */


var CancelableRequest = function CancelableRequest(request) {
  /**
   * Generate an axios cancel token
   */
  var cancelToken = createCancelToken();
  /**
   * Execute the request
   *
   * @param {string} url the url to send the request to
   * @param {Object} [options] optional config for the request
   */

  var fetch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, options) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", request(url, Object.assign({
                cancelToken: cancelToken.token
              }, options)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetch(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    request: fetch,
    cancel: cancelToken.cancel
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelableRequest);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".emptycontent {\n  grid-column: 1/-1;\n  margin-top: 20vh;\n}\n.illustration {\n  min-width: 200px;\n  max-width: 15%;\n  width: 300px;\n  margin: auto;\n  margin-bottom: 20px;\n  position: relative;\n}\n.illustration svg {\n  width: 100%;\n  height: 100%;\n  max-height: 40vh;\n}\n.illustration [fill*=\"6c63ff\"] {\n  fill: var(--color-primary-element);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.file[data-v-ab80f8a8],\n.folder[data-v-ab80f8a8] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n.file .cover[data-v-ab80f8a8],\n.folder .cover[data-v-ab80f8a8] {\n  z-index: 2;\n  width: 100%;\n  padding-bottom: 100%;\n  transition: opacity var(--animation-quick) ease-in-out;\n  opacity: 0;\n  background-color: var(--color-main-text);\n}\n.file.active .cover[data-v-ab80f8a8], .file:active .cover[data-v-ab80f8a8], .file:hover .cover[data-v-ab80f8a8], .file:focus .cover[data-v-ab80f8a8],\n.folder.active .cover[data-v-ab80f8a8],\n.folder:active .cover[data-v-ab80f8a8],\n.folder:hover .cover[data-v-ab80f8a8],\n.folder:focus .cover[data-v-ab80f8a8] {\n  opacity: 0.3;\n}\n.file--clear.active .cover[data-v-ab80f8a8], .file--clear:active .cover[data-v-ab80f8a8], .file--clear:hover .cover[data-v-ab80f8a8], .file--clear:focus .cover[data-v-ab80f8a8],\n.folder--clear.active .cover[data-v-ab80f8a8],\n.folder--clear:active .cover[data-v-ab80f8a8],\n.folder--clear:hover .cover[data-v-ab80f8a8],\n.folder--clear:focus .cover[data-v-ab80f8a8] {\n  opacity: 0.1;\n}\n.fade-enter-active[data-v-ab80f8a8], .fade-leave-active[data-v-ab80f8a8] {\n  transition: opacity var(--animation-quick) ease-in-out;\n}\n.fade-enter[data-v-ab80f8a8], .fade-leave-to[data-v-ab80f8a8] {\n  opacity: 0;\n}\n.transition-group[data-v-ab80f8a8] {\n  display: contents;\n}\n.icon-video-white[data-v-ab80f8a8] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 20;\n}\nimg[data-v-ab80f8a8] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  color: transparent;\n  object-fit: contain;\n}\n.file--cropped img[data-v-ab80f8a8] {\n  object-fit: cover;\n}\nsvg[data-v-ab80f8a8] {\n  position: absolute;\n  width: 70%;\n  height: 70%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.icon-confirm[data-v-81440b78] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.photos-navigation[data-v-81440b78] {\n  display: flex;\n  position: block;\n  height: 44px;\n  padding: 0 40px;\n  align-items: center;\n  max-width: 100%;\n}\n.photos-navigation__title[data-v-81440b78] {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.photos-navigation__share[data-v-81440b78] {\n  margin-left: 10px;\n}\n.photos-navigation__back[data-v-81440b78], .photos-navigation__share[data-v-81440b78] {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n@media (min-width: 0px) and (max-width: 410px) {\n.photos-navigation[data-v-81440b78] {\n    margin-top: -7.3333333333px;\n}\n.photos-navigation--root .photos-navigation__title[data-v-81440b78] {\n    padding-left: -36px;\n}\n}\n@media (min-width: 410px) and (max-width: 700px) {\n.photos-navigation[data-v-81440b78] {\n    margin-top: -7.3333333333px;\n}\n.photos-navigation--root .photos-navigation__title[data-v-81440b78] {\n    padding-left: -36px;\n}\n}\n@media (min-width: 700px) and (max-width: 1024px) {\n.photos-navigation[data-v-81440b78] {\n    margin-top: -7.3333333333px;\n}\n.photos-navigation__back[data-v-81440b78] {\n    margin: 0 0px;\n}\n.photos-navigation--root .photos-navigation__title[data-v-81440b78] {\n    padding-left: 0px;\n}\n}\n@media (min-width: 1024px) and (max-width: 1280px) {\n.photos-navigation[data-v-81440b78] {\n    margin-top: -7.3333333333px;\n}\n.photos-navigation__back[data-v-81440b78] {\n    margin: 0 0px;\n}\n.photos-navigation--root .photos-navigation__title[data-v-81440b78] {\n    padding-left: 0px;\n}\n}\n@media (min-width: 1280px) and (max-width: 1600px) {\n.photos-navigation[data-v-81440b78] {\n    margin-top: 0px;\n}\n.photos-navigation__back[data-v-81440b78] {\n    margin: 0 11px;\n}\n.photos-navigation--root .photos-navigation__title[data-v-81440b78] {\n    padding-left: 22px;\n}\n}\n@media (min-width: 1600px) {\n.photos-navigation[data-v-81440b78] {\n    margin-top: 0px;\n}\n.photos-navigation__back[data-v-81440b78] {\n    margin: 0 22px;\n}\n.photos-navigation--root .photos-navigation__title[data-v-81440b78] {\n    padding-left: 44px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_ab80f8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_ab80f8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_ab80f8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/EmptyContent.vue":
/*!*****************************************!*\
  !*** ./src/components/EmptyContent.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyContent.vue?vue&type=template&id=6c3ea49c& */ "./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&");
/* harmony import */ var _EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyContent.vue?vue&type=script&lang=js& */ "./src/components/EmptyContent.vue?vue&type=script&lang=js&");
/* harmony import */ var _EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyContent.vue?vue&type=style&index=0&lang=scss& */ "./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/EmptyContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/File.vue":
/*!*********************************!*\
  !*** ./src/components/File.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _File_vue_vue_type_template_id_ab80f8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=ab80f8a8&scoped=true& */ "./src/components/File.vue?vue&type=template&id=ab80f8a8&scoped=true&");
/* harmony import */ var _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File.vue?vue&type=script&lang=js& */ "./src/components/File.vue?vue&type=script&lang=js&");
/* harmony import */ var _File_vue_vue_type_style_index_0_id_ab80f8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true& */ "./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _File_vue_vue_type_template_id_ab80f8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _File_vue_vue_type_template_id_ab80f8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ab80f8a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/File.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Navigation.vue":
/*!***************************************!*\
  !*** ./src/components/Navigation.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=81440b78&scoped=true& */ "./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./src/components/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& */ "./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "81440b78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/EmptyContent.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/EmptyContent.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/File.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/File.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./File.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_ab80f8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=style&index=0&id=ab80f8a8&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&":
/*!************************************************************************!*\
  !*** ./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=template&id=6c3ea49c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&");


/***/ }),

/***/ "./src/components/File.vue?vue&type=template&id=ab80f8a8&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/components/File.vue?vue&type=template&id=ab80f8a8&scoped=true& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_ab80f8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_ab80f8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_ab80f8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./File.vue?vue&type=template&id=ab80f8a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=template&id=ab80f8a8&scoped=true&");


/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=81440b78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _vm.isReady
    ? _c("div", { staticClass: "emptycontent" }, [
        _vm.haveIllustration
          ? _c("div", {
              staticClass: "illustration",
              domProps: { innerHTML: _vm._s(_vm.illustration) }
            })
          : _c("div", { staticClass: "icon-error" }),
        _vm._v(" "),
        _c("h2", [_vm._t("default")], 2),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.$slots.desc,
                expression: "$slots.desc"
              }
            ]
          },
          [_vm._t("desc")],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=template&id=ab80f8a8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/File.vue?vue&type=template&id=ab80f8a8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "a",
    {
      staticClass: "file",
      class: {
        "file--cropped": _vm.croppedLayout
      },
      attrs: { href: _vm.davPath, "aria-label": _vm.ariaLabel },
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.openViewer($event)
        }
      }
    },
    [
      _vm.item.injected.mime.includes("video") && _vm.item.injected.hasPreview
        ? _c("div", { staticClass: "icon-video-white" })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "transition-group",
        { staticClass: "transition-group", attrs: { name: "fade" } },
        [
          !_vm.error
            ? _c("img", {
                key: _vm.item.injected.basename + "-img",
                ref: "img",
                attrs: {
                  src: _vm.src,
                  alt: _vm.item.injected.basename,
                  "aria-describedby": _vm.ariaUuid
                },
                on: { load: _vm.onLoad, error: _vm.onError }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.loaded || _vm.error
            ? _c(
                "svg",
                {
                  key: _vm.item.injected.basename + "-svg",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 32 32",
                    fill: "url(#placeholder__gradient)"
                  }
                },
                [
                  _vm.isImage
                    ? _c("use", {
                        attrs: { "xlink:href": "#placeholder--img" }
                      })
                    : _c("use", {
                        attrs: { "xlink:href": "#placeholder--video" }
                      })
                ]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "hidden-visually", attrs: { id: _vm.ariaUuid } }, [
        _vm._v(_vm._s(_vm.item.injected.basename))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cover", attrs: { role: "none" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "photos-navigation",
      class: { "photos-navigation--root": _vm.isRoot },
      attrs: { role: "toolbar" }
    },
    [
      !_vm.isRoot
        ? _c(
            "Actions",
            { staticClass: "photos-navigation__back" },
            [
              _c(
                "ActionButton",
                {
                  attrs: { icon: "icon-confirm" },
                  on: { click: _vm.folderUp }
                },
                [_vm._v("\n\t\t\t" + _vm._s(_vm.backToText) + "\n\t\t")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("h2", { staticClass: "photos-navigation__title" }, [
        _vm._v("\n\t\t" + _vm._s(_vm.name) + "\n\t")
      ]),
      _vm._v(" "),
      !_vm.isRoot && _vm.showActions
        ? _c(
            "Actions",
            { staticClass: "photos-navigation__share" },
            [
              _c(
                "ActionButton",
                {
                  attrs: { icon: "icon-shared" },
                  on: { click: _vm.showSidebar }
                },
                [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(_vm.t("photos", "Share this folder")) +
                      "\n\t\t"
                  )
                ]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/Illustrations lazy recursive !./node_modules/raw-loader/dist/cjs.js! ^\\.\\/.*\\.svg$":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/Illustrations/ lazy !./node_modules/raw-loader/dist/cjs.js! ^\.\/.*\.svg$ namespace object ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./empty.svg": [
		"./node_modules/raw-loader/dist/cjs.js!./src/assets/Illustrations/empty.svg",
		"node_modules_raw-loader_dist_cjs_js_src_assets_Illustrations_empty_svg"
	],
	"./folder.svg": [
		"./node_modules/raw-loader/dist/cjs.js!./src/assets/Illustrations/folder.svg",
		"node_modules_raw-loader_dist_cjs_js_src_assets_Illustrations_folder_svg"
	],
	"./images.svg": [
		"./node_modules/raw-loader/dist/cjs.js!./src/assets/Illustrations/images.svg",
		"node_modules_raw-loader_dist_cjs_js_src_assets_Illustrations_images_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/assets/Illustrations lazy recursive !./node_modules/raw-loader/dist/cjs.js! ^\\.\\/.*\\.svg$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=photos-src_assets_grid-sizes_js-src_utils_CancelableRequest_js-src_components_EmptyContent_vue-src_c-6300f8.js.map?v=04dca0bda90d1b0bf6e7