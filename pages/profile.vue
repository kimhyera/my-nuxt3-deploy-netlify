
<script setup lang="ts">

const layout = 'default';

definePageMeta({
  middleware: ()=>{

    const auth = useAuth();
const user = useUserStore();

console.log(user.getIsAuth);

    return user.getIsAuth
    
  },
});
</script>
<template>
  <NuxtLayout :name="layout">

    <main class="my-page">


      <h2> Profile</h2>
    </main>

  </NuxtLayout>
</template>
<style lang="scss" scoped></style>