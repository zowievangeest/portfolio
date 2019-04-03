<template>
  <div>
    <hr />
    <div class="box content">
      <article v-for="post in getAllPosts" :key="post._id">
        <h4>
          {{ post.title
          }}<Published :condition="post.show" style="margin-left: 15px" />
        </h4>
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
              :to="{name: 'posts/single', params: {id: post._id}}"
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
              :to="{name: 'posts/edit', params: {id: post._id}}"
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
<script>
import {mapGetters} from 'vuex'
import Published from '../../../components/dashboard/published/Published.vue'

export default {
  name: 'PostsAll',
  middleware: 'auth',
  components: {
    Published
  },
  async mounted() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('posts/fetchAllPosts')
    })
  },
  computed: {
    ...mapGetters({
      experiences: 'posts/posts'
    }),
    getAllPosts() {
      return this.experiences ? this.experiences : ''
    }
  },
  methods: {
    confirm(id) {
      this.$dialog.confirm({
        message: 'Weet je zeker dat je het wilt verwijderen?',
        onConfirm: () => {
          this.$store.dispatch('posts/deletePost', id).then(() => {
            this.$store.dispatch('posts/fetchAllPosts')
            this.$toast.open({
              duration: 5000,
              message: 'Blog verwijderd',
              position: 'is-bottom-right',
              type: 'is-danger'
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.margin-left-10 {
  margin-left: 10px;
}
</style>
