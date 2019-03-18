<template>
  <div>
    <hr />
    <div class="box">
      <h1 class="title">{{ post.title }}</h1>
      <h2 class="subtitle">
        Door
        <a :href="`mailto:${post.author.email}`"
          >{{ post.author.first }} {{ post.author.last }}</a
        >
      </h2>
      <hr />
      <span class="has-text-grey">
        Gepost op
        {{ $moment(post.createdAt).format('DD MMMM YYYY, HH:mm') }}
      </span>
      <hr />
      <img :src="post.imgUrl" />
      <p style="white-space: pre-line">
        {{ post.body }}
      </p>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-danger" @click="$router.go(-1)">Terug</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  margin-right: 5px;
}
</style>

<script>
export default {
  name: 'PostsSingle',
  middleware: 'auth',
  data() {
    return {
      post: {
        title: '',
        body: '',
        imgUrl: '',
        author: {
          email: '',
          first: '',
          last: ''
        }
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
  }
}
</script>
