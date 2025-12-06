<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';

</script>

<template>
<div class="h-screen">
  <!-- <HomeView></HomeView> -->
   <router-view></router-view>
</div>
</template>
