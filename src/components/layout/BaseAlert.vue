<template>
  <div class="alert" :class="alertClass">
    <i class="fas fa-info-circle"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    alertType: String
  },
  computed: {
    alertClass() {
      return `alert-${this.alertType}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
