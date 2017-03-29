const express = require('express');
const httpProxy = require('http-proxy');
const configIO = require('./io');

const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port);
httpProxy.createProxyServer({
  target: 'http://127.0.0.1:8080',
}).listen(3333);
const io = require('socket.io').listen(server);
// 接入io配置
configIO(io);
