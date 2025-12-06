<template>
  <div class="flex gap-4 py-4">
    <router-link :to="{name:'productView',params:{productId:product.id}} ">

      <div class="relative  w-[200px] h-[350px] border rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <img :src="fixImagePath(product.image)" alt="">
      <p class="absolute top-4 left-2 bg-green-500 w-16">{{ product.promotionAsPercentage }}%</p>
      <p class="mt-2 text-lg font-semibold">{{ product.name }}</p>
      <p class="text-gray-500">{{ product.rating}} </p>
      <p>Instock:{{ product.instock }}</p>
      <p>{{ product.size }}</p>
      <p class="line-through">${{ product.price }} </p>
      <span class="text-green-500">{{ discountedPrice(product) }}</span>
    </div>
    </router-link>
   
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const fixImagePath = (path) => {
  try {
    if (!path) return "";

    // If path is JSON array string like ["uploads\\product\\abc.png"]
    let parsed = path;

    if (typeof path === "string" && path.startsWith("[")) {
      parsed = JSON.parse(path)[0]; // take first image
    }

    // Replace backslashes with forward slashes
    parsed = parsed.replace(/\\/g, "/");

    return `http://localhost:3000/${parsed}`;
  } catch (err) {
    console.error("Invalid image path:", err);
    return "";
  }
};
const discountedPrice = (product) => {
  if (!product.price || !product.promotionAsPercentage) return product.price;
  return (product.price - (product.price * product.promotionAsPercentage / 100)).toFixed(2);
};


</script>
