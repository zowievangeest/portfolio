<template>
  <div>
    <hr />
    <div class="box content">
      <article v-for="post in getAllPosts" :key="post._id">
        <h4>{{ post.title }}</h4>
        <div class="media">
          <div class="media-left">
            <p class="image is-64x64">
              <img :src="post.imgUrl" :alt="post.title" />
            </p>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                Auteur:
                <a :href="`mailto:${post.author.email}`">{{
                  post.author.email
                }}</a
                ><br />
                <span class="has-text-grey-light">
                  {{ $moment(post.createdAt).format('DD MMMM YYYY, HH:mm') }}
                </span>
              </p>
            </div>
          </div>
          <div class="media-right">
            <router-link
              type="button"
              tag="button"
              class="button is-primary"
              :to="{name: 'single', params: {id: post._id}}"
              exact
              ><b-icon
                icon="eye-outline"
                type="is-light"
                custom-size="mdi-24px"
              ></b-icon
            ></router-link>
            <router-link
              type="button"
              tag="button"
              class="button is-success margin-left-10"
              :to="{name: 'edit', params: {id: post._id}}"
              exact
              ><b-icon
                icon="square-edit-outline"
                type="is-light"
                custom-size="mdi-24px"
              ></b-icon
            ></router-link>
            <button
              class="button is-danger margin-left-10"
              @click="confirm(post._id)"
            >
              <b-icon
                icon="delete-outline"
                type="is-light"
                custom-size="mdi-24px"
              ></b-icon>
            </button>
          </div>
        </div>
        <hr />
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.margin-left-10 {
  margin-left: 10px;
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'PostsAll',
  middleware: 'auth',
  async mounted() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('posts/fetchAllPosts')
    })
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    }),
    getAllPosts() {
      return this.posts ? this.posts : ''
    }
  },
  methods: {
    confirm(id) {
      this.$dialog.confirm({
        message: 'Weet je zeker dat je het wilt verwijderen?',
        onConfirm: () => {
          this.$store.dispatch('posts/deletePost', id)
          this.$toast.open({
            duration: 5000,
            message: 'Blog verwijderd',
            position: 'is-bottom-right',
            type: 'is-danger'
          })
        }
      })
    }
  }
}
</script>
