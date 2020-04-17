<template>
  <div>
    <div :style="userStyle" v-if="!loading">
      <UserItem v-for="user in users" :key="user.id" :user="user" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import UserItem from '@/components/users/UserItem.vue'
import Spinner from '@/components/layout/Spinner.vue'

export default {
  props: {
    users: Array,
    loading: Boolean
  },
  components: {
    UserItem,
    Spinner
  },
  data() {
    return {
      userStyle: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
