<template>
  <div>
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else>
      <router-link class="btn btn-light" :to="{ name: 'user-list' }"
        >Back to Search</router-link
      >
      Hireable:{{ ' ' }}
      <span v-if="user.hirable">
        <i class="fas fa-check text-success" />
      </span>
      <span v-else>
        <i class="fas fa-times-circle text-danger" />
      </span>
      <div class="card grid-2">
        <div class="all-center">
          <img
            :src="user.avatar_url"
            class="round-img"
            :alt="`${user.login} picture`"
            style="width: 150px"
          />
          <h1>{{ user.name !== null ? user.name : user.login }}</h1>
          <p>Location: {{ user.location }}</p>
        </div>
        <div>
          <template v-if="user.bio">
            <h3>Bio</h3>
            <p>{{ user.bio }}</p>
          </template>
          <a :href="user.html_url" class="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              <template v-if="user.login">
                <strong>Username: </strong> {{ user.login }}
              </template>
            </li>
            <li>
              <template v-if="user.company">
                <strong>Company: </strong> {{ user.company }}
              </template>
            </li>
            <li>
              <template v-if="user.blog">
                <strong>Website: </strong> {{ user.blog }}
              </template>
            </li>
          </ul>
        </div>
      </div>
      <div class="card text-center">
        <div class="badge badge-primary">Followers: {{ user.followers }}</div>
        <div class="badge badge-success">Following: {{ user.following }}</div>
        <div class="badge badge-white">
          Public Repos: {{ user.public_repos }}
        </div>
        <div class="badge badge-dark">
          Public Gists: {{ user.public_gists }}
        </div>
      </div>
    </div>
    <Repos :username="user.login" v-if="user" />
  </div>
</template>

<script>
import UserService from '@/services/UserService.js'
import Spinner from '@/components/layout/Spinner.vue'
import Repos from '@/components/repos/Repos.vue'

export default {
  name: 'UserPage',
  props: {
    username: [String]
  },
  data() {
    return {
      user: null,
      loading: false
    }
  },
  components: {
    Spinner,
    Repos
  },
  methods: {
    getUserByUsername() {
      this.loading = true
      UserService.getUser(this.username)
        .then(response => {
          this.user = response.data
          this.loading = false
        })
        .catch(error => {
          console.log('There was an error :', error.response)
        })
    }
  },
  created() {
    this.getUserByUsername()
  }
}
</script>

<style lang="scss" scoped></style>
