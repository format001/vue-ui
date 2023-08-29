<template>
    <div class="wrapper"> home </div>
</template>

<script setup>
import {
    onUnmounted,
    onBeforeMount,
    onMounted,
    onUpdated,
    onBeforeUpdate,
    onBeforeUnmount,
    ref, reactive
} from "vue";
import {
    useStore
} from "vuex";

const store = useStore();






</script>

<style scoped lang="scss">
.wrapper{
    margin-left: 50px;
    height: 100%;
    overflow-y: scroll;
}
</style>
