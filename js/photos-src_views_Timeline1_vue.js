"use strict";
(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_views_Timeline1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Gallery",
  mixins: [_mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"]],
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
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 1000, "&y=", 1000, "&a=0&v=").concat(this.item.injected.etag));
    },
    ariaUuid: function ariaUuid() {
      return "image-".concat(this.item.injected.fileid);
    },
    ariaLabel: function ariaLabel() {
      return t("photos", 'Open the full size "{name}" image', {
        name: this.item.injected.basename
      });
    },
    isImage: function isImage() {
      return this.item.injected.mime.startsWith("image");
    },
    height: function height() {
      return this.item.injected.height;
    },
    width: function width() {
      return this.item.injected.width;
    },
    src: function src() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 1000, "&y=", 1000, "&a=1&v=").concat(this.item.injected.etag));
    }
  },
  mounted: function mounted() {// window.addEventListener("resize", this.handleResize);
    // this.handleResize();
  },
  beforeDestroy: function beforeDestroy() {
    // cancel any pending load
    this.$refs.src = "";
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GalleryFile",
  mixins: [_mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__["default"]],
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
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)("dav/files/".concat((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid)) + this.item.injected.filename;
    },
    ariaUuid: function ariaUuid() {
      return "image-".concat(this.item.injected.fileid);
    },
    ariaLabel: function ariaLabel() {
      return t("photos", 'Open the full size "{name}" image', {
        name: this.item.injected.basename
      });
    },
    isImage: function isImage() {
      return this.item.injected.mime.startsWith("image");
    },
    src: function src() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 256, "&y=", 256, "&a=0&v=").concat(this.item.injected.etag));
    }
  },
  beforeDestroy: function beforeDestroy() {
    // cancel any pending load
    this.$refs.src = "";
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Separator",
  inheritAttrs: false,
  props: {
    items: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_PhotoSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/PhotoSearch */ "./src/services/PhotoSearch.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _components_EmptyContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EmptyContent */ "./src/components/EmptyContent.vue");
/* harmony import */ var _components_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/File */ "./src/components/File.vue");
/* harmony import */ var _components_GalleryFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GalleryFile */ "./src/components/GalleryFile.vue");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Gallery */ "./src/components/Gallery.vue");
/* harmony import */ var _components_Separator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Separator */ "./src/components/Separator.vue");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader.vue");
/* harmony import */ var _utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/CancelableRequest */ "./src/utils/CancelableRequest.js");
/* harmony import */ var _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/AllowedMimes */ "./src/services/AllowedMimes.js");
/* harmony import */ var _mixins_UserConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mixins/UserConfig */ "./src/mixins/UserConfig.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Timeline1",
  components: {
    EmptyContent: _components_EmptyContent__WEBPACK_IMPORTED_MODULE_4__["default"],
    Navigation: _components_Navigation__WEBPACK_IMPORTED_MODULE_9__["default"],
    Gallery: _components_Gallery__WEBPACK_IMPORTED_MODULE_7__["default"],
    Separator: _components_Separator__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  render: function render(h) {
    return h("span", "Name: ".concat(this.student.studentName, " RegNo: ").concat(this.student.studentRegNo, " Marcs: ").concat(this.student.cat1Marks));
  },
  mixins: [_mixins_UserConfig__WEBPACK_IMPORTED_MODULE_13__["default"]],
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
        return _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_12__.allMimes;
      }
    },
    rootTitle: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: ""
    }
  },
  data: function data() {
    return {
      count: 0,
      cancelRequest: null,
      done: false,
      error: null,
      page: 0,
      lastSection: "",
      loaderComponent: _components_Loader__WEBPACK_IMPORTED_MODULE_10__["default"]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_14__.mapGetters)(["files", "timeline"])), {}, {
    // list of loaded medias
    fileList: function fileList() {
      var _this = this;

      // return this.timeline
      //   .map((fileId) => this.files[fileId])
      //   .filter((file) => !!file);
      var newTimeline = _toConsumableArray(new Set(this.timeline));

      console.log("new timeline (filelist) : " + newTimeline);
      return newTimeline.map(function (fileId) {
        return _this.files[fileId];
      });
    },
    checkSpace: function checkSpace() {
      //check remaining space
      $('html, body').animate({
        scrollTop: jQuery('#content-vue').position().top - 40
      }, 'slow');
    },
    src: function src() {
      return "../../../remote.php/dav/files/".concat((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)().uid) + this.filename;
    },
    wrapperRatio: function wrapperRatio() {
      var wrapper = this.$refs.wrapper;
      return wrapper.clientHeight / wrapper.clientWidth;
    },
    // list of displayed content in the grid (titles + medias)
    contentList: function contentList() {
      var _this2 = this;

      //this.resetState();
      //const fieldArray = [];

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
      //console.log("content list"+ this.fileList);
      var finalData = this.fileList.flatMap(function (galleryFile, index) {
        var finalArray = [];

        var currentSection = _this2.getFormatedDate(galleryFile.lastmod, "YYYY MMMM");

        if (_this2.lastSection !== currentSection) {
          finalArray.push({
            id: "title-".concat(index),
            injected: {
              year: _this2.getFormatedDate(galleryFile.lastmod, "YYYY"),
              month: _this2.getFormatedDate(galleryFile.lastmod, "MMMM")
            },
            height: 90,
            width: 100,
            renderComponent: _components_Separator__WEBPACK_IMPORTED_MODULE_8__["default"]
          });
          _this2.lastSection = currentSection; // we keep track of the last section for the next batch
        }

        finalArray.push({
          id: "img-".concat(galleryFile.fileid),
          injected: _objectSpread(_objectSpread({}, galleryFile), {}, {
            //loadMore: this.getContent,
            canLoop: false
          }),
          renderComponent: _components_Gallery__WEBPACK_IMPORTED_MODULE_7__["default"]
        });
        return finalArray;
      });
      var tempArray = [];
      var tempArray1 = [];
      var tempArray2 = [];
      var j = -1;
      var k = 0;
      var max_height = 150;
      var leftContainer = document.getElementById("app-navigation-vue");
      var classExists = leftContainer.classList;
      var isAppNavigationHidden = classExists.contains('app-navigation--close');
      var comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
      var windowWidth = parseInt(comuptedStyle.getPropertyValue('width')); //

      if (windowWidth < 768) {
        max_height = 100;
      }

      if (windowWidth <= 1024 || classExists.contains('app-navigation--close')) {
        var originalMainWindow = windowWidth;
      } else {
        var originalMainWindow = windowWidth - leftContainer.offsetWidth - 30;
      }

      var gap = 2;
      var rowWidth = 0;
      var totalRowWidth = originalMainWindow;

      for (var i = 0; i < finalData.length; i++) {
        if (finalData[i].id.includes("title")) {
          if (j >= 0) {
            tempArray1[j] = tempArray;
            j = 0;
            tempArray = [];
            rowWidth = 0;
          }

          j++;
        } else {
          finalData[i].injected.width = this.aspectRatio(finalData[i].injected.height, finalData[i].injected.width, max_height, 0);

          if (finalData[i].injected.height > max_height) {
            finalData[i].injected.height = max_height;
          }

          rowWidth += finalData[i].injected.width + 4; // console.log(
          //   "file ID :" +
          //     finalData[i].id +
          //     "image resize  Width:" +
          //     finalData[i].injected.width +
          //     " image resize Height:" +
          //     finalData[i].injected.height
          // );

          if (rowWidth < totalRowWidth) {
            tempArray.push(finalData[i]);
          }

          if (rowWidth >= totalRowWidth) {
            // console.log("I am in adjustment");
            tempArray2 = this.adjustHeight(tempArray, max_height); //console.log(tempArray2);

            tempArray = [];
            tempArray.push(finalData[i]);
            rowWidth = finalData[i].injected.width;
            ;
          }
        }
      }

      return finalData;
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

                _context2.next = 3;
                return _this4.getContent();

              case 3:
                _this4.$emit("update:loading", false);

              case 4:
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
    this.getContent(); // this.resetState();
  },
  created: function created() {
    this.resetState(); //  console.log(JSON.stringify(this.files) + "files data");
    //   console.log(this.timeline+" timeline");

    this.getContent();
    $('html, body').animate({
      scrollTop: jQuery('#content-vue').position().top + 5
    }, 100);
  },
  mounted: function mounted() {
    window.addEventListener("resize", this.windowResize);
    this.$nextTick(function () {
      this.mimes = this.mimesType;
      window.addEventListener("scroll", this.onScroll);
    });
    window.addEventListener("click", this.checkClickSource);
  },
  beforeDestroy: function beforeDestroy() {
    // cancel any pending requests
    if (this.cancelRequest) {
      this.cancelRequest("Changed view");
    }

    this.resetState(); //window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    /** Return next batch of data depending on global offset
     *
     * @param {boolean} doReturn Returns a Promise with the list instead of a boolean
     * @return {Promise<boolean>} Returns a Promise with a boolean that stops infinite loading
     */
    checkClickSource: function checkClickSource(event) {
      var comuptedStyle = window.getComputedStyle(document.getElementById("content-vue"));
      var windowWidth = parseInt(comuptedStyle.getPropertyValue('width'));

      if (event.target.className === "app-navigation-toggle" && windowWidth > 1024) {
        this.windowResize();
      }
    },
    onScroll: function onScroll() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var wrapper, content;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                //
                wrapper = document.getElementById("app-content-vue");
                content = document.getElementsByClassName("main-container")[0];

                if (!(wrapper.scrollTop + wrapper.offsetHeight > content.offsetHeight)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return _this5.getContent();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    windowResize: function windowResize() {
      var leftContainer = document.getElementById("app-navigation-vue");
      var windowWidth = document.documentElement.clientWidth; //if (windowWidth < 1024) {

      this.resetState();
      this.getContent(); //}
    },
    randomIntFromInterval: function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    adjustHeight: function adjustHeight(fileArray, maxHeight) {
      var totalImageWidth = 0;
      var leftContainer = document.getElementById("app-navigation-vue");
      var classExists = leftContainer.classList;
      var comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
      var windowWidth = parseInt(comuptedStyle.getPropertyValue('width')); // document.getElementById("content-vue").clientWidth;// document.documentElement.clientWidth;

      for (var i = 0; i < fileArray.length; i++) {
        totalImageWidth += fileArray[i].injected.width;
      }

      var heightRatio = totalImageWidth / maxHeight;
      var newHieght; // mainWindow/HeightRatio;

      if (windowWidth <= 1024) {
        var mainWindow = windowWidth - fileArray.length * 4;
        newHieght = mainWindow / heightRatio;
        newHieght = newHieght - 3;
      } else if (windowWidth >= 1024 && classExists.contains('app-navigation--close')) {
        var mainWindow = windowWidth - fileArray.length * 4 - 30;
        newHieght = mainWindow / heightRatio;
        newHieght = newHieght - 1;
      } else {
        var mainWindow = windowWidth - leftContainer.offsetWidth - fileArray.length * 5 - 30;
        newHieght = mainWindow / heightRatio;
        newHieght = newHieght;
      }

      for (var i = 0; i < fileArray.length; i++) {
        fileArray[i].injected.width = this.aspectRatio(fileArray[i].injected.height, fileArray[i].injected.width, newHieght, 0);
        fileArray[i].injected.height = newHieght;
      }

      return fileArray;
    },
    adjustHeightWidth: function adjustHeightWidth(fileArray) {
      var leftContainer = document.getElementById("app-navigation-vue");
      var windowWidth = document.getElementById("content-vue").clientWidth;
      ; //document.documentElement.clientWidth;

      if (windowWidth < 1024) {
        var mainWindow = windowWidth - fileArray.length * 4 - 120;
      } else {
        var mainWindow = windowWidth - leftContainer.offsetWidth - fileArray.length * 4 - 120;
      }

      var gap = 2;
      var max_height = 150;
      var array_length = 0;
      array_length = fileArray.length; //  console.log("array length: " + array_length);

      var multiplyGap = 2 * array_length; //console.log("array multiplyGap: " + multiplyGap);

      mainWindow = mainWindow - multiplyGap; //console.log("array mainWindow: " + mainWindow);

      var height = 150; //this.randomIntFromInterval(150, 230);

      var maxWidth = Math.round(Math.ceil(mainWindow / array_length)); // console.log("maxWidth" + maxWidth);
      // console.log(" mainWindow:  " + mainWindow + " maxWidth" + maxWidth);

      for (var i = 0; i < fileArray.length; i++) {
        if (windowWidth > 768 && array_length == 1) {
          //console.log("FileName: " + fileArray[i].injected.filename);
          fileArray[i].injected.height = 150;
          fileArray[i].injected.width = fileArray[i].injected.width;
        } else {
          fileArray[i].injected.height = 150;
          fileArray[i].injected.width = maxWidth - 8;
        }
      }

      return fileArray;
    },
    aspectRatio: function aspectRatio(height, width, requiredHeight) {
      var repeat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var height1 = requiredHeight; //console.log("------" + Math.round(aspectRatio), height, width);

      return Math.round(width / height * height1);
    },
    aspectRatioHeight: function aspectRatioHeight(height, width, requiredwidth) {
      var repeat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var height1 = requiredwidth;
      var aspectRatio = height1 * (height / width); //console.log("------" + Math.round(aspectRatio), height, width);

      return Math.round(aspectRatio);
    },
    repeatAspectRatio: function repeatAspectRatio(remainingWidth, fileObjects, remainingWindow, originalWindow) {
      var repeat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      for (var i = 0; i < fileObjects.length; i++) {
        if (remainingWindow > 1 && remainingWindow < 50) {
          fileObjects[i].height = 185;
          fileObjects[i].width = this.aspectRatio(fileObjects[i].height - 10, fileObjects[i].width - 10, 175);
        } else if (remainingWindow > 51 && remainingWindow < 100) {
          fileObjects[i].height = 165;
          fileObjects[i].width = this.aspectRatio(fileObjects[i].height - 10, fileObjects[i].width - 10, 165);
        } else if (remainingWindow > 101 && remainingWindow < 151) {
          fileObjects[i].height = 155 - repeat * 10;
          fileObjects[i].width = this.aspectRatio(fileObjects[i].height - 10 - repeat * 10, fileObjects[i].width - 10 - repeat * 10, 155 - repeat * 10);
        }

        var sum = 0;

        for (var i = 0; i < fileObjects.length; i++) {
          sum += fileObjects[i].width;
        }

        if (sum > originalWindow) {
          repeat = repeat + 1;
          var mainWindow = sum - originalWindow; // fileObjects = this.repeatAspectRatio(
          //   mainWindow,
          //   fileObjects,
          //   mainWindow,
          //   originalWindow,
          //   repeat
          // );
        }
      }

      return fileObjects;
    },
    aspectRatioWidth: function aspectRatioWidth(remainingWidth, fileObjects, remainingWindow, originalWindow) {
      var repeat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      for (var i = 0; i < fileObjects.length; i++) {
        // console.log(
        //   " width : " +
        //     fileObjects[i].width +
        //     " remaining : " +
        //     remainingWindow +
        //     " original : " +
        //     originalWindow
        // );
        if (remainingWindow > 1 && remainingWindow < 50) {
          fileObjects[i].height = 185 - repeat;
          fileObjects[i].width = this.aspectRatio(200 - remainingWindow, fileObjects[i].width, 205 - remainingWindow);
        } else if (remainingWindow > 51 && remainingWindow < 100) {
          fileObjects[i].height = 190 - repeat;
          fileObjects[i].width = this.aspectRatio(200 - repeat, fileObjects[i].width, 210 - repeat);
        } else if (remainingWindow > 101 && remainingWindow < 200) {
          fileObjects[i].height = 170 - repeat;
          fileObjects[i].width = this.aspectRatio(200 - repeat, fileObjects[i].width, 240 - repeat);
        } else if (remainingWindow < -1 && remainingWindow > -50) {
          fileObjects[i].height = 185 - remainingWindow;
          fileObjects[i].width = this.aspectRatio(200, fileObjects[i].width, 190 - remainingWindow);
        } else if (remainingWindow > -51 && remainingWindow < -100) {
          fileObjects[i].height = 190;
          fileObjects[i].width = this.aspectRatio(200, fileObjects[i].width, 190);
        } else if (remainingWindow < -101 && remainingWindow > -200) {
          fileObjects[i].height = 170;
          fileObjects[i].width = this.aspectRatio(200, fileObjects[i].width, 165);
        } // console.log("=====================");

      }

      var sum = 0;

      for (var i = 0; i < fileObjects.length; i++) {
        sum += fileObjects[i].width;
      } // console.log("sum " + sum);


      if (sum > originalWindow) {
        repeat += 1;
        var mainWindow = sum - originalWindow; //console.log("inner : " + mainWindow + " repeat" + repeat);
        // fileObjects = this.repeatAspectRatio(
        //   mainWindow,
        //   fileObjects,
        //   mainWindow,
        //   originalWindow,
        //   repeat
        // );
      }

      return fileObjects;
    },
    processData: function processData(files) {
      var obj = Object;
      var obj1 = Object;
      var arr = [];
      var arr1 = [];
      var j = 0;
      var k = 0;
      var calculatedWidth = 0;
      var leftContainer = document.getElementById("app-navigation-vue");
      var windowWidth = document.documentElement.clientWidth;
      var mainWindow = windowWidth - leftContainer.offsetWidth - 12;
      var originalMainWindow = windowWidth - leftContainer.offsetWidth - 12;

      for (var i = 0; i < files.length; i++) {
        files[i].width = this.aspectRatio(files[i].height, files[i].width, 150, 0);
        mainWindow = mainWindow - files[i].width;
        arr[j] = files[i];
        j++; // if (mainWindow < 10) {
        //   arr = this.aspectRatioWidth(
        //     mainWindow,
        //     arr,
        //     mainWindow,
        //     originalMainWindow,
        //     0
        //   );
        //   //console.log(arr);
        //   arr1.push(arr);
        //   arr = [];
        //   mainWindow = windowWidth - leftContainer.offsetWidth;
        //   k = k++;
        //   j = 0;
        // } else if (mainWindow > 10 && mainWindow < 100) {
        //   arr = this.aspectRatioWidth(
        //     mainWindow,
        //     arr,
        //     mainWindow,
        //     originalMainWindow,
        //     0
        //   );
        //   //console.log(arr);
        //   arr1.push(arr);
        //   arr = [];
        //   mainWindow = windowWidth - leftContainer.offsetWidth;
        //   k = k++;
        //   j = 0;
        // } else if (mainWindow > 100 && mainWindow < 200) {
        //   arr = this.aspectRatioWidth(
        //     mainWindow,
        //     arr,
        //     mainWindow,
        //     originalMainWindow,
        //     0
        //   );
        //   //console.log(arr);
        //   arr1.push(arr);
        //   arr = [];
        //   mainWindow = windowWidth - leftContainer.offsetWidth;
        //   k = k++;
        //   j = 0;
        // } else if (mainWindow > 201) {
        // }
      }

      obj1 = obj; //console.log(arr1);

      return arr1;
    },
    getImageHeight: function getImageHeight(src) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  var img = new Image();

                  img.onload = function () {
                    return resolve(img.height);
                  };

                  img.onerror = reject;
                  img.src = src;
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getImageWidth: function getImageWidth(src) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  var img = new Image();

                  img.onload = function () {
                    return resolve(img.width);
                  };

                  img.onerror = reject;
                  img.src = src;
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getContent: function getContent(doReturn) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var mimes, _cancelableRequest, request, cancel, numberOfImagesPerBatch, files, filesArray, i, y, z;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this6.$route.name == "gallerypotos") {
                  mimes = _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_12__.imageMimes;
                } else if (_this6.$route.name == "videogallery") {
                  mimes = _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_12__.videoMimes;
                } else {
                  mimes = _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_12__.allMimes;
                } //this.resetState();


                if (!_this6.done) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return", Promise.resolve(true));

              case 3:
                // cancel any pending requests
                if (_this6.cancelRequest) {
                  _this6.cancelRequest("Changed view");
                } // if we don't already have some cached data let's show a loader


                if (_this6.timeline.length === 0) {
                  _this6.$emit("update:loading", true);
                } // done loading even with errors


                _cancelableRequest = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_11__["default"])(_services_PhotoSearch__WEBPACK_IMPORTED_MODULE_1__["default"]), request = _cancelableRequest.request, cancel = _cancelableRequest.cancel;
                _this6.cancelRequest = cancel;
                numberOfImagesPerBatch = 12 * 5; // loading 5 rows

                _context6.prev = 8;
                _context6.next = 11;
                return request(_this6.onlyFavorites, {
                  page: _this6.page,
                  perPage: numberOfImagesPerBatch,
                  mimesType: mimes
                });

              case 11:
                files = _context6.sent;

                //console.log("FILES DATAA" + files);
                // If we get less files than requested that means we got to the end
                if (files.length !== numberOfImagesPerBatch) {
                  _this6.done = true;
                }

                filesArray = [];
                i = 0;

              case 15:
                if (!(i < files.length)) {
                  _context6.next = 27;
                  break;
                }

                _context6.next = 18;
                return _this6.getImageWidth("/index.php/core/preview?fileId=" + files[i].fileid + "&x=1000&y=1000&forceIcon=0&a=1");

              case 18:
                y = _context6.sent;
                files[i].width = y;
                _context6.next = 22;
                return _this6.getImageHeight("/index.php/core/preview?fileId=" + files[i].fileid + "&x=1000&y=1000&forceIcon=0&a=1");

              case 22:
                z = _context6.sent;
                files[i].height = z; //}

              case 24:
                i++;
                _context6.next = 15;
                break;

              case 27:
                //console.log(files.length);
                _this6.$store.dispatch("updateTimeline", files);

                _this6.$store.dispatch("appendFiles", files);

                _this6.page += 1;

                if (false) {}

                return _context6.abrupt("return", Promise.resolve(files));

              case 32:
                _context6.next = 39;
                break;

              case 34:
                _context6.prev = 34;
                _context6.t0 = _context6["catch"](8);

                if (_context6.t0.response && _context6.t0.response.status) {
                  if (_context6.t0.response.status === 404) {
                    _this6.error = 404;
                    setTimeout(function () {
                      _this6.$router.push({
                        name: _this6.$route.name
                      });
                    }, 3000);
                  } else {
                    _this6.error = _context6.t0;
                  }
                } // cancelled request, moving on...


                console.error("Error fetching timeline", _context6.t0);
                return _context6.abrupt("return", Promise.resolve(true));

              case 39:
                _context6.prev = 39;

                // done loading even with errors
                _this6.$emit("update:loading", false);

                _this6.cancelRequest = null;
                return _context6.finish(39);

              case 43:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[8, 34, 39, 43]]);
      }))();
    },

    /**
     * Reset this component data to a pristine state
     */
    resetState: function resetState() {
      this.$store.dispatch("resetTimeline");
      this.$store.dispatch("resetFiles"); // console.log(JSON.stringify(this.files) + "files data");
      // console.log(this.timeline+" timeline");

      this.done = false;
      this.error = null;
      this.page = 0;
      this.lastSection = "";
      this.widthData = 0;
      this.$emit("update:loading", true);
    },
    getFormatedDate: function getFormatedDate(string, format) {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0___default()(string).format(format);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.file[data-v-00137eee],\n.folder[data-v-00137eee] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n.file .cover[data-v-00137eee],\n.folder .cover[data-v-00137eee] {\n  z-index: 2;\n  width: 100%;\n  padding-bottom: 100%;\n  transition: opacity var(--animation-quick) ease-in-out;\n  opacity: 0;\n  background-color: var(--color-main-text);\n}\n.file.active .cover[data-v-00137eee], .file:active .cover[data-v-00137eee], .file:hover .cover[data-v-00137eee], .file:focus .cover[data-v-00137eee],\n.folder.active .cover[data-v-00137eee],\n.folder:active .cover[data-v-00137eee],\n.folder:hover .cover[data-v-00137eee],\n.folder:focus .cover[data-v-00137eee] {\n  opacity: 0.3;\n}\n.file--clear.active .cover[data-v-00137eee], .file--clear:active .cover[data-v-00137eee], .file--clear:hover .cover[data-v-00137eee], .file--clear:focus .cover[data-v-00137eee],\n.folder--clear.active .cover[data-v-00137eee],\n.folder--clear:active .cover[data-v-00137eee],\n.folder--clear:hover .cover[data-v-00137eee],\n.folder--clear:focus .cover[data-v-00137eee] {\n  opacity: 0.1;\n}\n.fade-enter-active[data-v-00137eee], .fade-leave-active[data-v-00137eee] {\n  transition: opacity var(--animation-quick) ease-in-out;\n}\n.fade-enter[data-v-00137eee], .fade-leave-to[data-v-00137eee] {\n  opacity: 0;\n}\n.transition-group[data-v-00137eee] {\n  display: contents;\n}\n.icon-video-white[data-v-00137eee] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 20;\n}\n.icon-video-white[data-v-00137eee] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  z-index: 20;\n}\nimg[data-v-00137eee] {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n  color: transparent;\n  object-fit: fill;\n}\n.file--cropped img[data-v-00137eee] {\n  object-fit: cover;\n}\n.file--gallery img[data-v-00137eee] {\n  width: 50%;\n  height: 50%;\n}\nsvg[data-v-00137eee] {\n  position: absolute;\n  width: 70%;\n  height: 70%;\n}\n.item[data-v-00137eee] {\n  position: relative;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".grid-title[data-v-55f43f36] {\n  grid-column: 1/4;\n  padding: 48px 0 12px 0;\n  margin: 0;\n}\n.grid-title span[data-v-55f43f36] {\n  font-weight: normal;\n  width: 100%;\n}\n.grid-title.first-title[data-v-55f43f36] {\n  padding: 0 0 12px 0;\n}\n.item[data-v-55f43f36]:focus-within {\n  width: 100% !important;\n  height: 90px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv[data-v-15c1b052] {\n  line-height: 0 !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv {\n  line-height: 0.01 !important;\n}\n@media  only screen and (max-width: 1236px ) {\n.content {\n    width: 100% !important;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-3f501974] {\n  margin :0;\n}\n.container[data-v-3f501974] {\n  width: auto;\n}\n.main-container[data-v-3f501974] {\n  display: flex;\n  justify-content: start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 0 4px;\n}\n.item[data-v-3f501974] {\n  width: auto;\n  margin: 2px;\n  position: relative;\n}\n.title-item[data-v-3f501974] {\n  height: 90px;\n  width: 100%;\n  margin: 4px;\n}\n.fullWidth[data-v-3f501974] {\n  width: 100%;\n  height: auto;\n}\n.footer-replace[data-v-3f501974]{\n  height: 64px;\n}\n.abc[data-v-3f501974] {\n  line-height: 0.25;\n}\n@media only screen and (max-width: 1024px) {\n.main-container[data-v-3f501974] {\n\n  padding: 0;\n}\n}\n  /* ----------- iPad Pro ----------- */\n/* Portrait and Landscape */\n@media only screen \n  and (min-width: 1024px) \n  and (max-height: 1366px) \n  and (-webkit-min-device-pixel-ratio: 1.5) {\n}\n\n/* Portrait */\n@media only screen \n  and (min-width: 1024px) \n  and (max-height: 1366px) \n  and (orientation: portrait) \n  and (-webkit-min-device-pixel-ratio: 1.5) {\n}\n\n/* Landscape */\n@media only screen \n  and (min-width: 1024px) \n  and (max-height: 1366px) \n  and (orientation: landscape) \n  and (-webkit-min-device-pixel-ratio: 1.5) {\n}\n.icon-video-white[data-v-3f501974] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 20;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_1_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_1_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_1_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Gallery.vue":
/*!************************************!*\
  !*** ./src/components/Gallery.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gallery_vue_vue_type_template_id_15c1b052_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=15c1b052&scoped=true& */ "./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./src/components/Gallery.vue?vue&type=script&lang=js&");
/* harmony import */ var _Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& */ "./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_15c1b052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Gallery_vue_vue_type_template_id_15c1b052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "15c1b052",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Gallery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/GalleryFile.vue":
/*!****************************************!*\
  !*** ./src/components/GalleryFile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GalleryFile_vue_vue_type_template_id_00137eee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryFile.vue?vue&type=template&id=00137eee&scoped=true& */ "./src/components/GalleryFile.vue?vue&type=template&id=00137eee&scoped=true&");
/* harmony import */ var _GalleryFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryFile.vue?vue&type=script&lang=js& */ "./src/components/GalleryFile.vue?vue&type=script&lang=js&");
/* harmony import */ var _GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& */ "./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GalleryFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryFile_vue_vue_type_template_id_00137eee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GalleryFile_vue_vue_type_template_id_00137eee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00137eee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/GalleryFile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Separator.vue":
/*!**************************************!*\
  !*** ./src/components/Separator.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Separator_vue_vue_type_template_id_55f43f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Separator.vue?vue&type=template&id=55f43f36&scoped=true& */ "./src/components/Separator.vue?vue&type=template&id=55f43f36&scoped=true&");
/* harmony import */ var _Separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Separator.vue?vue&type=script&lang=js& */ "./src/components/Separator.vue?vue&type=script&lang=js&");
/* harmony import */ var _Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& */ "./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Separator_vue_vue_type_template_id_55f43f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Separator_vue_vue_type_template_id_55f43f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55f43f36",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Separator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/Timeline1.vue":
/*!*********************************!*\
  !*** ./src/views/Timeline1.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Timeline1_vue_vue_type_template_id_3f501974_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline1.vue?vue&type=template&id=3f501974&scoped=true& */ "./src/views/Timeline1.vue?vue&type=template&id=3f501974&scoped=true&");
/* harmony import */ var _Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline1.vue?vue&type=script&lang=js& */ "./src/views/Timeline1.vue?vue&type=script&lang=js&");
/* harmony import */ var _Timeline1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline1.vue?vue&type=style&index=0&lang=css& */ "./src/views/Timeline1.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Timeline1_vue_vue_type_style_index_1_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css& */ "./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timeline1_vue_vue_type_template_id_3f501974_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Timeline1_vue_vue_type_template_id_3f501974_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f501974",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Timeline1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Gallery.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/Gallery.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/GalleryFile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/GalleryFile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryFile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Separator.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/Separator.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Separator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Timeline1.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/views/Timeline1.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&");


/***/ }),

/***/ "./src/views/Timeline1.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************!*\
  !*** ./src/views/Timeline1.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_1_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=1&id=3f501974&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_15c1b052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_15c1b052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_15c1b052_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=template&id=15c1b052&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true&");


/***/ }),

/***/ "./src/components/GalleryFile.vue?vue&type=template&id=00137eee&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./src/components/GalleryFile.vue?vue&type=template&id=00137eee&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_template_id_00137eee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_template_id_00137eee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_template_id_00137eee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryFile.vue?vue&type=template&id=00137eee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=template&id=00137eee&scoped=true&");


/***/ }),

/***/ "./src/components/Separator.vue?vue&type=template&id=55f43f36&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/components/Separator.vue?vue&type=template&id=55f43f36&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_template_id_55f43f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_template_id_55f43f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_template_id_55f43f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Separator.vue?vue&type=template&id=55f43f36&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=template&id=55f43f36&scoped=true&");


/***/ }),

/***/ "./src/views/Timeline1.vue?vue&type=template&id=3f501974&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/views/Timeline1.vue?vue&type=template&id=3f501974&scoped=true& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_template_id_3f501974_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_template_id_3f501974_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_template_id_3f501974_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=template&id=3f501974&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=template&id=3f501974&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      class: {},
      attrs: { href: _vm.davPath, "aria-label": _vm.ariaLabel },
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.openViewer.apply(null, arguments)
        }
      }
    },
    [
      _vm.item.injected.mime.includes("video") && _vm.item.injected.hasPreview
        ? _c("div", { staticClass: "icon-video-white" })
        : _vm._e(),
      _vm._v(" "),
      _c("img", {
        ref: "myDiv",
        attrs: {
          id: _vm.ariaUuid,
          src: _vm.src,
          height: _vm.height,
          "max-width": _vm.width
        }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "hidden-visually", attrs: { id: _vm.ariaUuid } }, [
        _vm._v(_vm._s(_vm.item.injected.basename))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cover", attrs: { role: "none" } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=template&id=00137eee&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=template&id=00137eee&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        "file--gallery": _vm.galleryLayout
      },
      attrs: { href: _vm.davPath, "aria-label": _vm.ariaLabel },
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.openViewer.apply(null, arguments)
        }
      }
    },
    [
      _vm.item.injected.mime.includes("video") && _vm.item.injected.hasPreview
        ? _c("div", { staticClass: "icon-video-white" })
        : _vm._e(),
      _vm._v(" "),
      _c("img", { staticClass: "img", attrs: { src: _vm.src } }),
      _vm._v(" "),
      _c("p", { staticClass: "hidden-visually", attrs: { id: _vm.ariaUuid } }, [
        _vm._v(_vm._s(_vm.item.injected.basename))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cover", attrs: { role: "none" } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=template&id=55f43f36&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=template&id=55f43f36&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    {
      staticClass: "grid-title",
      style: { height: _vm.items.height + "px width:100% !important;" }
    },
    [
      _vm._v("\n  " + _vm._s(_vm.items.injected.month) + "\n  "),
      _c("span", [_vm._v(_vm._s(_vm.items.injected.year))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=template&id=3f501974&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=template&id=3f501974&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
          "\n  " + _vm._s(_vm.t("photos", "This folder does not exist")) + "\n"
        )
      ])
    : _vm.error
    ? _c("EmptyContent", [
        _vm._v("\n  " + _vm._s(_vm.t("photos", "An error occurred")) + "\n")
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
                  "\n    " +
                    _vm._s(_vm.t("photos", "No photos in here")) +
                    "\n  "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "main-container" },
            _vm._l(this.contentList, function(item) {
              return _c(
                "div",
                {
                  key: item.fileid,
                  staticClass: "item",
                  class: { fullWidth: item.id.includes("title") }
                },
                [
                  item.id.includes("title")
                    ? _c(
                        "div",
                        [_c("Separator", { attrs: { items: item } })],
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "abc" },
                        [_c("Gallery", { attrs: { item: item } })],
                        1
                      )
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "footer-replace" })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=photos-src_views_Timeline1_vue.js.map?v=0a1cfd57d58338610701