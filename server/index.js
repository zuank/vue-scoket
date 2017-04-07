const express = require('express');
// const httpProxy = require('http-proxy');
const configIO = require('./io');
const api = require('./api');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const settings = require('./settings');
// const path = require('path');

const app = express();

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

// app.use(express.static(path.join(__dirname, '../dist')));
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

const server = app.listen(port);

const io = require('socket.io').listen(server);
// 接入io配置
configIO(io);
api(app);
