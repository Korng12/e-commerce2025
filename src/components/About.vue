<template>
  <div>
    <p>count:{{ myCount }}</p>
    <p>double: </p>
  </div>
</template>

<script>
import {useCount} from '../stores/count'
import { mapState } from 'pinia';
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState(useCount,{
      myCount: 'count',
      doubleCount:'double'
    })

  }


}
</script>

<style>

</style>