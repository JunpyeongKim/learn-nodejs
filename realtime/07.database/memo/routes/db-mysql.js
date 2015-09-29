var express = require('express');
var router = express.Router();
var fs = require('fs');

// MySQL
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    //password: 'password',
    database: 'memo_mysql'
});

router.
    route('/').
    get(function (req, res) {
        fs.readFile('./public/memo.html', 'utf8', function (error, data) {
            if (error) {
                throw error;
            } else {
                res.send(data, {'Content-Type': 'text/html'}, 200);
            }
        });
    });

router.
    route('/load').
    get(function (req, res) {
        connection.query('SELECT * FROM memo', function (err, rows) {
            res.json(rows);
        });
    });

router.
    route('/write').
    post(function (req, res) {
        var author = req.body.author;
        var contents = req.body.contents;
        var date = new Date();

        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) +
            date.getDate() +
            ('00' + date.getUTCHours()).slice(-2) +
            ('00' + date.getUTCMinutes()).slice(-2) +
            ('00' + date.getUTCSeconds()).slice(-2);


        var memo = {
            author: author,
            contents: contents//,
            //date: date
        };

        connection.query('INSERT INTO memo SET ?', memo, function (err, result) {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.json({ status: 'SUCCESS' });
            }
        });
    });

router.
    route('/modify').
    post(function (req, res) {
        var _id = req.body._id;
        var contents = req.body.contents;

        var set = { contents: contents };
        var where = { _id: _id };
        connection.query('UPDATE memo SET contents="' + contents + '" WHERE ?', where, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.json({ status: 'SUCCESS' });
            }
        });
    });

router.
    route('/del').
    post(function (req, res) {
        var _id = req.body._id;
        var where = { _id: _id };

        connection.query('DELETE FROM memo WHERE ?', where, function (err, result) {
            if (err) {
                throw err;
            } else {
                res.json({ status: 'SUCCESS' });
            }
        });
    });

module.exports = router;
