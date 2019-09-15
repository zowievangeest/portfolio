<template>
  <div>
    <header>
      <div class="columns">
        <div class="column">
          <div class="logo">
            <router-link :to="{name: 'portfolio/home'}">
              <Logo />
            </router-link>
          </div>
          <div class="nav-icon float-right" @click="isHidden = !isHidden">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
    <div class="full-menu" :class="{visible: isHidden}">
      <div class="fullmenu-content">
        <ul class="page-menu">
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="isHidden = !isHidden"
          >
            <router-link :to="{name: item.to}"
              >{{ item.name }}<span></span
            ></router-link>
          </li>
          <div class="last-nav-item">
            <Socials />
          </div>
        </ul>
      </div>
      <a class="modal-close" @click="isHidden = !isHidden"></a>
    </div>
  </div>
</template>
<script>
import Socials from '../socials/Socials'
import Logo from '../logo/Logo'

const {items} = require('../../../routes/menu-items.json')
export default {
  name: 'Navbar',
  components: {Socials, Logo},
  data() {
    return {
      items,
      isHidden: false
    }
  },
  created() {
    document.addEventListener('keyup', this.hideMenuOnEsc)
  },
  methods: {
    hideMenuOnEsc(event) {
      if (event.keyCode === 27) {
        this.isHidden = false
      }
    }
  },
  destroyed() {
    document.removeEventListener('keyup', this.hideMenuOnEsc)
  }
}
</script>
<style lang="scss" scoped>
@import 'Navbar.scss';
</style>
