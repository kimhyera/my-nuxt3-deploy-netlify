import { useSSRContext, unref, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, e as useAuth, x as usePageVisitCount } from '../server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-e2f8fdd8.mjs';
import { u as useUserStore } from './user_option-d58d99f1.mjs';

const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593a.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.949-.316C8.98 13.779 9.762 16 12 16c2.269 0 3.042-2.287 3.05-2.311l1.9.621C16.901 14.461 15.703 18 12 18s-4.901-3.539-4.95-3.689l1.899-.627z" fill="#00dc82"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Logo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_iconLogo = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_iconLogo, mergeProps({ class: "avatar" }, _attrs), null, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Avatar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-4d70b0ca"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "i-logout",
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24"
  }, _attrs))} data-v-3e4b8810><path fill="#8595ad" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" data-v-3e4b8810></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Logout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-3e4b8810"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24"
  }, _attrs))} data-v-59fe7e22><path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z" data-v-59fe7e22></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Login.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-59fe7e22"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24"
  }, _attrs))} data-v-5e4ec278><path fill="rgb(51, 65, 85)" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" data-v-5e4ec278></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Cart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5e4ec278"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    const user = useUserStore();
    console.log("header", auth.value.isAuthenticated);
    function onLogout() {
      auth.value.isAuthenticated = false;
      user.removeToken(null);
      alert("logout");
    }
    const pageVistCount = usePageVisitCount();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderAvatar = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_iconLogout = __nuxt_component_2;
      const _component_iconLogin = __nuxt_component_3;
      const _component_iconCart = __nuxt_component_4;
      _push(`<!--[-->${ssrInterpolate(unref(user).getIsAuth)} <header class="flex" data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_HeaderAvatar, null, null, _parent));
      _push(`<ul class="nav" data-v-b75197c3><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/main" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`main`);
          } else {
            return [
              createTextVNode("main")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/events" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`events`);
          } else {
            return [
              createTextVNode("events")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="sub" data-v-b75197c3><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/events/122" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`events/1`);
          } else {
            return [
              createTextVNode("events/1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/theme" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`theme`);
          } else {
            return [
              createTextVNode("theme")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/fetch/fetch" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`fetch`);
          } else {
            return [
              createTextVNode("fetch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="sub" data-v-b75197c3><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/fetch/fetch" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`$fetch`);
          } else {
            return [
              createTextVNode("$fetch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/fetch/asyncData" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`asyncData`);
          } else {
            return [
              createTextVNode("asyncData")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/fetch/useFetch" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`useFetch`);
          } else {
            return [
              createTextVNode("useFetch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`shop`);
          } else {
            return [
              createTextVNode("shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/profile",
        class: "link-my"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`profile`);
          } else {
            return [
              createTextVNode("profile")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul> ${ssrInterpolate(unref(user).getIsAuth)} `);
      if (unref(user).getIsAuth) {
        _push(`<a href="#" data-v-b75197c3>`);
        _push(ssrRenderComponent(_component_iconLogout, { onClick: onLogout }, null, _parent));
        _push(`</a>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "btn-login"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_iconLogin, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_iconLogin)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<div class="cart-row" data-v-b75197c3>`);
      _push(ssrRenderComponent(_component_iconCart, null, null, _parent));
      _push(`<span data-v-b75197c3>1</span><span class="ml-2" data-v-b75197c3>visited ${ssrInterpolate(unref(pageVistCount))}</span></div></header><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b75197c3"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-0a632a7a.mjs.map
