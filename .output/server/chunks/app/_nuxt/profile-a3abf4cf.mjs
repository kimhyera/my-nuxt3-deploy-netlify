import { _ as __nuxt_component_2 } from './nuxt-layout-87061b2d.mjs';
import { u as useUserStore } from './user_option-d58d99f1.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
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

const layout = "default";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: layout }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.getIsAuth)} `);
            if (unref(user).getIsAuth) {
              _push2(`<main class="my-page"${_scopeId}><h2${_scopeId}> Profile</h2></main>`);
            } else {
              _push2(`<main class="my-page"${_scopeId}><h2${_scopeId}> \uB85C\uADF8\uC778 \uD574\uC8FC\uC138\uC694 </h2></main>`);
            }
          } else {
            return [
              createTextVNode(toDisplayString((_b = unref(user)) == null ? void 0 : _b.getIsAuth) + " ", 1),
              unref(user).getIsAuth ? (openBlock(), createBlock("main", {
                key: 0,
                class: "my-page"
              }, [
                createVNode("h2", null, " Profile")
              ])) : (openBlock(), createBlock("main", {
                key: 1,
                class: "my-page"
              }, [
                createVNode("h2", null, " \uB85C\uADF8\uC778 \uD574\uC8FC\uC138\uC694 ")
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-a3abf4cf.mjs.map
