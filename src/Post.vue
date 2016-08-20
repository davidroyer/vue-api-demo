<template lang="html">
  <li class="post__item">
    <h3>{{ post.title }}</h3>
    <span>{{ post.excerpt }}</span>
  </li>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['post'],
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
