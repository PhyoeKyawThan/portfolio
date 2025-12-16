import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import SkillView from '@/views/SkillView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "",
    component: HomeView
  },
  {
    path: "/skills",
    component: SkillView
  },
  {
    path: "/about",
    component: AboutView
  }
],
})

export default router
