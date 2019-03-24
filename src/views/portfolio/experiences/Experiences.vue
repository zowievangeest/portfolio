<template>
  <div>
    <section id="experiences" class="hero is-dark has-background-black">
      <Title title="Ervaring" />
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h3
              class="intro-txt subtitle is-3 has-text-centered has-text-white"
            >
              Bij de onderstaande bedrijven heb ik werkervaring opgedaan.
            </h3>
          </div>
        </div>
        <div class="columns is-multiline">
          <div
            class="column is-half-desktop is-full-tablet is-full-touch"
            v-for="experience in experiences"
            :key="experience._id"
          >
            <div class="box box-dark-gray">
              <div class="columns">
                <div class="column is-5">
                  <p>
                    <span class="tag is-medium is-tag-outline-white">
                      <span>
                        {{ $moment(experience.startDate).format('MM-YYYY') }}
                      </span>
                      <span class="has-text-primary"> &nbsp;—&nbsp; </span>
                      <span v-if="!experience.current">
                        {{ $moment(experience.endDate).format('MM-YYYY')
                        }}<br />
                      </span>
                      <span v-else>Huidig</span>
                    </span>
                    <br />
                    <small style="padding-top: 20px;"
                      ><i>
                        {{
                          calculateMonths(
                            experience.startDate,
                            experience.endDate
                          )
                        }}
                      </i></small
                    >
                  </p>
                </div>
                <div class="column is-7">
                  <p>
                    <strong class="has-text-white">{{
                      experience.role
                    }}</strong>
                    -
                    <small class="has-text-white">{{
                      experience.organization
                    }}</small>
                    <br />
                    {{ experience.shortDescription }}
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
export default {
  name: 'Experiences',
  components: {Title},
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    experiences() {
      let {experiences} = this.data

      experiences = experiences.filter(item => {
        return !(item['show'] === undefined || item['show'] !== true)
      })

      experiences = experiences.sort(function(a, b) {
        return (
          new Date(b.endDate) - new Date(a.endDate) || b.current - a.current
        )
      })

      return experiences
    }
  },
  methods: {
    calculateMonths(startDate, endDate) {
      const months = this.$moment(endDate).diff(
        this.$moment(startDate),
        'months',
        false
      )
      if (months !== 0) {
        return `(${months} maanden)`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Experiences.scss';
</style>
