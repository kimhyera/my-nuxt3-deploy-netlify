// store/user.ts
import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref(null);
  const notoken = ref(null);
  const getToken = computed(()=> token.valu)
  const getIsAuth = computed(()=> token.value !== null)

  const setToken = (data: any) => {
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
    removeToken,
  };
}, {
  persist: {
    storage: persistedState.sessionStorage,
    key: 'token',
    reducer: (state) => ({ token: state.token }),
  },
});
