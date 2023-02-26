import {getScrollParent} from '../utils.js'
import LazyImg from './LazyImg.js'
import {nextTick} from 'vue'

export function LazyLoading (Vue) {
    return class LazyClass {
        constructor (option) {
            this.option = option;
            this.isAddScrollListener = false;
            this.lazyImgPool = [];

        }

        bindLazy (el, bindings, vnNode, prevNode) {
            nextTick(() => {
                const scrollParent = getScrollParent(el)

                if (scrollParent && !this.isAddScrollListener) {
                    scrollParent.addEventListener(
                        'scroll',
                        this.handleScroll.bind(this),
                        false
                    )
                }

                const lazyImg = new LazyImg({
                    el,
                    src: bindings.value,
                    options: this.option,
                    imgRender: this.imgRender.bind(this)
                })

                this.lazyImgPool.push(lazyImg);
                this.handleScroll();
            })
        }

        handleScroll () {
            let isVisible = false;

            this.lazyImgPool.forEach(lazyImg => {
                if (!lazyImg.loaded) {
                    isVisible = lazyImg.checkIsVisible();
                    isVisible && lazyImg.loadImg();
                }
            })
        }

        imgRender (lazyImg, state) {``
            const { el, options } = lazyImg;
            const { loading, error} = options;
            let src = '';

            switch (state) {
                case 'loading':
                    src = loading || '';
                    break;
                case 'error':
                    src = error || '';
                    break;
                default:
                    src = lazyImg.src;
                    break;
            }

            el.setAttribute('src', src);
        }
    }
}

