<template>
    <div class="content-wrap">
        <div class="aside" ref="bs">
            <aside-page></aside-page>
        </div>
        <div class="main-content">
            <main-content></main-content>
        </div>
    </div>
</template>

<script>
import sideMenu from 'data/sideMenu'

import MainLogin from '../components/MainLogin/index.vue'
import HeaderPage from 'components/Header/Index'
import AsidePage from 'components/Aside/Index'
import MainContent from 'components/MainContent/Index'

import BScroll from '@better-scroll/core'

export default {
    name: "Component",
    components: {
        MainLogin,
        HeaderPage,
        AsidePage,
        MainContent,
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.bs, {
            probeType: 3,
            pullUpLoad: true
        })

    },
    beforeRouteEnter(to, from) {


    },
}
</script>

<style scoped lang="scss">
.content-wrap {
    width: 100%;
    //background-color: #FBA806;
    height: 100%;

    .aside {
        float: left;
        width: 240px;
        height: 100%;
        overflow: auto;
        //overflow-y: scroll;
    }

    .main-content {
        float: left;
        width: 900px;
        height: 100%;
        overflow: auto;
    }
}
</style>