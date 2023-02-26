<template>
    <tr class="table-row">
        <slot></slot>
    </tr>
</template>

<script>
import BaseTd from './BaseTd.vue'

export default {
    name: "BaseTr",
    props: {
        // data: Object
    }
}
</script>

<style lang="scss" scoped>
.table-row{
    width: 100%;
    height: 50px;
}
</style>