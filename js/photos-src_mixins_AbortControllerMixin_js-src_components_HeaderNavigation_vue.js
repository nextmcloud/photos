"use strict";
(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_mixins_AbortControllerMixin_js-src_components_HeaderNavigation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_material_design_icons_ArrowLeft_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/ArrowLeft.vue */ "./node_modules/vue-material-design-icons/ArrowLeft.vue");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HeaderNavigation',
  components: {
    ArrowLeft: vue_material_design_icons_ArrowLeft_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcButton,
    NcLoadingIcon: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcLoadingIcon
  },
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      required: true
    },
    rootTitle: {
      type: String,
      default: t('photos', 'Photos')
    },
    // The route params
    params: {
      type: Object,
      default: null
    }
  },
  computed: {
    isRoot() {
      const isRoot = this.path === '/';
      this.toggleNavigationButton(!isRoot);
      return isRoot;
    },
    name() {
      if (this.isRoot) {
        return this.rootTitle;
      }
      return this.title;
    },
    parentPath() {
      const path = this.path.split('/');
      path.pop();
      const parent = path.join('/');
      return this.isRoot || parent.trim() === '' ? '/' : path.join('/');
    },
    parentName() {
      return this.parentPath && this.parentPath.split('/').pop();
    },
    backToText() {
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
     * @return {string|object}
     */
    to() {
      // always remove first slash, the router
      // manage it automatically
      const regex = /^\/?(.*)/i;
      const path = regex.exec(this.parentPath)[1];

      // apply to current route
      let {
        name,
        params
      } = Object.assign({}, this.$route, {
        params: this.params || {
          path
        }
      });

      // return the full object as we don't care about
      // an empty path if this is route
      if (path === '') {
        // for the root path of the albums view we have to alter name
        // as it uses a separate route and component
        if (name === 'albumsContent') {
          name = 'albums';
        }
        return {
          name
        };
      }

      // returning a string prevent vue-router to encode it again
      return decodeURIComponent(this.$router.resolve({
        name,
        params
      }).resolved.path);
    }
  },
  methods: {
    folderUp() {
      this.$router.push(this.to);
    },
    refresh() {
      this.$emit('refresh');
    },
    toggleNavigationButton(hide) {
      // Hide the navigation toggle if the back button is shown
      const navigationToggle = document.querySelector('button.app-navigation-toggle');
      if (navigationToggle !== null) {
        navigationToggle.style.display = hide ? 'none' : null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "photos-navigation",
    class: {
      "photos-navigation--root": _vm.isRoot
    },
    attrs: {
      role: "toolbar"
    }
  }, [!_vm.isRoot ? _c("NcButton", {
    staticClass: "photos-navigation__back",
    attrs: {
      "aria-label": _vm.t("photos", "Go back"),
      type: "tertiary"
    },
    on: {
      click: _vm.folderUp
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("ArrowLeft", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 1821202730)
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "photos-navigation__title"
  }, [_c("h1", {
    staticClass: "photos-navigation__title__main",
    on: {
      click: _vm.refresh
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.name) + "\n\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "photos-navigation__title__sub"
  }), _vm._v(" "), _vm._t("subtitle")], 2), _vm._v(" "), _vm.$slots.default ? _c("div", {
    staticClass: "photos-navigation__content"
  }, [_vm._t("default")], 2) : _vm._e(), _vm._v(" "), _c("NcLoadingIcon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "photos-navigation__loader"
  }), _vm._v(" "), _c("div", {
    staticClass: "photos-navigation__content-right"
  }, [_vm._t("right")], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/mixins/AbortControllerMixin.js":
/*!********************************************!*\
  !*** ./src/mixins/AbortControllerMixin.js ***!
  \********************************************/
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
  name: 'AbortControllerMixin',
  data() {
    return {
      abortController: new AbortController()
    };
  },
  beforeDestroy() {
    this.abortController.abort();
  },
  beforeRouteLeave(from, to, next) {
    this.abortController.abort();
    this.abortController = new AbortController();
    next();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.photos-navigation[data-v-21ecc79e] {
  position: sticky;
  z-index: 20;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  gap: calc(2 * var(--app-navigation-padding));
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-inline: calc(var(--default-clickable-area) + 2 * var(--app-navigation-padding)) var(--app-navigation-padding);
  padding-block: var(--app-navigation-padding);
  background: var(--color-main-background);
}
.photos-navigation__back[data-v-21ecc79e] {
  position: absolute !important;
  left: var(--app-navigation-padding);
}
.photos-navigation__title[data-v-21ecc79e] {
  max-width: 45%;
  display: flex;
  flex-direction: column;
}
.photos-navigation__title__main[data-v-21ecc79e] {
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 44px;
}
.photos-navigation__title__main[data-v-21ecc79e], .photos-navigation__title__sub[data-v-21ecc79e] {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.photos-navigation__loader[data-v-21ecc79e] {
  margin-inline-start: 32px;
}
.photos-navigation__content-right[data-v-21ecc79e] {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_style_index_0_id_21ecc79e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_style_index_0_id_21ecc79e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_style_index_0_id_21ecc79e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_style_index_0_id_21ecc79e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_style_index_0_id_21ecc79e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/HeaderNavigation.vue":
/*!*********************************************!*\
  !*** ./src/components/HeaderNavigation.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderNavigation_vue_vue_type_template_id_21ecc79e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true */ "./src/components/HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true");
/* harmony import */ var _HeaderNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderNavigation.vue?vue&type=script&lang=js */ "./src/components/HeaderNavigation.vue?vue&type=script&lang=js");
/* harmony import */ var _HeaderNavigation_vue_vue_type_style_index_0_id_21ecc79e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true */ "./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeaderNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderNavigation_vue_vue_type_template_id_21ecc79e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderNavigation_vue_vue_type_template_id_21ecc79e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "21ecc79e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/HeaderNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/HeaderNavigation.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/HeaderNavigation.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderNavigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/components/HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_template_id_21ecc79e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_template_id_21ecc79e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_template_id_21ecc79e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=template&id=21ecc79e&scoped=true");


/***/ }),

/***/ "./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderNavigation_vue_vue_type_style_index_0_id_21ecc79e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HeaderNavigation.vue?vue&type=style&index=0&id=21ecc79e&lang=scss&scoped=true");


/***/ })

}]);
//# sourceMappingURL=photos-src_mixins_AbortControllerMixin_js-src_components_HeaderNavigation_vue.js.map?v=c4e3f54507275ae99b71