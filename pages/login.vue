
<script setup lang="ts">
import { useUserStore } from '~/stores/user';


const layout = 'default';

const auth = useAuth();
const user = useUserStore();

const isLoading = ref(false);


const form = reactive({
  email: "eve.holt@reqres.in",
  password: "ciryslicka"
});

async function onSubmit() {

  if (isLoading.value) return;

  isLoading.value = true;
  const url = "https://reqres.in/api/login";
  const { data, error } = await useFetch(url, {
    method: "post",
    body: form,
  });
  if (error) {
    console.error('Error fetching data:', error);
  } 

  if(data?.value.token){
    user.setToken(data.value.token)
    
    alert('login');
  }

  isLoading.value = false;
  auth.value.isAuthenticated = true;

  //  navigateTo("/main")

  return { data };

}

const local = useLocalUser()
const cookie = useCookieUser()


</script>
<template>

  {{ local.username }}
  {{ cookie.username }}
  <NuxtLayout :name="layout">

    <main class="main-page">

      <h2> Login</h2>
      <form @submit.prevent="onSubmit">

        <ul>
          <li>
            <input type="text" v-model=form.email class=" text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
            <input type="password" v-model=form.password class=" text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
          </li>
        </ul>
        <button type="submit" class="p-2 rounded-md">login</button>
      </form>
      <div v-if="isLoading">...loading...</div>
      <div v-else>in~!</div>

    </main>

  </NuxtLayout>
</template>
<style lang="scss" scoped></style>