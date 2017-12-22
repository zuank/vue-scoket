module.exports = function (io) {
  io.sockets.on('connection', (socket) => {
    socket.emit('test', {
      id: socket.id,
    });
    socket.on('test', (name) => {
      socket.broadcast.emit('newuser', {
        nickname: name,
        type: 'user',
      });
      socket.emit('login', {
        nickname: name,
        id: socket.id,
      });
    });
    socket.on('newdialog', (str) => {
      io.emit('newdialog', {
        value: str,
        nickname: socket.nickname,
        type: 'dialog',
      });
    });
  });
};
