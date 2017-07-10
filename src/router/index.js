import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/Login';
import Info from '@/page/Info';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
    },
  ],
});
