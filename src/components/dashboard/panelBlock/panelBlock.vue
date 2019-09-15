<template>
  <div class="panel-block">
    <div class="field is-horizontal fullwidth">
      <div class="field-label is-normal has-text-left">
        <label class="label">{{ label }}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" :type="type" :value="value" disabled />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelBlock',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.fullwidth {
  width: 100%;
}
</style>
