<template>
    <div class="nav-wrap">
        <ul class="nav-list">
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
    </div>
</template>

<script>
export default {
    name: "HeaderNav"
}
</script>

<style lang="scss" scoped>
.nav-wrap{
    position: relative;

    .nav-list {
        position: absolute;
        right: 60px;
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        font-size: 16px;
        //background-color: #fff3cd;

        .nav-item {
            float: left;
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
}
</style>