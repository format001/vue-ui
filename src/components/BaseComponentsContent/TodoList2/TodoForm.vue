<template>
  <div>
    <input 
      type="text"
      placeholder="Please type something..."
      v-model="todoText"
    />
    <button @click="addTodo">ADD</button>
  </div>
</template>

<script>

import todoTypes from './hooks/actionType.js';
import { ref } from 'vue'

export default {
  name: 'TodoForm',
  // data () {
  //   return {
  //     todoText: ''
  //   }
  // },
  emits: ['addTodo'],
  setup (props, ctx) {
    const todoText = ref('');

    const addTodo = () => {
      ctx.emit('addTodo', todoTypes.ADD_TODO, {
        id: new Date().getTime(),
        content: todoText.value,
        completed: false
      })
    }

    return {
      todoText,
      addTodo
    }
  }
  // methods: {
  //   addTodo () {
  //     this.$emit('addTodo', {
  //       id: new Date().getTime(),
  //       content: this.todoText,
  //       completed: false
  //     })
  //   }
  // }
}
</script>

<style>

</style>