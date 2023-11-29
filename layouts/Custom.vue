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
  border:1px solid #0058dc;
  min-height: 100px;
}
</style>