<template>
  <div class=" bg-gray-300 w-full flex flex-col items-center border  rounded border-1 justify-center h-1/3 w-1/2">
    <p>{{ product.name }}</p>
  </div>
</template>


<script setup>
import { onMounted,defineProps } from 'vue';

const {product}=defineProps({
  product:Object
})


</script>

<style>

</style>