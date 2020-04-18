<template>
  <div>
    <form class="form" @submit.prevent="onSubmit">
      <input
        type="text"
        name="searchText"
        v-model="searchText"
        placeholder="Search Users ..."
      />
      <input type="submit" class="btn btn-dark btn-block" value="Search" />
    </form>
    <button
      v-show="showClear"
      class="btn btn-light btn-block"
      @click="clearUsers"
    >
      Clear
    </button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  props: {
    showClear: Boolean
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.searchText === '') {
        let alertData = {
          type: 'danger',
          message: 'Please enter a valid text to search for.'
        }
        eventBus.$emit('alert-signal', alertData)
      } else {
        eventBus.$emit('search-submitted', this.searchText)
      }
    },
    clearUsers() {
      this.searchText = ''
      eventBus.$emit('clear-users', this.searchText)
    }
  }
}
</script>

<style lang="scss" scoped></style>
