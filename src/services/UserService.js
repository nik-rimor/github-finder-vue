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
  getUsers() {
    return apiClient.get(
      `/users?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )
  },
  getUser(searchText) {
    return apiClient.get(
      `/search/users?q=${searchText}&client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )
  }
}
