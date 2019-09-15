<template>
  <div class="socials">
    <a
      :class="`has-text-${color}`"
      v-for="(social, index) in socials"
      :key="index"
      :href="social.link"
      ><b-icon :icon="social.icon" custom-size="mdi-24px"> </b-icon
    ></a>
  </div>
</template>
<script>
const {socials} = require('../../../routes/menu-items.json')
export default {
  name: 'Socials',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      socials
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Socials.scss';
</style>
