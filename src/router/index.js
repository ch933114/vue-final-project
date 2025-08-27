import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/ToDoListView.vue'),
      meta: { requiresAuth: true },
    },
    // 未定義路由跳轉
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  userStore.initUser()

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    alert('請先登入')
    next('/')
  } else {
    next()
  }
})

export default router
