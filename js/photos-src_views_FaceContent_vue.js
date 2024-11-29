"use strict";
(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_views_FaceContent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/Pencil.vue */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Close.vue */ "./node_modules/vue-material-design-icons/Close.vue");
/* harmony import */ var vue_material_design_icons_AlertCircle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/AlertCircle.vue */ "./node_modules/vue-material-design-icons/AlertCircle.vue");
/* harmony import */ var vue_material_design_icons_Star_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Star.vue */ "./node_modules/vue-material-design-icons/Star.vue");
/* harmony import */ var vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Download.vue */ "./node_modules/vue-material-design-icons/Download.vue");
/* harmony import */ var vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/Send.vue */ "./node_modules/vue-material-design-icons/Send.vue");
/* harmony import */ var vue_material_design_icons_Merge_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Merge.vue */ "./node_modules/vue-material-design-icons/Merge.vue");
/* harmony import */ var vue_material_design_icons_ArrowLeft_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/ArrowLeft.vue */ "./node_modules/vue-material-design-icons/ArrowLeft.vue");
/* harmony import */ var vue_material_design_icons_AccountSwitch_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/AccountSwitch.vue */ "./node_modules/vue-material-design-icons/AccountSwitch.vue");
/* harmony import */ var vue_material_design_icons_AccountBoxMultipleOutline_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/AccountBoxMultipleOutline.vue */ "./node_modules/vue-material-design-icons/AccountBoxMultipleOutline.vue");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _mixins_FetchFilesMixin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mixins/FetchFilesMixin.js */ "./src/mixins/FetchFilesMixin.js");
/* harmony import */ var _mixins_FilesSelectionMixin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mixins/FilesSelectionMixin.js */ "./src/mixins/FilesSelectionMixin.js");
/* harmony import */ var _components_FilesListViewer_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/FilesListViewer.vue */ "./src/components/FilesListViewer.vue");
/* harmony import */ var _components_File_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/File.vue */ "./src/components/File.vue");
/* harmony import */ var _services_logger_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/logger.js */ "./src/services/logger.js");
/* harmony import */ var _mixins_FetchFacesMixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../mixins/FetchFacesMixin.js */ "./src/mixins/FetchFacesMixin.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_Faces_FaceMergeForm_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Faces/FaceMergeForm.vue */ "./src/components/Faces/FaceMergeForm.vue");




















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FaceContent',
  components: {
    Pencil: vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Star: vue_material_design_icons_Star_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Download: vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Close: vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AlertCircle: vue_material_design_icons_AlertCircle_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Send: vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Merge: vue_material_design_icons_Merge_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ArrowLeft: vue_material_design_icons_ArrowLeft_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    AccountBoxMultipleOutline: vue_material_design_icons_AccountBoxMultipleOutline_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    FaceMergeForm: _components_Faces_FaceMergeForm_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    FilesListViewer: _components_FilesListViewer_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    File: _components_File_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    NcLoadingIcon: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_10__.NcLoadingIcon,
    NcEmptyContent: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_10__.NcEmptyContent,
    NcActions: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_10__.NcActions,
    NcActionButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_10__.NcActionButton,
    NcDialog: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_10__.NcDialog,
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_10__.NcButton,
    AccountSwitch: vue_material_design_icons_AccountSwitch_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  directives: {
    focus(el) {
      vue__WEBPACK_IMPORTED_MODULE_18__["default"].nextTick(() => el.focus());
    }
  },
  mixins: [_mixins_FetchFacesMixin_js__WEBPACK_IMPORTED_MODULE_16__["default"], _mixins_FetchFilesMixin_js__WEBPACK_IMPORTED_MODULE_11__["default"], _mixins_FilesSelectionMixin_js__WEBPACK_IMPORTED_MODULE_12__["default"]],
  props: {
    faceName: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      showMoveModal: false,
      showMergeModal: false,
      showRenameModal: false,
      loadingCount: 0,
      appContent: document.getElementById('app-content-vue')
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_19__.mapGetters)(['files', 'facesFiles']),
    /**
     * @return {string[]} The face information for the current faceName.
     */
    face() {
      return this.faces[this.faceName];
    },
    /**
     * @return {string[]} The list of files for the current faceName.
     */
    faceFileIds() {
      return this.facesFiles[this.faceName] || [];
    },
    /** @type {boolean} */
    shouldFavoriteSelection() {
      // Favorite all selection if at least one file is not on the favorites.
      return this.selectedFileIds.some(fileId => this.$store.state.files.files[fileId].favorite === 0);
    }
  },
  watch: {
    face() {
      if (this.face) {
        this.fetchFaceContent(this.faceName);
      }
    }
  },
  mounted() {
    this.fetchFaceContent(this.faceName);
  },
  methods: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_19__.mapActions)(['appendFiles', 'deleteFace', 'renameFace', 'downloadFiles', 'toggleFavoriteForFiles', 'removeFilesFromFace', 'moveFilesToFace']),
    openViewer(fileId) {
      const file = this.files[fileId];
      OCA.Viewer.open({
        path: '/' + file.filename.split('/').slice(3).join('/'),
        list: this.faceFileIds.map(fileId => ({
          ...this.files[fileId],
          filename: '/' + this.files[fileId].filename.split('/').slice(3).join('/')
        })),
        loadMore: file.loadMore ? async () => await file.loadMore(true) : () => [],
        canLoop: file.canLoop
      });
    },
    async handleRemoveFilesFromFace(fileIds) {
      try {
        this.loadingCount++;
        await this.removeFilesFromFace({
          faceName: this.faceName,
          fileIdsToRemove: fileIds
        });
        this.resetSelection();
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },
    async handleDeleteFace() {
      try {
        this.loadingCount++;
        await this.deleteFace({
          faceName: this.faceName
        });
        this.$router.push('/faces');
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },
    async handleRenameFace(faceName) {
      try {
        this.loadingCount++;
        this.showRenameModal = false;
        const oldName = this.faceName;
        await this.renameFace({
          oldName,
          faceName
        });
        this.$router.push({
          name: 'facecontent',
          params: {
            faceName
          }
        });
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },
    async handleMerge(faceName) {
      try {
        this.loadingCount++;
        await this.moveFilesToFace({
          oldFace: this.faceName,
          faceName,
          fileIdsToMove: this.facesFiles[this.faceName]
        });
        await this.deleteFace({
          faceName: this.faceName
        });
        this.showMergeModal = false;
        this.$router.push({
          name: 'facecontent',
          params: {
            faceName
          }
        });
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },
    async handleMove(faceName, fileIds) {
      try {
        this.loadingCount++;
        await this.moveFilesToFace({
          oldFace: this.faceName,
          faceName,
          fileIdsToMove: fileIds
        });
        this.showMoveModal = false;
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },
    async favoriteSelection() {
      try {
        this.loadingCount++;
        await this.toggleFavoriteForFiles({
          fileIds: this.selectedFileIds,
          favoriteState: true
        });
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },
    async unFavoriteSelection() {
      try {
        this.loadingCount++;
        await this.toggleFavoriteForFiles({
          fileIds: this.selectedFileIds,
          favoriteState: false
        });
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },
    async downloadSelection() {
      try {
        this.loadingCount++;
        await this.downloadFiles(this.selectedFileIds);
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=template&id=03238d12&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=template&id=03238d12&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.face === undefined && !_vm.loadingFiles && !_vm.loadingFaces ? _c("NcEmptyContent", {
    staticClass: "empty-content-with-illustration",
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("AccountBoxMultipleOutline")];
      },
      proxy: true
    }], null, false, 2861705255)
  }, [_vm._v("\n\t" + _vm._s(_vm.t("photos", "This person could not be found")) + "\n")]) : _vm.errorFetchingFiles || _vm.errorFetchingFaces ? _c("NcEmptyContent", {
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("AlertCircle")];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t" + _vm._s(_vm.t("photos", "An error occurred")) + "\n")]) : _c("div", {
    staticClass: "face"
  }, [_c("div", {
    staticClass: "face__header"
  }, [_c("div", {
    staticClass: "face__header__left"
  }, [_c("NcActions", [_c("NcActionButton", {
    on: {
      click: function ($event) {
        return _vm.$router.push("/faces/");
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("ArrowLeft")];
      },
      proxy: true
    }])
  }, [_vm._v(_vm._s(_vm.t("photos", "Back")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("div", {
    staticClass: "face__header__title"
  }, [_vm.face !== undefined ? _c("h2", {
    class: {
      "face-name": true,
      "hidden-visually": _vm.face.basename.match(/^[0-9]+$/)
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.face.basename) + "\n\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _vm.loadingCount > 0 || _vm.loadingFaces ? _c("NcLoadingIcon") : _vm._e()], 1), _vm._v(" "), _vm.face !== undefined ? _c("div", {
    staticClass: "face__header__actions"
  }, [_c("NcActions", [_c("NcActionButton", {
    attrs: {
      "close-after-click": true,
      "aria-label": _vm.t("photos", "Rename person")
    },
    on: {
      click: function ($event) {
        _vm.showRenameModal = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Pencil")];
      },
      proxy: true
    }], null, false, 514409694)
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("photos", "Rename person")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("NcActions", {
    attrs: {
      "force-menu": true
    }
  }, [Object.keys(_vm.faces).length > 1 ? _c("NcActionButton", {
    attrs: {
      "close-after-click": true,
      "aria-label": _vm.t("photos", "Merge with different person")
    },
    on: {
      click: function ($event) {
        _vm.showMergeModal = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Merge")];
      },
      proxy: true
    }], null, false, 3117189691)
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("photos", "Merge with different person")) + "\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.selectedFileIds.length ? [_c("NcActionButton", {
    attrs: {
      "close-after-click": true,
      "aria-label": _vm.t("photos", "Download selected files")
    },
    on: {
      click: _vm.downloadSelection
    }
  }, [_c("Download", {
    attrs: {
      slot: "icon"
    },
    slot: "icon"
  }), _vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("photos", "Download selected photos")) + "\n\t\t\t\t\t")], 1), _vm._v(" "), _vm.shouldFavoriteSelection ? _c("NcActionButton", {
    attrs: {
      "close-after-click": true,
      "aria-label": _vm.t("photos", "Mark selection as favorite")
    },
    on: {
      click: _vm.favoriteSelection
    }
  }, [_c("Star", {
    attrs: {
      slot: "icon"
    },
    slot: "icon"
  }), _vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("photos", "Favorite")) + "\n\t\t\t\t\t")], 1) : _c("NcActionButton", {
    attrs: {
      "close-after-click": true,
      "aria-label": _vm.t("photos", "Remove selection from favorites")
    },
    on: {
      click: _vm.unFavoriteSelection
    }
  }, [_c("Star", {
    attrs: {
      slot: "icon"
    },
    slot: "icon"
  }), _vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("photos", "Remove from favorites")) + "\n\t\t\t\t\t")], 1), _vm._v(" "), _c("NcActionButton", {
    attrs: {
      "close-after-click": true
    },
    on: {
      click: function ($event) {
        _vm.showMoveModal = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("AccountSwitch")];
      },
      proxy: true
    }], null, false, 2937983280)
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.n("photos", "Move photo to a different person", "Move photos to a different person", _vm.selectedFileIds.length)) + "\n\t\t\t\t\t")]), _vm._v(" "), _c("NcActionButton", {
    attrs: {
      "close-after-click": true
    },
    on: {
      click: function ($event) {
        return _vm.handleRemoveFilesFromFace(_vm.selectedFileIds);
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Close")];
      },
      proxy: true
    }], null, false, 1051939733)
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.n("photos", "Remove photo from person", "Remove photos from person", _vm.selectedFileIds.length)) + "\n\t\t\t\t\t")])] : _vm._e(), _vm._v(" "), _c("NcActionButton", {
    attrs: {
      "close-after-click": true
    },
    on: {
      click: _vm.handleDeleteFace
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Close")];
      },
      proxy: true
    }], null, false, 1051939733)
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("photos", "Remove person")) + "\n\t\t\t\t")])], 2)], 1) : _vm._e()]), _vm._v(" "), _vm.face !== undefined ? _c("FilesListViewer", {
    staticClass: "face__photos",
    attrs: {
      "container-element": _vm.appContent,
      "file-ids": _vm.faceFileIds,
      loading: _vm.loadingFiles || _vm.loadingFaces
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref) {
        let {
          file,
          distance
        } = _ref;
        return _c("File", {
          attrs: {
            file: _vm.files[file.id],
            "allow-selection": true,
            selected: _vm.selection[file.id] === true,
            distance: distance
          },
          on: {
            click: _vm.openViewer,
            "select-toggled": _vm.onFileSelectToggle
          }
        });
      }
    }], null, false, 2716306842)
  }) : _vm._e(), _vm._v(" "), _vm.showRenameModal ? _c("NcDialog", {
    attrs: {
      name: _vm.t("photos", "Rename person"),
      "close-on-click-outside": "",
      size: "small"
    },
    on: {
      closing: function ($event) {
        _vm.showRenameModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function () {
        return [_c("NcButton", {
          attrs: {
            "aria-label": _vm.t("photos", "Save."),
            type: "primary",
            disabled: _vm.$refs.nameInput && _vm.$refs.nameInput.value.trim() === ""
          },
          on: {
            click: function ($event) {
              return _vm.handleRenameFace(_vm.$refs.nameInput.value);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_vm.loadingCount ? _c("NcLoadingIcon") : _c("Send")];
            },
            proxy: true
          }], null, false, 564208483)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("photos", "Save")) + "\n\t\t\t")])];
      },
      proxy: true
    }], null, false, 4139225602)
  }, [_c("div", {
    staticClass: "rename-form"
  }, [_c("input", {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }],
    ref: "nameInput",
    attrs: {
      type: "text",
      name: "name",
      required: "",
      placeholder: _vm.t("photos", "Name of this person")
    },
    domProps: {
      value: _vm.faceName
    },
    on: {
      keydown: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.handleRenameFace(_vm.$refs.nameInput.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.showMergeModal ? _c("NcDialog", {
    attrs: {
      name: _vm.t("photos", "Merge person"),
      "close-on-click-outside": "",
      size: "normal"
    },
    on: {
      closing: function ($event) {
        _vm.showMergeModal = false;
      }
    }
  }, [_c("FaceMergeForm", {
    attrs: {
      "first-face": _vm.faceName
    },
    on: {
      select: function ($event) {
        return _vm.handleMerge($event);
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.showMoveModal ? _c("NcDialog", {
    attrs: {
      name: _vm.t("photos", "Move to different person"),
      "close-on-click-outside": "",
      size: "normal"
    },
    on: {
      closing: function ($event) {
        _vm.showMoveModal = false;
      }
    }
  }, [_c("FaceMergeForm", {
    attrs: {
      "first-face": _vm.faceName
    },
    on: {
      select: function ($event) {
        return _vm.handleMove($event, _vm.selectedFileIds);
      }
    }
  })], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright Copyright (c) 2023 Marcel Klehr <mklehr@gmx.net>
 *
 * @author Marcel Klehr <mklehr@gmx.net>
 *
 * @license AGPL-3.0-or-later
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
.face[data-v-03238d12] {
  display: flex;
  flex-direction: column;
}
.face__empty[data-v-03238d12] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.face__empty__button[data-v-03238d12] {
  margin-top: 32px;
}
.face__header[data-v-03238d12] {
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 3;
  background: var(--color-main-background);
  padding: 0 64px;
}
@media only screen and (max-width: 1020px) {
.face__header[data-v-03238d12] {
    padding: 0;
    padding-left: 64px;
}
}
.face__header__left[data-v-03238d12] {
  height: 100%;
  display: flex;
  align-items: center;
}
.face__header__title[data-v-03238d12] {
  margin-left: 10px;
}
.face__header__title h2[data-v-03238d12] {
  margin-bottom: 0;
}
.face__header__loader[data-v-03238d12] {
  margin-left: 32px;
}
.face__header__actions[data-v-03238d12] {
  display: flex;
  align-items: center;
}
.face__header__actions button[data-v-03238d12] {
  margin-left: 16px;
}
.face__photos[data-v-03238d12] {
  margin-top: 16px;
  height: 100%;
  min-height: 0;
  padding: 0 64px;
}
@media only screen and (max-width: 1020px) {
.face__photos[data-v-03238d12] {
    padding: 0;
}
}
.empty-content-with-illustration[data-v-03238d12] .empty-content__icon {
  width: 200px;
  height: 200px;
}
.empty-content-with-illustration[data-v-03238d12] .empty-content__icon svg {
  width: 200px;
  height: 200px;
}
.rename-form[data-v-03238d12] {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding: 16px;
}
.rename-form input[data-v-03238d12] {
  width: 100%;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_style_index_0_id_03238d12_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_style_index_0_id_03238d12_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_style_index_0_id_03238d12_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_style_index_0_id_03238d12_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_style_index_0_id_03238d12_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/FaceContent.vue":
/*!***********************************!*\
  !*** ./src/views/FaceContent.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FaceContent_vue_vue_type_template_id_03238d12_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaceContent.vue?vue&type=template&id=03238d12&scoped=true */ "./src/views/FaceContent.vue?vue&type=template&id=03238d12&scoped=true");
/* harmony import */ var _FaceContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FaceContent.vue?vue&type=script&lang=js */ "./src/views/FaceContent.vue?vue&type=script&lang=js");
/* harmony import */ var _FaceContent_vue_vue_type_style_index_0_id_03238d12_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true */ "./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FaceContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FaceContent_vue_vue_type_template_id_03238d12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FaceContent_vue_vue_type_template_id_03238d12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "03238d12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/FaceContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/FaceContent.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/views/FaceContent.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/FaceContent.vue?vue&type=template&id=03238d12&scoped=true":
/*!*****************************************************************************!*\
  !*** ./src/views/FaceContent.vue?vue&type=template&id=03238d12&scoped=true ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_template_id_03238d12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_template_id_03238d12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_template_id_03238d12_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceContent.vue?vue&type=template&id=03238d12&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=template&id=03238d12&scoped=true");


/***/ }),

/***/ "./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceContent_vue_vue_type_style_index_0_id_03238d12_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/FaceContent.vue?vue&type=style&index=0&id=03238d12&lang=scss&scoped=true");


/***/ })

}]);
//# sourceMappingURL=photos-src_views_FaceContent_vue.js.map?v=d6f6c1e59ceeec57b55f