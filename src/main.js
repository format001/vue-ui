import {
    createApp,
} from 'vue'
import App from './App.vue'

import 'styles/resets.css';
import 'styles/border.css';
import 'js/fastclick.js';
import 'js/common.js';

import {
    store
} from './store/index.js'
import router from './router/index.js'
import MyUiComponents from './libs/jspp-ui/index.js'

/*
* 全局注册自定义指令 VueLazyLoad
* */
import VueLazyLoad from './libs/directives/vueLazyLoad/index.js'


/*
*应用实例
* createApp -> 创建APP -> 返回一个应用实例
* 应用实例主要是用来注册全局组件的
* app 是根组件，根组件的本质就是一个对象 {}
* createApp执行的时候需要一个根组件 createApp({})
* 根组件是vue渲染的起点
* */
const app = createApp(App)
    .use(MyUiComponents)
    .use(store)
    .use(router)
    .use(VueLazyLoad, {
        loading: new URL(`/src/assets/images/loading.gif`, import.meta.url).href,
        error: new URL(`/src/assets/images/error.svg`, import.meta.url).href,
        preload: 1.2
    });

/**
 * 应用实例暴露了很多方法
 * 大多数方法都会返回createApp创建出来的应用实例
 * 允许链式操作
 *
 * component: 全局注册组件
 * config：   应用配置
 * directive: 全局注册自定义指令
 * mixin: 全局注册混入器
 * mount: 挂载组件
 * provide: 注入全局跨组件层级的属性
 * use: 使用插件
 */


/*
* const appComponent = .mount('#app') 根组件
* mount方法执行返回的是根组件实例 vm  mvvm
* 根元素是一个HTML元素
* createApp执行创建Vue应用数量是，需要一个HTML根元素
* <div id="app"></div>
*
* */
const vm = app.mount('#app');

/*
* 每个组件都有自己的组件实例
* 一个应用中所有的组件都共享一个应用实例
* 无论是根组件还是应用内其他组件
* 配置选项、组件行为都是一样的
* */


// Vue2
// new Vue({
//     render: h => h(app)
// }).$mount('app');

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
