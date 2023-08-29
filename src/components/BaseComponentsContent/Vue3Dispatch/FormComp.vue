<template>
    <div>
        <input
            type="text"
            placeholder="Please input someThing..."
            v-model="todoText"
        />
        <button-ui
            size="small"
            type="success"
            @click="addTodo"
        >ADD</button-ui>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const todoText = ref('');

const emit = defineEmits(['addTodo']);

const addTodo = () => {
    if (!todoText.value.length) {
        return;
    }

    emit('addTodo', {
        id: new Date().getTime(),
        content: todoText.value,
        completed: false
    });

    todoText.value = '';
}


</script>

<style scoped>

</style>
