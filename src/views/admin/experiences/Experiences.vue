<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              Ervaring
            </h1>
            <h2 class="subtitle">
              Mijn ervaring
            </h2>
          </div>
          <div class="column">
            <router-link
              :to="{name: 'experiences/create'}"
              class="button is-primary is-pulled-right is-vertical"
              exact
              >Nieuwe ervaring</router-link
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
  name: 'Experiences',
  middleware: 'auth'
}
</script>
