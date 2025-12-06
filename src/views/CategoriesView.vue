<template>
  <div>
    <p>{{ id }}</p>
    <h1>Hello this is category detail {{ category.id }} </h1>
  </div>  
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { useProduct } from '@/stores/productStore';
  const productStore=useProduct()
  const route = useRoute();
  const id=route.params.categoryId;
  const category = productStore.categories.find(c => c.id == id)
</script>

<style>

</style>