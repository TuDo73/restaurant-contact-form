<template>
  <transition name="fade">
    <div class="loading-box" v-if="$store.state.form.isShowLoading">
      <div class="loading-box-wrap">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { globalFunction } from "@/global/global.js";
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style></style>
