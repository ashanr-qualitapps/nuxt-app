import { _ as __nuxt_component_0 } from "./nuxt-link-2X8I7ISh.js";
import { C } from "./my-library.es-Rev5IQ8u.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
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
import "devalue";
const _sfc_main = {
  name: "HomePage",
  components: {
    CountryList: C
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_CountryList = resolveComponent("CountryList");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-adf34f81><h1 data-v-adf34f81>Home Page</h1>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/countries" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to Country List`);
      } else {
        return [
          createTextVNode("Go to Country List")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CountryList, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-adf34f81"]]);
export {
  index as default
};
//# sourceMappingURL=index-DyF2QCKN.js.map
