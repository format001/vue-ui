<template>
    <transition
        :name="swiperDir"
    >
        <div class="car-item" v-if="selfIndex === currentIndex">
            <slot></slot>
        </div>
    </transition>
</template>

<script>

import {
    getCurrentInstance, provide,
    reactive,
    toRefs,
    watch,
    inject
} from 'vue';

export default {
    name: 'CarItem',
    setup (props, ctx) {
        const instance = getCurrentInstance();

        const state = reactive({
            selfIndex: instance.vnode.key,
            // currentIndex: instance.parent.ctx.currentIndex,
            // swiperDir: instance.parent.ctx.swiperDir,
        });
        const carouselState = inject('carouselState');

        // watch(() => {
        //     return instance.parent.ctx.swiperDir;
        // }, (value) => {
        //     state.swiperDir = value;
        // })
        //
        // watch(() => {
        //     return instance.parent.ctx.currentIndex;
        // }, (value) => {
        //     state.currentIndex = value;
        // })

        return {
            ...toRefs(state),
            ...toRefs(carouselState),
        }
    }
}
</script>

<style lang="scss" scoped>
.car-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.right-enter-active,
.right-leave-active {
    transition: all .3s linear;
}

.right-enter-active {
    transform: translateX(100%)
}

.right-enter-to {
    transform: translateX(0);
}

.right-leave-active {
    transform: translateX(0);
}

.right-leave-to {
    transform: translateX(-100%)
}



.left-enter-active,
.left-leave-active {
    transition: all .3s linear;
}

.left-enter-active {
    transform: translateX(-100%)
}

.left-enter-to {
    transform: translateX(0);
}

.left-leave-active {
    transform: translateX(0);
}

.left-leave-to {
    transform: translateX(100%)
}

img {
    width: 100%;
}
</style>