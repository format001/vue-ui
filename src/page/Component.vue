<template>
    <div class="content">
        <div class="left-aside" ref="bs">
           <base-aside></base-aside>
        </div>
        <div class="right-content">
            <base-components-content></base-components-content>
        </div>
    </div>
</template>

<script>
import MainLogin from '../components/BaseComponentsContent/MainLogin/index.vue'
import HeaderPage from 'components/BaseHeader/Index'
import BaseAside from 'components/BaseAside/Index'
import BaseComponentsContent from 'components/BaseComponentsContent/Index'

import BScroll from '@better-scroll/core'

export default {
    name: "Component",
    components: {
        MainLogin,
        HeaderPage,
        BaseAside,
        BaseComponentsContent,
    },
    mounted () {
        // this.scroll = new BScroll(this.$refs.bs, {
        //     probeType: 3,
        //     pullUpLoad: true
        // })

    },
    beforeRouteEnter(to, from) {


    },
}
</script>

<style scoped lang="scss">
.content{
    width: 100%;
    height: 100%;
    position: relative;

    .left-aside {
        position: absolute;
        width: 240px;
        height: 100%;
        background-color: white;
    }

    .right-content {
        width: 100%;
        height: 100%;
        padding-left: 240px;
        box-sizing: border-box;
        //border: 1px solid #FBA806;
        //background-color: #FBA806;
    }
}
</style>