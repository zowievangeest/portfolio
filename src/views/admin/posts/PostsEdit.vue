<template>
  <div>
    <hr />
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Titel</label>
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
          <label class="label">Tekst</label>
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
          <label class="label">Afbeelding Url</label>
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
        <button class="button is-success" @click="updatePost">Updaten</button>
      </div>
      <div class="control">
        <button class="button is-danger" @click="$router.go(-1)">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostsEdit',
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
  beforeMount() {
    this.$store
      .dispatch('posts/fetchPostById', this.$store.state.route.params.id)
      .then(() => {
        let newPost
        newPost = Object.assign({}, this.$store.getters['posts/post'])
        this.post = newPost
      })
  },
  methods: {
    success() {
      this.$toast.open({
        duration: 5000,
        message: 'Post geüpdatet',
        position: 'is-bottom-right',
        type: 'is-success'
      })
    },
    danger() {
      this.$toast.open({
        duration: 5000,
        message: 'Post niet geüpdatet',
        position: 'is-bottom-right',
        type: 'is-danger'
      })
    },
    updatePost() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('posts/updatePost', {post: this.post})
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
.button {
  margin-right: 5px;
}
</style>
