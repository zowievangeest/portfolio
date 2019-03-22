<template>
  <div>
    <section
      id="certificates"
      class="hero is-fullheight is-dark has-background-black"
    >
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered">Certificaten</h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Certificates',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Certificates.scss';
</style>
