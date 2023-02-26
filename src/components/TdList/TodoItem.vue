<template>
    <li>
        <input type="checkbox"
               :checked="data.completed"
               @click="handleItem('COMPLETED', data.id)"
        />
        <span
            :class="{ completed: data.completed}"
        >{{ data.text }}</span>
        <button
            @click="handleItem('REMOVE', data.id)"
        >删除</button>
    </li>
</template>

<script>
export default {
    name: "TodoItem",
    props: {
        data: Object
    },
    methods: {
        handleItem (...args) {
            this.$emit('handleItem', ...args)
        }
    }
}
</script>

<style scoped lang="scss">
.completed{
    text-decoration: line-through;
}
</style>