<template>
    <div class="dv">
        <header-page></header-page>
        <div class="main-wrapper">
            <div class="main">
                <div class="page-container page-component">
                    <RouterView/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderPage from 'components/Header/Index'

export default {
    name: 'App',
    components: {
        HeaderPage
    }
}
</script>

<style scoped  lang="scss">
.main-wrapper{
    position: relative;
    width: 100%;
    height: 100%;

    .main {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        //background-color: #d9d9d9;
        margin-bottom: 80px;
        height: calc(100% - 80px) ;

        .page-container{
            //margin: 80px;
            height: 100%;
            width: 1140px;;
            margin: 0 auto;
        }
    }
}

</style>
