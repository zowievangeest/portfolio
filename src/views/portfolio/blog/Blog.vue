<template>
  <div>
    <section id="blog" class="hero is-dark has-background-black">
      <Title title="Blog" />
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column blog-post is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop"
            v-for="post in posts"
            :key="post._id"
          >
            <img :src="post.imgUrl" :alt="post.title" />
            <div class="columns">
              <div class="blog-title column is-10-tablet is-offset-1-tablet">
                <h1 class="title has-text-centered">
                  <router-link
                    :to="{
                      name: 'portfolio/blog-posts-single',
                      params: {id: post._id}
                    }"
                    exact
                    >{{ post.title }}</router-link
                  >
                </h1>
                <p class="blog-txt">
                  <Ellipsis :content="post.body" :link="post._id" />
                </p>
                <div class="blog-info has-text-weight-bold is-size-7">
                  <a :href="`mailto: ${post.author.email}`"
                    >{{ post.author.first }} {{ post.author.last }} </a
                  >,
                  {{ $moment(post.createdAt).format('DD MMMM YYYY') }}
                </div>
                <hr />
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
import Ellipsis from '../../../components/portfolio/ellipsis/Ellipsis'
export default {
  name: 'Blog',
  components: {Ellipsis, Title},
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    posts() {
      let {posts} = this.data

      posts = posts.filter(item => {
        return !(item['show'] === undefined || item['show'] !== true)
      })

      posts = posts.sort(function(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
      return posts
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Blog.scss';
</style>
