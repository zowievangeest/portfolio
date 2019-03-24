<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              Projecten
            </h1>
            <h2 class="subtitle">
              Mijn projecten
            </h2>
          </div>
          <div class="column">
            <router-link
              :to="{name: 'projects/create'}"
              class="button is-primary is-pulled-right is-vertical"
              exact
              >Nieuw project</router-link
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
  name: 'Projects',
  middleware: 'auth'
}
</script>
