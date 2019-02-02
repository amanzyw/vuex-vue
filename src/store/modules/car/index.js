import mutations from './mutations';
import actions from './actions';
let state = {
  carList: []
};
let getters = {
  carListLen(state, getters) {
    return state.carList.length;
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
