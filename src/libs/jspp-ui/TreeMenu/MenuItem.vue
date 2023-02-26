<template>
  <div class="menu-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuItem"
}
</script>

<style scoped lang="scss">
.menu-item{
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>