<script setup lang="ts">

const layout = 'default';
const route = useRoute();

const next = useNuxtApp()

console.log(next);

</script>
<template>
  <NuxtLayout :name="layout">

    <main class="main-page">

      <h2> Event {{ $route.params.id }} </h2>
    </main>

  </NuxtLayout>
</template>
<style lang="scss" scoped></style>