<template>
        <button
            :style="{height: height}"
            :class="`my-btn btn-${ type }`"
        >
          <slot>确定</slot>
        </button>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    height: {
        type: String,
        default: '30px'
    }
})
</script>

<style lang="scss" scoped>

.my-btn {
    //height: 30px;
    padding: 0 14px;
    border-radius: 5px;
    cursor: pointer;

    &.btn-default {
        color: #424242;
        background-color: #dee2e6;
        border-color: #6c757d;
    }
    &.btn-primary {
        color: #155724;
        background-color: #d4edda;
        border-color: #b8dbc0;
    }

    &.btn-waring {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
    }

    &.btn-danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
}
</style>