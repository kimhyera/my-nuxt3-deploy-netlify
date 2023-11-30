<script setup>
const auth = useAuth();
const user = useUserStore();

console.log('header', auth.value.isAuthenticated);

function onLogout(){
  auth.value.isAuthenticated = false

  user.removeToken(null)
  
  alert('logout');
}



const pageVistCount = usePageVisitCount();
</script>

<template>
  {{ user.getIsAuth }}
  <header class="flex">
    <HeaderAvatar />

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
      <!-- <li>
        <NuxtLink to="/custom">custom</NuxtLink>
      </li> -->
<!-- 
      <li>
        <NuxtLink to="/ex/directive">directive</NuxtLink>
      </li> -->
      <li>
        
      <NuxtLink to="/profile" class="link-my">profile</NuxtLink>
      </li>
      
    </ul>

    {{ user.getIsAuth }}
     <a href="#" v-if="user.getIsAuth">
      <iconLogout  @click="onLogout"/>
    </a>

 
    <NuxtLink v-else to="/login" class="btn-login">
     <iconLogin />
    </NuxtLink>

    
    <div class="cart-row">
      <iconCart />
      <span>1</span>

      <span class="ml-2">visited {{ pageVistCount }}</span>
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

// .link-my{
//   padding: 6px;
//   font-weight: 700;
//   color:rgb(68, 68, 68);
// }
</style>
