<template>
  <div
      v-magnifier
      class="img-wrap"
      :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px'
      }"
  >
    <a
        href=""
        class="mag-wrap"
        :href="link"
        :target="blank ? '_blank' : ''"
        :style="{
        width: magWidth + 'px',
        height: magHeight + 'px'
      }"
    >
      <img
          class="mag-img"
          :src="imgUrl"
          :alt="imgAlt"
          :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px'
      }"
      >
    </a>
    <a
        class="img-lk"
        :href="link"
    >
      <img
          class="static-img"
          :src="imgUrl"
          :alt="imgAlt"
      >
    </a>
  </div>
</template>

<script>
import { magnifier } from '../../directives/index.js'

export default {
  name: "MagnifierUi",
  directives: {
    magnifier
  },
  props: {
    imgUrl: {
        type: String,
        default () {
        return 'https://img.zcool.cn/community/01utus6hlims0s7brgu5ii3534.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100'
        }
    },
    imgAlt: {
        type: String,
        default: '小熊'
    },
    blank: {
      type: Boolean,
      default: true
    },
    link:{
        type: String,
        default: 'http://www.baidu.com'
    },
    imgWidth: {
      type: Number,
      default: 375
    },
    imgHeight: {
      type: Number,
      default: 500
    },
    magWidth: {
      type: Number,
      default: 100
    },
    magHeight: {
      type: Number,
      default: 100
    },
  },
  mounted() {


  }
}
</script>

<style scoped lang="scss">
.img-wrap {
  position: relative;
    margin: 50px auto;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .static-img {
    width: 100%;
  }

  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #000;
    cursor: move;
    overflow: hidden;

    &.show {
      display: block;
      transform: scale(1.5);
    }

    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>