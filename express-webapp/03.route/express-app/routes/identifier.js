/**
 * 라우트 식별자
 *  - 주로 문자열 기반 라우트 정의 방법을 사용한다
 *      - 정규식 기반 라우트 정의 방법은 디버깅과 유지 관리가 더 힘들기 때문이다.
 *
 */

var express = require('express');
var router = express.Router();


//-------------------------------------------------
// String or Reqular Expression

// /abcd
router.route('/abcd').
    get(function (req, res) {
        res.send('abcd');
    });

// /acd
router.route('/ab?cd').
    get(function (req, res) {
        res.send('ab?cd');
    });

// /abbcd
router.route('/ab+cd').
    get(function (req, res) {
        res.send('ab+cd');
    });

// /abxyzcd
router.route('/ab*cd').
    get(function (req, res) {
        res.send('ab*cd');
    });

// //abe, /abcde
router.route('/ab(cd)?e').
    get(function (req, res) {
        res.send('ab(cd)?e');
    });

//-------------------------------------------------
// Named Placeholder
router.route('/user/:id').
    get(function (req, res) {
        res.send('user id: ' + req.params.id);
    });

router.route('/country/:country/state/:state').
    get(function (req, res) {
        res.send(req.params.country + ', ' + req.params.state);
    });

router.route('/route/:from-:to').
    get(function (req, res) {
        res.send(req.params.from + ' to ' + req.params.to);
    });

router.route('/file/:name.:ext').
    get(function (req, res) {
        res.send(req.params.name + '.' + req.params.ext.toLowerCase());
    });

router.route('/feed/:format?').
    get(function (req, res) {
        if (req.params.format) {
            res.send('format: ' + req.params.format);
        } else {
            res.send('default format');
        }
    });

module.exports = router;