var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/sns');
var Schema = mongoose.Schema;

var Post = new Schema({
    author: String,
    picture: String,
    contents: String,
    date: Date,
    like: Number,
    comments: Array
});

var postModel = mongoose.model('Post', Post);

var check_auth = function (req, res, next) {
    if (false) {//!req.loggedIn) {
        console.log('sns: not loggedin');

        //res.redirect('/auth/google');
        res.json({status: 'sns: not logged in'});
        //next();
        return;
    }

    console.log('logged in');
    next();
};

router.use(check_auth);

router.route('/load').
    get(function (req, res, next) {
        console.log('/sns/load');

        postModel.find({}, function (err, data) {
            console.log(data);
            res.json(data);
        });
    });

router.route('/write').
    post(function (req, res, next) {

        console.log('/sns/write');

        var author = req.body.author;
        var picture = req.body.picture;
        var contents = req.body.contents;
        var date = Date.now();

        var post = new postModel();
        post.author = author;
        post.picture = picture;
        post.contents = contents;
        post.date = date;
        post.like = 0;
        post.comments = [];

        post.save(function (err) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.json({ status: 'SUCCESS' });
            }
        });

    });

router.route('/like').
    post(function (req, res, next) {

        console.log('/sns/like');

        var _id = req.body._id;

        postModel.findOne({ _id: _id }, function (err, post) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                post.like++;

                post.save(function (err) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        res.json({ status: 'SUCCESS' });
                    }
                });
            }
        });

    });

router.route('/unlike').
    post(function (req, res, next) {

        console.log('/sns/unlike');

        var _id = req.body._id;

        postModel.findOne({ _id: _id }, function (err, post) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                if (post.like > 0) {
                    post.like--;

                    post.save(function (err) {
                        if (err) {
                            console.log(err);
                            throw err;
                        } else {
                            res.json({status: 'SUCCESS'});
                        }
                    });
                }
            }
        });

    });

router.route('/comment').
    post(function (req, res, next) {

        console.log('/sns/comment');

        var _id = req.body._id;
        var author = req.body.author;
        var comment = req.body.comment;
        var date = Date.now();

        postModel.findOne({ _id: _id }, function (err, post) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                post.comments.push({ author: author, comment: comment, date: date });

                post.save(function (err) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        res.json({ status: 'SUCCESS' });
                    }
                });
            }
        });

    });


router.route('/del').
    post(function (req, res, next) {

        console.log('/sns/del');

        var _id = req.body._id;

        postModel.remove({ _id: _id }, function (err, result) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.json({ status: 'SUCCESS' });
            }
        });
    });

router.route('/modify').
    post(function (req, res, next) {

        console.log('/sns/modify');

        var _id = req.body._id;
        var contents = req.body.contenst;

        postModel.findOne({ _id: _id }, function (err, post) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                post.contents = contents;

                post.save(function (err) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        res.json({ status: 'SUCCESS' });
                    }
                });
            }
        });

    });

module.exports = router;
