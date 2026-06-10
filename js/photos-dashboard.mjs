const appName = "photos";
const appVersion = "5.0.2";
import { t as translate, g as generateUrl, V as Vue, c as translatePlural, o as global } from "./vue.runtime.esm-D0MRZEe4.chunk.mjs";
import { r as NcLoadingIcon, e as NcButton, a as allMimes, l as logger, p as photosStore } from "./index-CZNqUxm0.chunk.mjs";
import { N as NcEmptyContent } from "./NcEmptyContent-BBz98Y_d.chunk.mjs";
import { m as ImageOutlineIcon, n as normalizeComponent } from "./icons-DpGfY1yM.chunk.mjs";
import { F as FileComponent } from "./FileComponent-B5RazorU.chunk.mjs";
import { g as getPhotos } from "./PhotoSearch-Bwow9NGf.chunk.mjs";
import "./index-CEGJzzBP.chunk.mjs";
import "./NcCheckboxRadioSwitch-CX3HXCEk-DHCH3k5i.chunk.mjs";
import "./NcDialog-8ipQ69_t-Bi5MKXbp.chunk.mjs";
const _sfc_main = {
  name: "DashboardOnThisDay",
  components: {
    FileComponent,
    NcButton,
    NcLoadingIcon,
    NcEmptyContent,
    ImageOutlineIcon
  },
  data() {
    return {
      loading: true,
      items: []
    };
  },
  computed: {
    moreUrl() {
      return generateUrl("/apps/photos/thisday");
    }
  },
  async created() {
    try {
      this.items = await getPhotos({
        firstResult: 0,
        nbResults: 1,
        mimesType: allMimes,
        onThisDay: true
      });
    } catch (error) {
      logger.error("Failed to load on this day pictures", { error });
    } finally {
      this.loading = false;
    }
  },
  methods: {
    t: translate
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "on-this-day-dashboard" }, [_vm.loading ? _c("NcLoadingIcon", { attrs: { "size": 48 } }) : _vm.items.length === 0 ? _c("NcEmptyContent", { attrs: { "name": _vm.t("photos", "No picture for this day"), "description": _vm.t("photos", "Picture taken on this day will show up here.") }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("ImageOutlineIcon")];
  }, proxy: true }]) }) : [_c("FileComponent", { staticClass: "on-this-day-dashboard__file", attrs: { "file": _vm.items[0], "allow-selection": false } }), _c("NcButton", { attrs: { "href": _vm.moreUrl } }, [_vm._v(" " + _vm._s(_vm.t("photos", "More photos from this day")) + " ")])]], 2);
};
var _sfc_staticRenderFns = [];
_sfc_render._withStripped = true;
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "f34a5053"
);
__component__.options.__file = "/var/www/html/customapps/photos/src/components/Dashboard/DashboardOnThisDay.vue";
const DashboardOnThisDay = __component__.exports;
Vue.prototype.t = translate;
Vue.prototype.n = translatePlural;
window.addEventListener("DOMContentLoaded", () => {
  window.OCA.Dashboard.register("photos-onthisday", (el) => {
    global.PhotosOnThisDay = new Vue({
      el,
      store: photosStore,
      render: (h) => h(DashboardOnThisDay)
    });
  });
});
//# sourceMappingURL=photos-dashboard.mjs.map
