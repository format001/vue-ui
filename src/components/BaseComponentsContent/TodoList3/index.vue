<template>
    <div class="todolist-wrapper">
        <td-title :title="title"></td-title>
        <td-form
            @dispatch="dispatch"
        ></td-form>
        <data-list
            :todo-data="todoData"
            @dispatch="dispatch"
        ></data-list>
    </div>
</template>

<script>
import TdForm from 'components/BaseComponentsContent/TodoList3/TdForm.vue'
import DataList from 'components/BaseComponentsContent/TodoList3/DataList.vue'
import TdTitle from 'components/BaseComponentsContent/TodoList3/TdTitle.vue'

import dispatch from './dispatchers/index.js'

export default {
    name: "TodoList3",
    components: {TdTitle, DataList, TdForm},
    data () {
        return {
            title: 'Todo List',
            todoData: []
        }
    },
    methods: {
        dispatch(...args) {
            dispatch(this)(...args);
        }
    }
}
</script>

<style scoped lang="scss">
.todolist-wrapper{
    font-size: 20px;
}
</style>