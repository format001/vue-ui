<template>
    <div>
        <my-input v-model:my-name.prefixer="myName"></my-input>
    </div>
</template>

<script>
import MyInput from './MyInput.vue';

import {
    ref
} from 'vue'

/**
 * 自定义
 *
 * 开关在子组件（按钮）   灯在父组件（div.light）
 * emit app -> 发射信号 -> 父组件 -> 开关灯
 *  $emit    $emit('eventName')   switchMyLight
 * 请求：switchMyLight的行为（子组件）
 * 动作：switchMyLight的方法（父组件）
 * 发出信号：$emit()
 * 关联请求与动作 -> @switch-my-light="switchMyLight"
 */
export default {
    name: "MyInputPage",
    components:{
        MyInput
    },
    setup(props, ctx){
        console.log(ctx)
        let myName = ref('小野森森')

        return {
            myName
        }

    }
}
</script>

<style scoped>

</style>
