<script setup>
const auth = useAuth();

console.log('header', auth.value.isAuthenticated);
</script>

<template>
  <header class="flex">
    <HeaderAvatar />

    <div v-if="auth.isAuthenticated">로그인</div>
    <ul class="nav">
      <li>
        <NuxtLink to="/main">main</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/events">events</NuxtLink>

        <ul class="sub">
          <li>
            <NuxtLink to="/events/122">events/1</NuxtLink>
          </li>
        </ul>

      </li>

      <li>
        <NuxtLink to="/theme">theme</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/fetch/fetch">fetch</NuxtLink>

        <ul class="sub">
          <li>

            <NuxtLink to="/fetch/fetch">$fetch</NuxtLink>
          </li>
          <li>

            <NuxtLink to="/fetch/asyncData">asyncData</NuxtLink>
          </li>
          <li>

            <NuxtLink to="/fetch/useFetch">useFetch</NuxtLink>
          </li>
        </ul>
      </li>


      <li>
        <NuxtLink to="/shop">shop</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/custom">custom</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/ex/directive">directive</NuxtLink>
      </li>
    </ul>



    <NuxtLink to="/login" class="btn-login">
      <iconLogin />
    </NuxtLink>

    <div class="cart-row">
      <iconCart />
      <span>1</span>
    </div>

  </header>
</template>



<style lang="scss" scoped>
header {

  padding: 0 20px;
  background: #fff;
}

.nav {
  display: flex;
  padding: 0 10px 10px;



  >li>a {
    display: block;

    padding: 10px 20px;


  }

  >li ul {
    border: 1px solid #dadce0;
    
  border-radius: 8px;

    a {
      display: block;
      padding: 3px 10px;
      font-size: 14px;
    }

  }
}
.cart-row{
  display: inline-block;
  align-items: center;
  span{
    font-weight: 700;
    font-size: 12px;
  }
}
</style>
