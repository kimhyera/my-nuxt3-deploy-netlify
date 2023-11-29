<script setup>


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
  <button @click="asyncData">클릭</button>
  <div>
    Hello
    {{ page }}!
  </div>
</template>
