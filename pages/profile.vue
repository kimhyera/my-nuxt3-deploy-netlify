
<script setup lang="ts">

const layout = 'default';
const user = useUserStore();

// definePageMeta({
//   middleware: ()=>{

//     const auth = useAuth();
// const user = useUserStore();


//     return user.getIsAuth
    
//   },
// });
</script>
<template>
  <NuxtLayout :name="layout">

    {{ user?.getIsAuth }}

    <main v-if="user.getIsAuth" class="my-page">


      <h2> Profile</h2>
    </main>

    
    <main v-else class="my-page">


<h2> 로그인 해주세요 </h2>
</main>

  </NuxtLayout>
</template>
<style lang="scss" scoped></style>