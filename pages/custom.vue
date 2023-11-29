<script setup lang="ts">

import { ref, onMounted } from 'vue';



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


</script>
<template>
 <div class="custom-page">
  custom-page
 </div>
</template>
<style lang="scss" scoped>
</style>