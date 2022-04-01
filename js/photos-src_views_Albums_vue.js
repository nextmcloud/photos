(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_views_Albums_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_AlbumContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/AlbumContent */ "./src/services/AlbumContent.js");
/* harmony import */ var _utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CancelableRequest */ "./src/utils/CancelableRequest.js");
/* harmony import */ var _FolderTagPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolderTagPreview */ "./src/components/FolderTagPreview.vue");
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Folder',
  components: {
    FolderTagPreview: _FolderTagPreview__WEBPACK_IMPORTED_MODULE_2__.default
  },
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      cancelRequest: null,
      previewFolder: this.item.injected.fileid
    };
  },

  computed: { // global lists
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['files', 'folders']),

    // files list of the current folder
    folderContent() {
      return this.folders[this.item.injected.fileid];
    },

    previewFiles() {
      const previewFolderContent = this.folders[this.previewFolder];
      const previewFiles = previewFolderContent ? previewFolderContent.map(id => this.files[id]).slice(0, 4) // only get the 4 first images
      : []; // If we didn't found any previews in the folder we try the next subfolder
      // We limit to one subfolder for performance concerns

      if (previewFiles.length === 0 && this.files[this.previewFolder].folders && this.previewFolder === this.item.injected.fileid) {
        const firstChildFolder = this.files[this.previewFolder].folders[0];
        this.updatePreviewFolder(firstChildFolder);

        if (!this.folders[this.previewFolder]) {
          this.getFolderData(this.files[this.previewFolder].filename);
        }
      }

      return previewFiles;
    }

  },

  async created() {
    if (!this.folderContent) {
      await this.getFolderData(this.item.injected.filename);
    }
  },

  beforeDestroy() {
    // cancel any pending requests
    if (this.cancelRequest) {
      this.cancelRequest('Navigated away');
    }
  },

  methods: {
    async getFolderData(filename) {
      // init cancellable request
      const {
        request,
        cancel
      } = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_1__.default)(_services_AlbumContent__WEBPACK_IMPORTED_MODULE_0__.default);
      this.cancelRequest = cancel;

      try {
        // get data
        const {
          folder,
          folders,
          files
        } = await request(filename, {
          shared: this.item.injected.showShared
        });
        this.$store.dispatch('updateFolders', {
          fileid: folder.fileid,
          files,
          folders
        });
        this.$store.dispatch('updateFiles', {
          folder,
          files,
          folders
        });
      } catch (error) {
        if (error.response && error.response.status) {
          console.error('Failed to get folder content', filename, error.response);
        } // else we just cancelled the request

      } finally {
        this.cancelRequest = null;
      }
    },

    updatePreviewFolder(path) {
      this.previewFolder = path;
    }

  }
});

/***/ }),

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
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 250, "&y=", 250, "&a=0&v=").concat(this.item.injected.etag));
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
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 250, "&y=", 250, "&a=1&v=").concat(this.item.injected.etag));
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_AlbumContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/AlbumContent */ "./src/services/AlbumContent.js");
/* harmony import */ var vue_virtual_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-virtual-grid */ "./node_modules/vue-virtual-grid/dist/virtual-grid.common.js");
/* harmony import */ var vue_virtual_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EmptyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EmptyContent */ "./src/components/EmptyContent.vue");
/* harmony import */ var _components_Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Folder */ "./src/components/Folder.vue");
/* harmony import */ var _components_File__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/File */ "./src/components/File.vue");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.vue");
/* harmony import */ var _mixins_GridConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/GridConfig */ "./src/mixins/GridConfig.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Gallery */ "./src/components/Gallery.vue");
/* harmony import */ var _utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/CancelableRequest */ "./src/utils/CancelableRequest.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Albums',
  components: {
    VirtualGrid: (vue_virtual_grid__WEBPACK_IMPORTED_MODULE_1___default()),
    EmptyContent: _components_EmptyContent__WEBPACK_IMPORTED_MODULE_2__.default,
    Navigation: _components_Navigation__WEBPACK_IMPORTED_MODULE_5__.default,
    Gallery: _components_Gallery__WEBPACK_IMPORTED_MODULE_7__.default
  },
  mixins: [_mixins_GridConfig__WEBPACK_IMPORTED_MODULE_6__.default],
  props: {
    rootTitle: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: '/'
    },
    loading: {
      type: Boolean,
      required: true
    },
    showShared: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      error: null,
      cancelRequest: () => {},
      isGalleryViewEnabled: localStorage.getItem('photos:galleryLayout') || 'false'
    };
  },

  computed: { // global lists
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['files', 'folders']),

    // current folder id from current path
    folderId() {
      return this.$store.getters.folderId(this.path);
    },

    // files list of the current folder
    folder() {
      return this.files[this.folderId];
    },

    folderContent() {
      return this.folders[this.folderId];
    },

    fileList() {
      const list = this.folderContent && this.folderContent.map(id => this.files[id]).filter(file => !!file);
      return list;
    },

    // subfolders of the current folder
    subFolders() {
      return this.folderId && this.files[this.folderId] && this.files[this.folderId].folders;
    },

    folderList() {
      const list = this.subFolders && this.subFolders.map(id => this.files[id]).filter(file => !!file);
      return list;
    },

    contentList() {
      var _this$folderList, _this$fileList;

      const folders = (_this$folderList = this.folderList) === null || _this$folderList === void 0 ? void 0 : _this$folderList.map(folder => {
        this.$emit("update:loading", true);
        return {
          id: "folder-".concat(folder.fileid),
          injected: { ...folder,
            showShared: this.showShared
          },
          width: 256,
          height: 256,
          columnSpan: 1,
          renderComponent: _components_Folder__WEBPACK_IMPORTED_MODULE_3__.default
        };
      });
      const files = (_this$fileList = this.fileList) === null || _this$fileList === void 0 ? void 0 : _this$fileList.map(file => {
        return {
          id: "file-".concat(file.fileid),
          injected: { ...file,
            list: this.fileList
          },
          width: 256,
          height: 256,
          columnSpan: 1,
          renderComponent: _components_File__WEBPACK_IMPORTED_MODULE_4__.default
        };
      });

      if (this.isGalleryViewEnabled == 'false') {
        this.$emit("update:loading", false); //return [...(folders || []), ...(files || [])]

        return {
          "folders": folders,
          "files": files
        };
      } else {
        return {
          "folders": folders,
          "files": this.processImages(files)
        };
      }
    },

    // is current folder empty?
    isEmpty() {
      return !this.haveFiles && !this.haveFolders;
    },

    haveFiles() {
      return !!this.fileList && this.fileList.length !== 0;
    },

    haveFolders() {
      return !!this.folderList && this.folderList.length !== 0;
    }

  },
  watch: {
    path() {
      this.fetchFolderContent();
    },

    showShared() {
      this.fetchFolderContent();
    }

  },

  async beforeMount() {
    this.fetchFolderContent();
  },

  mounted() {
    window.addEventListener("storage", event => {
      this.isGalleryViewEnabled = localStorage.getItem('photos:galleryLayout');
    });
  },

  beforeDestroy() {
    this.cancelRequest('Changed view');
  },

  methods: {
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

    async fetchFolderContent() {
      // cancel any pending requests
      this.cancelRequest('Changed folder'); // close any potential opened viewer & sidebar

      OCA.Viewer && OCA.Viewer.close && OCA.Viewer.close();
      OCA.Files && OCA.Files.Sidebar.close && OCA.Files.Sidebar.close(); // if we don't already have some cached data let's show a loader

      if (!this.files[this.folderId] || !this.folders[this.folderId]) {
        this.$emit('update:loading', true);
      }

      this.error = null; // init cancellable request

      const {
        request,
        cancel
      } = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__.default)(_services_AlbumContent__WEBPACK_IMPORTED_MODULE_0__.default);
      this.cancelRequest = cancel;

      try {
        // get content and current folder info
        const {
          folder,
          folders,
          files
        } = await request(this.path, {
          shared: this.showShared
        }); //  for (var i = 0; i < files.length; i++) {
        // 	var y = await this.getImageWidth(
        // 	"/index.php/core/preview?fileId=" +
        // 	files[i].fileid +
        // 	"&x=1000&y=1000&forceIcon=0&a=1"
        // 	);
        // 	files[i].width = y;
        // 	var z = await this.getImageHeight(
        // 		"/index.php/core/preview?fileId=" +
        // 		files[i].fileid +
        // 		"&x=1000&y=1000&forceIcon=0&a=1"
        // 	);
        // 	files[i].height = z;
        // }

        this.$store.dispatch('addPath', {
          path: this.path,
          fileid: folder.fileid
        });
        this.$store.dispatch('updateFolders', {
          fileid: folder.fileid,
          files,
          folders
        });
        this.$store.dispatch('updateFiles', {
          folder,
          files,
          folders
        });
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


        console.error('Error fetching album data', error);
      } finally {
        // done loading even with errors
        this.$emit('update:loading', false);
      }
    },

    processImages(finalData) {
      var tempArray = [];
      var tempArray2 = [];
      var j = -1;
      var k = 0;
      var max_height = 200;
      var leftContainer = document.getElementById("app-navigation-vue");
      var classExists = leftContainer.classList;
      const comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
      var windowWidth = document.getElementById("content-vue").offsetWidth; //  parseInt(comuptedStyle.getPropertyValue('width'));//

      if (windowWidth < 768) {
        max_height = 150;
      }

      if (windowWidth < 1025 || classExists.contains('app-navigation--close')) {
        var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width'));
      } else if (windowWidth >= 1025 && windowWidth < 1299) {
        var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth - 44;
      } else {
        var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth - 30 - 44;
      }

      var rowWidth = 0;
      var totalRowWidth = originalMainWindow;

      for (var i = 0; i < finalData.length; i++) {
        finalData[i].injected.width = this.aspectRatio(finalData[i].injected.height, finalData[i].injected.width, max_height, 0);

        if (finalData[i].injected.height > max_height) {
          finalData[i].injected.height = max_height;
        }

        rowWidth += finalData[i].injected.width + 4;

        if (rowWidth < totalRowWidth) {
          tempArray.push(finalData[i]);
        }

        if (rowWidth >= totalRowWidth) {
          tempArray2 = this.adjustHeight(tempArray, max_height);
          tempArray = [];
          tempArray.push(finalData[i]);
          rowWidth = finalData[i].injected.width;
          ;
        }
      }

      this.$emit("update:loading", false);
      return finalData;
    },

    adjustHeight(fileArray, maxHeight) {
      var totalImageWidth = 0;
      var leftContainer = document.getElementById("app-navigation-vue");
      var classExists = leftContainer.classList;
      const comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
      var windowWidth = document.getElementById("content-vue").offsetWidth; // document.getElementById("content-vue").clientWidth;// document.documentElement.clientWidth;

      for (var i = 0; i < fileArray.length; i++) {
        totalImageWidth += fileArray[i].injected.width;
      }

      var heightRatio = totalImageWidth / maxHeight;
      var newHieght; // mainWindow/HeightRatio;
      //debugger;

      if (windowWidth <= 1024) {
        var mainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - fileArray.length * 4;
        newHieght = mainWindow / heightRatio;
        newHieght = newHieght - 3;
      } else if (windowWidth >= 1025 && classExists.contains('app-navigation--close')) {
        var mainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - fileArray.length * 4 - 44;
        newHieght = mainWindow / heightRatio;
        newHieght = newHieght - 1;
      } else {
        var mainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth - fileArray.length * 5 - 44;
        newHieght = mainWindow / heightRatio;
        newHieght = newHieght;
      }

      for (var i = 0; i < fileArray.length; i++) {
        fileArray[i].injected.width = this.aspectRatio(fileArray[i].injected.height, fileArray[i].injected.width, newHieght, 0);
        fileArray[i].injected.height = newHieght;
      }

      return fileArray;
    },

    aspectRatio: function (height, width, requiredHeight, repeat = 0) {
      var height1 = requiredHeight;
      return Math.round(width / height * height1);
    }
  }
});

/***/ }),

/***/ "./src/services/AlbumContent.js":
/*!**************************************!*\
  !*** ./src/services/AlbumContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _utils_fileUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fileUtils */ "./src/utils/fileUtils.js");
/* harmony import */ var _AllowedMimes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllowedMimes */ "./src/services/AllowedMimes.js");
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




/**
 * List files from a folder and filter out unwanted mimes
 *
 * @param {String} path the path relative to the user root
 * @param {Object} [options] optional options for axios
 * @param {boolean} [shared] fetch shared albums ?
 * @returns {Array} the file list
 */

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(path = '/', options = {}) {
  const prefixPath = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("/apps/photos/api/v1/".concat(options.shared ? 'shared' : 'albums')); // fetch listing

  const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(prefixPath + (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_2__.encodeFilePath)(path), options);
  const list = response.data.map(data => (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_2__.genFileInfo)(data)); // filter all the files and folders

  let folder = {};
  const folders = [];
  const files = [];

  for (const entry of list) {
    // is this the current provided path ?
    if (entry.filename === path) {
      folder = entry;
    } else if (entry.type !== 'file') {
      folders.push(entry);
    } else if (_AllowedMimes__WEBPACK_IMPORTED_MODULE_3__.default.indexOf(entry.mime) > -1) {
      files.push(entry);
    }
  } // return current folder, subfolders and files


  return {
    folder,
    folders,
    files
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.file[data-v-8ab848c4],\n.folder[data-v-8ab848c4] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n.file .cover[data-v-8ab848c4],\n.folder .cover[data-v-8ab848c4] {\n  z-index: 2;\n  width: 100%;\n  padding-bottom: 100%;\n  transition: opacity var(--animation-quick) ease-in-out;\n  opacity: 0;\n  background-color: var(--color-main-text);\n}\n.file.active .cover[data-v-8ab848c4], .file:active .cover[data-v-8ab848c4], .file:hover .cover[data-v-8ab848c4], .file:focus .cover[data-v-8ab848c4],\n.folder.active .cover[data-v-8ab848c4],\n.folder:active .cover[data-v-8ab848c4],\n.folder:hover .cover[data-v-8ab848c4],\n.folder:focus .cover[data-v-8ab848c4] {\n  opacity: 0.3;\n}\n.file--clear.active .cover[data-v-8ab848c4], .file--clear:active .cover[data-v-8ab848c4], .file--clear:hover .cover[data-v-8ab848c4], .file--clear:focus .cover[data-v-8ab848c4],\n.folder--clear.active .cover[data-v-8ab848c4],\n.folder--clear:active .cover[data-v-8ab848c4],\n.folder--clear:hover .cover[data-v-8ab848c4],\n.folder--clear:focus .cover[data-v-8ab848c4] {\n  opacity: 0.1;\n}\n.fade-enter-active[data-v-8ab848c4], .fade-leave-active[data-v-8ab848c4] {\n  transition: opacity var(--animation-quick) ease-in-out;\n}\n.fade-enter[data-v-8ab848c4], .fade-leave-to[data-v-8ab848c4] {\n  opacity: 0;\n}\n.folder-content[data-v-8ab848c4] {\n  position: absolute;\n  display: grid;\n  width: 100%;\n  height: 100%;\n}\n.folder-content--grid-1[data-v-8ab848c4] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n.folder-content--grid-2[data-v-8ab848c4] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.folder-content--grid-3[data-v-8ab848c4] {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.folder-content--grid-3 img[data-v-8ab848c4]:first-child {\n  grid-column: span 2;\n}\n.folder-content--grid-4[data-v-8ab848c4] {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.folder-content img[data-v-8ab848c4] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.folder-name[data-v-8ab848c4] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  transition: opacity var(--animation-quick) ease-in-out;\n  opacity: 1;\n}\n.folder-name__icon[data-v-8ab848c4] {\n  height: 40%;\n  margin-top: calc(30% - 1rem / 2);\n  background-size: 40%;\n}\n.folder-name__name[data-v-8ab848c4] {\n  overflow: hidden;\n  height: 1rem;\n  padding: 0 10px;\n  text-align: center;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: var(--color-main-background);\n  text-shadow: 0 0 8px var(--color-main-text);\n  font-size: 1rem;\n  line-height: 1rem;\n}\n.folder--clear .folder-name__icon[data-v-8ab848c4] {\n  opacity: 0.3;\n}\n.folder--clear .folder-name__name[data-v-8ab848c4] {\n  color: var(--color-main-text);\n  text-shadow: 0 0 8px var(--color-main-background);\n}\n.folder:not(.folder--clear) .cover[data-v-8ab848c4] {\n  opacity: 0.3;\n}\n.folder:not(.folder--clear).active .folder-name[data-v-8ab848c4],\n.folder:not(.folder--clear).active .cover[data-v-8ab848c4], .folder:not(.folder--clear):active .folder-name[data-v-8ab848c4],\n.folder:not(.folder--clear):active .cover[data-v-8ab848c4], .folder:not(.folder--clear):hover .folder-name[data-v-8ab848c4],\n.folder:not(.folder--clear):hover .cover[data-v-8ab848c4], .folder:not(.folder--clear):focus .folder-name[data-v-8ab848c4],\n.folder:not(.folder--clear):focus .cover[data-v-8ab848c4] {\n  opacity: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@media (min-width: 0px) and (max-width: 640px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 8px 256px 8px;\n}\n}\n@media (min-width: 640px) and (max-width: 641px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 8px 256px 8px;\n}\n}\n@media (min-width: 641px) and (max-width: 1024px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1024px) and (max-width: 1025px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1300px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1300px) and (max-width: 1301px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1301px) and (max-width: 1600px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1600px) and (max-width: 1601px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 66px 256px 66px;\n}\n}\n@media (min-width: 1601px) {\n.grid-container[data-v-28345ec4] {\n    padding: 0px 88px 256px 88px;\n}\n}\n.spacing-between[data-v-28345ec4] {\n  height: 64px;\n}\n.main-container[data-v-28345ec4] {\n  display: flex;\n  justify-content: start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 0 4px;\n}\n.item[data-v-28345ec4] {\n  width: auto;\n  margin: 2px;\n  position: relative;\n}\n.title-item[data-v-28345ec4] {\n  height: 90px;\n  width: 100%;\n  margin: 4px;\n}\n.fullWidth[data-v-28345ec4] {\n  width: 100%;\n  height: auto;\n}\n.footer-replace[data-v-28345ec4] {\n  height: 70px;\n}\n.list-title[data-v-28345ec4] {\n  line-height: 50px !important;\n  font-weight: bold;\n  font-size: 24px;\n  padding: 0 6px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv[data-v-15c1b052] {\n  line-height: 0 !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_style_index_0_id_8ab848c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_style_index_0_id_8ab848c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_style_index_0_id_8ab848c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_28345ec4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_28345ec4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_28345ec4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Folder.vue":
/*!***********************************!*\
  !*** ./src/components/Folder.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Folder_vue_vue_type_template_id_8ab848c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Folder.vue?vue&type=template&id=8ab848c4&scoped=true& */ "./src/components/Folder.vue?vue&type=template&id=8ab848c4&scoped=true&");
/* harmony import */ var _Folder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Folder.vue?vue&type=script&lang=js& */ "./src/components/Folder.vue?vue&type=script&lang=js&");
/* harmony import */ var _Folder_vue_vue_type_style_index_0_id_8ab848c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true& */ "./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Folder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Folder_vue_vue_type_template_id_8ab848c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Folder_vue_vue_type_template_id_8ab848c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8ab848c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Folder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& */ "./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
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

/***/ "./src/views/Albums.vue":
/*!******************************!*\
  !*** ./src/views/Albums.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Albums_vue_vue_type_template_id_28345ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Albums.vue?vue&type=template&id=28345ec4&scoped=true& */ "./src/views/Albums.vue?vue&type=template&id=28345ec4&scoped=true&");
/* harmony import */ var _Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Albums.vue?vue&type=script&lang=js& */ "./src/views/Albums.vue?vue&type=script&lang=js&");
/* harmony import */ var _Albums_vue_vue_type_style_index_0_id_28345ec4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true& */ "./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Albums_vue_vue_type_template_id_28345ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Albums_vue_vue_type_template_id_28345ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "28345ec4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Albums.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Folder.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Folder.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Folder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./src/views/Albums.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/views/Albums.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_style_index_0_id_8ab848c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=style&index=0&id=8ab848c4&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_28345ec4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=style&index=0&id=28345ec4&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_15c1b052_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Gallery.vue?vue&type=style&index=0&id=15c1b052&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/Folder.vue?vue&type=template&id=8ab848c4&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/components/Folder.vue?vue&type=template&id=8ab848c4&scoped=true& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_template_id_8ab848c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_template_id_8ab848c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_template_id_8ab848c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Folder.vue?vue&type=template&id=8ab848c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=template&id=8ab848c4&scoped=true&");


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

/***/ "./src/views/Albums.vue?vue&type=template&id=28345ec4&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/views/Albums.vue?vue&type=template&id=28345ec4&scoped=true& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_template_id_28345ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_template_id_28345ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_template_id_28345ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=template&id=28345ec4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=template&id=28345ec4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=template&id=8ab848c4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Folder.vue?vue&type=template&id=8ab848c4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("FolderTagPreview", {
    attrs: {
      id: _vm.item.injected.fileid,
      name: _vm.item.injected.basename,
      path: _vm.item.injected.filename,
      "file-list": _vm.previewFiles
    }
  })
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=template&id=28345ec4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Albums.vue?vue&type=template&id=28345ec4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
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
          _vm.folder
            ? _c(
                "Navigation",
                _vm._b(
                  {
                    key: "navigation",
                    attrs: { "root-title": _vm.rootTitle, "show-actions": true }
                  },
                  "Navigation",
                  _vm.folder,
                  false
                )
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isEmpty
            ? _c(
                "EmptyContent",
                {
                  key: "emptycontent",
                  attrs: { "illustration-name": "empty" }
                },
                [
                  _vm._v(
                    "\n\t\t" +
                      _vm._s(_vm.t("photos", "No photos in here")) +
                      "\n\t"
                  )
                ]
              )
            : _c("div", { staticClass: "grid-container" }, [
                _vm.isGalleryViewEnabled == "false" || !_vm.isGalleryViewEnabled
                  ? _c(
                      "div",
                      [
                        _vm.contentList.folders.length
                          ? _c(
                              "div",
                              { staticClass: "folders" },
                              [
                                _c("div", { staticClass: "list-title" }, [
                                  _vm._v(_vm._s(_vm.t("photos", "Folders")))
                                ]),
                                _vm._v(" "),
                                _c("VirtualGrid", {
                                  ref: "virtualgrid",
                                  attrs: {
                                    items: _vm.contentList.folders,
                                    "get-column-count": function() {
                                      return _vm.gridConfig.count
                                    },
                                    "get-grid-gap": function() {
                                      return _vm.gridConfig.gap
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.contentList.folders.length
                          ? _c("div", { staticClass: "spacing-between" })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "list-title" }, [
                          _vm._v(_vm._s(_vm.t("photos", "Files")))
                        ]),
                        _vm._v(" "),
                        _c("VirtualGrid", {
                          ref: "virtualgrid",
                          attrs: {
                            items: _vm.contentList.files,
                            "get-column-count": function() {
                              return _vm.gridConfig.count
                            },
                            "get-grid-gap": function() {
                              return _vm.gridConfig.gap
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "footer-replace" })
                      ],
                      1
                    )
                  : _c("div", [
                      _vm.contentList.folders.length
                        ? _c(
                            "div",
                            { staticClass: "folders" },
                            [
                              _c("div", { staticClass: "list-title" }, [
                                _vm._v("Folders")
                              ]),
                              _vm._v(" "),
                              _c("VirtualGrid", {
                                ref: "virtualgrid",
                                attrs: {
                                  items: _vm.contentList.folders,
                                  "get-column-count": function() {
                                    return _vm.gridConfig.count
                                  },
                                  "get-grid-gap": function() {
                                    return _vm.gridConfig.gap
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.contentList.folders.length
                        ? _c("div", { staticClass: "spacing-between" })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "files" }, [
                        _c("div", { staticClass: "list-title" }, [
                          _vm._v("Files")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "main-container" },
                          _vm._l(_vm.contentList.files, function(item) {
                            return _c(
                              "div",
                              { key: item.fileid, staticClass: "item" },
                              [_c("Gallery", { attrs: { item: item } })],
                              1
                            )
                          }),
                          0
                        )
                      ])
                    ])
              ])
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=photos-src_views_Albums_vue.js.map?v=0e42c005715038c2cd79