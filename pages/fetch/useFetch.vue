<script setup lang="ts">

const layout = 'default';


const page = ref(1);
async function onFetch() {
  page.value++
  const { data } = await useFetch("https://fakeApi.com/posts", {
    params: { page: page.value },
  });
}



</script>
<template>
  <NuxtLayout :name="layout">

    <main class="main-page">

      <h2> useFetch</h2>
      <button @click="onFetch">useFetch 클릭</button>
  <div>
    asyncData 와 다르게 중복 호출됨
    {{ page }}!
  </div>
    </main>

  </NuxtLayout>
</template>
<style lang="scss" scoped></style>
