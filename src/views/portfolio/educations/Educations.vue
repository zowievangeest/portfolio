<template>
  <div>
    <section id="educations" class="hero is-dark has-background-black">
      <Title title="Educatie" />
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h3
              class="intro-txt subtitle is-3 has-text-centered has-text-white"
            >
              De onderstaande opleidingen heb ik behaald of ben ik mee momenteel
              mee bezig. De behaalde certificaten zijn te vinden onder het kopje
              <span class="has-text-primary">"</span>Certificaten<span
                class="has-text-primary"
                >"</span
              >
            </h3>
            <hr />
          </div>
        </div>
        <Subtitle subtitle="Opleidingen" class="port-sub-title" />
        <div class="columns is-multiline">
          <div
            class="column is-half-desktop is-full-tablet is-full-touch"
            v-for="education in educations"
            :key="education._id"
          >
            <div class="box box-dark-gray">
              <div class="columns">
                <div class="column is-5">
                  <p>
                    <span class="tag is-medium is-tag-outline-white">
                      <span>
                        {{ $moment(education.startDate).format('MM-YYYY') }}
                      </span>
                      <span class="has-text-primary">&nbsp;—&nbsp; </span>
                      <span v-if="!education.current">
                        {{ $moment(education.endDate).format('MM-YYYY') }}<br />
                      </span>
                      <span v-else>Huidig</span>
                    </span>
                  </p>
                </div>
                <div class="column is-7">
                  <p>
                    <strong class="has-text-white">{{
                      education.specialization
                    }}</strong>
                    -
                    <small class="has-text-white">{{
                      education.institution
                    }}</small>
                    <br />
                    {{ education.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Subtitle subtitle="Certificaten" class="port-sub-title" />
        <div class="columns is-multiline">
          <div
            class="column is-half-desktop is-full-tablet is-full-touch"
            v-for="certificate in certificates"
            :key="certificate._id"
          >
            <div class="box box-dark-gray">
              <div class="columns">
                <div class="column is-4">
                  <div class="tags are-medium">
                    <span class="tag is-tag-outline-primary">{{
                      $moment(certificate.achievedDate).format('YYYY')
                    }}</span>
                    <span
                      v-if="!certificate.expirable"
                      class="tag is-tag-outline-success"
                    >
                      Verloopt nooit
                    </span>
                    <span v-else class="tag is-tag-outline-danger">
                      Kan verlopen
                    </span>
                  </div>
                </div>
                <div class="column is-8">
                  <p>
                    <strong class="has-text-white">{{
                      certificate.title
                    }}</strong>
                    -
                    <small class="has-text-white"
                      ><a :href="certificate.authorityUrl">{{
                        certificate.authority
                      }}</a></small
                    >
                    <br />
                    <a :href="certificate.website"
                      ><b-icon icon="link" custom-size="mdi-16px"></b-icon>
                      Website</a
                    >
                  </p>
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
import Subtitle from '../../../components/portfolio/subtitle/Subtitle'
export default {
  name: 'Educations',
  components: {Subtitle, Title},
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    educations() {
      const filter = {
        show: true
      }
      let {educations} = this.data

      educations = educations.filter(item => {
        return !(item['show'] === undefined || item['show'] !== filter.show)
      })

      educations = educations.sort(function(a, b) {
        return (
          new Date(b.endDate) - new Date(a.endDate) || b.current - a.current
        )
      })

      return educations
    },
    certificates() {
      let {certificates} = this.data

      certificates = certificates.filter(item => {
        return !(item['show'] === undefined || item['show'] !== true)
      })

      certificates = certificates.sort(function(a, b) {
        return (
          new Date(b.endDate) - new Date(a.endDate) || b.expirable - a.expirable
        )
      })

      return certificates
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Educations.scss';
</style>
