<template>
  <div>
    <section id="blog" class="hero is-fullheight is-dark has-background-black">
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered">Blog</h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Blog.scss';
</style>
