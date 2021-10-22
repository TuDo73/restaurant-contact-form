<template>
  <div id="app">
    <router-view />
    <LoadingState />
  </div>
</template>

<script>
import LoadingState from "@/components/LoadingState.vue";

export default {
  name: "App",
  components: {
    LoadingState,
  },
};
</script>

<style lang="scss">
@import "css/main.scss";
</style>
