import Typed from "typed.js"
<template>
  <div>
    <vue-particles color="#dedede" class="intro"> </vue-particles>
    <section id="home" class="hero is-fullheight home">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle has-text-white">Hallo!</h2>
          <vue-typed-js
            :loop="true"
            :type-speed="50"
            :back-speed="50"
            :strings="[data.about.name, data.about.label]"
          >
            <h1 class="title is-1 has-text-white">
              Ik ben <span class="typing"></span>
            </h1>
          </vue-typed-js>
          <a
            :href="`mailto:${data.about.email}`"
            class="btn-hello button is-primary is-rounded is-medium"
            ><span>Zeg Hallo! </span
            ><span role="img" aria-label="emoji" class="emoji">👋</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
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
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Home.scss';
</style>
