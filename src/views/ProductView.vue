<template>
  <div>
    <p>Hello this is product {{ id }}</p>
    <p>ID: {{ product.id }}</p>
  </div>
  
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { useProduct } from '@/stores/productStore';
  const route= useRoute();
  const productStore=useProduct();
  const id=route.params.productId;
  const product = productStore.products.find(p=>p.id==id);
</script>

<style>

</style>