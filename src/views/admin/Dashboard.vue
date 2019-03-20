<template>
  <div>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="../../assets/images/logo/logo-zowie-van-geest.svg"
            width="112"
            height="40"
            class="logo"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="isOpen = !isOpen"
          :class="{'is-active': isOpen}"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{'is-active': isOpen}"
      >
        <div class="navbar-start">
          <router-link :to="{name: 'overview'}" class="navbar-item">
            Dashboard
          </router-link>
          <router-link :to="{name: 'posts'}" class="navbar-item">
            Blog Posts
          </router-link>
          <router-link :to="{name: 'experiences'}" class="navbar-item">
            Ervaringen
          </router-link>
          <router-link :to="{name: 'educations'}" class="navbar-item">
            Opleidingen
          </router-link>
          <router-link :to="{name: 'certificates'}" class="navbar-item">
            Certificaten
          </router-link>
          <router-link :to="{name: 'about'}" class="navbar-item">
            Persoonlijke informatie
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              {{ fullname }}
            </a>

            <div class="navbar-dropdown is-right">
              <router-link :to="{name: 'profiel'}" class="navbar-item" exact>
                Profiel
              </router-link>
              <hr class="navbar-divider" />
              <a class="navbar-item" @click="logout">
                Loguit
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  padding-bottom: 5px;
  background: #292929;
  border-bottom: 3px solid #05adff;
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Dashboard',
  middleware: 'auth',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),
    fullname() {
      return this.user ? `${this.user.first} ${this.user.last}` : ''
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
