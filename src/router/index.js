import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let routes = [
  {
    path: '/',
    name: 'index',
    components: {
      header: resolve => {
        require(['../components/header/mainHeader'], resolve);
      },
      default: resolve => {
        require(['../pages/index/index'], resolve);
      }
    }
  },
  {
    path: '/car',
    name: 'car',
    components: {
      header: resolve => {
        require(['../components/header/mainHeader'], resolve);
      },
      default: resolve => {
        require(['../pages/car/index'], resolve);
      }
    }
  },
  {
    path: '/product',
    name: 'product',
    components: {
      header: resolve => {
        require(['../components/header/mainHeader'], resolve);
      },
      default: resolve => {
        require(['../pages/product/index'], resolve);
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: resolve => {
        require(['../pages/about/index'], resolve);
      }
    }
  }
];
let router = new VueRouter({
  mode: 'history',
  routes
});
export default router;
