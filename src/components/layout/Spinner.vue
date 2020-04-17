<template>
  <img src="@/assets/spinner.gif" alt="Loading..." :style="spinnerStyle" />
</template>

<script>
export default {
  data() {
    return {
      spinnerStyle: {
        width: '200px',
        margin: 'auto',
        display: 'block'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
