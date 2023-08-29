<template>
    <div
        v-for="item of data"
        :key="item.id"
        :class="['list-item', item.disabled ? 'disabled' : '']"
        :draggable="!item.disabled"
        @dragstart="dragItem(item)"
    >
        <input
            type="checkbox"
            :disabled="item.disabled"
            :id="'__checkbox__' + item.id"
            @click="checkboxClick($event.target.checked, leftOrRight, item)"
        >
        <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
    </div>
</template>

<script setup>
    const props = defineProps({
        data: {
            type: Array,
            default: () => []
        },
        leftOrRight: {
            type: String,
            validator (value) {
                return ['left', 'right'].includes(value);
            }
        }
    });

    const emit = defineEmits(['checkboxClick', 'dragItem']);

    const checkboxClick = (checked, leftOrRight, item) => {
        emit('checkboxClick', checked, leftOrRight, item);
    }

    const dragItem = (item) => {
        emit('dragItem', item);
    }
</script>

<style lang="scss" scoped>
.list-item {
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 14px;
    color: #666;

    &.disabled {
        opacity: .6;
    }

    &:hover {
        color: darkcyan;

        input[type="checkbox"]::before {
            content: "";
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid darkcyan;
            color: darkcyan;
            font-size: 12px;
            font-weight: bold;
        }
    }

    input[type="checkbox"] {
        width: 12px;
        height: 12px;
        margin-right: 8px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        line-height: 12px;
        position: relative;
        -webkit-appearance: none;  //去掉原有样式
    }

    input[type="checkbox"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        width: 100%;
        height: 100%;
        border: 1px solid #d9d9d9;
    }

    input[type="checkbox"]:checked::before {
        content: "\2713";
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid darkcyan;
        color: darkcyan;
        font-size: 12px;
        font-weight: bold;
    }

    input[type="checkbox"]:checked + label {
        color: darkcyan;
    }
}
</style>