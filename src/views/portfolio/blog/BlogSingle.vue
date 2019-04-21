<template>
  <div>
    <section
      id="blogsingle"
      class="hero is-fullheight is-dark has-background-black"
    >
      <Title title="Post" />
      <div class="container" v-if="post">
        <div class="columns is-multiline">
          <div
            class="column blog-post is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop"
          >
            <img :src="post.imgUrl" :alt="post.title" />
            <div class="columns">
              <div class="blog-title column is-10-tablet is-offset-1-tablet">
                <h1 class="title has-text-centered">
                  {{ post.title }}
                </h1>
                <div class="blog-info has-text-weight-bold is-size-7">
                  <a :href="`mailto: ${post.author.email}`"
                    >{{ post.author.first }} {{ post.author.last }} </a
                  >,
                  {{ $moment(post.createdAt).format('DD MMMM YYYY') }}
                </div>
                <p class="blog-txt">
                  {{ post.body }}
                </p>
                <hr />
                <span
                  class="tag tag-back is-large is-tag-outline-white is-centered"
                  @click="back"
                >
                  terug
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Title from '../../../components/portfolio/title/Title'
export default {
  name: 'BlogSingle',
  components: {
    Title
  },
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
  mounted() {
    this.fetchPostData()
  },
  watch: {
    $route: 'fetchPostData'
  },
  methods: {
    fetchPostData() {
      const id = this.$route.params.id
      console.log(id)
      if (id) {
        this.$store.dispatch('posts/fetchPostById', id).then(() => {
          let newPost
          newPost = Object.assign({}, this.$store.getters['posts/post'])
          this.post = newPost
        })
      }
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'BlogSingle.scss';
</style>
