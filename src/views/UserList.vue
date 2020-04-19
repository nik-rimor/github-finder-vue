<template>
  <div>
    <Search :showClear="displayedUsers > 0" />
    <Users :users="users" :loading="loading" />
  </div>
</template>

<script>
import UserService from '@/services/UserService.js'
import Users from '@/components/users/Users.vue'
import Search from '@/components/users/Search.vue'

import { eventBus } from '@/main.js'

export default {
  name: 'UserList',
  components: {
    Users,
    Search
  },
  data() {
    return {
      loading: false,
      users: [],
      searchText: ''
    }
  },
  methods: {
    searchUsers(searchText) {
      this.loading = true
      UserService.getUsers(searchText)
        .then(response => {
          this.users = response.data.items
          this.loading = false
        })
        .catch(error => {
          console.log('There was an error : ', error.response)
        })
    },
    clearUsers() {
      ;(this.searchText = ''), (this.users = []), (this.loading = false)
    }
  },
  computed: {
    displayedUsers() {
      return this.users.length
    }
  },
  created() {
    eventBus.$on('search-submitted', searchText => {
      this.searchText = searchText
      this.searchUsers(searchText)
    }),
      eventBus.$on('clear-users', searchText => {
        this.searchText = searchText
        this.clearUsers()
      })
  }
}
</script>

<style lang="scss" scoped></style>
