<template>
  <div>
    <section
      id="portfoliosingle"
      class="hero is-fullheight is-dark has-background-black"
    >
      <Title title="Project" />
      <div class="container" v-if="project">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h1 class="title has-text-centered">
              {{ project.title }}
            </h1>
            <h3
              class="intro-txt subtitle is-3 has-text-centered has-text-white"
            >
              {{ project.shortDescription }}
            </h3>
          </div>
        </div>
        <div class="columns is-multiline">
          <div
            class="column project-post is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop"
          >
            <div class="columns has-text-centered">
              <div class="column is-4">
                <div class="project-small-card">
                  <h4 class="is-size-7 is-uppercase has-text-weight-bold">
                    klant
                  </h4>
                  <p class="is-size-7 has-text-grey">{{ project.client }}</p>
                </div>
              </div>
              <div class="column is-4">
                <div class="project-small-card">
                  <h4 class="is-size-7 is-uppercase has-text-weight-bold">
                    website
                  </h4>
                  <p class="is-size-7 has-text-grey">
                    <a
                      :href="project.projectUrl"
                      target="_blank"
                      class="has-text-grey"
                      >{{ removeHttps(project.projectUrl) }}</a
                    >
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="project-small-card">
                  <h4 class="is-size-7 is-uppercase has-text-weight-bold">
                    eigenaar
                  </h4>
                  <p class="is-size-7 has-text-grey">
                    {{ project.author.first }} {{ project.author.last }}
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="project-title column">
                <h2 class="subtitle has-text-primary">Beschrijving</h2>
                <p class="project-txt">
                  {{ project.description }}
                </p>
                <h2 class="subtitle has-text-primary">
                  Uitgelichte afbeelding
                </h2>
                <img :src="project.projectImgUrl" :alt="project.title" />
                <span
                  class="tag tag-back is-large is-tag-outline-white is-centered"
                  @click="$router.go(-1)"
                >
                  terug
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Title from '../../../components/portfolio/title/Title'
export default {
  name: 'PortfolioSingle',
  components: {
    Title
  },
  data() {
    return {
      project: null
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      const id = this.$route.params.id

      if (id) {
        this.$store
          .dispatch('projects/fetchProjectById', this.$route.params.id)
          .then(() => {
            let newProject
            newProject = Object.assign(
              {},
              this.$store.getters['projects/project']
            )
            this.project = newProject
          })
      }
    },
    back() {
      this.$router.go(-1)
    },
    removeHttps(url) {
      const newUrl = new URL(url)
      return newUrl.hostname
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'PortfolioSingle.scss';
</style>
