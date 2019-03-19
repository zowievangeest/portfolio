<template>
  <span>
    <span v-if="condition" class="statusTag tag is-success">
      <b-icon icon="checkbox-marked-circle" :custom-size="size"></b-icon>
    </span>
    <span v-else class="statusTag tag is-danger">
      <b-icon icon="alert-circle-outline" :custom-size="size"></b-icon>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.statusTag {
  width: 5px;
  height: 5px;
  padding: 12px;
  font-size: 1rem;
  border-radius: 100%;
}
</style>

<script>
export default {
  name: 'Published',
  props: {
    condition: {
      type: Boolean,
      required: true
    },
    size: {
      type: String,
      default: 'mdi-18px'
    }
  }
}
</script>
