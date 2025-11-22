<template>
  <div :class="className" class=" overflow-hidden relative  bg-black w-full h-[300px] rounded-lg flex flex-col justify-center items-center" :style="{backgroundColor:bgColor}">
    <img class="absolute " :src="img" alt="">
    <div class="absolute h-[180px] left-4 top-16 flex flex-col justify-between">
      <p class="text-[24px] w-[230px]">{{ title }}</p>
      <button class="bg-green-400 w-32 py-1 text-white rounded">Shopw Now</button>
    </div>
  

  </div>
</template>
<script>

export default {
  props:['img','title','bgColor','className']
}
</script>
<style scoped>
.section1 img{
  /* background-color:#F0E8D5; */
  top: 85px;
  right: -35px;

}
.section2 img{
  top: 30px;
  right: -25px;
}
.section3 img{
  top: 90px;
  right: -10px;
}

</style>