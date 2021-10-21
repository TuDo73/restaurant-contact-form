const state = {
  // data
  isActivePopup: true,
  isActiveDatenschutzPopup: false,
  isShowLoading: false,
  formData: {},
};

const getters = {
  // computed
};

const actions = {
  // methods
  updatePopup({ state }, value) {
    state.isActivePopup = value;
  },
  updatePopupDatenschutz({ state, dispatch }, value) {
    state.isActiveDatenschutzPopup = value;
    dispatch("updatePopup", value);
  },
};

const mutations = {
  // handle response from actions to update state
  showLoading(state, loading) {
    state.isShowLoading = loading;
  },

  setFormData(state, value) {
    state.formData = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
