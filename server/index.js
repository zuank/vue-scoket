const express = require('express');
const httpProxy = require('http-proxy');
const configIO = require('./io');

const app = express();
// const path = require('path');

const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, '../dist')));
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/'));
// });

const server = app.listen(port, () => {
  console.log(`technode is on port ${port} |`);
});
httpProxy.createProxyServer({
  target: 'http://172.16.40.8:8080',
}).listen(3030);
const io = require('socket.io').listen(server);
// 接入io配置
configIO(io);
