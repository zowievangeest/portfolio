<template>
  <section class="hero is-fullheight login-page">
    <div class="hero-body">
      <div class="container">
        <div class="column is-6 is-offset-3">
          <div class="logo">
            <img
              src="../../../assets/images/logo/logo-zowie-van-geest.svg"
              alt="Logo - Zowie"
              class="is-center"
            />
          </div>
          <div class="login">
            <h3 class="title has-text-centered">Login</h3>
            <b-field label="Email">
              <b-input type="email" v-model="user.email" icon="email"></b-input>
            </b-field>
            <b-field label="Wachtwoord">
              <b-input
                type="password"
                v-model="user.password"
                icon="lock"
                password-reveal
              ></b-input>
            </b-field>
            <b-field>
              <p class="control is-right">
                <button class="button is-primary is-medium" @click="login">
                  Log in
                </button>
              </p>
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  middleware: 'guest',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.login-page {
  height: 100vh;
  background: url(~@/assets/images/background/background-zowie-portfolio.jpg)
    center center fixed no-repeat;
  background-size: cover;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }
  & .logo {
    margin-bottom: 1rem;
    img {
      display: flex;
      max-width: 300px;
      margin: auto;
    }
  }
}
</style>
