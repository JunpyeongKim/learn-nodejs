/**
 * 7.4 connect 모듈 미들웨어 기본
 *  - 7.4.1 Query middleware
 *  - 7.4.2 Logger middleware
 *  - 7.4.3 Error Handler middleware
 *  - 7.4.4 Static middleware
 *
 * 7.5 Router middleware
 * 7.6 Cookie Parser middleware
 * 7.7 Body Parser middleware
 * 7.8 Session middleware
 *
 * middlewares (connect 모듈의 메서드로 존재)
 * - logger
 *  - token
 *      - :req[header]
 *      - :res[header]
 *      - :http-version
 *      - :response-time
 *      - :remote-addr
 *      - :data
 *      - :method
 *      - :url
 *      - :referrer
 *      - :user-agent
 *      - :status
 *      - default format
 *          - default
 *              - :remote-addr -- [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
 *          - short
 *              - :remote-addr - :method :url HTTP/:http-version" :status :res[content-length] :response-time ms
 *          - tiny
 *              - :method :url :status :res[content-length] - :response-time ms
 * - csrf
 * - basicAuth
 * - bodyParser
 * - cookieParser
 * - session
 *  - options
 *      - key, store, cookie
 *  - methods
 *      - regenerate(), destroy(), reload(), save()
 * - compiler
 * - methodOverride
 * - responseTime
 * - router
 *  - function (app) {}
 *      - app.get() / .post() / .all()
 * - staticCache
 * - static
 * - directory
 * - vhost
 * - favicon
 * - limit
 * - profiler
 * - query
 * - errorHandler
 *
 * http://127.0.0.1:52273?name=rintiantta&region=seoul
 *
 */

var connect = require('connect');
var fs = require('fs');

var id = 'rintiantta';
var password = '12345678';

var logger_token;
//var logger_token = ':method + :date';
//var logger_token = 'short';

/*
connect.createServer(
    //----------------------------------
    // 7.4.2 Logger middleware
    connect.logger(logger_token),

    //----------------------------------
    // 7.4.3 Error Handler middleware
    //function (request, response) {
    //    throw new Error('Page Not Found');
    //},

    connect.errorHandler({
        stack: true,    // stack >>> message
        message: true,
        dump: true
    }),

    //----------------------------------
    // 7.4.1 Query middleware
    connect.query(),

    //----------------------------------
    // 7.4.4 Static middleware
    connect.static(__dirname + '/Resources'),

    //----------------------------------
    // 7.6 Cookie Parser middleware
    connect.cookieParser(),

    //----------------------------------
    // 7.8 Session middleware
    // - connect.sid 쿠키를 사용
    // - 기본 설정 : 4 시간
    connect.session({
        secret: 'string',
        //key: 'another sid',    // default: connect.sid
        //store:    // 세션 저장소를 설정
        cookie: {   // 생성할 cookie와 관련된 정보
            maxAge: 60 * 1000
        }
    }),

    //----------------------------------
    // 7.7 Body Parser middleware
    connect.bodyParser(),

    //----------------------------------
    // 7.5 Router middleware
    connect.router(function (app) {
        app.get('/Home/Index', function (request, response, next) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('<h1>Index Page</h1>');
            response.end();
        });

        app.get('/Home/About', function (request, response, next) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('<h1>About Page</h1>');
            response.end();
        });

        app.get('/Product/:id', function (request, response, next) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('<h1>Product Page - ' + request.params.id + '</h1>');
            response.end();
        });

        //----------------------------------
        // 7.6 Cookie Parser middleware
        app.get('/SetCookie', function (request, response, next) {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Set-Cookie': ['breakfast=toast', 'dinner=lunch']
            });
            response.end('<a href="/GetCookie">GO TO GET COOKIE</a>');
        });

        app.get('/GetCookie', function (request, response, next) {
            var output = JSON.stringify(request.cookies);

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>' + output + '</h1>');
        });

        // rintiantta / 12345678
        app.get('/Login', function (request, response, next) {
            if (request.cookies.auth === 'true') {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end('<h1>Login Success</h1>');
            } else {
                fs.readFile('Login.html', 'utf8', function (error, data) {
                     if (error) {
                        console.log('Error: readFile(Login.html),', error);
                     } else {
                         response.writeHead(200, {'Content-Type': 'text/html'});
                         response.end(data);
                     }
                });
            }
        });

        app.post('/Login', function (request, response, next) {
            if (request.body.id === id && request.body.password === password) {
                response.writeHead(302, {
                    'Location': '/Login',
                    'Set-Cookie': ['auth=true']
                });
                response.end();
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end('<h1>Login FAIL</h1>');
            }
        });

        app.get('/Session', function (request, response, next) {
            var output = '';
            output += '<p>Cookie: ' + JSON.stringify(request.cookies) + '</p>';
            output += '<h1>Session: ' + JSON.stringify(request.session) + '</h1>';

            request.session.now = (new Date()).toUTCString();

            console.log('request.cookies: ', request.cookies);
            console.log('request.session: ', request.session);

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(output);
        });

        app.all('*', function (request, response, next) {
            throw new Error('Page Not Found');
        });
    })//,

    // Default Routing
    //function (request, response, next) {
    //    response.writeHead(200, {'Content-Type': 'text/html'});
    //
    //    //----------------------------------
    //    // 7.4.1 Query middleware
    //    //response.end('<h1>' + JSON.stringify(request.query) + '</h1>');
    //
    //    //----------------------------------
    //    // 7.4.4 Static middleware
    //    response.end('<img src="/Penguins.jpg" width="100%" />');
    //}
    ).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
//*/


// use(middleware)
///*
var server = connect.createServer();

//----------------------------------
// 7.4.2 Logger middleware
server.use(connect.logger(logger_token));

//----------------------------------
// 7.4.3 Error Handler middleware
//server.use(function (request, response) {
//    throw new Error('Page Not Found');
//});

server.use(connect.errorHandler({
    stack: true,    // stack >>> message
    message: true,
    dump: true
}));

//----------------------------------
// 7.4.1 Query middleware
server.use(connect.query());

//----------------------------------
// 7.4.4 Static middleware
server.use(connect.static(__dirname + '/Resources'));

//----------------------------------
// 7.6 Cookie Parser middleware
server.use(connect.cookieParser());

//----------------------------------
// 7.8 Session middleware
// - connect.sid 쿠키를 사용
// - 기본 설정 : 4 시간
server.use(connect.session({
    secret: 'string',
    //key: 'another sid',    // default: connect.sid
    //store:    // 세션 저장소를 설정
    cookie: {   // 생성할 cookie와 관련된 정보
        maxAge: 60 * 1000
    }
}));

//----------------------------------
// 7.7 Body Parser middleware
server.use(connect.bodyParser());

//----------------------------------
// 7.5 Router middleware
server.use(connect.router(function (app) {
    app.get('/Home/Index', function (request, response, next) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>Index Page</h1>');
        response.end();
    });

    app.get('/Home/About', function (request, response, next) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>About Page</h1>');
        response.end();
    });

    app.get('/Product/:id', function (request, response, next) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>Product Page - ' + request.params.id + '</h1>');
        response.end();
    });

    //----------------------------------
    // 7.6 Cookie Parser middleware
    app.get('/SetCookie', function (request, response, next) {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['breakfast=toast', 'dinner=lunch']
        });
        response.end('<a href="/GetCookie">GO TO GET COOKIE</a>');
    });

    app.get('/GetCookie', function (request, response, next) {
        var output = JSON.stringify(request.cookies);

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1>' + output + '</h1>');
    });

    // rintiantta / 12345678
    app.get('/Login', function (request, response, next) {
        if (request.cookies.auth === 'true') {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>Login Success</h1>');
        } else {
            fs.readFile('Login.html', 'utf8', function (error, data) {
                if (error) {
                    console.log('Error: readFile(Login.html),', error);
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(data);
                }
            });
        }
    });

    app.post('/Login', function (request, response, next) {
        if (request.body.id === id && request.body.password === password) {
            response.writeHead(302, {
                'Location': '/Login',
                'Set-Cookie': ['auth=true']
            });
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>Login FAIL</h1>');
        }
    });

    app.get('/Session', function (request, response, next) {
        var output = '';
        output += '<p>Cookie: ' + JSON.stringify(request.cookies) + '</p>';
        output += '<h1>Session: ' + JSON.stringify(request.session) + '</h1>';

        request.session.now = (new Date()).toUTCString();

        console.log('request.cookies: ', request.cookies);
        console.log('request.session: ', request.session);

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(output);
    });

    app.all('*', function (request, response, next) {
        throw new Error('Page Not Found');
    });
}));

// Default Routing
//server.use(function (request, response, next) {
//    response.writeHead(200, {'Content-Type': 'text/html'});
//
//    //----------------------------------
//    // 7.4.1 Query middleware
//    //response.end('<h1>' + JSON.stringify(request.query) + '</h1>');
//
//    //----------------------------------
//    // 7.4.4 Static middleware
//    response.end('<img src="/Penguins.jpg" width="100%" />');
//});

server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
//*/