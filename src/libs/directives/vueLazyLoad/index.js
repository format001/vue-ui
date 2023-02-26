import {LazyLoading} from '@/libs/directives/vueLazyLoad/lazyLoad.js'

const VueLazyLoad = {
    install (Vue, option) {
        let LazyClass = LazyLoading(Vue);
        let lazyLoad = new LazyClass(option);
        Vue.directive('lazies', {
            beforeMount: lazyLoad.bindLazy.bind(lazyLoad),
        })
    }
}



export default VueLazyLoad