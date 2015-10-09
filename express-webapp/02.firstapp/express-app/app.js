var http = require('http');
var express = require('express');
var app = express();

http.createServer(app).listen(3000, function () {
    console.log('Express app started');
});

// 404 & 500 에러처리 - router 미들웨어에 구현되어 있다

// 서버를 시작시키는 고드 다음에 라우트가 정의되어 있어도 정상 동작하는 이유
//  - 라우트가 참조값 형태로 전달되는 app 객체에 정의되기 때문
app.get('/', function (req, res) {
    //res.send('Welcome!');
    res.send('<h1>Welcome!</h1>');
});