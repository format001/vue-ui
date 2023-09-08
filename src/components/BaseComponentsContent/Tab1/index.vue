<template>
    <div class="tab">
        <tab-index
            :tab-data="tabData"
        ></tab-index>
    </div>
</template>

<script>
import TabIndex from './Tab'
import {reactive, onMounted} from 'vue'
export default {
    name: "Tab1",
    components: {
        TabIndex
    },
    setup(props, ctx){
        let tabData = reactive({
            initialIndex: 0,
            searchValue: 'CONTENT-1',
            data: [
                { id: 1, itemTitle: 'NAV-1', title: 'TITLE-1', content: 'This is CONTENT-1!' },
                { id: 2, itemTitle: 'NAV-2', title: 'TITLE-2', content: 'This is CONTENT-2!' },
                { id: 3, itemTitle: 'NAV-3', title: 'TITLE-3', content: 'This is CONTENT-3!' },
                { id: 4, itemTitle: 'NAV-4', title: 'TITLE-4', content: 'This is CONTENT-4!' },
                { id: 5, itemTitle: 'NAV-5', title: 'TITLE-5', content: 'This is CONTENT-5!' },
            ]
        });

        return {
            tabData
        }
    }
}
</script>

<style scoped lang="scss">
.tab{
    font-size: 14px;
}
</style>
