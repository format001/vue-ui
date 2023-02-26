<template>
    <h1 class="nav-logo">
        <router-link class="logo" :to="{path: '/'}">
           <img src="https://v2.cn.vuejs.org/images/logo.svg" alt="">
        </router-link>
    </h1>
</template>

<script>
export default {
    name: "NavLogo"
}
</script>

<style lang="scss" scoped>
.nav-logo {
    float: left;
    width: 80px;
    height: 100%;

    .logo{
        display: block;
        margin: 10px;
    }
    img {
        width: 100%;
        vertical-align: top;
    }
}
</style>