<template>
  <div class="card text-center">
    <img
      :src="user.avatar_url"
      :alt="`${user.login} picture`"
      class="round-img"
      :style="imageDimensions"
    />
    <h3>{{ user.login }}</h3>
    <div>
      <a class="btn btn-dark btn-sm my-1" :href="user.html_url">More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data() {
    return {
      imageDimensions: {
        width: '60px'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
