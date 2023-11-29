<script setup lang="ts">
import { useCommonStore } from '~/stores/common';


const commonStore = useCommonStore();

const { getData1} = storeToRefs(commonStore);


const fetchData1 = async () => {
  const id = 1
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  commonStore.setData1(data);
};

onMounted(async() => {
  await fetchData1();

});

definePageMeta({
  layout:"default",
  title: '관리자 현황',
})

// definePageMeta({
//   middleware: [
//     function (to, from) {
//       // Custom inline middleware


//       console.log('asdf',to);
      
//       // if(getData1.value){
//       //   return console.log('데이터가 있음');
        
//       // }
//     },
//     'auth',
//   ],
// });
</script>
<template>
 <main class="main-page">
  <ContentDoc />
  <h2> main-page</h2>

  <ul>
   로그인 이름:  {{ getData1?.name }}
      <!-- <li v-for="(item, i) in (getData1 as any)" :key="item.id">{{ item.title }}</li> -->
    </ul>
 </main>
</template>
<style lang="scss" scoped>
</style>