<template>
    <div class="content">
        <div class="left-aside" ref="bs">
           <base-aside></base-aside>
        </div>
        <div class="right-content">
            <base-components-content></base-components-content>
        </div>
    </div>
</template>

<script setup>
import BaseAside from 'components/BaseAside/Index'
import BaseComponentsContent from 'components/BaseComponentsContent/Index'


</script>

<style scoped lang="scss">
.content{
    width: 100%;
    height: 100%;
    position: relative;

    .left-aside {
        position: absolute;
        width: 240px;
        height: 100%;
        background-color: white;
    }

    .right-content {
        width: 100%;
        height: 100%;
        padding-left: 240px;
        box-sizing: border-box;
        //border: 1px solid #FBA806;
        //background-color: #FBA806;
    }
}
</style>
