<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              Over mij
            </h1>
            <h2 class="subtitle">
              Mijn persoonlijke informatie
            </h2>
          </div>
        </div>
        <div v-if="about._id">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label"
                  >Naam<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required'"
                    name="naam"
                    class="input"
                    type="text"
                    v-model="about.name"
                    placeholder="Bijv. Zowie van Geest"
                  />
                  <span class="has-text-danger">{{
                    errors.first('naam')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label"
                  >Label<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required'"
                    name="label"
                    class="input"
                    type="text"
                    v-model="about.label"
                    placeholder="Bijv. Frontend developer"
                  />
                  <span class="has-text-danger">{{
                    errors.first('label')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label"
                  >Email<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required'"
                    name="email"
                    class="input"
                    type="email"
                    v-model="about.email"
                    placeholder="Bijv. zowie@zowievangeest.nl"
                  />
                  <span class="has-text-danger">{{
                    errors.first('email')
                  }}</span>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label"
                  >Telefoonnummer<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required'"
                    name="telefoonnummer"
                    class="input"
                    type="tel"
                    v-model="about.phone"
                    placeholder="Bijv. +316123456789"
                  />
                  <span class="has-text-danger">{{
                    errors.first('telefoonnummer')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label"
                  >Website<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required|url'"
                    name="website"
                    class="input"
                    type="text"
                    v-model="about.url"
                    placeholder="Bijv. https://zowievangeest.nl"
                  />
                  <span class="has-text-danger">{{
                    errors.first('Website')
                  }}</span>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label"
                  >Afbeeldings url<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required|url'"
                    name="afbeeldings url"
                    class="input"
                    type="text"
                    v-model="about.image"
                    placeholder="Bijv. https://image.com/img.jpg"
                  />
                  <span class="has-text-danger">{{
                    errors.first('afbeeldings url')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label"
                  >Samenvatting<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <textarea
                    name="samenvatting"
                    v-validate="'required'"
                    class="textarea"
                    v-model="about.summary"
                    placeholder="Bijv. een kort stukje over jezelf"
                  ></textarea>
                  <span class="has-text-danger">{{
                    errors.first('samenvatting')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label"
                  >Geboortedatum<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <b-datepicker
                    v-validate="'required'"
                    name="geboortedatum"
                    v-model="about.birthday"
                    icon="calendar-today"
                  >
                  </b-datepicker>
                  <span class="has-text-danger">{{
                    errors.first('geboortedatum')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label"
                  >Geboorteplaats<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required'"
                    name="geboorteplaats"
                    class="input"
                    type="text"
                    v-model="about.birthplace"
                    placeholder="Bijv. Delft"
                  />
                  <span class="has-text-danger">{{
                    errors.first('geboorteplaats')
                  }}</span>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label"
                  >Nationaliteit<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required'"
                    name="nationaliteit"
                    class="input"
                    type="text"
                    v-model="about.nationality"
                    placeholder="Bijv. Nederlandse"
                  />
                  <span class="has-text-danger">{{
                    errors.first('nationaliteit')
                  }}</span>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label"
                  >Gender<sup class="has-text-danger"> *</sup></label
                >
                <div class="control">
                  <input
                    v-validate="'required'"
                    name="gender"
                    class="input"
                    type="text"
                    v-model="about.gender"
                    placeholder="Bijv. Man"
                  />
                  <span class="has-text-danger">{{
                    errors.first('gender')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success" @click="updateAbout">
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
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  name: 'About',
  middleware: 'auth',
  data() {
    return {
      about: {
        name: '',
        label: '',
        image: '',
        email: '',
        phone: '',
        url: '',
        summary: '',
        birthday: new Date(),
        birthplace: '',
        gender: '',
        nationality: ''
      }
    }
  },
  beforeMount: function() {
    this.$store.dispatch('about/fetchAbout').then(() => {
      let newAbout
      newAbout = Object.assign({}, this.$store.getters['about/about'])

      const birthdayDate = newAbout.birthday
      newAbout.birthday = new Date(birthdayDate)

      this.about = newAbout
    })
  },
  methods: {
    success() {
      this.$toast.open({
        duration: 5000,
        message: 'Over mij geüpdatet',
        position: 'is-bottom-right',
        type: 'is-success'
      })
    },
    danger() {
      this.$toast.open({
        duration: 5000,
        message: 'Over mij niet geüpdatet',
        position: 'is-bottom-right',
        type: 'is-danger'
      })
    },
    updateAbout() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('about/updateAbout', {
              about: this.about
            })
            .then(() => {
              this.success()
              this.$store.dispatch('about/fetchAbout')
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
