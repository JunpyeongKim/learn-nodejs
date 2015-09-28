var express = require('express');
var router = express.Router();
var fs = require('fs');

// Mongoose
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/memo-mongoose');
var Schema = mongoose.Schema;

var Memo = new Schema({
    author: String,
    contents: String,
    date: Date
});

var memoModel = mongoose.model('Memo', Memo);

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
        memoModel.find({}, function (err, data) {
            //console.log('db-mongoose/load,', data);
            res.json(data);
        });
    });

router.
    route('/write').
    post(function (req, res) {
        var author = req.body.author;
        var contents = req.body.contents;
        var date = Date.now();

        var memo = new memoModel();

        memo.author = author;
        memo.contents = contents;
        memo.date = date;
        memo.comments = [];

        memo.save(function (err) {
            if (err) {
                throw err;
            } else {
                res.json({ status: 'SUCCESS' });
            }
        });
    });

router.
    route('/modify').
    post(function (req, res) {
        var _id = req.body._id;
        var contents = req.body.contents;

        memoModel.findOne({ _id: _id }, function (err, memo) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                memo.contents = contents;

                memo.save(function (err) {
                    if (err) {
                         throw err;
                    } else {
                        res.json({ status: 'SUCCESS' });
                    }
                });
            }
        });
    });

router.
    route('/del').
    post(function (req, res) {
        var _id = req.body._id;

        memoModel.remove({ _id: _id }, function (err, result) {
            if (err) {
                throw err;
            } else {
                res.json(result);
            }
        });
    });

module.exports = router;
