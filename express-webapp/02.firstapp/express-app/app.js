var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

// 공용 dir 을 정적 폴더 dir 로 설정함
//  - 정적 폴더를 다중으로 설정 가능
app.use(express.static('./public'));
app.use(express.static('./files'));
app.use(express.static('./downloads'));

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
