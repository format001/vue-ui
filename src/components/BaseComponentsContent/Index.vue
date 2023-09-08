<template>
    <div class="component-main-content">
        <div class="courseTitle" v-if="$store.state.courseTitle">课程：{{ $store.state.courseTitle}}</div>
        <component :is="$route.params.id"/>
    </div>
</template>

<script>
    import MyInputPage from './MyInput'
    import MainLogin from './MainLogin'
    import SideBar from './SideBar'
    import Calculator from './Calculator'
    import VueHooks from './VueHooks'
    import FormCheck from './FormCheck'
    import Carousel from './Carousel'
    import Comment from './Comment'
    import ImgLazy from './ImgLazy/index.vue'
    import picker from './Picker'
    import guide from './Guide/index.vue'
    import myIfShow from './MyIfShow'
    import HFunction from './HFunction'
    import WatchWatchEffect from './WatchWatchEffect'
    import Vue3Dispatch from './Vue3Dispatch'
    import Tab1 from './Tab1'
    import Tab2 from './Tab2'
    import TodoList1 from './TodoList1'
    import TodoList2 from './TodoList2'
    import TodoList3 from './TodoList3'

    export default {
        name: "MainContent",
        components: {
            MyInputPage,
            MainLogin,
            SideBar,
            Calculator,
            VueHooks,
            FormCheck,
            Carousel,
            picker,
            guide,
            Comment,
            ImgLazy,
            myIfShow,
            HFunction,
            WatchWatchEffect,
            Vue3Dispatch,
            Tab1,
            Tab2,
            TodoList1,
            TodoList2,
            TodoList3,
        },
    }
</script>

<style lang="scss" >
.component-main-content {
    width: 100%;
    height: 100%;
    padding: 20px 0 0 20px;
    box-sizing: border-box;
    overflow: scroll;
    //word-wrap:break-word;
    font-size: .1rem;
    //border:1px solid #FBA806;
    .courseTitle{
        padding-bottom: 10px;
    }
}
</style>
