let mutations = {
  allProduct(state, goods) {
    state.productsList = goods;
  },
  buyItemById(state, product) {
    let productsList = state.productsList;
    let item = productsList.find(item => {
      return item.id == product.id;
    });
    if (item != undefined && item.num > 0) {
      //找到了
      item.num--;
    }
  },
  changeBuyStatus(state, status) {
    //更改购买状态
    state.buyStatus = status;
  }
};
export default mutations;
