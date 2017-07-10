import vm from '@/main.js'

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
  vm.$http.post('/api/login', JSON.stringify(info)).then((response) => {
    if (response.body.status === 0) {
      commit('GET_USER_INFO', response.body);
      vm.$router.push('/info')
    }
  }, () => {

  });
}

export function socket_login(context, value) {
  console.log(111121);
}
