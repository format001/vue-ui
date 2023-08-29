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
            <h1>{{ country }}</h1>
            <h2>{{ population }}</h2>
            <button class="btn" @click="setInfo('population', (population) => population + 18)">SET</button>
            <button class="btn" @click="setInfo({
                country: 'France',
                population: 20000
              })">
                SET
            </button>
        </div>
        <h1>{{ name }}</h1>
        <h2>{{ age }}</h2>
        <button class="btn" @click="setName('小野森森')">set name</button>
        <button class="btn" @click="setAge(37)">set age</button>
    </div>
</template>

<script>
import {
    useState,
    useReducer,
    useReactive,
    hook
} from './vue-hooks/index.js';

import {isRef,
    watchEffect,
    getCurrentInstance,
    shallowReactive,
    readonly,
    reactive,
    ref,
    isProxy,
    toRef,
    watch,
    isReactive,
    unref,
    toRaw,
    toRefs,
    shallowRef
} from 'vue'
import {compute} from 'components/BaseComponentsContent/Calculator/dispacher/utils.js'
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
            country: 'United Kingdom',
            population: 1000
        })

        const [state, refState] = hook({
            name: 'Xiaoyesensen',
            age: 18,
        })


        const state1 = shallowRef({ count: 1 })

// 不会触发更改
        state1.value.count = 2

// 会触发更改
//         state1.value = { count: 2 }
        console.log(state1)
        // 深度遍历依赖  执行回调
        // watch( () => state.name, (cur, prev) => {
        //   console.log(cur, prev);
        // }, {
        //     // immediate: true
        // })



        let t = null;
        let count = 0;

        function getData (title) {
          /**
           * request   cancelRequest 防抖
           *
           */
          console.log(title)
          t = setTimeout(() => {
            console.log('网络请求成功' + count);
          }, 3000);
        }

        watchEffect(async (onCleanup) => {
          getData(refState.name.value); // 网络请求

          // 清除上一次的副作用程序
          onCleanup(() => {
            // cancelRequest
            count ++;
            console.log('onCleanup');
            clearTimeout(t);
          })
        })

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
        //width: 40px;
        height: 40px;
        padding: 0 10px;
        margin: 10px;
        text-align: center;
    }
}
</style>