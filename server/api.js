const mongodb = require('./db');
module.exports = function (app) {
  app.post('/api/reg', (req, res) => {
    mongodb.open((err, db) => {
      db.collection('user', (error, collection) => {
        if (err) {
          return;
        }
        collection.insert(req.body, () => {
          mongodb.close();
          res.status(200).json({ userName: req.body.userName });
        });
      });
    });
  });

  app.post('/api/login', (req, res) => {
    mongodb.open((err, db) => {
      db.collection('user', (error, collection) => {
        if (err) {
          return;
        }
        collection.findOne(req.body, (err, result) => {
          mongodb.close();
          if (result) {
            res.status(200).json(result);
          } else {
            res.status(200).json({ error: '用户名不存在或密码错误' });
          }
        });
      });
    });
  });
};
