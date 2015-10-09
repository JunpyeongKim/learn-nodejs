var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

// 404 & 500 에러처리 - router 미들웨어에 구현되어 있다

// homepage
app.get('/', function (req, res) {
    res.render('index');
});

//say-hello
app.get('/say-hello', function (req, res) {
    res.render('hello');
});

app.get('/test', function (req, res) {
    res.send('this is a test');
});

http.createServer(app).listen(3000, function () {
    console.log('App started');
});
