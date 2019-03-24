<template>
  <div>
    <hr />
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Titel<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="titel"
              class="input"
              type="text"
              v-model="project.title"
              placeholder="Project titel"
            />
            <span class="has-text-danger">{{ errors.first('titel') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Beschrijving<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <textarea
              name="beschrijving"
              v-validate="'required'"
              class="textarea"
              v-model="project.description"
              placeholder="Beschrijving"
            ></textarea>
            <span class="has-text-danger">{{
              errors.first('beschrijving')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Klant<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="klant"
              class="input"
              type="text"
              v-model="project.client"
              placeholder="Klant"
            />
            <span class="has-text-danger">{{ errors.first('klant') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Afbeelding Url<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              class="input"
              type="url"
              v-validate="'required|url'"
              name="url"
              v-model="project.imgUrl"
              placeholder="Afbeelding Url"
            />
            <span class="has-text-danger">{{ errors.first('url') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field" v-if="project.imgUrl">
          <label class="label">Voorvertoning</label>
          <figure class="render-img image is-128x128">
            <img :src="project.imgUrl" />
          </figure>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Project Afbeelding Url<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              class="input"
              type="url"
              v-validate="'required|url'"
              name="project img url"
              v-model="project.projectImgUrl"
              placeholder="Project Afbeelding Url"
            />
            <span class="has-text-danger">{{
              errors.first('project img url')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field" v-if="project.projectImgUrl">
          <label class="label">Voorvertoning</label>
          <figure class="render-img image is-128x128">
            <img :src="project.projectImgUrl" />
          </figure>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Project Url<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              class="input"
              type="url"
              v-validate="'required|url'"
              name="project url"
              v-model="project.projectUrl"
              placeholder="Project Url"
            />
            <span class="has-text-danger">{{
              errors.first('project url')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Publiceren op portfolio</label>
          <b-switch v-model="project.show">
            {{ project.show ? 'Ja' : 'Nee' }}
          </b-switch>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click="updateProject">
          Updaten
        </button>
      </div>
      <div class="control">
        <button class="button is-danger" @click="$router.go(-1)">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  margin-right: 5px;
}
</style>

<script>
export default {
  name: 'ProjectsEdit',
  middleware: 'auth',
  data() {
    return {
      project: {
        title: '',
        description: '',
        client: '',
        imgUrl: '',
        projectUrl: '',
        projectImgUrl: '',
        show: false
      }
    }
  },
  beforeMount() {
    this.$store
      .dispatch('projects/fetchProjectById', this.$store.state.route.params.id)
      .then(() => {
        let newProject
        newProject = Object.assign({}, this.$store.getters['projects/project'])
        this.project = newProject
      })
  },
  methods: {
    success() {
      this.$toast.open({
        duration: 5000,
        message: 'Project geüpdatet',
        position: 'is-bottom-right',
        type: 'is-success'
      })
    },
    danger() {
      this.$toast.open({
        duration: 5000,
        message: 'Project niet geüpdatet',
        position: 'is-bottom-right',
        type: 'is-danger'
      })
    },
    updateProject() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('projects/updateProject', {project: this.project})
            .then(() => {
              this.success()
              this.$store.dispatch('projects/fetchAllProjects').then(() => {
                this.$router.push({name: 'projects/all'})
              })
            })
            .catch(() => {
              this.danger()
            })
          return
        }
        this.danger()
      })
    }
  }
}
</script>
