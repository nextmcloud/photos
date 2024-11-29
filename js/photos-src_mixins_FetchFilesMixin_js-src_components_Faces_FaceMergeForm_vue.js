"use strict";
(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_mixins_FetchFilesMixin_js-src_components_Faces_FaceMergeForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_FaceCoverMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/FaceCoverMixin.js */ "./src/mixins/FaceCoverMixin.js");
/* harmony import */ var _mixins_FetchFacesMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/FetchFacesMixin.js */ "./src/mixins/FetchFacesMixin.js");
/* harmony import */ var _FaceCover_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaceCover.vue */ "./src/components/Faces/FaceCover.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FaceMergeForm',
  components: {
    FaceCover: _FaceCover_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_FaceCoverMixin_js__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_FetchFacesMixin_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    firstFace: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['files', 'faces', 'facesFiles']),
    filteredFaces() {
      return Object.values(this.faces).filter(face => face.basename !== this.firstFace).sort((a, b) => {
        if (a.props.nbItems && b.props.nbItems) {
          return b.props.nbItems - a.props.nbItems;
        }
        if (!this.facesFiles[b.basename] || !this.facesFiles[a.basename]) {
          return 0;
        }
        return this.facesFiles[b.basename].length - this.facesFiles[a.basename].length;
      });
    }
  },
  methods: {
    handleSelect(faceName) {
      this.$emit('select', faceName);
      this.loading = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "merge-form face-list"
  }, _vm._l(_vm.filteredFaces, function (face) {
    return _c("FaceCover", {
      key: face.basename,
      attrs: {
        "base-name": face.basename,
        small: ""
      },
      on: {
        click: function ($event) {
          return _vm.handleSelect(face.basename);
        }
      }
    });
  }), 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/mixins/FetchFilesMixin.js":
/*!***************************************!*\
  !*** ./src/mixins/FetchFilesMixin.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/* harmony import */ var _services_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/logger.js */ "./src/services/logger.js");
/* harmony import */ var _services_PhotoSearch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/PhotoSearch.js */ "./src/services/PhotoSearch.js");
/* harmony import */ var _utils_semaphoreWithPriority_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/semaphoreWithPriority.js */ "./src/utils/semaphoreWithPriority.js");
/* harmony import */ var _AbortControllerMixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AbortControllerMixin.js */ "./src/mixins/AbortControllerMixin.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index.js */ "./src/store/index.js");
/**
 * @copyright Copyright (c) 2022 Louis Chemineau <louis@chmn.me>
 *
 * @author Louis Chemineau <louis@chmn.me>
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








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FetchFilesMixin',
  mixins: [_AbortControllerMixin_js__WEBPACK_IMPORTED_MODULE_5__["default"]],
  data() {
    return {
      errorFetchingFiles: null,
      loadingFiles: false,
      doneFetchingFiles: false,
      fetchSemaphore: new _utils_semaphoreWithPriority_js__WEBPACK_IMPORTED_MODULE_4__["default"](1),
      fetchedFileIds: []
    };
  },
  watch: {
    '$route.path'() {
      this.resetFetchFilesState();
    }
  },
  methods: {
    /**
     * @param {object} options - Options to pass to getPhotos.
     * @param {string[]} [blacklist=[]] - Array of ids to filter out.
     * @param {boolean} [force=false] - Force fetching even if doneFetchingFiles is true
     * @return {Promise<string[]>} - The next batch of data depending on global offset.
     */
    async fetchFiles() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let blacklist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      let force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.doneFetchingFiles && !force || this.loadingFiles) {
        return [];
      }
      const fetchSemaphoreSymbol = await this.fetchSemaphore.acquire();
      try {
        this.errorFetchingFiles = null;
        this.loadingFiles = true;
        const numberOfImagesPerBatch = 200;

        // Load next batch of images
        const fetchedFiles = await (0,_services_PhotoSearch_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
          firstResult: this.fetchedFileIds.length,
          nbResults: numberOfImagesPerBatch,
          ...options,
          signal: this.abortController.signal
        });

        // If we get less files than requested that means we got to the end
        if (fetchedFiles.length !== numberOfImagesPerBatch) {
          this.doneFetchingFiles = true;
        }
        const fileIds = fetchedFiles.map(file => file.fileid).filter(fileId => !this.fetchedFileIds.includes(fileId.toString())); // Filter to prevent duplicate fileIds.

        this.fetchedFileIds.push(...fileIds.map(fileId => fileId.toString()).filter(fileId => !blacklist.includes(fileId)));
        this.$store.dispatch('appendFiles', fetchedFiles);
        _services_logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].debug(`[FetchFilesMixin] Fetched ${fileIds.length} new files: `, fileIds);
        return fileIds;
      } catch (error) {
        if (error.response?.status === 404) {
          const sources = _store_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].state.userConfig.photosSourceFolders;
          for (const source of sources) {
            if (error.response?.data?.match(`File with name /${source} could not be located`) === null) {
              continue;
            }
            _services_logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].debug(`The ${source} folder does not exist, creating it.`);
            try {
              await (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.davGetClient)().createDirectory((0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__.joinPaths)(_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.davRootPath, source));
              this.resetFetchFilesState();
              return [];
            } catch (error) {
              this.errorFetchingFiles = 404;
              _services_logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].error('Fail to create source directory', {
                error
              });
            }
          }
        } else if (error.code === 'ERR_CANCELED') {
          return [];
        } else {
          this.errorFetchingFiles = error;
        }

        // cancelled request, moving on...
        _services_logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].error('Error fetching files', {
          error
        });
      } finally {
        this.loadingFiles = false;
        this.fetchSemaphore.release(fetchSemaphoreSymbol);
      }
      return [];
    },
    resetFetchFilesState() {
      this.doneFetchingFiles = false;
      this.errorFetchingFiles = null;
      this.loadingFiles = false;
      this.fetchedFileIds = [];
    }
  }
});

/***/ }),

/***/ "./src/services/PhotoSearch.js":
/*!*************************************!*\
  !*** ./src/services/PhotoSearch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fileUtils.js */ "./src/utils/fileUtils.js");
/* harmony import */ var _AllowedMimes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllowedMimes.js */ "./src/services/AllowedMimes.js");
/* harmony import */ var _DavClient_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DavClient.js */ "./src/services/DavClient.js");
/* harmony import */ var _DavRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DavRequest.js */ "./src/services/DavRequest.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index.js */ "./src/store/index.js");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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










/**
 * List files from a folder and filter out unwanted mimes
 *
 * @param {object} [options] used for the cancellable requests
 * @param {number} [options.firstResult=0] Index of the first result that we want (starts at 0)
 * @param {number} [options.nbResults=200] The number of file to fetch
 * @param {string[]} [options.mimesType=allMimes] Mime type of the files
 * @param {boolean} [options.full=false] get full data of the files
 * @param {boolean} [options.onThisDay=false] get only items from this day of year
 * @param {boolean} [options.onlyFavorites=false] get only favorite items
 * @return {Promise<object[]>} the file list
 */
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // default function options
  options = {
    firstResult: 0,
    nbResults: 200,
    mimesType: _AllowedMimes_js__WEBPACK_IMPORTED_MODULE_1__.allMimes,
    onThisDay: false,
    onlyFavorites: false,
    ...options
  };

  // generating the search or condition
  // based on the allowed mimetypes
  const orMime = options.mimesType.reduce((str, mime) => `${str}
		<d:eq>
			<d:prop>
				<d:getcontenttype/>
			</d:prop>
			<d:literal>${mime}</d:literal>
		</d:eq>
	`, '');
  const eqFavorites = options.onlyFavorites ? `<d:eq>
				<d:prop>
					<oc:favorite/>
				</d:prop>
				<d:literal>1</d:literal>
			</d:eq>` : '';
  const onThisDay = options.onThisDay ? `<d:or>${Array(20).fill(1).map((_, years) => {
    const start = _nextcloud_moment__WEBPACK_IMPORTED_MODULE_4___default()(Date.now()).startOf('day').subtract(3, 'd').subtract(years + 1, 'y');
    const end = _nextcloud_moment__WEBPACK_IMPORTED_MODULE_4___default()(Date.now()).endOf('day').add(3, 'd').subtract(years + 1, 'y');
    return `<d:and>
				<d:gt>
					<d:prop>
						<d:getlastmodified />
					</d:prop>
					<d:literal>${start.format((_nextcloud_moment__WEBPACK_IMPORTED_MODULE_4___default().defaultFormatUtc))}</d:literal>
				</d:gt>
				<d:lt>
					<d:prop>
						<d:getlastmodified />
					</d:prop>
					<d:literal>${end.format((_nextcloud_moment__WEBPACK_IMPORTED_MODULE_4___default().defaultFormatUtc))}</d:literal>
				</d:lt>
			</d:and>`;
  }).join('\n')}</d:or>` : '';
  const sourceFolders = _store_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].state.userConfig.photosSourceFolders.map(folder => `
			<d:scope>
				<d:href>${(0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_7__.joinPaths)(_nextcloud_files__WEBPACK_IMPORTED_MODULE_6__.davRootPath, folder)}</d:href>
				<d:depth>infinity</d:depth>
			</d:scope>`).join('\n');
  options = Object.assign({
    method: 'SEARCH',
    headers: {
      'content-Type': 'text/xml'
    },
    data: `<?xml version="1.0" encoding="UTF-8"?>
			<d:searchrequest xmlns:d="DAV:"
				xmlns:oc="http://owncloud.org/ns"
				xmlns:nc="http://nextcloud.org/ns"
				xmlns:ns="https://github.com/icewind1991/SearchDAV/ns"
				xmlns:ocs="http://open-collaboration-services.org/ns">
				<d:basicsearch>
					<d:select>
						<d:prop>
							${_DavRequest_js__WEBPACK_IMPORTED_MODULE_3__.props}
						</d:prop>
					</d:select>
					<d:from>
						${sourceFolders}
					</d:from>
					<d:where>
						<d:and>
							<d:or>
								${orMime}
							</d:or>
							${eqFavorites}
							${onThisDay}
						</d:and>
					</d:where>
					<d:orderby>
						<d:order>
							<d:prop><nc:metadata-photos-original_date_time/></d:prop>
							<d:descending/>
						</d:order>
						<d:order>
							<d:prop><d:getlastmodified/></d:prop>
							<d:descending/>
						</d:order>
					</d:orderby>
					<d:limit>
						<d:nresults>${options.nbResults}</d:nresults>
						<ns:firstresult>${options.firstResult}</ns:firstresult>
					</d:limit>
				</d:basicsearch>
			</d:searchrequest>`,
    deep: true,
    details: true
  }, options);
  const response = await _DavClient_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDirectoryContents('', options);
  return response.data.map(data => (0,_utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_0__.genFileInfo)(data));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.face-list[data-v-a9c1fcf4] {
  display: flex;
  flex-direction: row;
  height: 350px;
  flex-wrap: wrap;
  padding: 12px;
}
.loader[data-v-a9c1fcf4] {
  margin: 25% auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_style_index_0_id_a9c1fcf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_style_index_0_id_a9c1fcf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_style_index_0_id_a9c1fcf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_style_index_0_id_a9c1fcf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_style_index_0_id_a9c1fcf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Faces/FaceMergeForm.vue":
/*!************************************************!*\
  !*** ./src/components/Faces/FaceMergeForm.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FaceMergeForm_vue_vue_type_template_id_a9c1fcf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true */ "./src/components/Faces/FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true");
/* harmony import */ var _FaceMergeForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FaceMergeForm.vue?vue&type=script&lang=js */ "./src/components/Faces/FaceMergeForm.vue?vue&type=script&lang=js");
/* harmony import */ var _FaceMergeForm_vue_vue_type_style_index_0_id_a9c1fcf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss */ "./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FaceMergeForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FaceMergeForm_vue_vue_type_template_id_a9c1fcf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FaceMergeForm_vue_vue_type_template_id_a9c1fcf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a9c1fcf4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Faces/FaceMergeForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Faces/FaceMergeForm.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/Faces/FaceMergeForm.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceMergeForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Faces/FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/components/Faces/FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_template_id_a9c1fcf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_template_id_a9c1fcf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_template_id_a9c1fcf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=template&id=a9c1fcf4&scoped=true");


/***/ }),

/***/ "./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FaceMergeForm_vue_vue_type_style_index_0_id_a9c1fcf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Faces/FaceMergeForm.vue?vue&type=style&index=0&id=a9c1fcf4&scoped=true&lang=scss");


/***/ })

}]);
//# sourceMappingURL=photos-src_mixins_FetchFilesMixin_js-src_components_Faces_FaceMergeForm_vue.js.map?v=7644fc33a1dcf6e47e1b