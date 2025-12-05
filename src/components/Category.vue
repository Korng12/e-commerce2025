<template>
  <div class="flex flex-col my-16 gap-4">

    <div class="flex gap-4">
      <Card v-for="(category,index) in categories" :key="index"
        :name="category.name"
        :productCount="category.productCount"
        :color="category.color"
        :image="fixImagePath(category.image)"
      ></Card>
    </div>
    <div class="flex mx-4 gap-4">
      <Promotions v-for="(promotion,index) in promotions" :key="index"
        :title="promotion.title"
        :url="promotion.url"
        :color="promotion.color"
        :buttonColor="promotion.buttonColor"
        :image="fixImagePath(promotion.image)"
      >

      </Promotions>
    </div>
  </div>

 
</template>
<script setup>
import axios from 'axios'
import Card from './Card.vue';
import Promotions from './Promotions.vue';
import {ref,onMounted} from 'vue'
const categories=ref([]);
const promotions=ref([])
const fixImagePath = (path) => {
  if (!path) return "";
  return "http://localhost:3000/" + path.replace(/\\/g, "/");
};

const getCategories=async ()=>{
  const res=await axios.get('http://localhost:3000/api/categories')
  console.log(res.data);
  categories.value=res.data;
}
const getPromotions=async()=>{
  const res=await axios.get('http://localhost:3000/api/promotions');
  console.log(res.data);
  promotions.value=res.data
}
onMounted(()=>{
  getCategories();
  getPromotions()
}
  

)
</script>