<template>
  <div class=" overflow-hidden relative   w-full h-[350px] rounded-lg flex flex-col justify-center items-center">
    <img class="absolute " :src="image" alt="">
    <div class="absolute h-[180px] left-4 top-16 flex flex-col justify-between">
      <p class="text-[24px] w-[230px]">{{ title }}</p>
      <a :href="url">
        <button
          class="w-32 py-1 text-white rounded"
          :style="{ backgroundColor: color }"
        >
          Shop Now
        </button>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'url', 'color', 'buttonColor', 'image']
}
</script>