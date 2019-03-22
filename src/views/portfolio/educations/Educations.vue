<template>
  <div>
    <section
      id="educations"
      class="hero is-fullheight is-dark has-background-black"
    >
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered">Opleidingen</h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Educations',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Educations.scss';
</style>
