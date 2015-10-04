/**
 * 9.3.2 미들웨어 설정
 *
 * set()
 *  - basepath
 *  - views
 *  - view engine
 *  - view options
 *  - view cache
 *  - case sensitive routes
 *  - strict routing
 *
 * 9.4 페이지 라우트
 * - Router middleware
 *
 * 9.6 response 객체
 *
 * method
 *  - header()
 *  - contentType()
 *  - redirect()
 *  - cookie()
 *  - clearCookie()
 *  - render()
 *  - partial()
 *
 * attribute
 *  - charset
 *
 * 9.7 request 객체
 *
 * method
 *  - header()
 *  - accepts()
 *  - param()
 *      - params, query, body
 *  - is()
 *      - Content-Type 속성
 *
 * attribute
 * - isXMLHttpRequest
 *
 */

/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// 9.3.3 실행 환경 설정
//app.settings.env = 'production';  // $ NODE_ENV=production node app

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set('case sensitive routes', true);   // ??
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());    // 9.6.2 쿠키 생성
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
}

app.get('/', routes.index);
app.get('/users', user.list);

// 9.4.1 페이지 라우트 기본
//app.get('/life', function (request, response, next) {
//  //response.writeHead(200, {'Content-Type': 'text/html'});
//  //response.end('<h1>Life Page</h1>');
//
//  response.send('<h1>Life Page</h1>',
//      {'Content-Type': 'text/html'},
//      200);
//});

app.get('/life', routes.life);

// 9.4.3 단일 페이지 렌더링
// 9.4.4 폴더를 사용한 페이지 분류
// 9.5 레이아웃 페이지
app.get('/Product', function (request, response) {
  response.render('product', {
    title: 'Product Page'
  });
});

app.get('/Product/Insert', function (request, response) {
  response.render('product/insert', {
    title: 'Insert Page'
  });
});

app.get('/Product/Edit', function (request, response) {
  response.render('product/edit', {
    title: 'Edit Page'
  });
});

app.get('/NoLayout', function (request, response) {
    response.render('product', {
        layout: false
    });
});

app.get('/OtherLayout', function (request, response) {
    response.render('product', {
        layout: 'mylaout.jade'
    });
});

// 9.6.1 페이지 강제 이동
app.get('/Redirect', function (request, response) {
    //response.writeHead(302, {'Location': 'http://hanb.co.kr'});
    //response.end();

    response.redirect('http://hanb.co.kr');
});

// 9.6.2 쿠키 생성
// options
// - httpOnly, secure, expires, maxAge, Path
app.get('/Cookie', function (request, response) {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    //response.writeHead(200, {
    //    'Content-Type': 'text/html',
    //    'Set-Cookie': [
    //        'name1=value1; expires=' + date,
    //        'name2=value2; secure'
    //    ]
    //});
    response.cookie('name1', 'value1', {
        expires: date
    });

    response.cookie('name2', 'value2', {
        //maxAge: 1000 * 60 * 10
        secure: true
    });

    response.writeHead(200, {'Content-Type': 'text/html'});

    console.log('request.cookies:', request.cookies);
    response.end('<h1>' + JSON.stringify(request.cookies) + '</h1>');
});

// 9.7.1 요청 헤더의 속성 추출
app.get('/OnlyChrome', function (request, response) {
    var agent = request.header('User-Agent');

    if (agent.toLowerCase().match(/chrome/)) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1>Welcome Chrome ...!</h1>');
    } else {
        response.redirect('/');
    }
});

// 9.7.2 요청 매개 변수 추출
// - params, query, body
// - http://127.0.0.1:3000/Product/27?name=rintiantta
app.get('/Product/:id', function (request, response) {
    var output = '';

    console.log('request.params.id:', request.params.id);
    console.log('request.query.name:', request.query.name);

    output += '<h1>id: ' + request.param('id') + '</h1>';   // request.params.id
    output += '<h1>name: ' + request.param('name') + '</h1>';   // request.query.name

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(output);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
