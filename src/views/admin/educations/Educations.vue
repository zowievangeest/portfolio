<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              Opleidingen
            </h1>
            <h2 class="subtitle">
              Mijn opleidingen
            </h2>
          </div>
          <div class="column">
            <router-link
              :to="{name: 'educations/create'}"
              class="button is-primary is-pulled-right is-vertical"
              exact
              >Nieuwe opleiding</router-link
            >
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Educations',
  middleware: 'auth'
}
</script>
<style lang="scss" scoped></style>
