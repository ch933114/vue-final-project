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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ToDoListView.vue'),
      meta: { requiresAuth: true },
    },
    // 這個放最後，捕捉所有未定義路由
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

// 全域導航守衛
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
