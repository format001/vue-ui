<template>
    <table class="date-table">
        <slot></slot>
    </table>
</template>

<script>
import DateThead from './DateThead.vue'
import DateTbody from './DateTbody.vue'

export default {
    name: "Datetable",
    components: {
        DateThead,
        DateTbody
    },
    props: {
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.date-table{
    width: 100%;
    box-sizing: border-box;
}
</style>