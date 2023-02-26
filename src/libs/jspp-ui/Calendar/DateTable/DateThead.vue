<template>
    <thead>
        <tr class="table-row">
            <base-th
                v-for="(item, index) of data"
                :key="index"
                :data="item"
            >
            </base-th>
        </tr>
    </thead>
</template>

<script>
import BaseTr from '../BaseTr.vue'
import BaseTh from '../BaseTh.vue'

export default {
    name: "DateThead",
    components: {
        BaseTr,
        BaseTh
    },
    data () {
        return {
            data: ['日' , '一', '二', '三', '四', '五', '六']
        }
    }
}
</script>

<style lang="scss" scoped>
.table-row{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid  #bcd9f8;
}
</style>