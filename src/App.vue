<template>
    <base-layout>
        <template #baseHeader>
            <base-header></base-header>
        </template>
        <template #default>
            <RouterView/>
        </template>
    </base-layout>
</template>

<script setup>
import BaseLayout from './components/BaseLayout/index.vue';
import BaseHeader from './components/BaseHeader/index.vue';





</script>

<style scoped  lang="scss">
div{
    box-sizing: border-box;
}
</style>
