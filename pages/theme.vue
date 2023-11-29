<script setup lang="ts">

definePageMeta({
  layout: false,
});

const layout = ref('linka-main');

const themeComponent = ref<any>(null)

// 비동기로 themeName을 받아오는 함수
const fetchThemeName = async (theme:string) => {
   new Promise((resolve) => {
    // setTimeout(()=>{
     layout.value = theme
     themeComponent.value = defineComponent(setTheme(theme) as any);

      
    // },0)
  });
};

 
 await fetchThemeName('default');


function setTheme(theme:string) {
    switch (theme) {
        case 'default':
            return resolveComponent('theme-default-main');
        case 'link1':
            return resolveComponent('theme-link1-main');
        default:
           return resolveComponent('theme-default-main');
    }
}

</script>
<template>
  <NuxtLayout :name="layout">
    <main class="main-page">
      <component :is="themeComponent"></component>
    </main>
  </NuxtLayout>
  <button @click="fetchThemeName('link1')"> 다른 테마로 변경 </button>


</template>
<style lang="scss" scoped></style>