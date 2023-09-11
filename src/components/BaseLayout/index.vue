<template>
  <div class="container">
    <header class="base-header">
      <slot name="baseHeader">HEADER</slot>
    </header>
    <main class="base-main">
      <slot>MAIN</slot>
    </main>
  </div>
</template>

<script >



</script>

<style lang="scss">
.container{
    font-size: .1rem;
}
  .base-header,
  .base-footer,
  .base-sidebar,
  .base-main {
    position: fixed;
    left: 0;
  }

  .base-header {
    top: 0;
    z-index: 2;
    width: 100%;
    height: 80px;
    //background-color: #fff3cd;
  }

  .base-footer {
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 60px;
    background-color: #ddd;
  }

  .base-sidebar {
    top: 0;
    z-index: 1;
    width: 260px;
    height: 100%;
    //padding: 80px 0;
    background-color: #eee;
    box-sizing: border-box;
  }

  .base-main {
    top: 0;
    width: 100%;
    height: 100%;
    padding: 80px 0 0 0;
    box-sizing: border-box;
  }
</style>
