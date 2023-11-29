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
border-bottom :1px solid #e2e8f0;
  background: #f8fafc;
  min-height: 300px;
}
</style>