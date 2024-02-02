import { useSSRContext, defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock } from 'vue';
import { s as storeToRefs } from '../server.mjs';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useCommonStore } from './common-0ed3aaaf.mjs';
import { _ as __nuxt_component_2 } from './nuxt-layout-87061b2d.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "main",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { getData1 } = storeToRefs(commonStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2> components theme default main </h2><ul> \uB85C\uADF8\uC778 \uC774\uB984: ${ssrInterpolate((_a = unref(getData1)) == null ? void 0 : _a.name)}</ul></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/theme/default/main.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "main",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { getData1 } = storeToRefs(commonStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2> components theme link1 main </h2><ul> \uB85C\uADF8\uC778 \uC774\uB984: ${ssrInterpolate((_a = unref(getData1)) == null ? void 0 : _a.name)}</ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/theme/link1/main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "theme",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const layout = ref("linka-main");
    const themeComponent = ref(null);
    const fetchThemeName = async (theme) => {
      new Promise((resolve) => {
        layout.value = theme;
        themeComponent.value = defineComponent(setTheme(theme));
      });
    };
    [__temp, __restore] = withAsyncContext(() => fetchThemeName("default")), await __temp, __restore();
    function setTheme(theme) {
      switch (theme) {
        case "default":
          return _sfc_main$2;
        case "link1":
          return _sfc_main$1;
        default:
          return _sfc_main$2;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: unref(layout) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="main-page"${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(themeComponent)), null, null), _parent2, _scopeId);
            _push2(`</main>`);
          } else {
            return [
              createVNode("main", { class: "main-page" }, [
                (openBlock(), createBlock(resolveDynamicComponent(unref(themeComponent))))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button> \uB2E4\uB978 \uD14C\uB9C8\uB85C \uBCC0\uACBD </button><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=theme-3bfa07c2.mjs.map
