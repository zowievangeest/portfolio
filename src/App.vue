<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
  </div>
</template>

<script>
import store from './store'
import {router} from './bootstrap'

const requireContext = require.context('@/layouts', false, /.*\.vue$/)
const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})
export default {
  name: 'App',
  store,
  router,
  data: () => ({
    layout: null,
    defaultLayout: 'default'
  }),
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: '%s | Zowie van Geest - Front-end Developer',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        name: 'description',
        content:
          'DTP-er en Front-end Developer uit Delft met een passie voor het ontwikkelen van mooie en functionele gebruikerservaringen.'
      }
    ]
  },
  async mounted() {
    const vm = this
    await vm.$store.watch(state => {
      if (state.auth.authenticated) {
        vm.$store.dispatch('auth/fetchUser')
      }
    })
  },
  methods: {
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }
      this.layout = layouts[layout]
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/portfolio';
</style>
