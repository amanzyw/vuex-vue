import Vue from 'vue';
import Vuex from 'vuex';
import car from './modules/car/index';
import products from './modules/products/index';

Vue.use(Vuex);
let store = new Vuex.Store({
  modules: {
    car,
    products
  }
});
export default store;
