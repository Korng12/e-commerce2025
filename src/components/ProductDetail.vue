<template>
  <div>
    <h2>Product Details</h2>
    <p>Name: {{ product.name }}</p>
    <p>Price: ${{ product.price }}</p>
  </div>
  
</template>

<script setup>
import { defineProps } from 'vue';
const {product}=defineProps({
  product:Object
})
</script>

<style>

</style>