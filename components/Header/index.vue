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
      
        <li>
          <NuxtLink to="/events">events</NuxtLink>
          
          <ul class="sub">
             <li>
          <NuxtLink to="/events/122">events/122</NuxtLink>
              </li>
              </ul>

        </li>
      
        <li>
          <NuxtLink to="/theme">theme</NuxtLink>
        </li>
      
        <li>
          <NuxtLink to="/fetch/fetch">$fetch</NuxtLink>

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
          <NuxtLink to="/custom">custom</NuxtLink>
        </li>
     
        <li>
          <NuxtLink to="/ex/directive">directive</NuxtLink>
        </li>
      </ul>

     
      
      <NuxtLink to="/login"> <iconLogin/></NuxtLink>

       
  </header>
</template>



<style lang="scss" scoped>
header{

border-bottom: 1px solid #ddd;
padding: 0 20px;
}
.nav{
  display: flex;
  padding: 0 10px;



  >li > a{
    display: block;

    padding: 10px 20px;

   
  }

  >li ul{
    border: 1px solid #ddd;
     a{
    display: block;
    padding: 5px 20px;
    border-bottom: 1px solid #ddd;
  }

  }
}

</style>
