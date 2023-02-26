<template>
    <td
        :class="['table-cell',  data.className]"
        @click="tdClick(data.info)"
    >
        {{ data.name }}
    </td>
</template>

<script>
export default {
    name: "BaseTd",
    props: {
        data: Object
    },
    methods: {
        tdClick (info) {
            this.$emit('tdClick', info)
        }
    }
}
</script>

<style lang="scss" scoped>
.table-cell{
    width: 50px;
    height: 50px;
    text-align: center;
    color: #333333;
    overflow: hidden;

    &.current.now{
        color: #1989FA;
    }

    &:hover{
        cursor: default;
        background-color: #bcd9f8;
    }

    &.active{
        background-color: #bcd9f8;
        overflow: hidden;
    }

    &.last{
        color: #cacaca;
    }

    &.future{
        color: #cacaca;
    }
}
</style>