var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  if (false) {//req.session.auth) {
      var name = req.session.auth.google.user.name;
      var picture = req.session.auth.goole.user.picture;

      res.render('index', { name: name, picture: picture });
  } else {
      res.render('index', { name: '', picture: '' });
  }
});

module.exports = router;
