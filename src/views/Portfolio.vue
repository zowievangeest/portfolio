<template>
  <div v-if="portfolio" class="portfolio">
    <Navbar />
    <transition>
      <keep-alive>
        <router-view :data="portfolio"> </router-view>
      </keep-alive>
    </transition>
    <Footer />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from '../components/portfolio/navbar/Navbar'
import Footer from '../components/portfolio/footer/Footer'

export default {
  name: 'Portfolio',
  components: {
    Footer,
    Navbar
  },
  async beforeMount() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('portfolio/fetchPortfolio').catch(e => {
        console.error(e)
      })
    })
  },
  computed: {
    ...mapGetters({
      portfolio: 'portfolio/portfolio'
    })
  }
}
</script>

<style lang="scss"></style>
