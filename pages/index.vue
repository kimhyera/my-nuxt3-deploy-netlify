<script setup lang="ts">

const layout = 'default'

// 'custom'

// 비동기로 themeName을 받아오는 함수
// const fetchThemeName = async () => {
  
//    new Promise((resolve) => {
//     // setTimeout(() => {
//       const fetchedThemeName = 'link1'; 
//       // layout.value = fetchedThemeName
//       console.log(fetchedThemeName);
   
//     // }, 1000);
//   });
// };


//  await fetchThemeName();


</script>
<template>
 <NuxtLayout :name="layout"> 
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss" scoped>
</style>