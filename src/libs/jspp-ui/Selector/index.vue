<template>
    <div ref="titleRef" class="selector" v-focus="123">
        <selector-input ref="childRef"
                        :placeholder="placeholder"
                        :value="inputValue"
                        @searchOptions="searchOptions"
        />
        <selector-menu
            :data="data"
            @setItemValue="setItemValue"
            :searchValue="searchValue"
        />
    </div>
</template>

<script>
import SelectorInput from './Input.vue'
import SelectorMenu from './Menu.vue'
import focus from '../../directives/focus.js'


import {
    reactive,
    toRefs,
    onMounted,
    ref, getCurrentInstance, nextTick
} from 'vue'

export default {
    name: "SelectorUi",
    directives: {
        focus
    },
    components: {
        SelectorInput,
        SelectorMenu
    },
    props: {
        placeholder: {
            type: String,
            default: '请选择框架'
        },
        data: {
            type: Array,
            default () {
                return [
                    {
                        id: 1,
                        value: 'react',
                        text: 'ReactJS'
                    },
                    {
                        id: 2,
                        value: 'react-hooks',
                        text: 'React Hooks'
                    },
                    {
                        id: 3,
                        value: 'vue2',
                        text: 'Vue2.x'
                    },
                    {
                        id: 4,
                        value: 'vue3',
                        text: 'Vue3.0'
                    },
                    {
                        id: 5,
                        value: 'angular1',
                        text: 'AngularJS'
                    },
                    {
                        id: 6,
                        value: 'angular',
                        text: 'Angular'
                    },
                ]
            }
        }
    },
    setup (props, {expose}) {
        const childRef = ref();


        const state = reactive({
            inputValue: '',
            searchValue: ''
        })

        const setItemValue = (item) => {
            state.inputValue = item.text;
            ctx.emit('setItemValue', item.value)
        }

        const searchOptions = (value) => {
            state.searchValue = value
        }

        return {
            setItemValue,
            ...toRefs(state),
            searchOptions,
            // titleRef,
            childRef
        }
    }
}
</script>

<style scoped lang="scss">
.selector {
    position: relative;
    width: 300px;
    height: 500px;
    font-size: 16px;

}
</style>
