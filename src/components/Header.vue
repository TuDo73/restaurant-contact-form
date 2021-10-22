<template>
  <header>
    <div class="container">
      <div class="wrapper">
        <div class="top-header">
          <div class="address">{{ companyInfo.address_header }}</div>
          <div class="language-box">
            <div
              class="lang-box-wrap"
              :class="{ open: isShowLangOpt }"
              @click="showLangOpt()"
              ref="langBox"
            >
              <div
                class="lang-opt"
                :class="{ active: lang == 'de' }"
                @click="changeLang('de')"
              >
                <div class="lang-flag de-flag"></div>
                <span>DE</span>
              </div>
              <div
                class="lang-opt"
                :class="{ active: lang == 'vi' }"
                @click="changeLang('vi')"
              >
                <div class="lang-flag vi-flag"></div>
                <span>VI</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-header">
          <div class="text-header">
            {{
              $t(
                "Recording of contact data based on current regulations in connection with the corona pandemic"
              )
            }}
          </div>
          <div class="logo">
            <img :src="companyInfo.logo_path" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";

export default {
  components: {},

  computed: {
    ...mapState({
      lang: (state) => state.i18n.lang,
      companyInfo: (state) => state.company.companyInfo,
    }),
  },

  data() {
    return {
      isShowLangOpt: false,
    };
  },

  methods: {
    showLangOpt() {
      let langBox = this.$refs.langBox;
      let hLangBox = 0;
      let hLangOpt = 0;
      let langOpt = document.querySelectorAll(".lang-opt");
      for (let i = 0; i < langOpt.length; i++) {
        let hlangOpt = langOpt[i].getBoundingClientRect().height;
        hLangOpt = hlangOpt;
        hLangBox += hlangOpt;
      }
      if (this.isShowLangOpt) {
        langBox.style.height = hLangOpt + "px";
      } else {
        langBox.style.height = hLangBox + 1 + "px";
      }
      this.isShowLangOpt = !this.isShowLangOpt;
    },

    changeLang(langData) {
      this.$store.commit("i18n/setLang", langData);
      this.$i18n.locale = langData;
    },
  },

  created() {},
};
</script>

<style lang="scss"></style>
