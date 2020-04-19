import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // get a single user by user login name
  getUser(username) {
    return apiClient.get(
      `/users/${username}?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )
  },
  // get an array of users based on search criteria
  getUsers(searchText) {
    return apiClient.get(
      `/search/users?q=${searchText}&client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )
  },
  // get a single user's 6 most recent repos
  getReposByUsername(username) {
    return apiClient.get(
      `/users/${username}/repos?per_page=6&sort=created:ascclient_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )
  }
}
