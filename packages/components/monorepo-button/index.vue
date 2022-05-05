<template>
  <button :class="class" :disabled="disabled">{{ text }}</button>
</template>

<script>
export default {
  name: "monorepo-button",
  props: {
    class: {
      type: String,
      default: "default-button",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    text: {
      type: String,
      default: "Hello, World!",
      required: false
    }
  },
}
</script>

<style scoped lang="scss">
button {
  &[disabled] {
    cursor: default;
    opacity: 0.6;
  }

  &.default-button {
    background: green;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 10px 20px;
  }
}
</style>
