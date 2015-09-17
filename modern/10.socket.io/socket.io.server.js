/**
 * 10.1 socket.io 모듈 기본
 * - 10.1.1 웹 소켓 서버
 * - 10.1.2 웹 소켓 클라이언트
 * - 10.1.3 웹 소켓 이벤트
 *
 * socket.io 모듈
 * - WebSocket Server 를 쉽게 구현가능하게 해주는 모듈
 *
 * $ npm install socket.io
 * Go to http://localhost:52273
 *
 * Events
 * - connection
 * - disconnection
 *
 * Methods
 * - on()
 * - emit()
 *
 */

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');


// Web Server
var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});


// WebSocket Server
// - port: 일반적으로 웹서버와 함께 사용하므로 server 객체를 매개 변수로 입력한다.
var io = socketio.listen(server);
//io.set('log level', 2);  // not valid?
io.sockets.on('connection', function (socket) {
    console.log('Socket Event: connection...,', socket.id);

    socket.on('rint', function (data) {
        console.log('Client Send Data:', data);
        socket.emit('smart', data);
    });
});
