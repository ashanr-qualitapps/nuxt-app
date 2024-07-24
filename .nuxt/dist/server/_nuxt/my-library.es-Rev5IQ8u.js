import u from "axios";
import { openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString, pushScopeId, popScopeId } from "vue";
const h = (t, s) => {
  const e = t.__vccOpts || t;
  for (const [c, o] of s)
    e[c] = o;
  return e;
}, f = {
  name: "CountryList",
  data() {
    return {
      countries: []
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const t = await u.get("https://restcountries.com/v3.1/all");
        this.countries = t.data;
      } catch (t) {
        console.error("Error fetching countries:", t);
      }
    }
  }
}, y = (t) => (pushScopeId("data-v-5b455779"), t = t(), popScopeId(), t), v = { class: "country-list" }, g = /* @__PURE__ */ y(() => /* @__PURE__ */ createElementVNode("h2", null, "Countries", -1));
function x(t, s, e, c, o, k) {
  return openBlock(), createElementBlock("div", v, [
    g,
    createElementVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.countries, (i) => (openBlock(), createElementBlock("li", {
        key: i.cca3
      }, toDisplayString(i.name.common), 1))), 128))
    ])
  ]);
}
const C = /* @__PURE__ */ h(f, [["render", x], ["__scopeId", "data-v-5b455779"]]);
export {
  C
};
//# sourceMappingURL=my-library.es-Rev5IQ8u.js.map
