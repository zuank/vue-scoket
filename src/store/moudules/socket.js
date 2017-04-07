export default {
  state: {
    connect: false,
    info: {},
  },
  mutations: {
    'SOCKET_CONNECT' (state) {
      state.connect = true;
    },
    'SOCKET_TEST' (state, info) {
      state.info = info;
    },
  },
};
