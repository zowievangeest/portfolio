<template>
  <div>
    <section id="about" class="hero is-fullheight is-dark has-background-black">
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered">Over mij</h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'About',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'About.scss';
</style>
