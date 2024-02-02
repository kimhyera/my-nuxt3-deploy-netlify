import { _ as __nuxt_component_2 } from './nuxt-layout-9aafc614.mjs';
import { d as defineStore, p as persistedState, e as useAuth } from '../server.mjs';
import { ref, computed, defineComponent, reactive, unref, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-8e5706fd.mjs';
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import './asyncData-c8f082cf.mjs';

const useLocalUser = defineStore("localuser", {
  state: () => ({
    username: "PraZ"
  }),
  persist: true
});
const useCookieUser = defineStore("cookiesuser", {
  state: () => ({
    username: "PraZ"
  }),
  persist: {
    storage: persistedState.cookies
  }
});
const useUserStore = defineStore("user", () => {
  const token = ref(null);
  ref(null);
  const getToken = computed(() => token.valu);
  const getIsAuth = computed(() => token.value !== null);
  const setToken = (data) => {
    token.value = data;
  };
  const removeToken = () => {
    token.value = null;
  };
  return {
    token,
    getToken,
    getIsAuth,
    setToken,
    removeToken
  };
}, {
  persist: {
    storage: persistedState.sessionStorage,
    key: "token",
    reducer: (state) => ({ token: state.token })
  }
});
const layout = "default";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    const user = useUserStore();
    const isLoading = ref(false);
    const form = reactive({
      email: "eve.holt@reqres.in",
      password: "ciryslicka"
    });
    async function onSubmit() {
      if (isLoading.value)
        return;
      isLoading.value = true;
      const url = "https://reqres.in/api/login";
      const { data, error } = await useFetch(url, {
        method: "post",
        body: form
      }, "$4Q7McJQDXG");
      if (error) {
        console.error("Error fetching data:", error);
      }
      if (data == null ? void 0 : data.value.token) {
        user.setToken(data.value.token);
        alert("login");
      }
      isLoading.value = false;
      auth.value.isAuthenticated = true;
      return { data };
    }
    const local = useLocalUser();
    const cookie = useCookieUser();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_2;
      _push(`<!--[-->${ssrInterpolate(unref(local).username)} ${ssrInterpolate(unref(cookie).username)} `);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: layout }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="main-page"${_scopeId}><h2${_scopeId}> Login</h2><form${_scopeId}><ul${_scopeId}><li${_scopeId}><input type="text"${ssrRenderAttr("value", unref(form).email)} class="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"${_scopeId}><input type="password"${ssrRenderAttr("value", unref(form).password)} class="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"${_scopeId}></li></ul><button type="submit" class="p-2 rounded-md"${_scopeId}>login</button></form>`);
            if (unref(isLoading)) {
              _push2(`<div${_scopeId}>...loading...</div>`);
            } else {
              _push2(`<div${_scopeId}>in~!</div>`);
            }
            _push2(`</main>`);
          } else {
            return [
              createVNode("main", { class: "main-page" }, [
                createVNode("h2", null, " Login"),
                createVNode("form", {
                  onSubmit: withModifiers(onSubmit, ["prevent"])
                }, [
                  createVNode("ul", null, [
                    createVNode("li", null, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        class: "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).email]
                      ]),
                      withDirectives(createVNode("input", {
                        type: "password",
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        class: "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).password]
                      ])
                    ])
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: "p-2 rounded-md"
                  }, "login")
                ], 40, ["onSubmit"]),
                unref(isLoading) ? (openBlock(), createBlock("div", { key: 0 }, "...loading...")) : (openBlock(), createBlock("div", { key: 1 }, "in~!"))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-4ed4ed5b.mjs.map
