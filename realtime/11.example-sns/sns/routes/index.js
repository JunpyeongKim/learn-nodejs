var express = require('express');
var router = express.Router();
/*
var everyauth = require('everyauth');

everyauth.debug = true;

var usersById = {};
var nextUserId = 0;
var usersByGoogleId = {};

var addUser = function (source, sourceUser) {
    var user;

    if (arguments.length === 1) {
        user = sourceUser = source;
        user.id = nextuserId++;

        return usersById[nextUserId] = user;
    } else {
        user = usersById[++nextUserId] = { id: nextUserId };
        user[source] = sourceUser;
    }

    return user;
};

everyauth.everymodule.
    findUserById(function (id, callback) {
        callback(null, usersById[id]);
    });

everyauth.google.
    entryPath('/auth/google').
    callbackPath('/auth/google/callback').
    appId('1004367875263-i91fhko686n0rdvebdvh8n2t3a3q2556.apps.googleusercontent.com').
    appSecret('2_MOD__XGxdZ7nRb5JOwOBM4').
    scope('https://www.googleapis.com/auth/userinfo.profile').
    handleAuthCallbackError(function (req, res) {
        //TODO:
        console.log('handleAuthCallbackError');
    }).
    findOrCreateUser(function (session, accessToken, extra, googleUser) {
        googleUser.refreshToken = extra.refresh_token;
        googleUser.expiresIn = extra.expires_in;

        return usersByGoogleId[googleUser.id] || (usersByGoogleId[googleUser.id] = addUser('google', googleUser));
    }).
    redirectPath('/');

var check_auth = function (req, res, next) {
    if (!req.loggedIn) {
        console.log('sns: not loggedin');

        res.redirect('/auth/google');
        //res.json({status: 'sns: not logged in'});
        //next();
        return;
    }

    console.log('logged in');
    next();
};

router.use(check_auth);
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  if (false) {//req.session.auth) {
      var name = req.session.auth.google.user.name;
      var picture = req.session.auth.goole.user.picture;

      res.render('index', { name: name, picture: picture });
  } else {
      res.render('index', { name: '', picture: '' });
  }
});

module.exports = router;
