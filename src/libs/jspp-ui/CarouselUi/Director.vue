<template>
    <div class="director dir-prev" v-if="dir === 'prev'">
        <a
            href="javascript:;"
            @click="dirClick(dir)"
        >
            <i class="iconfont icon-left"></i>
        </a>
    </div>
    <div class="director dir-next" v-else-if="dir === 'next'">
        <a
            href="javascript:;"
            @click="dirClick(dir)"
        >
            <i class="iconfont icon-right"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Director',
    props: {
        dir: String
    },
    setup (props, ctx) {
        const dirClick = (dir) => {
            ctx.emit('dirClick', dir);
        }

        return {
            dirClick
        }
    }
}
</script>

<style lang="scss" scoped>
.director {
    position: absolute;
    top: 50%;
    z-index: 1;
    margin-top: -15px;
    width: 40px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    background-color: rgba(0, 0, 0, .3);

    a {
        color: #fff;
        text-decoration: none;

        .iconfont {
            font-size: 46px;
            margin-left: -2px;
        }
    }

    &.dir-next {
        right: 0;
    }

    &.dir-prev {
        left: 0;
    }
}
</style>