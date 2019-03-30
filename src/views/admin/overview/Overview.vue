<template>
  <div class="container" v-if="portfolioItems">
    <div class="columns">
      <div class="column">
        <Welcome :name="first" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="tile is-ancestor has-text-centered">
          <div
            class="tile is-parent"
            v-for="(item, index) in dashboardItems"
            :key="index"
          >
            <article class="tile is-child box">
              <p class="title">
                {{ portfolioItems[item.objectName].length }}
              </p>
              <p class="subtitle">{{ item.title }}</p>
              <p>
                <router-link
                  type="button"
                  tag="button"
                  class="button is-success is-medium"
                  :to="{name: item.routeNew}"
                  exact
                  ><b-icon
                    icon="plus"
                    type="is-light"
                    custom-size="mdi-24px"
                  ></b-icon
                ></router-link>
                <router-link
                  type="button"
                  tag="button"
                  class="button is-primary is-medium margin-left-10"
                  :to="{name: item.routeOverview}"
                  exact
                  ><b-icon
                    icon="eye"
                    type="is-light"
                    custom-size="mdi-24px"
                  ></b-icon
                ></router-link>
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
const {dashboardItems} = require('../../../routes/menu-items.json')
import Welcome from '../../../components/dashboard/welcome/Welcome'

export default {
  name: 'Overview',
  components: {Welcome},
  middleware: 'auth',
  data() {
    return {
      dashboardItems
    }
  },
  async beforeMount() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('portfolio/fetchPortfolio').catch(e => {
        console.error(e)
      })
      vm.$store.dispatch('auth/fetchUser').catch(e => {
        console.error(e)
      })
    })
  },
  computed: {
    ...mapGetters({
      portfolio: 'portfolio/portfolio',
      user: 'auth/user'
    }),
    first() {
      return this.user ? this.user.first : ''
    },
    portfolioItems() {
      return this.portfolio ? this.portfolio : ''
    }
  }
}
</script>
<style lang="scss" scoped>
.margin-left-10 {
  margin-left: 10px;
}
</style>
