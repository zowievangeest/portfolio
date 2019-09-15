<template>
  <div class="title-container">
    <div class="page-title">
      <span>{{ title }}</span>
      <h2 class="new-title has-text-centered">{{ title }}</h2>
      <div class="under-line">
        <svg
          viewBox="0 0 69.172 14.975"
          width="37"
          height="28"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.357,12.26 10.807,2.81 20.328,12.332
                    29.781,2.879 39.223,12.321 48.754,2.79  58.286,12.321"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import './Title.scss';
</style>
