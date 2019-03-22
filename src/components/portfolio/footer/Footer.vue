<template>
  <footer class="footer is-paddingless">
    <div class="container">
      <div class="content has-text-centered">
        <h1 class="title has-text-white">
          Handgemaakt sinds {{ new Date().getFullYear() }}
        </h1>
        <h2 class="subtitle has-text-white is-4">met veel liefde</h2>
        <div class="under-line">
          <svg
            viewBox="0 0 69.172 14.975"
            width="37"
            height="28"
            y="0px"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.357,12.26 10.807,2.81 20.328,12.332
                    29.781,2.879 39.223,12.321 48.754,2.79  58.286,12.321"
            ></path>
          </svg>
        </div>
        <Socials color="white" />
      </div>
    </div>
    <div class="copyright is-marginless">
      <div class="columns">
        <div class="column">
          <p class="has-text-white has-text-centered">
            <b-icon
              icon="heart"
              custom-size="mdi-18px"
              class="heart-icon"
            ></b-icon
            ><span class="copyright-txt">Zowie van Geest</span> -
            {{ new Date().getFullYear() }} © Copyright
            <BackToTop />
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Socials from '../socials/Socials'
import BackToTop from '../backtotop/BackToTop'
export default {
  name: 'Footer',
  components: {BackToTop, Socials}
}
</script>
<style lang="scss" scoped>
@import './Footer.scss';
</style>
