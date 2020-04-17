<template>
  <nav class="navbar bg-primary">
    <h1>
      <i :class="icon" />
      {{ title }}
    </h1>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'GitHub Finder'
    },
    icon: {
      type: String,
      default: 'fab fa-github'
    }
  }
}
</script>

<style lang="scss" scoped></style>
