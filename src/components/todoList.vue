<template>
  <div class="max-w-[960px] mx-auto p-4">
    <div class="flex justify-between bg-white rounded-[10px] overflow-hidden">
      <input
        type="text"
        placeholder="新增待辦事項"
        class="px-[16px] py-[12px] w-full focus:outline-none"
        v-model="newTodo.des"
      />
      <button
        class="text-white text-xl bg-black px-3 py-1 m-2 rounded-[5px]"
        @click="addTodo(newTodo)"
      >
        +
      </button>
    </div>
    <div
      v-if="todoData.length !== 0"
      class="flex flex-col items-center mt-[16px] rounded-[10px] overflow-hidden bg-white"
    >
      <div class="flex w-full">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          @click="currentTab = tab.value"
          class="w-full px-[16px] py-[16px] md:px-[48px] md:py-[16px] font-bold"
          :class="currentTab === tab.value ? 'border-b-4 border-b-black' : ''"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="w-full">
        <ul>
          <li class="flex justify-between mx-[24px]" v-for="item in filteredTodos" :key="item.id">
            <div class="flex items-center gap-2 w-full border-b-2 py-[24px]">
              <input type="checkbox" v-model="item.done" class="w-[20px] h-[20px]" />
              <p :class="item.done === true ? 'text-gray-400 line-through' : ''">{{ item.des }}</p>
            </div>
            <button class="p-[24px]" @click="removeTodo(item)">X</button>
          </li>
        </ul>
        <div class="flex justify-between mx-[24px]">
          <p class="flex items-center gap-2 w-full py-[24px] font-bold">
            {{ undoneTodo }} 個待完成項目
          </p>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col items-center p-[60px]">
      <p class="font-bold">目前尚無待辦事項</p>
      <img src="/src/assets/images/empty_deco.png" alt="無待辦插圖" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useTodolistStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'

const todoListStore = useTodolistStore()
const { addTodo, removeTodo } = todoListStore
const { todoData, undoneTodo } = storeToRefs(todoListStore)
const newTodo = ref({
  des: '',
  done: false,
})

const tabs = [
  { label: '全部', value: 'all' },
  { label: '待完成', value: 'pending' },
  { label: '已完成', value: 'done' },
]

const currentTab = ref('all')

const filteredTodos = computed(() => {
  if (currentTab.value === 'pending') {
    return todoData.value.filter((item) => item.done === false)
  } else if (currentTab.value === 'done') {
    return todoData.value.filter((item) => item.done === true)
  } else {
    return todoData.value
  }
})
</script>
