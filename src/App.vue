<template>
  <div id="app">
    <h1>App Vue File</h1>
    <posts></posts>
  </div>
</template>

<script>
import Posts from './Posts.vue'
export default {
  data () {
    return {
      
    }
  },
  components: { Posts }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
