<template>
    <div class="selector-input-wrapper"
        :style="{width: width}"
    >
        <label v-show="isFocus" class="placeholder">{{ placeholder }}</label>
        <input
            class="input"
            :type="type"
            :value="content"
            @focus="inputFocus"
            @blur="inputBlur"
            @input="emitInput($event)"
        >
        <span class="iconfont icon-search"></span>
    </div>
</template>

<script setup>
import {nextTick, reactive, ref} from 'vue'

    const props = defineProps({
        placeholder: {
            type: String,
            default: '请选择'
        },
        width: {
            type: String,
            default: '240px'
        },
        type: {
            type: String,
            default: 'text'
        },
        content: {
            type: String,
            default: ''
        },
        isFocus: {
            type: Boolean,
            default: false
        }
    })

    // const isFocus = props.content ? ref(false) : ref(true);
    // const isFocus = reactive({
    //
    // });
    const emit = defineEmits(['update:content']);

    const emitInput = (e) => {
        emit('update:content', e.target.value);
    }
    const inputFocus = () => {
        // isFocus.value = false;
    }

    const inputBlur = () => {
        // console.log(111)
        // setTimeout(() => {
        //     console.log(22)
        //     if (!props.content) {
        //         isFocus.value = true;
        //     }
        // }, 50)
    }

</script>

<style scoped lang="scss">
.selector-input-wrapper {
    position: relative;
    //width: 100%;
    height: 34px;

    .input {
        width: 100%;
        height: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #999;
        border-radius: 5px;
        outline: none;
        transition: all .2s linear;

        &:focus {
            border-color: #1890ff;
            box-shadow: 0 0 3px #1890ff;
        }
    }

    .placeholder,
    .iconfont {
        position: absolute;
    }

    .placeholder {
        left: 15px;
        top: 12px;
        color: #999;
    }

    .iconfont {
        right: 15px;
        top: 10px;
        color: #999;
    }

    &.icon-search {
        //font-size: 22px;
        //top: 8px;
    }
}
</style>