<template>
    <header class="header">
        <div class="container">
            <nav-logo></nav-logo>
            <header-nav></header-nav>
        </div>
    </header>
</template>

<script>
import NavLogo from './NavLogo'
import HeaderNav from './Nav/Index'

export default {
    name: "BaseHeader",
    components: {
        NavLogo,
        HeaderNav
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;
    padding: 10px 30px 10px 60px;
    //background-color: #fff;
    box-sizing: border-box;
    //border-bottom: 1px solid #dcdfe6;

    .container{
        //width: 100%;
        height: 100%;
    }
}

.fix-clear::after {
    content: '';
    display: block;
    clear: both;
}
</style>