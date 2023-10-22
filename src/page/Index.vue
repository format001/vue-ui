<template>
    <div class="index-wrapper">
        <router-link to="users/eduardo/sad/123">toUser</router-link>
        <button @click="routerPush">点击</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()
const routerPush = () => {

    router.push({
        name: 'User',
        params: {username: 'username'},
        query: {
            name: 'messi'
        },
        redirect: 'Profile'
    })
}


</script>
