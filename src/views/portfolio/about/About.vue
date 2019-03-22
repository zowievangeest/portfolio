<template>
  <section id="about" class="is-dark has-background-black">
    <Title title="Over mij" />
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h3 class="intro-txt subtitle is-3 has-text-centered has-text-white">
            {{ about.summary }}
          </h3>
        </div>
      </div>
      <div class="columns has-text-white">
        <div
          class="column column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet"
        >
          <hr />
          <Subtitle subtitle="Mijn profiel" class="port-sub-title" />
          <figure class="image is-128x128">
            <img
              class="is-rounded is-center has-text-centered"
              :src="about.image"
            />
          </figure>
          <div class="columns has-text-centered-mobile">
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Naam</h2>
            </div>
            <div class="column is-3 is-5-tablet">{{ about.name }}</div>
            <div class="column is-2 is-hidden-tablet is-hidden-mobile">
              <p class="has-text-centered">|</p>
            </div>
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Geboren</h2>
            </div>
            <div class="column is-3">
              {{ $moment(about.birthday).format('DD MMMM YYYY') }}
            </div>
          </div>
          <div class="columns has-text-centered-mobile">
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Email</h2>
            </div>
            <div class="column is-3 is-5-tablet">
              <a :href="`mailto:${about.email}`">{{ about.email }}</a>
            </div>
            <div class="column is-2 is-hidden-tablet is-hidden-mobile">
              <p class="has-text-centered">|</p>
            </div>
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Plaats</h2>
            </div>
            <div class="column is-3">{{ about.birthplace }}</div>
          </div>
          <div class="columns has-text-centered-mobile">
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Telefoon</h2>
            </div>
            <div class="column is-3 is-5-tablet">
              <a :href="`tel:${about.phone}`">{{ about.phone }}</a>
            </div>
            <div class="column is-2 is-hidden-tablet is-hidden-mobile">
              <p class="has-text-centered">|</p>
            </div>
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Nationaliteit</h2>
            </div>
            <div class="column is-3">{{ about.nationality }}</div>
          </div>
          <div class="columns has-text-centered-mobile">
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Website</h2>
            </div>
            <div class="column is-3 is-5-tablet">
              <a :href="about.url" target="_blank">{{ about.url }}</a>
            </div>
            <div class="column is-2 is-hidden-tablet is-hidden-mobile">
              <p class="has-text-centered">|</p>
            </div>
            <div class="column is-2">
              <h2 class="has-text-weight-bold">Geslacht</h2>
            </div>
            <div class="column is-3">{{ about.gender }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Title from '../../../components/portfolio/title/Title'
import Subtitle from '../../../components/portfolio/subtitle/Subtitle'
export default {
  name: 'About',
  components: {Subtitle, Title},
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    about() {
      const {about} = this.data
      return about
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'About.scss';
</style>
