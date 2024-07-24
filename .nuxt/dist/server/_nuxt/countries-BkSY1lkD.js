import { C } from "./my-library.es-Rev5IQ8u.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "axios";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main = {
  components: {
    CountryList: C
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CountryList = resolveComponent("CountryList");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-3834b7f5><h1 data-v-3834b7f5>Country List</h1>`);
  _push(ssrRenderComponent(_component_CountryList, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/countries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const countries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3834b7f5"]]);
export {
  countries as default
};
//# sourceMappingURL=countries-BkSY1lkD.js.map
