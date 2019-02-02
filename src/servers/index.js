import data from './data';

export default {
  getAllProduct() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 100);
    });
  }
};
