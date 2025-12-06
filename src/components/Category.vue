<template>
  <div class="flex ">
    <router-link class="flex gap-4" :to="{name: 'categoryView',
        params: { categoryId: category.id }
    }">
    <p>{{ category.id }}</p>
      <img :src="fixImagePath(category.image)" alt="">
    </router-link>
  </div>

 
</template>
<script setup>
import { defineProps } from 'vue';
const props=defineProps({
  category: {
    type: Object,
    required: true
  }
});
const fixImagePath = (path) => {
  if (!path) return "";
  return "http://localhost:3000/" + path.replace(/\\/g, "/");
};


</script>