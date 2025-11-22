<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Greeting  from './components/Greeting.vue';
import Category from './components/Category.vue';
import LoginForm from './components/practices/LoginForm.vue';
import Composition from './components/practices/Composition.vue';
</script>

<template>
  <div>
    <!-- <category></category> -->
    <!-- <LoginForm></LoginForm> -->
    <!-- <router-link to="/profile"></router-link> -->
    <!-- <router-view>
    </router-view> -->
    <Greeting></Greeting>
    <Composition></Composition>
  </div>
</template>
