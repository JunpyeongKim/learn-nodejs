var express = require('express');
var router = express.Router();
var fs = require('fs');

// Mongolian
var Mongolian = require('mongolian');
var ObjectId = Mongolian.ObjectId;  // default - mongo://localhost:27017

var server = new Mongolian;
var db = server.db('memo-mongolian');
var memo = db.collection('memo');

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
        memo.find().toArray(function (err, array) {
            for (var i = 0; i < array.length; i++) {
                var _id = array[i]._id.toString();
                delete array[i]._id.bytes;
                array[i]._id = _id;
            }

            res.json(array);
        });
    });

router.
    route('/write').
    post(function (req, res) {
        var author = req.body.author;
        var contents = req.body.contents;

        memo.insert({
            author: author,
            contents: contents,
            date: new Date()
        });

        res.json({ status: 'SUCCESS' });
    });

router.
    route('/modify').
    post(function (req, res) {
        var _id = req.body._id;
        var contents = req.body.contents;

        memo.update({ _id: new ObjectId(_id) }, { $set: { contents: contents } }, function (err, data) {
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

        memo.remove({ _id: new ObjectId(_id) }, function (err, result) {
            if (err) {
                throw err;
            } else {
                res.json({ status: 'SUCCESS' });
            }
        });
    });

module.exports = router;



