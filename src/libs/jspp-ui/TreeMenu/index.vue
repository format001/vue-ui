<template>
  <div class="tree-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TreeMenu"
}
</script>

<style scoped lang="scss">
    .tree-menu{
      width: 100%;
      background-color: sandybrown;
      //margin-top: 200px;
    }
</style>