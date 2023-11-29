<script setup>
const route = useRoute();
console.log(route);

const next = useNuxtApp()

console.log(next);
</script>
<template>id : {{ $route.params.id }} 
</template>


<style lang="scss" scoped>

</style>

