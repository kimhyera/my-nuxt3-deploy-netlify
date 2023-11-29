<script setup>



const page = ref(1);
async function onFetch() {
  page.value++
  const { data } = await useFetch("https://fakeApi.com/posts", {
    params: { page: page.value },
  });
}



</script>

<template>
  <button @click="onFetch">useFetch 클릭</button>
  <div>
    asyncData 와 다르게 중복 호출됨
    {{ page }}!
  </div>
</template>
