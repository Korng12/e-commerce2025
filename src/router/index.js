import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../components/practices/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'home',
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      name:'productView',
      path:"/products/:productId",
      component:()=>import("../views/ProductView.vue")

    },
        {
      name:'categoryView',
      path:"/categories/:categoryId",
      component:()=>import("../views/CategoriesView.vue")

    }


  ],
})

export default router
