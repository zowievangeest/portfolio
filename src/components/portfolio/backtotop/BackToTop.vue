<template>
  <span @click="scrollToTop(500)">
    <b-icon
      icon="chevron-up"
      custom-size="mdi-36px"
      class="back-to-top"
    ></b-icon>
  </span>
</template>
<script>
export default {
  name: 'BackToTop',
  methods: {
    scrollToTop(scrollDuration) {
      let scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep)
          } else clearInterval(scrollInterval)
        }, 15)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './BackToTop.scss';
</style>
