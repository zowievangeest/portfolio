<template>
  <div>
    <hr />
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Titel<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              v-validate="'required'"
              name="titel"
              class="input"
              type="text"
              v-model="post.title"
              placeholder="Blog titel"
            />
            <span class="has-text-danger">{{ errors.first('titel') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Tekst<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <textarea
              name="tekst"
              v-validate="'required'"
              class="textarea"
              v-model="post.body"
              placeholder="Blog tekst"
            ></textarea>
            <span class="has-text-danger">{{ errors.first('tekst') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label"
            >Afbeelding Url<sup class="has-text-danger"> *</sup></label
          >
          <div class="control">
            <input
              class="input"
              type="url"
              v-validate="'required|url'"
              name="url"
              v-model="post.imgUrl"
              placeholder="Afbeeldingsadres"
            />
            <span class="has-text-danger">{{ errors.first('url') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field" v-if="post.imgUrl">
          <label class="label">Voorvertoning</label>
          <figure class="render-img image is-128x128">
            <img :src="post.imgUrl" />
          </figure>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Publiceren op portfolio</label>
          <b-switch v-model="post.show">
            {{ post.show ? 'Ja' : 'Nee' }}
          </b-switch>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click="createPost">
          Aanmaken
        </button>
      </div>
      <div class="control">
        <button class="button is-danger" @click="$router.go(-1)">Terug</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostsCreate',
  middleware: 'auth',
  data() {
    return {
      post: {
        title: '',
        body: '',
        imgUrl: '',
        show: false
      }
    }
  },
  methods: {
    success() {
      this.$toast.open({
        duration: 5000,
        message: 'Post aangemaakt',
        position: 'is-bottom-right',
        type: 'is-success'
      })
    },
    danger() {
      this.$toast.open({
        duration: 5000,
        message: 'Post niet aangemaakt',
        position: 'is-bottom-right',
        type: 'is-danger'
      })
    },
    createPost() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('posts/create', {post: this.post})
            .then(() => {
              this.success()
              this.$store.dispatch('posts/fetchAllPosts').then(() => {
                this.$router.push({name: 'posts/all'})
              })
            })
            .catch(() => {
              this.danger()
            })
          return
        }
        this.danger()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.render-img {
  margin-bottom: 10px;
}
</style>
