<template>
  <div>
    <input type="checkbox">
    <span>{{ todo.task }}</span>
  </div>
  
</template>

<script setup>

import {defineProps} from 'vue';
const {todo}=defineProps(['todo']);
</script>

<style>
  div{
    
  }

</style>