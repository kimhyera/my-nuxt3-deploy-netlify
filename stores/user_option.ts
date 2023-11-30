import {defineStore} from 'pinia';


export const useUserStore = defineStore('user', {
  state: () => (
    { token: null, notStorage: null}),

  getters: {
    getToken: (state) => state.token,
    getIsAuth: (state) => state.token !== null ? true : false
  },

  actions: {
    setToken(data:any) {
     this.token = data;
    },
    removeToken(data:any) {
      this.token = null;
     },

  },
  persist: {
    storage: persistedState.sessionStorage,
    key: 'token',
    reducer: (state) => ({ token: state.token })
  },
})