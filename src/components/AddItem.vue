<template>
  <div>
    <input @keyup.enter.prevent="addTask" type="text" placeholder="Enter your new task">
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit=defineEmits(['addTask'])
const addTask = (e)=>{
  emit('addTask',e.target.value)
}
</script>

<style>

</style>