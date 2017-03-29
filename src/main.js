// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  sync,
} from 'vuex-router-sync';
import router from './router';
import store from './store';
import components from './component';

// 注册全局组件
Object.keys(components).forEach((key) => {
  Vue.component(`z-${key}`, components[key]);
});
Vue.config.productionTip = false;
sync(store, router);
const app = new Vue({
  router,
  store,
}).$mount('#app');
window.console.log(app);
