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
import TdForm from 'components/TdList/TdForm.vue'
import DataList from 'components/TdList/DataList.vue'
import TdTitle from 'components/TdList/TdTitle.vue'

import dispatch from './dispatchers/index'

export default {
    name: "TdList",
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
    font-size: 24px;
}
</style>