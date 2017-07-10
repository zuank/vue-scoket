const express = require('express');
const http = require('http');
const httpProxy = require('http-proxy');
const configIO = require('./io');
const api = require('./api');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const settings = require('./settings');
const path = require('path');

const app = express();
// 配置反向代理 用于开发环境
const proxy = httpProxy.createProxyServer();
const proxyServer = http.createServer((req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:8888',
  });
});
proxyServer.listen(8088, () => {
  console.log('proxy server is running ');
});
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: settings.cookieSecret,
  key: settings.db,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
  store: new MongoStore({
    url: 'mongodb://localhost/chat',
    db: settings.db,
    host: settings.host,
    port: settings.port,
  }),
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

const server = app.listen(port);

const io = require('socket.io').listen(server);
// 接入io配置
configIO(io);
api(app);
