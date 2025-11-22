<template>
  <div class="flex flex-col">
    <p>This is count from pinia:{{userStore.count  }}</p>
    <button @click="userStore.increment">Increment</button>
  </div>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
// import { data } from 'autoprefixer';
import { useUserStore } from '@/states/user';
const userStore=useUserStore();

async function fetchUsers() {
  const res=await axios.get("https://jsonplaceholder.typicode.com/users");
  users.value=res.data;
}
onMounted(()=>{
  fetchUsers();
})
</script>