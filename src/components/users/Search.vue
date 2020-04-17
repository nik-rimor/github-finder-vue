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
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    onSubmit() {
      eventBus.$emit('search-submitted', this.searchText)
    }
  }
}
</script>

<style lang="scss" scoped></style>
