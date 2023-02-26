<template>
    <div class="login-tab">
        <div class="login-nav">
            <div
                v-for="tab of tabData"
                :key="tab"
                :class="['nav-item', { active: currentTab === tab }]"
                @click="changeTab(tab)"
            >{{ tab }}
            </div>
        </div>
        <div class="login-component">
            <keep-alive>
                <component :is="currentTabComponent"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>

/**
 * 在交互中，组件的渲染是不确定的，根据交互的操作来决定渲染哪个组件
 *
 * 异步组件
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
 */
import {defineAsyncComponent, ref} from 'vue';
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

export default {
    name: 'MainLogin',
    components: {
        AccountLogin,
        QrcodeLogin,
        MobileLogin
        // QrcodeLogin: () => import('./QrcodeLogin'),
        // MobileLogin: () => import('./MobileLogin')
    },
    data () {
        return {
            currentTab: 'Account',
            tabData: ['Account', 'Qrcode', 'Mobile']
        }
    },
    methods: {
        changeTab (tab) {
            this.currentTab = tab;
        }
    },
    computed: {
        currentTabComponent () {
            return this.currentTab.toLowerCase() + '-login';
        }
    }
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