<template>
  <div :class="`bg-loader ${this.dark && 'bg-loader--dark'}`"></div>
</template>

<style scoped>
@import "./style.scss";
</style>

<script>
export default {
  name: "BgLoader",
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>
