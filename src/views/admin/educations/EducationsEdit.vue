<template>
  <div>
    <hr />
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Onderwijsinstelling<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="onderwijsinstelling"
              class="input"
              type="text"
              v-model="education.institution"
              placeholder="Bijv. Hogeschool Leiden"
            />
            <span class="has-text-danger">{{
              errors.first('onderwijsinstelling')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Graad</label>
          <div class="control">
            <input
              name="graad"
              class="input"
              type="text"
              v-model="education.degree"
              placeholder="Bijv. bachelor"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Studierichting<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="studierichting"
              class="input"
              type="text"
              v-model="education.specialization"
              placeholder="Bijv. informatica"
            />
            <span class="has-text-danger">{{
              errors.first('studierichting')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Beginjaar<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <b-datepicker
              v-validate="'required'"
              name="beginjaar"
              v-model="education.startDate"
              icon="calendar-today"
            >
            </b-datepicker>
            <span class="has-text-danger">{{ errors.first('beginjaar') }}</span>
          </div>
        </div>
      </div>
      <div class="column" v-show="!education.current">
        <div class="field">
          <label class="label"
            >Eindjaar<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <b-datepicker
              v-validate="'required'"
              name="eindjaar"
              v-model="education.endDate"
              icon="calendar-today"
            >
            </b-datepicker>
            <span class="has-text-danger">{{ errors.first('eindjaar') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Dit is mijn huidige opleiding</label>
          <b-switch v-model="education.current">
            {{ education.current ? 'Ja' : 'Nee' }}
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
              v-model="education.description"
              placeholder="Beschrijving"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Publiceren op portfolio</label>
          <b-switch v-model="education.show">
            {{ education.show ? 'Ja' : 'Nee' }}
          </b-switch>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click="updateEducation">
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
<script>
export default {
  name: 'EducationsEdit',
  middleware: 'auth',
  data() {
    return {
      education: {
        institution: '',
        degree: '',
        specialization: '',
        startDate: new Date(),
        endDate: new Date(),
        description: '',
        show: false,
        current: false
      }
    }
  },
  beforeMount: function() {
    this.$store
      .dispatch(
        'educations/fetchEducationById',
        this.$store.state.route.params.id
      )
      .then(() => {
        let newEducation
        newEducation = Object.assign(
          {},
          this.$store.getters['educations/education']
        )

        const startDate = newEducation.startDate
        const endDate = newEducation.endDate

        newEducation.startDate = new Date(startDate)
        newEducation.endDate = new Date(endDate)

        this.education = newEducation
      })
  },
  methods: {
    success() {
      this.$toast.open({
        duration: 5000,
        message: 'Opleiding geüpdatet',
        position: 'is-bottom-right',
        type: 'is-success'
      })
    },
    danger() {
      this.$toast.open({
        duration: 5000,
        message: 'Opleiding niet geüpdatet',
        position: 'is-bottom-right',
        type: 'is-danger'
      })
    },
    updateEducation() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('educations/updateEducation', {
              education: this.education
            })
            .then(() => {
              this.success()
              this.$store.dispatch('educations/fetchAllEducations').then(() => {
                this.$router.push({name: 'educations/all'})
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
<style lang="scss" scoped>
.button {
  margin-right: 5px;
}
</style>
