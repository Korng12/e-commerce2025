<template>
  <div class="flex w-full gap-2">
    <div v-for="promotion in props.promotion" :key="promotion.id" class="w-[500px] h-[400px] relative border rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <img :src="convertImage(promotion.image)" alt="" class=" w-1/2 h-full object-fit absolute right-0">
      <!-- <p>{{ promotion.title }}</p> -->
      <div class="flex flex-col left-2 absolute w-1/2 z-10">
        
        <h3 class="">{{ promotion.title }}</h3>
        <!-- <p>{{ promotion.buttonColor }}</p> -->
        <a :href="promotion.url" class="w-32 flex p-2 justify-center rounded" :style="{backgroundColor:promotion.buttonColor}">Shop now </a>
      </div>
    </div>
  </div>

</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  promotion: Object
});

const convertImage=(imagePath)=>{
  if(!imagePath || !imagePath.length) return '';
  return "http://localhost:3000/"+ imagePath.replace(/\\/g,'/');
}

</script>