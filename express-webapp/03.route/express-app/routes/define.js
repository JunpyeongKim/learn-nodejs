var express = require('express');
var router = express.Router();

router.route('/').
    all(function (req, res, next) {
        // Express 만의 함수 --> Response Headers --> X-Catch-All: true (4.x 에는 없다??)
        res.send('/ ALL OK');
    }).
    get(function (req, res, next) {
        res.send('/ GET OK');
    }).
    post(function (req, res, next) {
        res.send('/ POST OK');
    }).
    put(function (req, res, next) {
        res.send('/ PUT OK');
    }).
    patch(function (req, res, next) {
        res.send('/ PATCH OK');
    }).
    delete(function (req, res, next) {
        res.send('/ DELETE OK');
    }).
    options(function (req, res, next) {
        res.send('/ OPTIONS OK');
    }).
    notify(function (req, res, next) {
        res.send('/ NOTIFY OK');
    }).
    subscribe(function (req, res, next) {
        res.send('/ SUBSCRIBE OK');
    }).
    unsubscribe(function (req, res, next) {
        res.send('/ UNSUBSCRIBE OK');
    });

// M-SEARCH ???
//app['m-search']('/', function (req, res, next) {
//    res.send('/ M-SEARCH OK');
//});

// HEAD
// - HTTP API에게 맡기는 것이 가장 최선의 방법이다.


module.exports = router;
