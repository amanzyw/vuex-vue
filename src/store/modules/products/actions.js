import goods from '@/servers';

function goToBug() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 11);
      if (random >= 3) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
let actions = {
  async getAllGoods({ commit }) {
    commit('allProduct', await goods.getAllProduct());
  },
  async buyProduct({ commit }, product) {
    console.log(arguments);
    commit('changeBuyStatus', null);
    try {
      commit('changeBuyStatus', 'buying');
      await goToBug();
      commit('changeBuyStatus', 'success');
      commit('buyItemById', product);
      commit('car/addToShopCar', product, { root: true });
    } catch (e) {
      commit('changeBuyStatus', 'error');
    }
  }
};

export default actions;
