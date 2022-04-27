<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "monorepo-button",
  props: {
    text: {
      type: String,
      default: "Hello, World!",
      required: false
    }
  },
}
</script>
