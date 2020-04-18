<template>
  <div>This is the GitHub user : {{ id }}</div>
</template>

<script>
export default {
  name: 'UserPage',
  props: {
    id: [String, Number],
    data() {
      return {
        user: null
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
