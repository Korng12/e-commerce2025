<template>
  <div>
    <router-link to="/dashboard" >Go to dashboard</router-link>
    <router-link to="/dashboard/users">Show users</router-link>
    <router-link to="/dashboard/product">Product</router-link>
    <router-view></router-view>
     <!-- <RouterLink></RouterLink> -->
  </div>
</template>

<script setup>
// import { RouterLink,RouterView } from 'vue-router';


</script>

<style>

</style>