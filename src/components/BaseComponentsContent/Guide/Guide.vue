<template>
    <transition name="guide-fade">
        <div class="guide-wrapper" ref="dom">
            <div
                v-if="step"
                class="guide"
                >
                <component :is="step.insert"></component>
                <div>{{ state.isFirst }}</div>
                <div class="button-group">
                    <button
                        class="btn"
                        v-if="!isLast"
                        @click.prevent="handleGuide('skin')"
                    >掉过浏览</button>
                    <button
                        class="btn"
                        v-if="!isFirst"
                        @click.prevent="handleGuide('previousStep')"
                    >上一步</button>
                    <button
                        class="btn"
                        v-if="!isLast"
                        @click.prevent="handleGuide('nextStep')"
                    >下一步</button>
                    <button
                        class="btn"
                        v-if="isLast"
                        @click.prevent="handleGuide('finish')"
                    >结束</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import {
    computed,
    nextTick, onMounted, onUnmounted, reactive,
    ref,
    watch
} from 'vue'

    const props = defineProps({
        steps: Array,
    });

    const dom = ref()
    const stepIndex = ref(0)

    const state = reactive({
        visible: false,
        type: ''
    });

    const isLast = computed(() =>  props.steps.length - 1 === stepIndex.value)
    const isFirst = computed(() => stepIndex.value === 0)
    const step = computed(() => {
        return props.steps[stepIndex.value];
    })

    const handleGuide = (type) => {
        state.type = type;
        switch (type){
            case 'skin':
                stepIndex.value = -1;
                break;
            case 'previousStep':
                stepIndex !== 0 && (stepIndex.value -= 1);
                break;
            case 'nextStep':
                stepIndex.value += 1;
                break;
            case 'finish':
                stepIndex.value = -1;
                break;
            default:
                break;
        }

        if (!step.value) {
            state.visible = false;
        }
    }

    const setVisible = (isVisible) => {
        state.visible = isVisible;
    }

    watch(stepIndex, () => {
        nextTick(() => {
            if (step.value) {
                 dom.value.style.display='none'

                 step.value.target.scrollIntoView({
                     behavior: "smooth",
                     block: "center",
                     inline: "nearest"
                     // start、center、end 或 nearest
                 });
                setGuidePosition(step.value.target, dom.value);
            }
        })
    },{
        immediate:true
    })

    const setGuidePosition = (target, tip) => {
        setTimeout(() => {
            var targetLeft = target.offsetLeft,
                targetTop = target.offsetTop,
                targetWidth = target.offsetWidth,
                targetHeight = target.offsetHeight;
            const { left, right, bottom } = target.getBoundingClientRect();
            const { tLeft } = tip.getBoundingClientRect();
            const tipWidth =  tip.offsetWidth;
            console.log('a', bottom)
            // tip.style.left = targetLeft + targetWidth / 2 - tipWidth / 2 + "px";
            // tip.style.top = targetTop + targetHeight - parent.scrollTop + "px"
            tip.style.left = left + (right - left) / 2 - tipWidth / 2 + "px";
            tip.style.top = bottom + 6 + "px"
            dom.value.style.display='block'

        }, 250)
        getScrollParent(step.value.target).addEventListener('scroll', function () {
            const { bottom } = target.getBoundingClientRect();
            console.log('c', bottom)

        }, {
            passive: false,
            once: true
        })
    }

    function getScrollParent (el) {
        let _parent = el.parentNode,
            styleOverflow;

        while (_parent) {
            styleOverflow = getComputedStyle(_parent)['overflow'];

            if (/(scroll)|(auto)/.test(styleOverflow)) {
                return _parent;
            }

            _parent = _parent.parentNode;
        }
    }

    onMounted(() => {
        document.addEventListener('keyup', handleKeyup)
    })

    onUnmounted(() => {
        document.removeEventListener('keyup', handleKeyup)
    });

    function handleKeyup ({ keyCode }) {
        switch (keyCode){
            case 39:
                isLast.value
                    ? handleGuide('finish')
                    : handleGuide('nextStep')
                break;
            case 37:
                !isFirst.value && handleGuide('previousStep')
                break;
            case 27:
                handleGuide('skin')
                break;
            default:
                break;
        }
    }

    defineExpose({
        state,
        setVisible
    })
</script>

<style lang="scss">
.guide-fade-enter-from,
.guide-fade-leave-to {
    opacity: 0;
}

.guide-fade-enter-active {
    transition: opacity .2s ease-in;
}

.guide-fade-leave-active {
    transition: opacity .2s ease-out;
}

.guide-wrapper{
    position: fixed;
    //top: 0;
    //left: 0;
    z-index: 2;
    //width: 100%;
    //height: 100%;
    //border: 1px solid #FBA806;

    //background-color: rgba(0, 0, 0, .1);
    font-size: 10px;
    .guide{
        z-index: 3;
        //position: absolute;
        padding: 10px;
        border-radius: 10px;
        background-color: #fff;
        border: 1px solid cadetblue;

        &::before,
        &::after {
            position: absolute;
            content: "";
        }

        &::before{
            top: -8px;
            left: 40px;
            border-right: 8px solid transparent;
            border-bottom: 8px solid cadetblue;
            border-left: 8px solid transparent;
        }

        &::after {
            top: -7px;
            left: 41px;
            border-right: 7px solid transparent;
            border-bottom: 7px solid #fff;
            border-left: 7px solid transparent;
        }

        .button-group{
            .btn{
                //outline:0 none;
                padding: 6px 12px;
                margin-right: 10px;
                border-radius: 10px;
                border: none;
                background-color: cadetblue;
                color: white;

                &:last-child{
                    margin: 0;
                }
            }
        }
    }
}
</style>
