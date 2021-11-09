(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_views_Timeline1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/UserConfig */ "./src/mixins/UserConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__.default],
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      loaded: false,
      error: false
    };
  },

  computed: {
    davPath() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 1000, "&y=", 1000, "&a=0&v=").concat(this.item.injected.etag));
    },

    ariaUuid() {
      return "image-".concat(this.item.injected.fileid);
    },

    ariaLabel() {
      return t("photos", 'Open the full size "{name}" image', {
        name: this.item.injected.basename
      });
    },

    isImage() {
      return this.item.injected.mime.startsWith("image");
    },

    height() {
      return this.item.injected.height;
    },

    width() {
      return this.item.injected.width;
    },

    src() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 1000, "&y=", 1000, "&a=1&v=").concat(this.item.injected.etag));
    }

  },

  mounted() {// window.addEventListener("resize", this.handleResize);
    // this.handleResize();
  },

  beforeDestroy() {
    // cancel any pending load
    this.$refs.src = "";
  },

  methods: {
    openViewer() {
      OCA.Viewer.open({
        path: this.item.injected.filename,
        list: this.item.injected.list,
        loadMore: this.item.injected.loadMore ? async () => await this.item.injected.loadMore(true) : () => [],
        canLoop: this.item.injected.canLoop
      });
    },

    /** When the image is fully loaded by browser we remove the placeholder */
    onLoad() {
      this.loaded = true;
    },

    onError() {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/UserConfig */ "./src/mixins/UserConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_UserConfig__WEBPACK_IMPORTED_MODULE_2__.default],
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      loaded: false,
      error: false
    };
  },

  computed: {
    davPath() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)("dav/files/".concat((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid)) + this.item.injected.filename;
    },

    ariaUuid() {
      return "image-".concat(this.item.injected.fileid);
    },

    ariaLabel() {
      return t("photos", 'Open the full size "{name}" image', {
        name: this.item.injected.basename
      });
    },

    isImage() {
      return this.item.injected.mime.startsWith("image");
    },

    src() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 256, "&y=", 256, "&a=0&v=").concat(this.item.injected.etag));
    }

  },

  beforeDestroy() {
    // cancel any pending load
    this.$refs.src = "";
  },

  methods: {
    openViewer() {
      OCA.Viewer.open({
        path: this.item.injected.filename,
        list: this.item.injected.list,
        loadMore: this.item.injected.loadMore ? async () => await this.item.injected.loadMore(true) : () => [],
        canLoop: this.item.injected.canLoop
      });
    },

    /** When the image is fully loaded by browser we remove the placeholder */
    onLoad() {
      this.loaded = true;
    },

    onError() {
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

"use strict";
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
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    EmptyContent: _components_EmptyContent__WEBPACK_IMPORTED_MODULE_4__.default,
    Navigation: _components_Navigation__WEBPACK_IMPORTED_MODULE_9__.default,
    Gallery: _components_Gallery__WEBPACK_IMPORTED_MODULE_7__.default,
    Separator: _components_Separator__WEBPACK_IMPORTED_MODULE_8__.default
  },

  render(h) {
    return h("span", "Name: ".concat(this.student.studentName, " RegNo: ").concat(this.student.studentRegNo, " Marcs: ").concat(this.student.cat1Marks));
  },

  mixins: [_mixins_UserConfig__WEBPACK_IMPORTED_MODULE_13__.default],
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
      default: () => _services_AllowedMimes__WEBPACK_IMPORTED_MODULE_12__.allMimes
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

  data() {
    return {
      fileData: Object,
      count: 0,
      cancelRequest: null,
      done: false,
      error: null,
      page: 0,
      lastSection: "",
      fieldArray: [],
      widthData: 1,
      height: "",
      file1: Object,
      width_main: 0,
      loaderComponent: _components_Loader__WEBPACK_IMPORTED_MODULE_10__.default
    };
  },

  computed: { // global lists
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_14__.mapGetters)(["files", "timeline"]),

    // list of loaded medias
    fileList() {
      return this.timeline.map(fileId => this.files[fileId]).filter(file => !!file);
    },

    checkSpace() {//check remaining space
    },

    src() {
      return "../../../remote.php/dav/files/".concat((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)().uid) + this.filename;
    },

    wrapperRatio() {
      let wrapper = this.$refs.wrapper;
      return wrapper.clientHeight / wrapper.clientWidth;
    },

    // list of displayed content in the grid (titles + medias)
    contentList() {
      const fieldArray = [];
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

      var finalData = this.fileList.flatMap((galleryFile, index) => {
        const finalArray = [];
        const currentSection = this.getFormatedDate(galleryFile.lastmod, "YYYY MMMM");

        if (this.lastSection !== currentSection) {
          finalArray.push({
            id: "title-".concat(index),
            injected: {
              year: this.getFormatedDate(galleryFile.lastmod, "YYYY"),
              month: this.getFormatedDate(galleryFile.lastmod, "MMMM")
            },
            height: 90,
            width: 100,
            renderComponent: _components_Separator__WEBPACK_IMPORTED_MODULE_8__.default
          });
          this.lastSection = currentSection; // we keep track of the last section for the next batch
        }

        finalArray.push({
          id: "img-".concat(galleryFile.fileid),
          injected: { ...galleryFile,
            loadMore: this.getContent,
            canLoop: false
          },
          renderComponent: _components_Gallery__WEBPACK_IMPORTED_MODULE_7__.default
        });
        return finalArray;
      });
      var tempArray = [];
      var tempArray1 = [];
      var tempArray2 = [];
      var j = -1;
      var k = 0;
      debugger;
      var leftContainer = document.getElementById("app-navigation-vue");
      var windowWidth = document.documentElement.clientWidth;
      var originalMainWindow = windowWidth - leftContainer.offsetWidth;
      var gap = 2;
      var max_height = 200;
      var rowWidth = 0;
      var totalRowWidth = originalMainWindow;

      for (var i = 0; i < finalData.length; i++) {
        if (finalData[i].id.includes("title")) {
          if (j >= 0) {
            tempArray1[j] = tempArray;
            j = 0;
            tempArray = [];
          }

          j++;
        } else {
          finalData[i].injected.width = this.aspectRatio(finalData[i].injected.height, finalData[i].injected.width, 200, 0);

          if (finalData[i].injected.height > 200) {
            finalData[i].injected.height = max_height;
          }

          rowWidth += finalData[i].injected.width + 4;
          console.log("file ID :" + finalData[i].id + "image resize  Width:" + finalData[i].injected.width + " image resize Height:" + finalData[i].injected.height);

          if (rowWidth < totalRowWidth) {
            tempArray.push(finalData[i]);
          }

          if (rowWidth >= totalRowWidth) {
            console.log("I am in adjustment");
            tempArray2 = this.adjustHeight(tempArray);
            console.log(tempArray2);
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
    isEmpty() {
      return this.fileList.length === 0;
    }

  },
  watch: {
    async onlyFavorites() {
      // reset component
      this.resetState();
      this.getContent();
    },

    async mimesType() {
      // reset component
      this.resetState();
      this.getContent();
    }

  },

  beforeMount() {
    this.resetState();
    this.getContent(); //this.resetState();
  },

  created() {
    this.resetState(); //this.getContent();
  },

  mounted() {
    window.addEventListener("resize", this.windowResize);
    this.$nextTick(function () {
      window.addEventListener("scroll", this.onScroll); //  this.onScroll(); // needed for initial loading on page
    });
  },

  beforeDestroy() {
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
    // handleScroll(event) {
    //   // Any code to be executed when the window is scrolled
    //   this.getContent();
    // },
    windowResize() {
      var leftContainer = document.getElementById("app-navigation-vue");
      var windowWidth = document.documentElement.clientWidth;
      console.log("windowWidth");

      if (windowWidth < 760) {
        this.resetState();
        this.getContent();
      }
    },

    randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    adjustHeight(fileArray) {
      var totalImageWidth = 0;
      var leftContainer = document.getElementById("app-navigation-vue");
      var windowWidth = document.documentElement.clientWidth;
      var mainWindow = windowWidth - leftContainer.offsetWidth - fileArray.length * 5;
      debugger;

      for (var i = 0; i < fileArray.length; i++) {
        totalImageWidth += fileArray[i].injected.width;
      }

      var HeightRatio = totalImageWidth / 200;
      var NewHieght = mainWindow / HeightRatio;
      NewHieght = NewHieght - 4;

      for (var i = 0; i < fileArray.length; i++) {
        fileArray[i].injected.width = this.aspectRatio(fileArray[i].injected.height, fileArray[i].injected.width, NewHieght, 0);
        fileArray[i].injected.height = NewHieght;
      }

      console.log(totalImageWidth);
      return fileArray;
    },

    adjustHeightWidth(fileArray) {
      var leftContainer = document.getElementById("app-navigation-vue");
      var windowWidth = document.documentElement.clientWidth;

      if (windowWidth < 768) {
        var mainWindow = windowWidth - fileArray.length * 4;
      } else {
        var mainWindow = windowWidth - leftContainer.offsetWidth - fileArray.length * 4;
      }

      var gap = 2;
      var max_height = 200;
      var array_length = 0;
      array_length = fileArray.length;
      console.log("array length: " + array_length);
      var multiplyGap = 2 * array_length;
      console.log("array multiplyGap: " + multiplyGap);
      mainWindow = mainWindow - multiplyGap;
      console.log("array mainWindow: " + mainWindow);
      var height = 200; //this.randomIntFromInterval(150, 230);

      var maxWidth = Math.round(Math.ceil(mainWindow / array_length));
      console.log("maxWidth" + maxWidth);
      console.log(" mainWindow:  " + mainWindow + " maxWidth" + maxWidth);

      for (var i = 0; i < fileArray.length; i++) {
        if (windowWidth > 768 && array_length == 1) {
          console.log("FileName: " + fileArray[i].injected.filename);
          fileArray[i].injected.height = 200;
          fileArray[i].injected.width = fileArray[i].injected.width;
        } else {
          fileArray[i].injected.height = 200;
          fileArray[i].injected.width = maxWidth - 8;
        }
      }

      return fileArray;
    },

    aspectRatio: function (height, width, requiredHeight, repeat = 0) {
      var height1 = requiredHeight; //console.log("------" + Math.round(aspectRatio), height, width);

      return Math.round(width / height * height1);
    },
    aspectRatioHeight: function (height, width, requiredwidth, repeat = 0) {
      var height1 = requiredwidth;
      var aspectRatio = height1 * (height / width); //console.log("------" + Math.round(aspectRatio), height, width);

      return Math.round(aspectRatio);
    },
    repeatAspectRatio: function (remainingWidth, fileObjects, remainingWindow, originalWindow, repeat = 0) {
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
    aspectRatioWidth: function (remainingWidth, fileObjects, remainingWindow, originalWindow, repeat = 0) {
      for (var i = 0; i < fileObjects.length; i++) {
        console.log(" width : " + fileObjects[i].width + " remaining : " + remainingWindow + " original : " + originalWindow);

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
        }

        console.log("=====================");
      }

      var sum = 0;

      for (var i = 0; i < fileObjects.length; i++) {
        sum += fileObjects[i].width;
      }

      console.log("sum " + sum);

      if (sum > originalWindow) {
        repeat += 1;
        var mainWindow = sum - originalWindow;
        console.log("inner : " + mainWindow + " repeat" + repeat); // fileObjects = this.repeatAspectRatio(
        //   mainWindow,
        //   fileObjects,
        //   mainWindow,
        //   originalWindow,
        //   repeat
        // );
      }

      return fileObjects;
    },
    processData: function (files) {
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
        files[i].width = this.aspectRatio(files[i].height, files[i].width, 200, 0);
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

      obj1 = obj;
      console.log(arr1);
      return arr1;
    },

    async getImageHeight(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();

        img.onload = () => resolve(img.height);

        img.onerror = reject;
        img.src = src;
      });
    },

    async getImageWidth(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();

        img.onload = () => resolve(img.width);

        img.onerror = reject;
        img.src = src;
      });
    },

    async getContent(doReturn) {
      this.resetState();

      if (this.done) {
        return Promise.resolve(true);
      } // cancel any pending requests


      if (this.cancelRequest) {
        this.cancelRequest("Changed view");
      } // if we don't already have some cached data let's show a loader


      if (this.timeline.length === 0) {
        this.$emit("update:loading", true);
      } // done loading even with errors


      const {
        request,
        cancel
      } = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_11__.default)(_services_PhotoSearch__WEBPACK_IMPORTED_MODULE_1__.default);
      this.cancelRequest = cancel;
      const numberOfImagesPerBatch = 20 * 5; // loading 5 rows

      try {
        // Load next batch of images
        const files = await request(this.onlyFavorites, {
          page: this.page,
          perPage: numberOfImagesPerBatch,
          mimesType: this.mimesType
        });
        console.log(files.length); // If we get less files than requested that means we got to the end

        if (files.length !== numberOfImagesPerBatch) {
          this.done = true;
        }

        var filesArray = [];

        for (var i = 0; i < files.length; i++) {
          var y = await this.getImageWidth("/index.php/core/preview?fileId=" + files[i].fileid + "&x=1000&y=1000&forceIcon=0&a=1");
          files[i].width = y;
          var z = await this.getImageHeight("/index.php/core/preview?fileId=" + files[i].fileid + "&x=1000&y=1000&forceIcon=0&a=1");
          files[i].height = z;
        }

        console.log(files.length);
        this.$store.dispatch("updateTimeline", files);
        this.$store.dispatch("appendFiles", files);
        this.page += 1;

        if (true) {
          return Promise.resolve(files);
        }

        return Promise.resolve(false);
      } catch (error) {
        if (error.response && error.response.status) {
          if (error.response.status === 404) {
            this.error = 404;
            setTimeout(() => {
              this.$router.push({
                name: this.$route.name
              });
            }, 3000);
          } else {
            this.error = error;
          }
        } // cancelled request, moving on...


        console.error("Error fetching timeline", error);
        return Promise.resolve(true);
      } finally {
        // done loading even with errors
        this.$emit("update:loading", false);
        this.cancelRequest = null;
      }
    },

    /**
     * Reset this component data to a pristine state
     */
    resetState() {
      this.$store.dispatch("resetTimeline");
      this.done = false;
      this.error = null;
      this.page = 0;
      this.lastSection = "";
      this.widthData = 0;
      this.$emit("update:loading", true);
    },

    getFormatedDate(string, format) {
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.file[data-v-00137eee],\n.folder[data-v-00137eee] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n.file .cover[data-v-00137eee],\n.folder .cover[data-v-00137eee] {\n  z-index: 2;\n  width: 100%;\n  padding-bottom: 100%;\n  transition: opacity var(--animation-quick) ease-in-out;\n  opacity: 0;\n  background-color: var(--color-main-text);\n}\n.file.active .cover[data-v-00137eee], .file:active .cover[data-v-00137eee], .file:hover .cover[data-v-00137eee], .file:focus .cover[data-v-00137eee],\n.folder.active .cover[data-v-00137eee],\n.folder:active .cover[data-v-00137eee],\n.folder:hover .cover[data-v-00137eee],\n.folder:focus .cover[data-v-00137eee] {\n  opacity: 0.3;\n}\n.file--clear.active .cover[data-v-00137eee], .file--clear:active .cover[data-v-00137eee], .file--clear:hover .cover[data-v-00137eee], .file--clear:focus .cover[data-v-00137eee],\n.folder--clear.active .cover[data-v-00137eee],\n.folder--clear:active .cover[data-v-00137eee],\n.folder--clear:hover .cover[data-v-00137eee],\n.folder--clear:focus .cover[data-v-00137eee] {\n  opacity: 0.1;\n}\n.fade-enter-active[data-v-00137eee], .fade-leave-active[data-v-00137eee] {\n  transition: opacity var(--animation-quick) ease-in-out;\n}\n.fade-enter[data-v-00137eee], .fade-leave-to[data-v-00137eee] {\n  opacity: 0;\n}\n.transition-group[data-v-00137eee] {\n  display: contents;\n}\n.icon-video-white[data-v-00137eee] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 20;\n}\nimg[data-v-00137eee] {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n  color: transparent;\n  object-fit: fill;\n}\n.file--cropped img[data-v-00137eee] {\n  object-fit: cover;\n}\n.file--gallery img[data-v-00137eee] {\n  width: 50%;\n  height: 50%;\n}\nsvg[data-v-00137eee] {\n  position: absolute;\n  width: 70%;\n  height: 70%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".grid-title[data-v-55f43f36] {\n  grid-column: 1/4;\n  padding: 48px 0 12px 0;\n  margin: 0;\n}\n.grid-title span[data-v-55f43f36] {\n  font-weight: normal;\n  width: 100%;\n}\n.grid-title.first-title[data-v-55f43f36] {\n  padding: 0 0 12px 0;\n}\n.item[data-v-55f43f36]:focus-within {\n  width: 100% !important;\n  height: 90px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-3f501974] {\n  width: auto;\n}\n.main-container[data-v-3f501974] {\n  display: flex;\n  justify-content: start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 0 4px;\n}\n.item[data-v-3f501974] {\n  width: auto;\n  margin: 2px;\n}\n.title-item[data-v-3f501974] {\n  height: 90px;\n  width: 100%;\n  margin: 4px;\n}\n.fullWidth[data-v-3f501974] {\n  width: 100%;\n  height: auto;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Gallery.vue":
/*!************************************!*\
  !*** ./src/components/Gallery.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gallery_vue_vue_type_template_id_15c1b052_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=15c1b052&scoped=true& */ "./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./src/components/Gallery.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
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

"use strict";
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

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GalleryFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
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

"use strict";
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

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Timeline1_vue_vue_type_template_id_3f501974_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline1.vue?vue&type=template&id=3f501974&scoped=true& */ "./src/views/Timeline1.vue?vue&type=template&id=3f501974&scoped=true&");
/* harmony import */ var _Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline1.vue?vue&type=script&lang=js& */ "./src/views/Timeline1.vue?vue&type=script&lang=js&");
/* harmony import */ var _Timeline1_vue_vue_type_style_index_0_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css& */ "./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/GalleryFile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/GalleryFile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryFile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/Separator.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/Separator.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Separator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/views/Timeline1.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/views/Timeline1.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryFile_vue_vue_type_style_index_0_id_00137eee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GalleryFile.vue?vue&type=style&index=0&id=00137eee&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Separator_vue_vue_type_style_index_0_id_55f43f36_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Separator.vue?vue&type=style&index=0&id=55f43f36&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline1_vue_vue_type_style_index_0_id_3f501974_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline1.vue?vue&type=style&index=0&id=3f501974&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/Gallery.vue?vue&type=template&id=15c1b052&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
      class: {},
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
        "file--gallery": _vm.galleryLayout
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
                    : _c("div", [_c("Gallery", { attrs: { item: item } })], 1)
                ]
              )
            }),
            0
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
//# sourceMappingURL=photos-src_views_Timeline1_vue.js.map?v=7fa7d4f25c1cb13370b8