import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../components/practices/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/profile',
      name:'profile',
      component:Profile
    }
  ],
})

export default router
