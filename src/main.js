// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import Vue from 'vue';
import resource from 'vue-resource';
import {
  sync,
} from 'vuex-router-sync';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import router from './router';
import store from './store';
import components from './component';

// 注册全局组件
Object.keys(components).forEach((key) => {
  Vue.component(`z-${key}`, components[key]);
});
Vue.use(MuseUI);
Vue.use(VueSocketio, socketio('http://172.16.20.148:3000/'), store);
Vue.config.productionTip = false;
sync(store, router);
Vue.use(resource);
const app = new Vue({
  router,
  store,
}).$mount('#app');

// 将app暴露出去
export default  app
