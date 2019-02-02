let mutations = {
  addToShopCar(state, obj) {
    console.log('购物车', obj);
    let item = state.carList.find(item => item.id == obj.id);
    if (item != undefined) {
      //有则增加数量
      item.buyCount++;
    } else {
      state.carList.push(obj);
    }
  }
};

export default mutations;
