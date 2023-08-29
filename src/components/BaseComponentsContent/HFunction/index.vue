<script>

/**
 * 渲染函数
 *
 * render函数
 *
 * -> 虚拟DOM -> 真实DOM
 *
 * 组件 -> 模板(字符串) -> 编译模板
 *
 * -> AST树 -> 进行优化 -> 虚拟DOM
 * -> 渲染函数 -> 真实DOM
 *
 * patch -> {  }
 * span -> 234 -> 345 -> 更新真实DOM
 */

/**
 * h函数 -> createNodeDescription -> 创建节点描述
 *      -> VNode -> Virtual Node -> 虚拟节点
 *      -> 多个虚拟节点 -> 虚拟DOM树
 *      -> 对真实DOM树的描述
 *
 *      -> 返回虚拟节点 -> 对真实节点的描述
 *
 * h函数的参数：
 *    component
 *    节点的描述
 */

// new Vue({
//   // render: h => h(App)

//   render (h) {
//     return h(App);
//   }
// }).$mount('#app');

import { h,
    defineAsyncComponent, // 定义异步组件
    resolveDynamicComponent
} from 'vue'
import VModel from './VModel.vue'
import VSlot from './VSlot.vue'
import MyButton from '@/libs/jspp-ui/MyButton/index.vue'
const Comp1 = defineAsyncComponent(() => import('./Comp1.vue'));
const Comp2 = defineAsyncComponent(() => import('./Comp2.vue'));

export default {
    name: "HFunction",
    data () {
        return {
            currentComponentName: 'Comp1',
            username: '',
            password: '',
            type: 'primary'
        }
    },
    computed: {
        currentComponent () {
            return this.currentComponentName === 'Comp1'
                ? Comp1 : Comp2;
        }
    },
    render () {
        /**
         * onClickPassive
         * onKeyupOnce
         * onMouseoverOnceCapture
         */
        // ------------
        // 全局注册的组件resolveComponent(组件名称)
        // return h(App);
        // return h(resolveComponent('App'))

        // 局部注册的App
        // return h(App); === return h(resolveComponent('App'))
        const dComponent = resolveDynamicComponent(this.currentComponent);

        return h('div',
            {
                class: 'h-wrap'
            },
           [
               h(VModel, {
                   username: this.username,
                   password: this.password,
                   'onUpdate:username': value => this.username = value,
                   'onUpdate:password': value => this.password = value,
                   'onSubmit': () => {
                       console.log('Username:' + this.username, 'Password:' + this.password);
                   }
               }),
               h(VSlot, null, {
                    default: () => 'This is TITLE',
                    author: () => '小野森森',
                    content: (props) => h('p', null, props.content)
               }),
               h('div', null, [
                    h(dComponent),
                    h(MyButton, {
                    type: 'primary',
                    onClick: () => {
                         this.currentComponentName = this.currentComponentName === 'Comp1'
                                                   ? 'Comp2'
                                                   : 'Comp1';
                        }
                    }, () => 'Switch Component')
               ])
           ]
        );
        // custom directive 自定义指令
        // <div v-pin:top.animate="200"></div>
        // const pin = resolveDirective('pin');

        // return withDirectives(h('div'), [
        //   [pin, 200, 'top', { animate: true }]
        // ])
    }
}
</script>

<style lang="scss" scoped>
.h-wrap{
    font-size: .06rem;
}
</style>
