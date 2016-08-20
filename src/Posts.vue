<template lang="html">
  <div class="posts">
    <button type="button" @click="testMutate" name="button">Test Mutate</button>
    <h2>Posts File</h2>
    <div class="posts__container">
      <ul>
        <post v-for="post in sharedState.posts" :post="post"></post>
      </ul>
      <!-- <post v-for="post in sharedState.posts" :post="post"></post> -->

    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
import {store} from './store.js'

export default {
  data: function () {
    return {
    sharedState: store.state
    }
  },
  ready: function () {
  },
  methods: {
    testMutate: function () {
      store.mutateTest()
    }
  },
  components: { Post }
}
</script>

<style lang="css">

</style>
