<template>
  <div>
    <hr />
    <div class="box content">
      <article v-for="project in getAllProjects" :key="project._id">
        <h4>
          {{ project.title
          }}<Published :condition="project.show" style="margin-left: 15px" />
        </h4>
        <div class="media">
          <div class="media-left">
            <p class="image is-64x64">
              <img :src="project.imgUrl" :alt="project.title" />
            </p>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                Auteur:
                <a :href="`mailto:${project.author.email}`">{{
                  project.author.email
                }}</a
                ><br />
                <span class="has-text-grey-light">
                  {{ $moment(project.createdAt).format('DD MMMM YYYY, HH:mm') }}
                </span>
              </p>
            </div>
          </div>
          <div class="media-right">
            <router-link
              type="button"
              tag="button"
              class="button is-success margin-left-10"
              :to="{name: 'projects/edit', params: {id: project._id}}"
              exact
              ><b-icon
                icon="square-edit-outline"
                type="is-light"
                custom-size="mdi-24px"
              ></b-icon
            ></router-link>
            <button
              class="button is-danger margin-left-10"
              @click="confirm(project._id)"
            >
              <b-icon
                icon="delete-outline"
                type="is-light"
                custom-size="mdi-24px"
              ></b-icon>
            </button>
          </div>
        </div>
        <hr />
      </article>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Published from '../../../components/dashboard/published/Published.vue'

export default {
  name: 'ProjectsAll',
  middleware: 'auth',
  components: {
    Published
  },
  async mounted() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('projects/fetchAllProjects')
    })
  },
  computed: {
    ...mapGetters({
      experiences: 'projects/projects'
    }),
    getAllProjects() {
      return this.experiences ? this.experiences : ''
    }
  },
  methods: {
    confirm(id) {
      this.$dialog.confirm({
        message: 'Weet je zeker dat je het wilt verwijderen?',
        onConfirm: () => {
          this.$store.dispatch('projects/deleteProject', id).then(() => {
            this.$store.dispatch('projects/fetchAllProjects')
            this.$toast.open({
              duration: 5000,
              message: 'Project verwijderd',
              position: 'is-bottom-right',
              type: 'is-danger'
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.margin-left-10 {
  margin-left: 10px;
}
</style>
