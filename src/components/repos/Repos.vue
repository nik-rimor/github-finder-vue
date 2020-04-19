<template>
  <div>
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else :style="repoGridStyle">
      <RepoItem v-for="repo in repos" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService.js'
import RepoItem from '@/components/repos/RepoItem.vue'
import Spinner from '@/components/layout/Spinner.vue'

export default {
  name: 'Repos',
  props: {
    username: String
  },
  components: {
    RepoItem,
    Spinner
  },
  data() {
    return {
      repos: [],
      loading: false,
      repoGridStyle: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
      }
    }
  },
  methods: {
    getRepos() {
      this.loading = true
      UserService.getReposByUsername(this.username)
        .then(response => {
          this.repos = response.data
          this.loading = false
        })
        .catch(error => {
          console.log('There was an error : ', error.response)
          this.loading = false
        })
    }
  },
  created() {
    this.getRepos()
  }
}
</script>

<style lang="scss" scoped></style>
