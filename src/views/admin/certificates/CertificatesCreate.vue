<template>
  <div>
    <hr />
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Autoriteit<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="autoriteit"
              class="input"
              type="text"
              v-model="certificate.authority"
              placeholder="Bijv. Udemy"
            />
            <span class="has-text-danger">{{
              errors.first('autoriteit')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Autoriteit website</label>
          <div class="control">
            <input
              name="autoriteitUrl"
              class="input"
              type="text"
              v-model="certificate.authorityUrl"
              placeholder="https://udemy.com"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Certificaat titel<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="certificaat titel"
              class="input"
              type="text"
              v-model="certificate.title"
              placeholder="Bijv. HTML5 & CSS3"
            />
            <span class="has-text-danger">{{
              errors.first('certificaat titel')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Certificaat website</label>
          <div class="control">
            <input
              name="certificateUrl"
              class="input"
              type="text"
              v-model="certificate.website"
              placeholder="https://udemy.com/html-5-css-3"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Behaald op<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <b-datepicker
              v-validate="'required'"
              name="behaald op"
              v-model="certificate.achievedDate"
              icon="calendar-today"
            >
            </b-datepicker>
            <span class="has-text-danger">{{
              errors.first('behaald op')
            }}</span>
          </div>
        </div>
      </div>
      <div class="column" v-show="certificate.expirable">
        <div class="field">
          <label class="label"
            >Verval datum<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <b-datepicker
              v-validate="'required'"
              name="verval datum"
              v-model="certificate.expireDate"
              icon="calendar-today"
            >
            </b-datepicker>
            <span class="has-text-danger">{{
              errors.first('verval datum')
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Is het certificaat vervalbaar</label>
          <b-switch v-model="certificate.expirable">
            {{ certificate.expirable ? 'Ja' : 'Nee' }}
          </b-switch>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Publiceren op portfolio</label>
          <b-switch v-model="certificate.show">
            {{ certificate.show ? 'Ja' : 'Nee' }}
          </b-switch>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click="createCertificate">
          Aanmaken
        </button>
      </div>
      <div class="control">
        <button class="button is-danger" @click="$router.go(-1)">Terug</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CertificatesCreate',
  middleware: 'auth',
  data() {
    return {
      certificate: {
        authority: '',
        authorityUrl: '',
        title: '',
        website: '',
        achievedDate: new Date(),
        expireDate: new Date(),
        show: false,
        expirable: false
      }
    }
  },
  methods: {
    success() {
      this.$toast.open({
        duration: 5000,
        message: 'Certificaat aangemaakt',
        position: 'is-bottom-right',
        type: 'is-success'
      })
    },
    danger() {
      this.$toast.open({
        duration: 5000,
        message: 'Certificaat niet aangemaakt',
        position: 'is-bottom-right',
        type: 'is-danger'
      })
    },
    createCertificate() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('certificates/create', {certificate: this.certificate})
            .then(() => {
              this.success()
              this.$store
                .dispatch('certificates/fetchAllCertificates')
                .then(() => {
                  this.$router.push({name: 'certificates/all'})
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
.render-img {
  margin-bottom: 10px;
}
</style>
