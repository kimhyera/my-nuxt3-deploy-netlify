<script setup lang="ts">

import { ref, onMounted } from 'vue';

const auth = useAuth();



definePageMeta({
    layout:'default',
    title: '페이지 제목',
  });

  
const themeName:any = ref('default');

// 비동기로 themeName을 받아오는 함수
const fetchThemeName = async () => {
   new Promise((resolve) => {
    // setTimeout(() => {
      const fetchedThemeName = 'link1'; 
      themeName.value = fetchedThemeName
      console.log(fetchedThemeName);
      
      // definePageMeta({
      //   layout: fetchedThemeName,
      // });
    // }, 1000);
  });
};


onMounted(async () => {
 await fetchThemeName();
  console.log(themeName.value);

});

const isLoading = ref(false)
const password = ref()


const form = reactive({
  email:"eve.holt@reqres.in",
  password : "ciryslicka"
})

async function onSubmit(){

if(isLoading.value) return;

isLoading.value = true;
const url = "https://reqres.in/api/login"
   const {data, error} = await useFetch(url,{
    method: "post",
    body:form,
   })


   console.log(error);
   if (error) {
      console.error('Error fetching data:', error);
    }else{
      
    alert('로그인되었습니다.')

    }

   isLoading.value = false;

   
   auth.value.isAuthenticated = true;

   navigateTo("/main")

   return { data };
   
}


</script>
<template>
 <main class="custom-page">

   <form @submit.prevent="onSubmit">
    
   <ul>
    <li>
      <input type="text" v-model=form.email class=" text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
      <input type="password" v-model=form.password class=" text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
    </li>
   </ul>
   <button type="submit" class="p-2 rounded-md bg-indigo-600 text-white">login</button>
   </form>

   
  <div v-if="isLoading">...loading...</div>
  <div v-else>in~!</div>
 </main>
</template>
<style lang="scss" >

</style>