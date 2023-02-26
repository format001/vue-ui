<template>
    <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
    </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'

export default {
    name: "User",
    mounted () {

    },
    methods: {

    },

}
</script>

<style scoped>

</style>