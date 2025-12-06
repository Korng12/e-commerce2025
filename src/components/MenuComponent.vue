<template>
  <div class="flex justify-between items-center p-4 border-b-2 border-gray-200 mb-4">
    
    <h1>{{ props.title }}</h1>
    <div class="flex gap-4">
      <div v-for="(item, index) in props.items" :key="index">
        <p>{{ item}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props=defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
});

</script>

<style>

</style>