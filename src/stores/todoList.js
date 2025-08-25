import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodolistStore = defineStore('todoList', () => {
  const todoData = ref([
    {
      id: 1,
      des: '把冰箱發霉的檸檬拿去丟',
      done: false,
    },
    {
      id: 2,
      des: '打電話叫媽媽匯款給我',
      done: true,
    },
  ])

  const addTodo = (item) => {
    todoData.value.push({
      ...item,
      id: todoData.value.length + 1,
    })
  }

  const removeTodo = (item) => {
    todoData.value = todoData.value.filter((a) => a.id !== item.id)
  }

  const undoneTodo = computed(() => {
    return todoData.value.filter((a) => a.done === false).length
  })

  return { todoData, addTodo, removeTodo, undoneTodo }
})
