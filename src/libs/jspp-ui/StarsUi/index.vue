<template>
  <div class="ui-stars">
    <span
        v-for="num in 5"
        :key="num"
      :class="[
          'iconfont icon-star',
          num <= starNum ? 'active' : ''
      ]"
        :style="{ fontSize: size + 'px'}"
        @click="setStarNum(num)"
    ></span>
  </div>
</template>

<script>
import { stars } from '../../directives'

export default {
  name: "StarsUi",
  directives: {
    stars
  },
  props: {
    num: {
      type: Number,
      default: 2
    },
    size: {
      type: Number,
      default: 50
    }
  },
  setup (props, ctx) {
    const [ starNum, setStarNum ] = stars(props.num, () => {
      ctx.emit('getStarNum', starNum.value);
    });

    return {
      starNum,
      setStarNum
    }
  }
}
</script>

<style scoped lang="scss">

@font-face {
  font-family: "iconfont"; /* Project id 3568310 */
  src: url('//at.alicdn.com/t/c/font_3568310_czq8ll172lm.woff2?t=1659620326687') format('woff2'),
  url('//at.alicdn.com/t/c/font_3568310_czq8ll172lm.woff?t=1659620326687') format('woff'),
  url('//at.alicdn.com/t/c/font_3568310_czq8ll172lm.ttf?t=1659620326687') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #999;

  &.icon-star{
    transition: color .3s;
  }

  &.icon-star:before {
    content: "\e693";
  }

  &.active{
    color: #FBA806;
  }
}



</style>