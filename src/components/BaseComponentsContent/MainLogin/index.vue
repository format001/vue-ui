<template>
    <div class="login-tab">
        <div class="login-nav">
            <div
                v-for="tab of state.tabData"
                :key="tab"
                :class="['nav-item', { active: state.currentTab === tab }]"
                @click="changeTab(tab)"
            >{{ tab }}
            </div>
        </div>
        <div class="login-component">
            <keep-alive>
                <component :is="component[state.currentTab]"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script setup>
/**
 * keep-alive
 *
 * <keep-alive>
 *   ....
 * </keep-alive>
 *
 * 组件切换时，缓存组件，保持组件的状态, 避免反复渲染导致性能问题
 *
 * 动态组件
 *
 * <component :is=""></component>
 *
 * 在交互中，组件的渲染是不确定的，根据交互的操作来决定渲染哪个组件
 *
 * 异步组件
 *
 * import { defineAsyncComponent } from 'vue';
 *
 * const { defineAsyncComponenet } = Vue;
 *
 * AsyncComp: () => import('./xxxxx')
 * AsyncComp: defineAsyncComponent(() => {
 *   return new Promise((resolve, reject) => {
 *     resolve({
 *       data () {
 *         return {xxxx}
 *       },
 *       template: ``
 *     })
 *   })
 * })
 *
 * AsyncComp: Vue.defineAsyncComponent(() => import('./xxxx'))
 *
 * const AsyncComp = Vue.defineAsyncComponent(() => import('./xxxx'))
 *
 * export default {
 *   components: {
 *     AsyncComp
 *   }
 * }
 *
 * app.component('async-comp', AsyncComp);
 *
 * 没有必要在当前进行加载的组件
 * 被分割成代码块文件，按需从服务器上下载并加载
 */

/**
 * 登录
 *
 * 账号密码、扫二维码、手机号
 *
 * Tab -> 账号密码
 *
 * 3个选项
 *
 * 一个组件容器
 *
 */
import {defineAsyncComponent, reactive, markRaw, inject, provide} from 'vue';
import Loading from './Loading.vue';
import Error from './Error.vue';

import AccountLogin from './AccountLogin.vue';
const QrcodeLogin = defineAsyncComponent(() => import(/* webpackChunkName: "QrcodeLogin" */ './QrcodeLogin.vue'));
const MobileLogin = defineAsyncComponent({
    loadingComponent: Loading,
    errorComponent: Error,
    delay: 0,
    loader: () => new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(import('./MobileLogin.vue'));
        }, 1000);
    })
});

// const MobileLogin = defineAsyncComponent(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(import('./MobileLogin.vue'));
//         }, 1000);
//     })
// });

    const state = reactive({
        currentTab: 'Account',
        tabData: ['Account', 'Qrcode', 'Mobile'],
    })

    const component = markRaw({
        Account: AccountLogin,
        Qrcode: QrcodeLogin,
        Mobile: MobileLogin
    });

    function changeTab(tab) {
        state.currentTab = tab;
    }

</script>

<style lang="scss">
.login-tab {
    width: 500px;
    border: 1px solid #FBA806;
    font-size: 16px;

    .login-nav {
        height: 50px;
        border-bottom: 1px solid #FBA806;

        .nav-item {
            float: left;
            width: 33.33%;
            text-align: center;
            line-height: 50px;

            &.active {
                background-color: #FBA806;
                color: #fff;
            }
        }
    }
}
</style>
