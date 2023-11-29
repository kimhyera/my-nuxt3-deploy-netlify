<script setup>
const auth = useAuth();

console.log('header',auth.value.isAuthenticated);
</script>

<template>
  <header class="flex">
    <HeaderAvatar />

    <div v-if="auth.isAuthenticated">로그인</div>
    <ul class="nav">
        <li>
          <NuxtLink to="/main">main</NuxtLink>
        </li>
        /
        <li>
          <NuxtLink to="/events">events</NuxtLink>
        </li>
        /
        <li>
          <NuxtLink to="/events/122">events/122</NuxtLink>
        </li>
        /
        <li>
          <NuxtLink to="/custom">custom</NuxtLink>
        </li>
        /
        <li>
          <NuxtLink to="/ex/directive">directive</NuxtLink>
        </li>
      </ul>
  </header>
</template>



<style lang="scss" scoped>
header{

  border-bottom: 1px solid #ddd;
}
.nav{
  display: flex;
  background-color: #fff;
  padding: 20px;
  li{
    padding: 0 20px;
  }
}
</style>
