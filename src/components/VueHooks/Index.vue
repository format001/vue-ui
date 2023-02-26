<template>
    <div class="vue-hooks">
                <div>
                    <h1>{{ count1 }}</h1>
                    <button class="btn" @click="setCount1(count => count.value + 2)">+</button>
                    <button class="btn" @click="setCount1(count1 - 1)">-</button>
                </div>
                <div>
                    <h1>{{ count2 }}</h1>
                    <button class="btn" @click="setCount2(count => count.value + 2)">+</button>
                    <button class="btn" @click="setCount2(count2 - 1)">-</button>
                </div>
                <div>
                    <h1>{{ count3 }}</h1>
                    <button class="btn" @click="count3Dispatch({ type: 'PLUS', payload: 2 })">+</button>
                    <button class="btn" @click="count3Dispatch({ type: 'MINUS', payload: 1 })">-</button>
                </div>
                <div>
                    <h1>{{ name }}</h1>
                    <h2>{{ age }}</h2>
                    <button class="btn" @click="setInfo('age', (age) => 18)">SET</button>
                    <button class="btn" @click="setInfo({
                        name: 'Xy',
                        age: 20
                      })">SET
                    </button>
                </div>
        <h1>{{ name }}</h1>
        <h2>{{ age }}</h2>
        <button @click="setName('小野森森')">SET NAME</button>
        <button @click="setAge(37)">SET AGE</button>
    </div>
</template>

<script>
import {
    useState,
    useReducer,
    useReactive,
    hook
} from './vue-hooks';

import {isRef, watchEffect, shallowReactive, readonly, reactive, ref, isProxy, toRef, watch, isReactive, unref, toRaw, toRefs} from 'vue'
/*
* 组合式API 封装响应式hooks
* */
export default {
    name: "VueHooks",
    setup () {
        const [count1, setCount1] = useState(0);
        const [count2, setCount2] = useState(100);
        const [count3, count3Dispatch] = useReducer((count, setCount, {type, payload}) => {
            switch (type) {
                case 'PLUS':
                    setCount(count.value += payload);
                    break;
                case 'MINUS':
                    setCount(count.value -= payload);
                    break;
                default:
                    break;
            }
        }, 100);


        const [info, infoRefs, setInfo] = useReactive({
            name: '小红',
            age: 1
        })


        const [state, refState] = hook({
            name: 'Xiaoyesensen',
            age: 18,

        })

        // 深度遍历依赖  执行回调
        watch( () => state.name, (cur, prev) => {
          // console.log(cur, prev);
        }, {
            // immediate: true
        })

        // let t = null;
        // let count = 0;
        //
        // function getData (title) {
        //   /**
        //    * request   cancelRequest 防抖
        //    *
        //    */
        //   console.log(title)
        //   t = setTimeout(() => {
        //     console.log('网络请求成功' + count);
        //   }, 3000);
        // }
        //
        // watchEffect(async (onCleanup) => {
        //   getData(refState.name.value); // 网络请求
        //
        //   // 清除上一次的副作用程序
        //   onCleanup(() => {
        //     // cancelRequest
        //     count ++;
        //     console.log('onCleanup');
        //     clearTimeout(t);
        //   })
        // })

        return {
            count1,
            setCount1,
            count2,
            setCount2,
            count3,
            count3Dispatch,
            ...infoRefs,
            setInfo,
            ...refState,
        }
    }
}
</script>

<style scoped lang="scss">
.vue-hooks {
    font-size: 20px;

    .btn {
        width: 40px;
        height: 40px;
        text-align: center;
        margin: 10px;
    }
}
</style>