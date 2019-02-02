import mutations from './mutations';
import actions from './actions';
let state = {
  productsList: [],
  buyStatus: null
};
let getters = {
  pdListLen(state, getters) {
    return state.productsList.length;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
