<template>
  <section class="hero is-info welcome is-small">
    <div class="hero-body">
      <h1 class="title">Welkom, {{ name }}</h1>
      <h2 class="subtitle">
        Ik hoop dat je een geweldige dag hebt!
      </h2>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Welcome',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.welcome {
  margin-top: 30px;
  background: linear-gradient(to right, #05adff, #36d1dc);
}
</style>
