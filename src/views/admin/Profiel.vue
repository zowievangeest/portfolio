<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Profiel
        </h1>
        <h2 class="subtitle">
          Mijn gegevens
        </h2>
        <nav class="panel">
          <p class="panel-heading">
            Profiel details
          </p>
          <PanelBlock
            v-for="user in getUser"
            :key="user._id"
            :label="user.label"
            :type="user.type"
            :value="user.value"
          />
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import PanelBlock from '../../components/dashboard/panelBlock/panelBlock.vue'

export default {
  name: 'Profiel',
  middleware: 'auth',
  components: {
    PanelBlock
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),
    getUser() {
      if (this.user) {
        return [
          {id: 1, label: 'ID', type: 'text', value: this.user._id},
          {id: 2, label: 'Voornaam', type: 'text', value: this.user.first},
          {id: 3, label: 'Achternaam', type: 'text', value: this.user.last},
          {id: 4, label: 'Email', type: 'text', value: this.user.email},
          {
            id: 5,
            label: 'Aangemaakt op',
            type: 'text',
            value: this.$moment(this.user.createdAt).format(
              'DD MMMM YYYY, HH:mm'
            )
          },
          {
            id: 6,
            label: 'Geüpdatet op',
            type: 'text',
            value: this.$moment(this.user.updatedAt).format(
              'DD MMMM YYYY, HH:mm'
            )
          }
        ]
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
