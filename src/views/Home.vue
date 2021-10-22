<template>
  <div class="body-wrapper" :class="{ 'active-popup': isActivePopup }">
    <MainPopup />
    <DatenschutzPopup />
    <Header />
    <Form />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import Form from "@/components/Form.vue";
import MainPopup from "@/components/MainPopup.vue";
import DatenschutzPopup from "@/components/DatenschutzPopup.vue";
import Company from "@/services/Company";

export default {
  components: {
    Header,
    Form,
    MainPopup,
    DatenschutzPopup,
  },

  computed: {
    ...mapState({
      isActivePopup: (state) => state.form.isActivePopup,
    }),
  },

  data() {
    return {};
  },

  methods: {
    getCompanyInfo() {
      this.$store.commit("form/showLoading", true);

      Company.getCompany().then((res) => {
        this.$store.commit("company/setCompanyInfo", res);
        this.$store.commit("form/showLoading", false);
      });
    },
  },

  created() {
    this.getCompanyInfo();
  },
};
</script>

<style lang="scss"></style>
