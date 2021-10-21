import Vue from "vue";
import Vuex from "vuex";

import i18n from "./modules/i18n";
import form from "./modules/form";
import company from "./modules/company";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    i18n,
    form,
    company,
  },
});
