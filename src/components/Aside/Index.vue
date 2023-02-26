<template>
    <div class="wrapper" ref="wrap">
        <div class="nav-page-component">
            <div class="side-wrapper">
                <div class="side-nav">
                    <ul class="side-menu">
                        <li
                            class="side-item"
                            :class="(item.compsLabelName === $route.params.id ? 'active' : '')"
                            v-for="(item, index) of data"
                            :key="index"
                        >
                            <router-link :to="{name: 'Component', params: {id: item.compsLabelName}}">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import sideMenu from 'data/sideMenu'
import BScroll from '@better-scroll/core'

export default {
    name: "AsidePage",
    data () {
        return {
            data: sideMenu
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrap, {
                probeType: 3,
                pullUpLoad: true
            })
        })
    },
    methods: {
         getScrollSize () {
            if(document.body.scrollWidth) {
                return {
                    width: document.body.scrollWidth,
                    height: document.body.scrollHeight
                }
            } else {
                return {
                    width: document.documentElement.scrollWidth,
                    height: document.documentElement.scrollHeight
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    //width: 100%;
    //height: 100%;
}

.nav-page-component {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .side-wrapper {

        .side-nav {

            .side-menu {
                height: 100%;

                .side-item {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 10px;
                    color: #333;
                    font-size: 16px;

                    &:hover {
                        background-color: #d2f4ea;
                    }

                    &:first-child {
                        margin-top: 20px;
                    }

                    &:last-child {
                       margin-bottom: 60px;
                    }

                    &.active{
                        background-color: #d2f4ea;
                    }

                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding-left: 30px;
                    }
                }
            }
        }
    }
}
</style>