<script setup lang="ts">
</script>
<template>
  <div class="custom-layout">
    
    <Header/>
     <slot ></slot>
     
  </div>
</template>
<style lang="scss" scoped>
.custom-layout{
  // border:1px solid rgb(142, 0, 250);
  
  background: rgb(239, 239, 239);
  min-height: 100px;
}
</style>