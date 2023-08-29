<template>
    <div class="nav-logo">
        <h1 class="logo">
            <router-link :to="{path: '/'}">
                <img src="/src/assets/images/logo.svg" alt="">
            </router-link>
        </h1>
    </div>
</template>

<script>
export default {
    name: "NavLogo",
    methods: {
        assert () {
            return assert
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-logo {
    float: left;
    width: 60px;
    height: 60px;
    line-height: 60px;

    .logo{

    }
    img {
        width: 100%;
        //vertical-align: top;
    }
}
</style>