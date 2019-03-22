<template>
  <div v-if="portfolio" class="portfolio">
    <Navbar />
    <transition>
      <keep-alive>
        <router-view :data="portfolio"> </router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from '../components/portfolio/navbar/Navbar'

export default {
  name: 'Portfolio',
  components: {
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
