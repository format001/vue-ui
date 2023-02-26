<template>
    <select
        @change="selectChange($event.target.value)"
    >
        <option
            v-for="(title, index) of data"
            :key="index"
            :value="index"
        >
            {{ title }}
        </option>
    </select>
</template>

<script setup>
    const props = defineProps({
        data: {
            type: Array,
            default: () => []
        }
    });

    const emit = defineEmits(['selectChange']);

    const selectChange = (value) => {
        emit('selectChange', value);
    }
</script>

<style scoped lang="scss">
select{
    border: 1px solid darkcyan;
    border-radius: 10px;
    /*清除select聚焦时候的边框颜色*/
    outline: none;
    /*设置select的宽高*/
    width: 80px;
    height: 30px;
    line-height: 30px;
    /*隐藏select的下拉图标*/
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /*通过padding-left的值让文字处于合适位置*/
    text-align: center;

}
</style>