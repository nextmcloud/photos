"use strict";
(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_mixins_FetchFilesMixin_js-src_mixins_FilesByMonthMixin_js"],{

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

/***/ "./src/mixins/FilesByMonthMixin.js":
/*!*****************************************!*\
  !*** ./src/mixins/FilesByMonthMixin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: 'FilesByMonthMixin',
  computed: {
    /**
     * @return {Object<string, []>}
     */
    fileIdsByMonth() {
      const filesByMonth = {};
      for (const fileId of this.fetchedFileIds) {
        const file = this.files[fileId];
        if (file) {
          filesByMonth[file.month] = filesByMonth[file.month] ?? [];
          filesByMonth[file.month].push(file.fileid);
        }
      }

      // Sort files in sections.
      Object.keys(filesByMonth).forEach(month => filesByMonth[month].sort(this.sortFilesByTimestamp));
      return filesByMonth;
    },
    /**
     * @return {string[]}
     */
    monthsList() {
      return Object.keys(this.fileIdsByMonth).sort((month1, month2) => month1 > month2 ? -1 : 1);
    }
  },
  methods: {
    /**
     * @param {string} fileId1 The first file ID
     * @param {string} fileId2 The second file ID
     * @return {-1 | 1}
     */
    sortFilesByTimestamp(fileId1, fileId2) {
      return this.files[fileId1].timestamp > this.files[fileId2].timestamp ? -1 : 1;
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

/***/ })

}]);
//# sourceMappingURL=photos-src_mixins_FetchFilesMixin_js-src_mixins_FilesByMonthMixin_js.js.map?v=36d5596e80b344be2108