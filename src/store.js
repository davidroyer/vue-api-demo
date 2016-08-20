import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const store = {
  state: {
    posts: '',
  },
  fetchPosts: function () {
    const baseUrl = 'http://localhost:3004/'
    Vue.http.get(baseUrl + 'posts').then((response) => {
      this.state.posts = response.data
    })
  },
  mutateTest: function () {
    this.state.posts[0].title = 'MUTATED'
  }
}
