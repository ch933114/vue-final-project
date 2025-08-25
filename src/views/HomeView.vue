<template>
  <div class="bg-primary flex justify-center">
    <div
      class="flex flex-col items-center p-8 md:p-16 md:flex-row w-full min-h-[100vh] max-w-[1028px] md:gap-8"
    >
      <div class="flex flex-col gap-8 items-center md:w-1/2">
        <img src="/src/assets/images/logo_lg.png" alt="logo照片" />
        <img
          src="/src/assets/images/img.png"
          alt="系統插圖"
          class="hidden md:flex w-[386px] h-[386px]"
        />
      </div>
      <div class="w-full md:w-1/2">
        <div v-if="loginView"><LoginForm @changeLoginView="changeLoginView" /></div>
        <div v-else><SignUp @changeLoginView="changeLoginView" /></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import SignUp from '@/components/SignUp.vue'

const loginView = ref('true')
const changeLoginView = () => {
  loginView.value = !loginView.value
}
</script>
