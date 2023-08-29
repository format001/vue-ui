<template>
    <div class="tab">
        <div class="nav">
            <div
                v-for="(value, key) in navData"
                :key="key"
                :class="['nav-item', { 'active': key === currentTab }]"
                @click="setCurrentTab(key)"
            >{{ value }}</div>
        </div>

        <div class="component">
            <!-- 组件的name属性或局部注册组件名称 -->
            <!-- 字符串形式  逗号后面不可以有空格 -->
            <!-- <keep-alive exclude="List,Intro"> -->

            <!-- 与exclude相反 -->
            <!-- <keep-alive include="List,Intro"> -->

            <!-- 可以写数组，注意一定要是数组类型，推荐这种写法 -->
            <!-- <keep-alive :include="['List', 'Intro']"> -->

            <!-- 正则匹配 -->
            <!-- <keep-alive :include="/n|c/"> -->
            <!-- 2最多可缓存的组件数
                如果达到了2个组件，在创建新的组件实例之前，缓存组件时间最久且
                没有被访问的组件实例会被销毁
             -->
            <!-- <keep-alive :max="2"> -->
            <keep-alive include="List">
                <component :is="currentComponent"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>

// import Intro from './components/Intro.vue';
// import Article from './components/Article.vue';
// import List from './components/List.vue';


/**
 * template -> AST树（v-if  v-for  v-show @click）-> JS逻辑/过滤掉
 * 干净的AST树 -> vNode虚拟节点 -> vDOM -> rDOM
 *
 * 每一次视图要更新
 *
 * 更新内容 -> vNode -> old vNode -> compare -> diff -> patch
 * -> 更新rDOM描述 -> 根据patch -> 更新真实DOM
 *
 * 视图要变化 -> vNode -> 有/没有
 *           没有 -> 重新组装vNode -> 更新DOM
 *           有   -> 现成的vNode -> 更新DOM   keep-alive
 *                   缓存当前组件的vNode
 *                   不经过unmount
 *
 *           缓存的是组件的实例 -> 有什么？vNode
 *
 *
 * vDOM  Virtual DOM
 * vNode Virtual Node
 * rDOM  Real DOM
 * rNode Real Node
 */


import { Intro, Article, List } from './AsyncComponents.js';

export default {
    name: 'Tab-2',
    components: {
        Intro,
        Article,
        List
    },
    data () {
        return {
            currentTab: 'intro',
            navData: {
                'intro': 'Intro',
                'list': 'List',
                'article': 'Article'
            }
        }
    },
    computed: {
        currentComponent () {
            switch (this.currentTab) {
                case 'intro':
                    return Intro;
                case 'list':
                    return List;
                case 'article':
                    return Article;
                default:
                    break;
            }
        }
    },
    methods: {
        setCurrentTab (tab) {
            this.currentTab = tab;
        }
    }
}
</script>

<style lang="scss" scoped>
.tab {
    width: 500px;
    height: 500px;
    border: 1px solid #FBA806;
    font-size: 16px;

    .nav {
        height: 50px;
        border-bottom: 1px solid #FBA806;

        .nav-item {
            float: left;
            width: 33.33%;
            height: 100%;
            text-align: center;
            line-height: 50px;

            &.active {
                background-color: #FBA806;
                color: #fff;
            }
        }
    }

    .component {
        padding: 30px;
        box-sizing: border-box;
    }
}
</style>