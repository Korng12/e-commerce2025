<template>
  <div class="flex flex-col items-center rounded p-4" :style="{backgroundColor:color}">
    <img :src="image" class="w-64" alt="">
    <span>{{ name}}</span>
    <span class="text-gray-500">{{ productCount }}</span>
    <span>{{ color }}</span>
  </div>
</template>
<style>
</style>
<script>

export default{
  props:['name','productCount','color','image']
}

</script>