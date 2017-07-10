module.exports = function (io) {
  io.sockets.on('connection', (socket) => {
    console.log(socket)
    socket.emit('TEST', {
      id: socket.id,
    });
    socket.on('test', (name) => {
      console.log(12311111);
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
      console.log('newdialog：' + str);
      io.emit('newdialog', {
        value: str,
        nickname: socket.nickname,
        type: 'dialog',
      });
    });
  });
};
