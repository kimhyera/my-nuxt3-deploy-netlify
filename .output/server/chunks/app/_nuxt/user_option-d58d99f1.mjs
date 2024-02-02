import { d as defineStore, p as persistedState } from '../server.mjs';

const useUserStore = defineStore("user", {
  state: () => ({ token: null, notStorage: null }),
  getters: {
    getToken: (state) => state.token,
    getIsAuth: (state) => state.token !== null ? true : false
  },
  actions: {
    setToken(data) {
      this.token = data;
    },
    removeToken(data) {
      this.token = null;
    }
  },
  persist: {
    storage: persistedState.sessionStorage,
    key: "token",
    reducer: (state) => ({ token: state.token })
  }
});

export { useUserStore as u };
//# sourceMappingURL=user_option-d58d99f1.mjs.map
