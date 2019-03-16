<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="logout">Log uit</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: 'auth',
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
