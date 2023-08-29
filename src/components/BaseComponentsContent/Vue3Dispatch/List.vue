<template>
    <div>
        <p>
            <span>已添加过{{ addCount }}条</span> /
            <span>已删除过{{ removeCount }}条</span>
        </p>
        <ul>
            <list-item
                v-for="todo of todoList"
                :key="todo.id"
                :data="todo"
            ></list-item>
        </ul>
    </div>
</template>

<script setup>
    import ListItem from './ListItem.vue'

    const props = defineProps({
        todoList: {
            type: Array,
            default: () => []
        },
        addCount: {
            type: Number,
        },
        removeCount: {
            type: Number,
        }
    });
    // console.log(addCount)
</script>

<style scoped>

</style>