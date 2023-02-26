<template>
    <div
        class="carousel"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
    >
        <div class="inner">
            <CarDot
                :hasDot="hasDot"
                :itemLen="itemLen"
                :currentIndex="currentIndex"
                :dotBgColor="dotBgColor"
                @dotClick="dotClick"
            />
            <CarDirector
                dir="prev"
                v-show="carDirShow"
                @dirClick="dirClick"
            />
            <CarDirector
                dir="next"
                v-show="carDirShow"
                @dirClick="dirClick"
            />
            <slot></slot>
        </div>
    </div>
</template>

<script>

import {
    reactive,
    toRefs,
    onMounted,
    onBeforeUnmount,
    getCurrentInstance, provide
} from 'vue';

import CarDot from './Dot';
import CarDirector from './Director';

export default {
    name: 'CarouselUi',
    components: {
        CarDot,
        CarDirector
    },
    props: {
        autoplay: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 3000
        },
        initial: {
            type: Number,
            default: 0
        },
        hasDot: {
            type: Boolean,
            default: true
        },
        hasDirector: {
            type: Boolean,
            default: true
        },
        dotBgColor: String
    },
    setup (props) {
        const instance = getCurrentInstance();

        const state = reactive({
            currentIndex: props.initial,
            itemLen: 0,
            swiperDir: 'right',
            carDirShow: false
        });

        provide('carouselState', state);

        let t = null;

        const autoPlay = () => {
            if (props.autoplay) {
                t = setInterval(() => {
                    setIndex('next');
                }, props.duration)
            }
        }

        const setIndex = (dir) => {
            switch (dir) {
                case 'next':
                    state.currentIndex += 1;
                    if (state.currentIndex === state.itemLen) {
                        state.currentIndex = 0;
                    }
                    setSwiperDir('right')
                    break;
                case 'prev':
                    state.currentIndex -= 1;
                    if (state.currentIndex === -1) {
                        state.currentIndex = state.itemLen - 1;
                    }
                    setSwiperDir('left')
                    break;
                default:
                    break;
            }
        }

        const dotClick = (index) => {
            setSwiperDir(index > state.currentIndex ? 'right' : 'left');
            state.currentIndex = index;
        }

        const dirClick = (dir) => {
            setIndex(dir);
        }

        const mouseEnter = () => {
            setCarDirShow(true)
            _clearIntervalFn();
        }

        const mouseLeave = () => {
            setCarDirShow(false)
            autoPlay();
        }

        const setSwiperDir = (dir) => {
            state.swiperDir = dir
        }

        const setCarDirShow = (show) => {
            state.carDirShow = show
        }


        onMounted(() => {
            state.itemLen = instance.slots.default()[0].children.length;
            autoPlay();
        });

        onBeforeUnmount(() => {
            _clearIntervalFn();
        });

        function _clearIntervalFn () {
            clearInterval(t);
            t = null;
        }

        return {
            ...toRefs(state),
            dotClick,
            dirClick,
            mouseEnter,
            mouseLeave
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    width: 100%;
    height: 100%;

    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
}
</style>