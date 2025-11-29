<template>
  <div class="h-full flex flex-row">
    <div class="h-full flex w-1/2 flex-col">
      <ProductComponent  v-for="product in products" :key="product.id" :product="product"
      @click="handleProductClick(product)"
      ></ProductComponent>
    </div>
    <div v-if="selectedProduct" class="h-full flex items-center justify-center w-1/2 bg-gray-300">
      <ProductDetail :product="selectedProduct"></ProductDetail>
    </div>
  </div>
</template>

<script setup>
import ProductComponent from '@/components/ProductComponent.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import { ref } from 'vue';
const products =ref( [
  { id: 1, name: 'Product A', price: 10.0 },
  { id: 2, name: 'Product B', price: 20.0 },
  { id: 3, name: 'Product C', price: 30.0 },
])
const selectedProduct = ref(null);
const handleProductClick = (product) => {

  selectedProduct.value = product;
  
};
</script>

<style>

</style>