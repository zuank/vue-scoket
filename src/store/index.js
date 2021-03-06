import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action';
import socket from './moudules/socket';
import user from './moudules/user';

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    socket,
    user,
  },
  getters: {

  },
  actions: {
    ...actions,
  },
});
