

import { ref, readonly } from 'vue';
export const useCart = () => useState(()=> []);
export const useAuth = () => 
useState(()=> ({
  isAuthenticated:false,
}))

export const usePageVisitCount = ()=> useState(() => 0) 


const token = ref(null);
export const useToken = () => {
  const setToken = (data) => {
    token.value = data;
  };

  const removeToken = () => {
    token.value = null;
  };

  return { token: readonly(token), setToken, removeToken };
};
