<template>
  <div class="flex w-full gap-2">
    <div  class="w-full  overflow-hidden relative  h-[350px] rounded-lg flex flex-col justify-center items-center">
    <img class="absolute " alt="">
    <div class="absolute h-[180px] left-4 top-16 flex flex-col justify-between">
      <!-- <p class="text-[24px] w-[230px]">{{ promotion.title }}</p> -->
       
      <p>this is promotion{{promotion.title}}</p>
      <a>
        <button
          class="w-32 py-1 text-white rounded"      
        >
          Shop Now
        </button>

      </a>
    </div>
    </div>
  </div>

</template>
<script setup>
import { onMounted } from 'vue';

const {promotion} = defineProps({
  promotion: Object
});

const convertImage=(imagePath)=>{
  if(!imagePath || !imagePath.length) return '';
  return url+ imagePath.replace(/\\/g,'/');
}

</script>