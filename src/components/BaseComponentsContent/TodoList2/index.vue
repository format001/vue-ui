<template>
  <div class="wrap">
    <todo-form
      @add-todo="setTodoList"
    ></todo-form>
    <todo-list
      :todo-list="todoList"
      @toggle-todo="setTodoList"
      @removeTodo="setTodoList"
    ></todo-list>
  </div>
</template>

<script>

import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

import { todoHook } from './hooks/index.js';


export default {
  name: 'TodoList2',
  components: {
    TodoForm,
    TodoList
  },
  setup () {

    // const todoList = ref([]);

    // const addTodo = (item) => {
    //   todoList.value.push(item);
    // }

    // const toggleTodo = (id) => {
    //   todoList.value = todoList.value.map(item => {
    //     item.id === id && (item.completed = !item.completed);
    //     return item;
    //   })
    // }

    // const removeTodo = (id) => {
    //   todoList.value = todoList.value.filter(item => item.id !== id);
    // }

    const [ todoList, setTodoList ] = todoHook();  

    return {
      todoList,
      setTodoList
      // addTodo,
      // toggleTodo,
      // removeTodo
    }
  }
  // data () {
  //   return {
  //     todoList: []
  //   }
  // },
  // methods: {
  //   addTodo (item) {
  //     this.todoList.push(item);
  //   },
  //   toggleTodo (id) {
  //     this.todoList = this.todoList.map(item => {
  //       item.id === id && (item.completed = !item.completed);
  //       return item;
  //     })
  //   },
  //   removeTodo (id) {
  //     this.todoList = this.todoList.filter(item => item.id !== id);
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.wrap{
    font-size: .1rem;
}
</style>