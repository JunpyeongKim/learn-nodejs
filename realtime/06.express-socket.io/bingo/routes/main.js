var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // open http://localhost:3000/main?username=test1
    res.render('main', { title: 'Bingo', username: req.query.username });
});

module.exports = router;
