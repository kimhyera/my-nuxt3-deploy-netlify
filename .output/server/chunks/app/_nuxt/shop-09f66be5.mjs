import { _ as __nuxt_component_2 } from './nuxt-layout-9aafc614.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { s as storeToRefs } from '../server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useCommonStore } from './common-0ed3aaaf.mjs';
import 'vue-router';
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
import 'pinia-plugin-persistedstate';

const layout = "default";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shop",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    storeToRefs(commonStore);
    const list = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: layout }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="main-page"${_scopeId}><h2${_scopeId}> shop-page</h2><ul class="flex flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(unref(list), (item, i) => {
              _push2(`<li${_scopeId}><button${_scopeId}>${ssrInterpolate(item.title)}</button></li>`);
            });
            _push2(`<!--]--></ul></main>`);
          } else {
            return [
              createVNode("main", { class: "main-page" }, [
                createVNode("h2", null, " shop-page"),
                createVNode("ul", { class: "flex flex-wrap" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(list), (item, i) => {
                    return openBlock(), createBlock("li", { key: i }, [
                      createVNode("button", null, toDisplayString(item.title), 1)
                    ]);
                  }), 128))
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shop-09f66be5.mjs.map
