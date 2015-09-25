var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // TODO:
    res.send('this is main router');
});

module.exports = router;
