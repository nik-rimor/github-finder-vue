<template>
  <nav class="navbar bg-primary">
    <h1>
      <i :class="icon" />
      {{ title }}
    </h1>
    <ul>
      <li>
        <router-link :to="{ name: 'user-list' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
    </ul>
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
