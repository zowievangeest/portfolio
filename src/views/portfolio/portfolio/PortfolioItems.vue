<template>
  <div>
    <section id="portfolioItems" class="hero is-dark has-background-black">
      <Title title="Projecten" />
      <div class="container" v-if="projects">
        <div class="columns is-multiline">
          <div
            class="column project-post is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop"
            v-for="project in projects"
            :key="project._id"
          >
            <div class="card card-gray">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="project.imgUrl" :alt="project.title" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title">
                      <router-link
                        :to="{
                          name: 'portfolio/project-single',
                          params: {id: project._id}
                        }"
                        exact
                        >{{ project.title }}</router-link
                      >
                    </p>
                  </div>
                </div>

                <div class="content">
                  <Ellipsis
                    :content="project.shortDescription"
                    :link="project._id"
                    page="portfolio/project-single"
                  />
                  <div class="project-info has-text-weight-bold is-size-7">
                    <b-icon
                      icon="web"
                      size="is-small"
                      class="has-text-primary"
                    ></b-icon>
                    <a :href="project.projectUrl" target="_blank">
                      {{ removeHttps(project.projectUrl) }} </a
                    >—
                    {{ project.client }}
                  </div>
                </div>
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
import Ellipsis from '../../../components/portfolio/ellipsis/Ellipsis'

export default {
  name: 'PortfolioItems',
  components: {Ellipsis, Title},
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    projects() {
      let {projects} = this.data

      projects = projects.filter(item => {
        return !(item['show'] === undefined || item['show'] !== true)
      })

      projects = projects.sort(function(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
      return projects
    }
  },
  methods: {
    removeHttps(url) {
      const newUrl = new URL(url)
      return newUrl.hostname
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'PortfolioItems.scss';
</style>
