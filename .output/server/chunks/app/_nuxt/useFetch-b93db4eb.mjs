import { _ as __nuxt_component_2 } from './nuxt-layout-9aafc614.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-8e5706fd.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import './asyncData-c8f082cf.mjs';

const layout = "default";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "useFetch",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(1);
    async function onFetch() {
      page.value++;
      await useFetch("https://fakeApi.com/posts", {
        params: { page: page.value }
      }, "$EheDbmqweD");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: layout }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="main-page"${_scopeId}><h2${_scopeId}> useFetch</h2><button${_scopeId}>useFetch \uD074\uB9AD</button><div${_scopeId}> asyncData \uC640 \uB2E4\uB974\uAC8C \uC911\uBCF5 \uD638\uCD9C\uB428 ${ssrInterpolate(unref(page))}! </div></main>`);
          } else {
            return [
              createVNode("main", { class: "main-page" }, [
                createVNode("h2", null, " useFetch"),
                createVNode("button", { onClick: onFetch }, "useFetch \uD074\uB9AD"),
                createVNode("div", null, " asyncData \uC640 \uB2E4\uB974\uAC8C \uC911\uBCF5 \uD638\uCD9C\uB428 " + toDisplayString(unref(page)) + "! ", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fetch/useFetch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=useFetch-b93db4eb.mjs.map
