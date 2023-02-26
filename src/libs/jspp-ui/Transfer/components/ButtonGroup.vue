<template>
    <div class="box button-group">
        <button
            :disabled="leftButtonDisabled"
            @click="leftButtonClick"
        >&lt;</button>
        <button
            :disabled="rightButtonDisabled"
            @click="rightButtonClick"
        >&gt;</button>
    </div>
</template>

<script setup>
const props = defineProps({
    leftButtonDisabled: {
        type: Boolean,
        default: true
    },
    rightButtonDisabled: {
        type: Boolean,
        default: true
    },
});

const emit = defineEmits([
    'leftButtonClick',
    'rightButtonClick'
]);

const leftButtonClick = () => {
    emit('leftButtonClick');
}

const rightButtonClick = () => {
    emit('rightButtonClick');
}
</script>

<style lang="scss" scoped>
.button-group {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        border: none;
        outline: none;
        width: 46px;
        height: 46px;
        background-color: darkcyan;
        color: #fff;
        border-radius: 5px;

        &:disabled {
            opacity: .5;
        }

        &:nth-child(2) {
            margin-left: 10px;
        }
    }
}
</style>