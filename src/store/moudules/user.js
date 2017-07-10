export default {
  state: {
    userName: '',
    userId: '',
  },
  mutations: {
    'GET_USER_INFO' (state, info) {
      state.userName = info.userName;
      state.userId = info.userId;
    }
  },
};
