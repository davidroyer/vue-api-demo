import Vue from 'vue'
import App from './App.vue'
import Posts from './Posts.vue'
import {store} from './store.js'

new Vue({
  el: 'body',
  components: { App },
  data: {
    sharedState: store.state
  },
  init: function () {
    store.fetchPosts()
  },
  computed: {
    // a computed getter
    b: function () {
      // `this` points to the vm instance
      return this.sharedState.posts
    }
  },
  methods: {
    tellStoreToFetchPosts: function () {

    },
    viewStorePosts: function () {

    },
    setPosts: function () {

    }
  },
  ready: function () {

  }
})
