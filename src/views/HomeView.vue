<template>
  <div class="h-screen w-full ">
    <MenuComponent title="Featured Categories" :items="productStore.groups"></MenuComponent>
    <Category :categories="productStore.categories"></Category>
    <Promotions :promotion="productStore.promotions"></Promotions>
    <!-- <div v-for="group in categoriesGroup" :key="group.id">
      <p>{{ group }}</p>
    </div> -->
    <MenuComponent title="Popular Products" :items="productStore.groups"></MenuComponent>
    
    <ProductComonent :products="getPopularProducts"></ProductComonent>


  </div>
</template>

<script setup>
import ProductComonent from '@/components/ProductComonent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import Category from '@/components/Category.vue';
import Promotions from '@/components/Promotions.vue';
import { useProduct } from '@/stores/productStore';
import { computed, onMounted } from 'vue';
const productStore = useProduct();
onMounted(async () => {
 await  productStore.fetchProducts();
 await productStore.fetchGroups();
 await productStore.fetchCategories();
 await productStore.fetchPromotions();
  console.log("helo", productStore.products);
  console.log("helo groups", productStore.groups);
  console.log("Hello promotions", productStore.promotions);
  console.log(typeof productStore.categories);
});
const getPopularProducts = computed(()=>{
 return productStore.getPopularProducts;
})

</script>

<style>

</style>