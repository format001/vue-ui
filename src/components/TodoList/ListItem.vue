<script setup>
  import { inject } from 'vue';

  const {
    toggleTodo,
    removeTodo
  } = inject('todoHandlers');

  const props = defineProps({
    data: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <li>
    <input 
      type="checkbox"
      :checked="data.completed"
      @change="toggleTodo(data.id)"
    />
    <span
      :style="{
        textDecoration: data.completed ? 'line-through' : ''
      }"
    >{{ data.content }}</span>
    <my-button
        type="danger"
        height="22px"
      @click="removeTodo(data.id)"
    >REMOVE</my-button>
  </li>
</template>

<style lang="scss" scoped>

</style>