module.exports = function (io) {
  io.sockets.on('connection', (socket) => {
    socket.on('set nickname', (name) => {
      socket.nickname = name;
      socket.broadcast.emit('new user', {
        nickname: name,
        type: 'user',
      });
      socket.emit('login', {
        nickname: name,
        id: socket.id,
      });
    });
    socket.on('new dialog', (str) => {
      io.emit('new dialog', {
        value: str,
        nickname: socket.nickname,
        type: 'dialog',
      });
    });
  });
}
