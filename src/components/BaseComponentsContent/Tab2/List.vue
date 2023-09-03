<template>
  <div>
    <h1>List</h1>
    <ul>
      <li
        v-for="n in 10"
        :key="n"
      >This is a list item #{{ n }} of my list.</li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style>

</style>
