<template>
    <div class="dot-wrapper" v-if="hasDot">
        <div
            class="dot-item"
            :style="{
                    width: widthPercent
            }"
            v-for="item in itemLen"
            :key="item"
        >
            <a
                href="javascript:;"
                class="dot-lk"
                :style="{
                    backgroundColor: (item - 1) === currentIndex ? dotBgColor : 'rgba(255, 255, 255, .3)',
            }"
                @click="dotClick(item - 1)"
            ></a>
        </div>
    </div>
</template>

<script>
import {computed, nextTick} from 'vue'

export default {
    name: 'CarDot',
    props: {
        itemLen: Number,
        currentIndex: Number,
        hasDot: {
            type: Boolean,
            default: true
        },
        dotBgColor: {
            type: String,
            default: '#fff'
        }
    },
    setup (props, ctx) {
        const dotClick = (index) => {
            ctx.emit('dotClick', index);
        }
        const widthPercent = computed(() => {
            return 100 / props.itemLen + '%'
        });

        return {
            dotClick,
            widthPercent
        }
    }
}
</script>

<style lang="scss" scoped>
.dot-wrapper {
    width: 60%;
    height: 6px;
    //border-radius: 10px;
    position: absolute;
    bottom: 15px;
    text-align: center;
    font-size: 0;
    left: 20%;
    z-index: 1;
    //margin-left: -39px;
    //background-color: rgba(255, 255, 255, .3);

    .dot-item {
        display: inline-block;
        height: 100%;
        //margin: 3px;
        //width: 20%;


        .dot-lk {
            display: block;
            //padding-top: 8px;
            //width: 8px;
            height: 100%;
            box-sizing: border-box;
            border-radius: 10px;
            overflow: hidden;
            margin: 0 6px;
        }
    }
}
</style>