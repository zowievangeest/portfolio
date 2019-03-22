<template>
  <div>
    <section
      id="experiences"
      class="hero is-fullheight is-dark has-background-black"
    >
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered">Ervaringen</h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Experiences',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Experiences.scss';
</style>
