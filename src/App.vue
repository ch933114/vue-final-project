<template>
  <!-- 遮罩等待畫面 -->
  <div v-if="loading" class="loading-mask">
    <div class="loader"></div>
  </div>
  <RouterView />
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useTodolistStore } from './stores/todoList'

const todolistStore = useTodolistStore()
const { loading } = storeToRefs(todolistStore)
</script>
<style>
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明遮罩 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.loader {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top: 6px solid #ffd370;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
