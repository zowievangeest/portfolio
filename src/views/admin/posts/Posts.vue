<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              Blog Posts
            </h1>
            <h2 class="subtitle">
              Mijn blogs
            </h2>
          </div>
          <div class="column">
            <router-link
              :to="{name: 'posts/create'}"
              class="button is-primary is-pulled-right is-vertical"
              exact
              >Nieuwe blog post</router-link
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
  name: 'Posts',
  middleware: 'auth'
}
</script>
<style lang="scss" scoped></style>
