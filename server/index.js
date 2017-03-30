const express = require('express');
// const httpProxy = require('http-proxy');
const configIO = require('./io');
const api = require('./api');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, '../dist')));
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

const server = app.listen(port);
// httpProxy.createProxyServer({
//   target: 'http://127.0.0.1:8080',
// }).listen(3333);
const io = require('socket.io').listen(server);
// 接入io配置
configIO(io);
api(app);
