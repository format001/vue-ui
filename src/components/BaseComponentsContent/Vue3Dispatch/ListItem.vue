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
        <button-ui
            size="small"
            type="danger"
            @click="removeTodo(data.id)"
        >REMOVE</button-ui>
    </li>
</template>

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

<style scoped>

</style>