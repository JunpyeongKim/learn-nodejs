var express = require('express');
var router = express.Router();

var iniparser = require('iniparser');
var config = iniparser.parseSync('./config.ini');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //fail();
    res.render('index', { title: config.title, message: config.message });
});

module.exports = router;
