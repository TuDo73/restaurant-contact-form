const state = {
  // data
  companyInfo: {},
};

const getters = {
  // computed
};

const actions = {
  // methods
};

const mutations = {
  // handle response from actions to update state
  setCompanyInfo(state, data) {
    state.companyInfo = data[0];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
