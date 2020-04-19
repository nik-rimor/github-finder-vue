<template>
  <div class="card text-center -shadow">
    <img
      :src="user.avatar_url"
      :alt="`${user.login} picture`"
      class="round-img"
      :style="imageDimensions"
    />
    <h3>{{ user.login }}</h3>
    <div>
      <router-link
        class="btn btn-dark btn-sm my-1"
        :to="{ name: 'user-page', params: { username: user.login } }"
        >More</router-link
      >
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
