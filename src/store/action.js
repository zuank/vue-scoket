import Vue from 'vue';

const vm = new Vue();

export function userReg({
  commit,
  dispatch,
}, info) {
  vm.$http.post('/api/reg', JSON.stringify(info)).then(() => {

  }, () => {

  });
}
export function userLogin({
    commit,
    dispatch,
}, info) {
  vm.$http.post('/api/login', JSON.stringify(info)).then(() => {

  }, () => {

  });
}