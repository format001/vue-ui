<template>
    <ul class="nav">
        <li class="nav-item">
            <div class="item-content">
                <router-link class="item-lk active"  :to="{name: 'Component', params: {id: 'transfer'}}">
                    组件
                </router-link>
            </div>
        </li>
        <li class="nav-item">
            <div class="item-content">
                <router-link class="item-lk active" :to="{name: 'Home'}">
                    home
                </router-link>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "HeaderNav"
}
</script>

<style lang="scss" scoped>
.nav {
    float: right;
    height: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    font-size: 16px;

    .nav-item {
        float: left;
        position: relative;
        height: 100%;
        line-height: 40px;
        margin: 0 10px;
        cursor: pointer;

        .item-content {
            height: 100%;

            .item-lk.active {
                padding-bottom: 3px;
                border-bottom: 3px solid #42b983;
            }
        }
    }
}
</style>