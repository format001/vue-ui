<template>
  <div>
    <h1>Intro</h1>
    <p>This is an introduction of Dynamic and Asynchronous component in Vue.</p>
    <p>{{ visitedCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      visitedCount: 0
    }
  }

}
</script>

<style>

</style>
