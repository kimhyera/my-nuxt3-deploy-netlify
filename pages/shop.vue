<script setup lang="ts">
import { useCommonStore } from '~/stores/common';

const layout = 'default';

const commonStore = useCommonStore();

const { getData1} = storeToRefs(commonStore);


const list = ref([])
const fetchData1 = async () => {
  const id = 1;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  list.value = data

  commonStore.setData1(data)
};

onMounted(async () => {
  await fetchData1();



  

});


// const setLayout = ref("layout-default")

// definePageMeta({
//   layout: '1016'
// })


</script>
<template>
  <NuxtLayout :name="layout">

    <main class="main-page">

      <h2> shop-page</h2>

      <ul class="flex flex-wrap">
        <li v-for="(item, i) in list" :key="i">
          <button>{{ item.title }}</button>
        </li>

      </ul>
    </main>

  </NuxtLayout>
</template>
<style lang="scss" scoped></style>