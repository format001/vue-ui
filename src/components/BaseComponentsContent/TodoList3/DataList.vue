<template>
    <div>
        <ul>
            <todo-item
                v-for="(item) of todoData"
                :key="item.id"
                :data="item"
                @handleItem="handleItem"
            >

            </todo-item>
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name: "DataList",
    components: {
        TodoItem
    },
    props: {
        todoData: Array
    },
    methods: {
        handleItem(...args) {
            this.$emit('dispatch', ...args);
        }
    }
}
</script>

<style scoped>

</style>