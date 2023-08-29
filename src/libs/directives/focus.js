export default {
    mounted (el, bindings, vnNode, prevNode) {
        const oSelectorInput = el.getElementsByClassName('selector-input')[0],
            oSelectorMenu = el.getElementsByClassName('selector-menu')[0];

        const oInput = oSelectorInput.getElementsByTagName('input')[0],
            oPlaceHolder = oSelectorInput.getElementsByTagName('label')[0],
            oIcon = oSelectorInput.getElementsByTagName('span')[0];

        oInput.addEventListener('focus', function () {
            oPlaceHolder.style.display = 'none';
            oIcon.className = 'iconfont icon-search';

            setTimeout(() => {
                oSelectorMenu.style.display = 'block';
            }, 200);
        }, false);

        oInput.addEventListener('blur', function () {
            oIcon.className = 'iconfont icon-arrow-down'

            setTimeout(() => {
                oSelectorMenu.style.display = 'none';

                if (this.value.length === 0) {
                    oPlaceHolder.style.display = 'block';
                }
            }, 200);
        }, false);
    }
}



// export default (el, bindings) => {
//   // 如果mounted和updated内部逻辑一样
//   const isShow = bindings.value;
//   // 直接操作DOM
//   el.style.display = isShow ? '' : 'none';
// }

/**
 * el: 被绑定指令的元素，DOM对象 （对象） {}
 *
 * bindings
 * arg: 指令的参数 -> myShow:abc -> abc
 * dir: 指令对象里的所有属性
 * instance: 使用指令的组件实例
 * modifiers: 指令的修饰符集合
 * oldValue: 更新前的指令绑定的值, beforeUpdate, updated
 * value: 当前指令绑定的值
 *
 * vnode: 绑定指令的元素的虚拟节点
 * prevNode: 上一个虚拟节点
 *           beforeUpdate  updated
 */

// // 在绑定元素attr或监听事件绑定事件处理之前
// function created (el, bindings, vnode, prevNode) {
//   console.log('created', el, bindings, vnode, prevNode);
// }

// // 当指令第一次绑定到元素并且在挂载父组件之前调用
// function beforeMount (el, bindings, vnode, prevNode) {
//   console.log('beforeMount', el, bindings, vnode, prevNode);
// }

// // 在绑定元素的父组件被挂载前调用
// function mounted (el, bindings, vnode, prevNode) {
//   console.log('mounted', el, bindings, vnode, prevNode);
// }

// // 在更新包含组件的VNode之前调用
// function beforeUpdate (el, bindings, vnode, prevNode) {
//   console.log('beforeUpdate', el, bindings, vnode, prevNode);
// }

// // 在包含组件的VNode以及子组件的VNode更新后调用
// function updated (el, bindings, vnode, prevNode) {
//   console.log('updated', el, bindings, vnode, prevNode);
// }

// // 卸载绑定元素的父组件之前调用
// function beforeUnmount (el, bindings, vnode, prevNode) {
//   console.log('beforeUnmount', el, bindings, vnode, prevNode);
// }

// // 当指令与元素解除绑定且父组件卸载了，只调用一次
// function Unmounted (el, bindings, vnode, prevNode) {
//   console.log('Unmounted', el, bindings, vnode, prevNode);
// }
