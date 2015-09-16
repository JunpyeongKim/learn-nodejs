/**
 * 6.2 server 객체
 *
 * http.Server 객체에서 중요한 것은 이벤트
 * - EventEmitter 객체를 기반으로 만들어졌으므로 이벤트 연결 가능
 * - https://nodejs.org/docs/latest-v0.12.x/api/http.html#http_class_http_server
 *
 * methods
 * - listen(port [, callback])
 *  - 0 ~ 65535
 * - close()
 *
 * events
 * - request, connection, close, checkContinue, connect, upgrade, clientError
 *  - request 이벤트 핸들러는 createServer()의 매개변수로 입력 가능
 *
 */

var http = require('http');

///* Alternative 01
var server = http.createServer();

server.on('request', function (request, response) {
    console.log('Event: "request" ...');

    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello World...</h1>');
});
//*/

/* Alternative 02
// https://nodejs.org/docs/latest-v0.12.x/api/http.html#http_http_createserver_requestlistener
var server = http.createServer(function (request, response) {
    console.log('Event: \'request\' ...');

    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello World...</h1>');
});
//*/

server.on('connection', function () {
    console.log('Event: "connection" ...');
});

server.on('close', function () {
    console.log('Event: "close" ...');
});

server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

setInterval(function () {
    console.log('server.close() ...');
    server.close();
}, 10000);
