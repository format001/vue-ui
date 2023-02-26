<template>
        <div class="main-content">
            <div class="content">
                <component :is="comp"/>
            </div>
        </div>
</template>

<script>
import MyInputPage from '../MyInput/Index'
import MainLogin from '../MainLogin/index'
import SideBar from '../compsWrapper/SideBar'
import UseTab from '../compsWrapper/UseTab'
import TodoList from '../TodoList/index'
import Calculator from 'components/Calculator/Index.vue'
import TdList from 'components/TdList/Index.vue'
import VueHooks from 'components/VueHooks/Index.vue'
import FormCheck from 'components/FormCheck'
import Carousel from 'components/Carousel'
import Comment from 'components/Comment'
import ImgLazy from 'components/ImgLazy/index.vue'

export default {
    name: "MainContent",
    components: {
        MyInputPage,
        MainLogin,
        SideBar,
        UseTab,
        TodoList,
        Calculator,
        TdList,
        VueHooks,
        FormCheck,
        Carousel,
        Comment,
        ImgLazy,
    },
    data () {
        return {

        }
    },
    computed: {
        comp () {
            return this.$route.params.id
        },
    },

    mounted () {
    },
    watch: {}
}
</script>

<style lang="scss" scoped>
.main-content {
    padding: 20px 0 0 20px;
    box-sizing: border-box;

    .content {
        height: 100%;
    }
}

</style>