<template>
  <div id="ellipsis">
    <span v-if="content.split(' ').length > wordLength && !showAll">
      {{
        content
          .split(' ')
          .slice(0, wordLength)
          .join(' ')
      }}
      <router-link
        :to="{name: 'portfolio/blog-posts-single', params: {id: link}}"
        exact
      >
        ...</router-link
      >
    </span>
    <span v-else>{{ content }}</span>
  </div>
</template>
<script>
export default {
  name: 'Ellipsis',
  props: {
    content: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      wordLength: 75,
      showAll: false
    }
  }
}
</script>
