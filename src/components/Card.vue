<template>

  <div>

    <p>This is card</p>
  <p>This is is message from parrent {{ user}}</p>
  

  </div>
</template>
<style>
</style>
<script>
  import { inject } from 'vue'

  export default{
    setup(){
      const user = inject('name')
      return {user}
    }
  }
</script>