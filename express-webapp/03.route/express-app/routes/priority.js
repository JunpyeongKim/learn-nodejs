/**
 *
 * 라우트 우선순위
 *  - (*) next : 다음 차례의 미들웨어 참조값
 */

var express = require('express');
var router = express.Router();


// 1
router.route('/abcd').
    get(function (req, res) {
        res.send('abcd');
    });

router.route('/abc*').
    get(function (req, res) {
        res.send('abcd*');
    });

// 2
router.route('/abc*').
    get(function (req, res) {
        res.send('abcd*');
    });

router.route('/abcd').
    get(function (req, res) {
        res.send('abcd');
    });

// 3
router.route('/abc*').
    get(function (req, res, next) {
        if (req.path === '/abcd') {
            next();
        } else {
            res.send('abcd*');
        }
    });

router.route('/abcd').
    get(function (req, res, next) {
        res.send('abcd');
    });

module.exports = router;