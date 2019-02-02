// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import elementUI from 'element-ui';
Vue.config.productionTip = false;

Vue.use(elementUI);
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/main.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
