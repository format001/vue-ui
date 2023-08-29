<template>
    <div>
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
import FormComp from './FormComp.vue'
import ListComp from './List.vue'
import { provide,
    onErrorCaptured
} from 'vue'
import {
    todoReducer,
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO
} from './store'

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

<style scoped>

</style>
