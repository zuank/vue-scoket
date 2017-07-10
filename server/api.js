const mongodb = require('./db');
function checkLogin(req, res, next) {
  if (!req.session.userName) {
    req.flash('error', '用户未登录！');
    res.redirect('/');
  }
  next();
}

function checkNotLogin(req, res, next) {
  if (req.session.userName) {
    req.flash('error', '用户已登录！');
    // res.redirect('back');
  }
  next();
}
module.exports = (app) => {
  app.post('/api/reg', (req, res) => {
    if (req.body.userName === '') {
      res.status(200).json({
        status: 1,
        error: '用户名不能为空',
      });
      return;
    }
    if (req.body.password === '') {
      res.status(200).json({
        status: 1,
        error: '密码不能为空',
      });
    }
    mongodb.open((err, db) => {
      db.collection('user', (error, collection) => {
        if (err) {
          return;
        }
        collection.insert(req.body, (err, result) => {
          mongodb.close();
          res.status(200).json({
            status: 0,
            userName: req.body.userName,
            userId: result.ops[0]._id,
          });
        });
      });
    });
  });

  app.post('/api/login', (req, res) => {
    mongodb.open((err, db) => {
      db.collection('user', (error, collection) => {
        if (err || error) {
          return;
        }
        collection.findOne(req.body, (err, result) => {
          mongodb.close();
          if (result) {
            res.status(200).json({
              status: 0,
              userName: result.userName,
              userId: result._id,
            });
            req.session.userName = result.userName;
          } else {
            res.status(200).json({ status: 1, error: '用户名不存在或密码错误' });
          }
        });
      });
    });
  });
  app.get('/api/logout',(req, res) => {
    req.session.userName = null
  })
};
