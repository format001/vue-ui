<template>
    <div class="headerWrapper">
        <header class="header ">
            <div class="container">
                <nav-logo></nav-logo>
                <header-nav></header-nav>
            </div>
        </header>
    </div>
</template>

<script>
import NavLogo from './NavLogo'
import HeaderNav from './Nav/Index'

export default {
    name: "HeaderPage",
    components: {
        NavLogo,
        HeaderNav
    }
}
</script>

<style lang="scss" scoped>
.headerWrapper{
    position: relative;
    width: 100%;
    height: 80px;

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background-color: #fff;
        box-sizing: border-box;

        .container {
            position: relative;
            width: 1140px;
            height: 100%;
            top: 0;
            left: 0;
            line-height: 80px;
            margin: 0 auto;
            box-sizing: border-box;
            border-bottom: 1px solid #dcdfe6;
        }
    }
}

.fix-clear::after {
    content: '';
    display: block;
    clear: both;
}
</style>