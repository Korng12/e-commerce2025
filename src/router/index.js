import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'home',
      path: '/',
      redirect:'/products'
    },
    {
      name:'products',
      path: '/products',
      component: () => import('@/views/ProductsView.vue'),
      children:[
        {name:'productDetails', path:':id', component: () => import('@/components/ProductDetail.vue')}
      ]
    },
    {
      name:'notfound',
      path:'/:catchAll(.*)*',
      component: () => import('@/views/NotFoundView.vue')
    }

  ],
})

export default router
