<template>
    <div class="base-aside-wrapper" ref="wrap">
        <ul class="base-aside-menu">
            <li
                class="base-aside-item"
                :class="(item.compsLabelName === $route.params.id ? 'active' : '')"
                v-for="(item, index) of data"
                :key="index"
            >
                <router-link @click="setCourseTitle(item.courseTitle)" :to="{name: 'Component', params: {id: item.compsLabelName}}">
                    <div class="base-aside-item-lk">
                        {{ item.title }}
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {store} from '@/store/index.js'

import componentsAsideMenu from '@/config/componentsAsideMenu'
import BScroll from '@better-scroll/core'

export default {
    name: "BaseAside",
    data () {
        return {
            data: componentsAsideMenu
        }
    },
    mounted () {
        this.$nextTick(() => {
            // this.scroll = new BScroll(this.$refs.wrap, {
            //     probeType: 3,
            //     pullUpLoad: true
            // })
        })
    },

    methods: {
        setCourseTitle (courseTitle) {
            store.commit('setCourseTitle', courseTitle);
        }
    }
}
</script>

<style lang="scss" scoped>
.base-aside-wrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;

    .base-aside-menu {
        width: 100%;
        height: 100%;
        overflow: scroll;
        //padding-bottom: 200px;

        .base-aside-item {
            width: 100%;
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

            &.active{
                background-color: #d2f4ea;
            }

            &:last-child {
                margin-bottom: 20px;
            }

            .base-aside-item-lk{
                padding-left: 30px;
            }
        }
    }
}
</style>