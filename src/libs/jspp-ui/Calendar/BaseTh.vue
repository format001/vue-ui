<template>
    <th class="thead-cell">
        {{ data }}
    </th>
</template>

<script>
export default {
    name: "BaseTh",
    props: {
        data: String
    }
}
</script>

<style lang="scss" scoped>
.thead-cell {
    width: 50px;
    height: 50px;
    text-align: center;
    //border-bottom: 1px solid #1989FA;
    color: #666;
    font-size: 14px;
}
</style>