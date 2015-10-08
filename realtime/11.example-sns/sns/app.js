var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var sns = require('./routes/sns');

var app = express();

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
    //callbackPath('/auth/google/callback').
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
        //return;
    }

    //console.log('logged in');
    next();
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(check_auth);

app.use('/', routes);
app.use('/users', users);

app.use('/sns', sns);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
