
<script setup lang="ts">

const layout = 'default';


const page = ref(1);
async function asyncData() {
  page.value++
  const { data: posts } = await useAsyncData(
    'posts',
    () =>
      $fetch('https://fakeApi.com/posts', {
        params: {
          page: page.value ,
        },
      })
  );
}

</script>
<template>
  <NuxtLayout :name="layout">

    <main class="main-page">

      <h2> useAsyncData</h2>
  <button @click="asyncData">클릭</button>
      Hello
    {{ page }}!
    </main>

  </NuxtLayout>
</template>
<style lang="scss" scoped></style>
