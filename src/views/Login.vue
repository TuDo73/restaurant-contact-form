<template>
  <div class="login-wrapper">
    <div class="login-form-wrap">
      <form class="login-form validate-form" @submit.prevent="login">
        <span class="login-form-title">
          Admin Login
        </span>
        <div class="wrap-input-login validate-input">
          <input
            class="input-login"
            type="text"
            placeholder="Username"
            v-model="username"
          />
          <span class="focus-input-login"></span>
        </div>
        <div class="wrap-input-login validate-input">
          <input
            class="input-login"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <span class="focus-input-login"></span>
        </div>
        <div class="login-btn-wrap">
          <button class="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
      <div class="login-error" v-if="isLoginFalse">
        Login failed!
      </div>
    </div>
  </div>
</template>
<script>
// import { globalFunction } from "@/global/global.js";
import { mapState } from "vuex";
import User from "@/services/User";

export default {
  components: {},

  computed: {
    ...mapState({}),
  },

  data() {
    return {
      username: "",
      password: "",
      isLoginFalse: false,
    };
  },

  methods: {
    login() {
      this.$store.commit("form/showLoading", true);
      User.login(this.username, this.password).then(() => {
        this.$store.commit("form/showLoading", false);

        if (sessionStorage.getItem("tokenCovidTracking") == "null") {
          this.isLoginFalse = true;
        } else {
          this.$router.push({ path: "/customer" });
        }
      });
    },
  },

  created() {
    sessionStorage.setItem("tokenCovidTracking", null);
  },
};
</script>

<style lang="scss"></style>
