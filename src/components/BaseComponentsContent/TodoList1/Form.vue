<template>
    <div class="fix-clear">
        <!--        <input-->
        <!--            type="text"-->
        <!--            placeholder="Please input someThing..."-->
        <!--            v-model="todoText"-->
        <!--        />-->
        <input-ui
            class="input-wrap"
            :isFocus="!Boolean(content)"
            v-model:content="content"
        ></input-ui>

        <my-button
            height="34px"
            @click="addTodo"
        >ADD
        </my-button>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const content = ref('');

const emit = defineEmits(['addTodo']);

const addTodo = () => {
    if (!content.value.length) {
        return;
    }

    emit('addTodo', {
        id: new Date().getTime(),
        content: content.value,
        completed: false
    })

    content.value = ''
}
</script>

<style lang="scss" scoped>
.fix-clear::after {
    content: '';
    display: block;
    clear: both;
}

.input-wrap {
    float: left;
    margin:0 10px 10px 0;
}
</style>