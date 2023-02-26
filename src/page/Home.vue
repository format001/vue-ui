<template>
    <div class="wrapper">
         <div>home</div>
    </div>
</template>

<script>


export default {
    name: "Home",
   components: {

   },
    mounted () {
        // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    }
}
</script>

<style scoped lang="scss">
.wrapper{
    margin-left: 50px;
    height: 100%;
    overflow-y: scroll;
}
</style>