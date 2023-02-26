<template>
    <div class="todo-list">
        <form-comp
            @add-todo="addTodo"
        ></form-comp>
        <list-comp
            :todo-list="todoList"
            :add-count="addCount"
            :remove-count="removeCount"
        ></list-comp>
    </div>
</template>

<script setup>
  import FormComp from './Form';
  import ListComp from './List';
  import { provide } from 'vue';

  import {
    todoReducer,
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO
  } from './store';

  const {
    todoList,
    addCount,
    removeCount, 
    todoDispatch
  } = todoReducer();

  provide('todoHandlers', {
    toggleTodo: todoDispatch(TOGGLE_TODO),
    removeTodo: todoDispatch(REMOVE_TODO)
  });

  const addTodo = todoDispatch(ADD_TODO);

</script>

<style lang="scss" scoped>
.todo-list{
    font-size: 14px;
}
</style>