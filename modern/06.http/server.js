/**
 * 6.2 server 객체
 *
 * Server 객체에서 중요한 것은 이벤트
 * - EventEmitter 객체를 기반으로 만들어 졌으므로 이벤트 연결 가능
 *
 * methods
 * - listen(port [, callback])
 *  - 0 ~ 65535
 * - close()
 *
 * events
 * - request, connection, close, checkContinue, upgrade, clientError
 *  - request 이벤트 핸들러는 createServer()의 매개변수로 입력 가능
 *
 */

var http = require('http');

///*
var server = http.createServer();

server.on('request', function () {
    console.log('Request On');
});
//*/

/*
var server = http.createServer(function (request, response) {
    console.log('Request On');
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello World...</h1>');
});
//*/

server.on('connection', function () {
    console.log('Connection On');
});

server.on('close', function () {
    console.log('Close On');
});

server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1');
});

setInterval(function () {
    console.log('server.close()...');
    server.close();
}, 10000);
