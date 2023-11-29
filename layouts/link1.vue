<script setup lang="ts">
</script>
<template>
  <div class="link-1">
    <Header/>
     <slot ></slot>
  </div>
</template>
<style lang="scss" scoped>
.link-1{
  border:1px solid #00c5f6;
  background: rgb(206, 238, 255);
  min-height: 300px;
}
</style>