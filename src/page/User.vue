<template>
    <router-view v-slot="props">
        <div>
            <p>Route Params: {{ props.route.params }}</p>
            <p>Route Query: {{ props.route.query }}</p>
        </div>
    </router-view>
</template>

<script setup>
import {  useLink } from 'vue-router'



</script>
