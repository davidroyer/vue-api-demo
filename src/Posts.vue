<template lang="html">
  <div class="posts">
    <h2>Posts File</h2>
    <div class="posts__container">
      <ul class="post__list">
        <li class="post__item" v-for="post in sharedState.posts">
          <h3>{{ post.title }}</h3>
          <span>{{ post.excerpt }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {store} from './store.js'
const baseUrl = 'http://localhost:3004/'

export default {
  data: function () {
    return {
    sharedState: store.state
    }
  },
  ready: function () {
  },
  methods: {
  },
  components: {}
}
</script>

<style lang="css">

</style>
