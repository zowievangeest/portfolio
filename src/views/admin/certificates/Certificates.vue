<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              Certificaten
            </h1>
            <h2 class="subtitle">
              Mijn certificaten
            </h2>
          </div>
          <div class="column">
            <router-link
              :to="{name: 'certificates/create'}"
              class="button is-primary is-pulled-right is-vertical"
              exact
              >Nieuw certificaat</router-link
            >
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  name: 'Certificates',
  middleware: 'auth'
}
</script>
