<template>
  <div>
    <h1>Article</h1>
    <p>This is an article which describes how to use Dynamic component and Asynchronous component in Vue.</p>
    <p>{{ visitedCount }}</p>
  </div>
</template>

<script setup>
    import {ref} from "vue";

    const visitedCount = ref(0)
</script>

<style>

</style>
