<template>
  <ul>
    <li
      v-for="item of todoList"
      :key="item.id"
    >
      <input 
        type="checkbox"
        :checked="item.completed"
        @click="toggleTodo(item.id)"
      />
      <span
        :class="{ 'completed': item.completed }"
      >{{ item.content }}</span>
      <button @click="removeTodo(item.id)">REMOVE</button>
    </li>
  </ul>
</template>

<script>

import todoTypes from './hooks/actionType.js';

export default {
  name: 'TodoList',
  props: {
    todoList: {
      type: Array,
      default () {
        return []
      },
      validator (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
      }
    }
  },
  emits: ['toggleTodo', 'removeTodo'],
  // methods: {
  //   toggleTodo (id) {
  //     this.$emit('toggleTodo', id);
  //   },
  //   removeTodo (id) {
  //     this.$emit('removeTodo', id);
  //   }
  // }

  setup (props, ctx) {
    const toggleTodo = (id) => {
      ctx.emit('toggleTodo', todoTypes.TOGGLE_TODO, id);
    }

    const removeTodo = (id) => {
      ctx.emit('removeTodo', todoTypes.REMOVE_TODO, id);
    }

    return {
      toggleTodo,
      removeTodo
    }
  }
}
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>