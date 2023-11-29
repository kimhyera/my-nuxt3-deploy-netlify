
import type directiveVue from '~/pages/fetch/directive.vue';
<script setup lang="ts">
import { useCommonStore } from '~/stores/common';

const layout = 'custom';

const commonStore = useCommonStore();

const { getData1 } = storeToRefs(commonStore);


const fetchData1 = async () => {
  const id = 1;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  commonStore.setData1(data);
};

onMounted(async () => {
  await fetchData1();

});

</script>
<template>
  <div>


    <h2>
      components theme default main </h2>

    <ul>
      로그인 이름: {{ getData1?.name }}

    </ul>

  </div>
</template>
<style lang="scss" scoped></style>