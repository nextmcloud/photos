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
  data: function data() {
    return {
      cancelRequest: null,
      previewFolder: this.item.injected.fileid
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['files', 'folders'])), {}, {
    // files list of the current folder
    folderContent: function folderContent() {
      return this.folders[this.item.injected.fileid];
    },
    previewFiles: function previewFiles() {
      var _this = this;

      var previewFolderContent = this.folders[this.previewFolder];
      var previewFiles = previewFolderContent ? previewFolderContent.map(function (id) {
        return _this.files[id];
      }).slice(0, 4) // only get the 4 first images
      : []; // If we didn't found any previews in the folder we try the next subfolder
      // We limit to one subfolder for performance concerns

      if (previewFiles.length === 0 && this.files[this.previewFolder].folders && this.previewFolder === this.item.injected.fileid) {
        var firstChildFolder = this.files[this.previewFolder].folders[0];
        this.updatePreviewFolder(firstChildFolder);

        if (!this.folders[this.previewFolder]) {
          this.getFolderData(this.files[this.previewFolder].filename);
        }
      }

      return previewFiles;
    }
  }),
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this2.folderContent) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _this2.getFolderData(_this2.item.injected.filename);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    // cancel any pending requests
    if (this.cancelRequest) {
      this.cancelRequest('Navigated away');
    }
  },
  methods: {
    getFolderData: function getFolderData(filename) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _cancelableRequest, request, cancel, _yield$request, folder, folders, files;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // init cancellable request
                _cancelableRequest = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_1__.default)(_services_AlbumContent__WEBPACK_IMPORTED_MODULE_0__.default), request = _cancelableRequest.request, cancel = _cancelableRequest.cancel;
                _this3.cancelRequest = cancel;
                _context2.prev = 2;
                _context2.next = 5;
                return request(filename, {
                  shared: _this3.item.injected.showShared
                });

              case 5:
                _yield$request = _context2.sent;
                folder = _yield$request.folder;
                folders = _yield$request.folders;
                files = _yield$request.files;

                _this3.$store.dispatch('updateFolders', {
                  fileid: folder.fileid,
                  files: files,
                  folders: folders
                });

                _this3.$store.dispatch('updateFiles', {
                  folder: folder,
                  files: files,
                  folders: folders
                });

                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](2);

                if (_context2.t0.response && _context2.t0.response.status) {
                  console.error('Failed to get folder content', filename, _context2.t0.response);
                } // else we just cancelled the request


              case 16:
                _context2.prev = 16;
                _this3.cancelRequest = null;
                return _context2.finish(16);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 13, 16, 19]]);
      }))();
    },
    updatePreviewFolder: function updatePreviewFolder(path) {
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
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 250, "&y=", 250, "&a=0&v=").concat(this.item.injected.etag));
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
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid, "&x=", 250, "&y=", 250, "&a=1&v=").concat(this.item.injected.etag));
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      error: null,
      cancelRequest: function cancelRequest() {},
      isGalleryViewEnabled: localStorage.getItem('photos:galleryLayout') || 'false'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['files', 'folders'])), {}, {
    // current folder id from current path
    folderId: function folderId() {
      return this.$store.getters.folderId(this.path);
    },
    // files list of the current folder
    folder: function folder() {
      return this.files[this.folderId];
    },
    folderContent: function folderContent() {
      return this.folders[this.folderId];
    },
    fileList: function fileList() {
      var _this = this;

      var list = this.folderContent && this.folderContent.map(function (id) {
        return _this.files[id];
      }).filter(function (file) {
        return !!file;
      });
      return list;
    },
    // subfolders of the current folder
    subFolders: function subFolders() {
      return this.folderId && this.files[this.folderId] && this.files[this.folderId].folders;
    },
    folderList: function folderList() {
      var _this2 = this;

      var list = this.subFolders && this.subFolders.map(function (id) {
        return _this2.files[id];
      }).filter(function (file) {
        return !!file;
      });
      return list;
    },
    contentList: function contentList() {
      var _this$folderList,
          _this3 = this,
          _this$fileList;

      var folders = (_this$folderList = this.folderList) === null || _this$folderList === void 0 ? void 0 : _this$folderList.map(function (folder) {
        _this3.$emit("update:loading", true);

        return {
          id: "folder-".concat(folder.fileid),
          injected: _objectSpread(_objectSpread({}, folder), {}, {
            showShared: _this3.showShared
          }),
          width: 256,
          height: 256,
          columnSpan: 1,
          renderComponent: _components_Folder__WEBPACK_IMPORTED_MODULE_3__.default
        };
      });
      var files = (_this$fileList = this.fileList) === null || _this$fileList === void 0 ? void 0 : _this$fileList.map(function (file) {
        return {
          id: "file-".concat(file.fileid),
          injected: _objectSpread(_objectSpread({}, file), {}, {
            list: _this3.fileList
          }),
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
    isEmpty: function isEmpty() {
      return !this.haveFiles && !this.haveFolders;
    },
    haveFiles: function haveFiles() {
      return !!this.fileList && this.fileList.length !== 0;
    },
    haveFolders: function haveFolders() {
      return !!this.folderList && this.folderList.length !== 0;
    }
  }),
  watch: {
    path: function path() {
      this.fetchFolderContent();
    },
    showShared: function showShared() {
      this.fetchFolderContent();
    }
  },
  beforeMount: function beforeMount() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this4.fetchFolderContent();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this5 = this;

    window.addEventListener("storage", function (event) {
      _this5.isGalleryViewEnabled = localStorage.getItem('photos:galleryLayout');
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.cancelRequest('Changed view');
  },
  methods: {
    getImageHeight: function getImageHeight(src) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var img = new Image();

                  img.onload = function () {
                    return resolve(img.height);
                  };

                  img.onerror = reject;
                  img.src = src;
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getImageWidth: function getImageWidth(src) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  var img = new Image();

                  img.onload = function () {
                    return resolve(img.width);
                  };

                  img.onerror = reject;
                  img.src = src;
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchFolderContent: function fetchFolderContent() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _cancelableRequest, request, cancel, _yield$request, folder, folders, files;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // cancel any pending requests
                _this6.cancelRequest('Changed folder'); // close any potential opened viewer & sidebar


                OCA.Viewer && OCA.Viewer.close && OCA.Viewer.close();
                OCA.Files && OCA.Files.Sidebar.close && OCA.Files.Sidebar.close(); // if we don't already have some cached data let's show a loader

                if (!_this6.files[_this6.folderId] || !_this6.folders[_this6.folderId]) {
                  _this6.$emit('update:loading', true);
                }

                _this6.error = null; // init cancellable request

                _cancelableRequest = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__.default)(_services_AlbumContent__WEBPACK_IMPORTED_MODULE_0__.default), request = _cancelableRequest.request, cancel = _cancelableRequest.cancel;
                _this6.cancelRequest = cancel;
                _context4.prev = 7;
                _context4.next = 10;
                return request(_this6.path, {
                  shared: _this6.showShared
                });

              case 10:
                _yield$request = _context4.sent;
                folder = _yield$request.folder;
                folders = _yield$request.folders;
                files = _yield$request.files;

                //  for (var i = 0; i < files.length; i++) {
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
                _this6.$store.dispatch('addPath', {
                  path: _this6.path,
                  fileid: folder.fileid
                });

                _this6.$store.dispatch('updateFolders', {
                  fileid: folder.fileid,
                  files: files,
                  folders: folders
                });

                _this6.$store.dispatch('updateFiles', {
                  folder: folder,
                  files: files,
                  folders: folders
                });

                _context4.next = 23;
                break;

              case 19:
                _context4.prev = 19;
                _context4.t0 = _context4["catch"](7);

                if (_context4.t0.response && _context4.t0.response.status) {
                  if (_context4.t0.response.status === 404) {
                    _this6.error = 404;
                    setTimeout(function () {
                      _this6.$router.push({
                        name: _this6.$route.name
                      });
                    }, 3000);
                  } else {
                    _this6.error = _context4.t0;
                  }
                } // cancelled request, moving on...


                console.error('Error fetching album data', _context4.t0);

              case 23:
                _context4.prev = 23;

                // done loading even with errors
                _this6.$emit('update:loading', false);

                return _context4.finish(23);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[7, 19, 23, 26]]);
      }))();
    },
    processImages: function processImages(finalData) {
      var tempArray = [];
      var tempArray2 = [];
      var j = -1;
      var k = 0;
      var max_height = 200;
      var leftContainer = document.getElementById("app-navigation-vue");
      var classExists = leftContainer.classList;
      var comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
      var windowWidth = document.getElementById("content-vue").offsetWidth; //  parseInt(comuptedStyle.getPropertyValue('width'));//

      if (windowWidth < 768) {
        max_height = 150;
      }

      if (windowWidth < 1025 || classExists.contains('app-navigation--close')) {
        var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width'));
      } else if (windowWidth >= 1025 && windowWidth < 1299) {
        console.log("inner 1024 : ");
        var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth - 44;
      } else {
        var originalMainWindow = parseInt(comuptedStyle.getPropertyValue('width')) - leftContainer.offsetWidth - 30 - 44;
      }

      console.log("main width: " + originalMainWindow);
      console.log("windowWidth : " + parseInt(comuptedStyle.getPropertyValue('width')));
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
          console.log(tempArray2);
          tempArray = [];
          tempArray.push(finalData[i]);
          rowWidth = finalData[i].injected.width;
          ;
        }
      }

      this.$emit("update:loading", false);
      return finalData;
    },
    adjustHeight: function adjustHeight(fileArray, maxHeight) {
      var totalImageWidth = 0;
      var leftContainer = document.getElementById("app-navigation-vue");
      var classExists = leftContainer.classList;
      var comuptedStyle = window.getComputedStyle(document.getElementById("mainDivDesign"));
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
    aspectRatio: function aspectRatio(height, width, requiredHeight) {
      var repeat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var path,
        options,
        prefixPath,
        response,
        list,
        folder,
        folders,
        files,
        _iterator,
        _step,
        entry,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = _args.length > 0 && _args[0] !== undefined ? _args[0] : '/';
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            prefixPath = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("/apps/photos/api/v1/".concat(options.shared ? 'shared' : 'albums')); // fetch listing

            _context.next = 5;
            return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(prefixPath + (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_2__.encodeFilePath)(path), options);

          case 5:
            response = _context.sent;
            list = response.data.map(function (data) {
              return (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_2__.genFileInfo)(data);
            }); // filter all the files and folders

            folder = {};
            folders = [];
            files = [];
            _iterator = _createForOfIteratorHelper(list);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                entry = _step.value;

                // is this the current provided path ?
                if (entry.filename === path) {
                  folder = entry;
                } else if (entry.type !== 'file') {
                  folders.push(entry);
                } else if (_AllowedMimes__WEBPACK_IMPORTED_MODULE_3__.default.indexOf(entry.mime) > -1) {
                  files.push(entry);
                }
              } // return current folder, subfolders and files

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context.abrupt("return", {
              folder: folder,
              folders: folders,
              files: files
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.spacing-between[data-v-28345ec4] {\n  height: 64px;\n}\n.main-container[data-v-28345ec4] {\n  display: flex;\n  justify-content: start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 0 4px;\n}\n.item[data-v-28345ec4] {\n  width: auto;\n  margin: 2px;\n  position: relative;\n}\n.title-item[data-v-28345ec4] {\n  height: 90px;\n  width: 100%;\n  margin: 4px;\n}\n.fullWidth[data-v-28345ec4] {\n  width: 100%;\n  height: auto;\n}\n.footer-replace[data-v-28345ec4] {\n  height: 70px;\n}\n.list-title[data-v-28345ec4] {\n  line-height: 50px !important;\n  font-weight: bold;\n  font-size: 24px;\n  padding: 0 6px;\n}", ""]);
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
                        _c("div", { staticClass: "list-title" }, [
                          _vm._v("Images")
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
//# sourceMappingURL=photos-src_views_Albums_vue.js.map?v=1ecf1bea894ea4cb465e