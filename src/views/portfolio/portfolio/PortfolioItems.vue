<template>
  <div>
    <section
      id="portfolioItems"
      class="hero is-fullheight is-dark has-background-black"
    >
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered">Portfolio</h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'PortfolioItems',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'PortfolioItems.scss';
</style>
