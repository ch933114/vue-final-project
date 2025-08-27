<template>
  <div class="w-full flex justify-between items-center px-[34px] py-[16px]">
    <img src="/src/assets/images/logo.png" alt="logo照片" class="w-[200px] md:w-auto" />
    <div class="flex gap-8">
      <span v-if="user?.nickname" class="hidden md:block font-bold"
        >{{ user.nickname }} 的代辦</span
      >
      <button class="font-bold" @click="logoutAction">登出</button>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import router from '@/router'
const userStore = useUserStore()
const { logout } = userStore
const { user } = storeToRefs(userStore)

const logoutAction = () => {
  // 清空 store 與 cookie
  logout()

  // 跳轉回登入頁
  router.push('/')
}
</script>
