<template>
  <div class="flex flex-col items-center rounded " :style="{backgroundColor:bgColor}">
    <img :src="img" alt="">
    <span>{{ title }}</span>
    <span class="text-gray-500">{{ quantity }}</span>
  </div>
</template>
<style>
</style>
<script>
export default{
  props:['bgColor','img','title','quantity']
}

</script>