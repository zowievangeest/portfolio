<template>
  <div>
    <hr />
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Functietitel<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="functietitel"
              class="input"
              type="text"
              v-model="experience.role"
              placeholder="Functietitel"
            />
            <span class="has-text-danger">{{
              errors.first('functietitel')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Bedrijf<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="bedrijf"
              class="input"
              type="text"
              v-model="experience.organization"
              placeholder="Bedrijfsnaam"
            />
            <span class="has-text-danger">{{ errors.first('bedrijf') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Van<sup class="has-text-danger"> *</sup></label>
          <div class="control">
            <b-datepicker
              v-validate="'required'"
              name="van datum"
              v-model="experience.startDate"
              icon="calendar-today"
            >
            </b-datepicker>
            <span class="has-text-danger">{{ errors.first('van datum') }}</span>
          </div>
        </div>
      </div>
      <div class="column" v-show="!experience.current">
        <div class="field">
          <label class="label">Tot</label>
          <div class="control">
            <b-datepicker
              v-validate="'required'"
              name="tot datum"
              v-model="experience.endDate"
              icon="calendar-today"
            >
            </b-datepicker>
            <span class="has-text-danger">{{ errors.first('van datum') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Dit is mijn huidige functie</label>
          <b-switch v-model="experience.current">
            {{ experience.current ? 'Ja' : 'Nee' }}
          </b-switch>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Beschrijving</label>
          <div class="control">
            <textarea
              name="beschrijving"
              class="textarea"
              v-model="experience.description"
              placeholder="Beschrijving van werkzaamheden"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Omschrijving<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="omschrijving"
              class="input"
              type="text"
              v-model="experience.shortDescription"
              placeholder="Korte omschrijving"
            />
            <span class="has-text-danger">{{
              errors.first('omschrijving')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Website</label>
          <div class="control">
            <input
              v-validate="'url'"
              name="website"
              class="input"
              type="text"
              v-model="experience.url"
              placeholder="http://website.nl"
            />
            <span class="has-text-danger">{{ errors.first('website') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Publiceren op portfolio</label>
          <b-switch v-model="experience.show">
            {{ experience.show ? 'Ja' : 'Nee' }}
          </b-switch>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click="updateExperience">
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
  name: 'ExperiencesEdit',
  middleware: 'auth',
  data() {
    return {
      experience: {
        organization: '',
        description: '',
        shortDescription: '',
        role: '',
        startDate: new Date(),
        endDate: new Date(),
        url: '',
        show: false,
        current: false
      }
    }
  },
  beforeMount: function() {
    this.$store
      .dispatch(
        'experiences/fetchExperienceById',
        this.$store.state.route.params.id
      )
      .then(() => {
        let newExperience
        newExperience = Object.assign(
          {},
          this.$store.getters['experiences/experience']
        )

        const startDate = newExperience.startDate
        const endDate = newExperience.endDate

        newExperience.startDate = new Date(startDate)
        newExperience.endDate = new Date(endDate)

        this.experience = newExperience
      })
  },
  methods: {
    success() {
      this.$toast.open({
        duration: 5000,
        message: 'Ervaring geüpdatet',
        position: 'is-bottom-right',
        type: 'is-success'
      })
    },
    danger() {
      this.$toast.open({
        duration: 5000,
        message: 'Ervaring niet geüpdatet',
        position: 'is-bottom-right',
        type: 'is-danger'
      })
    },
    updateExperience() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('experiences/updateExperience', {
              experience: this.experience
            })
            .then(() => {
              this.success()
              this.$store
                .dispatch('experiences/fetchAllExperiences')
                .then(() => {
                  this.$router.push({name: 'experiences/all'})
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
