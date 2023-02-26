<template>
    <tbody>
        <base-tr
            v-for="(rowArr, index) of trArr"
            :key="index"
        >
            <base-td
                v-for="(item, i) of rowArr"
                :key="i"
                :data="item"
                @tdClick="tdClick"
            ></base-td>
        </base-tr>
    </tbody>
</template>

<script>
import BaseTd from '../BaseTd.vue'
import BaseTr from '../BaseTr.vue'

export default {
    name: "DateTbody",
    components: {
        BaseTr,
        BaseTd
    },
    props: {
        trArr: Array
    },
    data () {
        return {
            data: []
        }
    },
    methods: {
        tdClick (info) {
            this.$emit('tdClick', info)
        }
    }
}
</script>

<style lang="scss" scoped>
.table-row {
    width: 100%;
    height: 50px;
}
</style>