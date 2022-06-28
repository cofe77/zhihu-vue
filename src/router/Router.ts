import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Type from '@/pages/Type.vue'
import Index from '@/pages/Index.vue'
import Hot from '@/pages/Hot.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: '/type',
    component: Type,
    children: [
      { path: '/type', component: Index },
      { path: '/type/hot', component: Hot }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
