<template>
  <div>
    <p>{{ greeting }}</p>
  </div>
</template>
<script>
  export default{
    data(){
      return{
      greeting:"Hello welcome to vue class"
    }
    }
  }
</script>
<style>
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:100px;
  }
</style>