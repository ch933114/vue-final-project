<template>
  <div class="w-full h-[100vh] [background:linear-gradient(175deg,#FFD370_50%,white_50%)]">
    <todoListHeader />
    <todoList />
  </div>
</template>
<script setup>
import todoListHeader from '@/components/todoListHeader.vue'
import todoList from '@/components/todoList.vue'
</script>
