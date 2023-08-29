<template>
    <div class="user">
        <h1 class="title">User {{ id }}</h1>
        <div class="brn-group">
            <router-link to="/user/1">
                <button-ui type="success">id: 1</button-ui>
            </router-link>
            <router-link to="/user/2">
                <button-ui type="danger">id: 2</button-ui>
            </router-link>
            <router-link to="/user/profile/profile">
                <button-ui type="primary">profile</button-ui>
            </router-link>
                <button-ui @click="routerClick($event)" type="warning">id: 6</button-ui>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
    import {onBeforeRouteUpdate} from 'vue-router'
    import { useRouter, useRoute } from 'vue-router'

    const props = defineProps({
        id: {
            type: String
        }
    })

    const router = useRouter();


    const routerClick =  (e) => {
        router.push({
            name: 'Index',
            params: {
                // id: 6
            }
        })
    }

    onBeforeRouteUpdate(async () => {

    });

</script>

<style scoped lang="scss">
.user{
    //width: 200px;
    margin: 100px auto;
    text-align: center;

    .title{
        font-size: 20px;
    }
    .brn-group {
        padding-top: 30px;
    }
}
</style>