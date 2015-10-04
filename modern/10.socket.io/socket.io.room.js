/**
 * 10.4 방 생성
 * - socket.join(room)
 * - io.sockets.in(room)
 *
 * $ npm install socket.io
 * Go to http://localhost:52273
 *
 * 웹브라우저 3개 실행 테스트
 * - 2개는 같은 방
 * - 1개는 다른 방
 *
 */

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');


// Web Server
var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPageRoom.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});


// WebSocket Server
// - port: 일반적으로 웹서버와 함께 사용하므로 server 객체를 매개 변수로 입력한다.
var io = socketio.listen(server);
var room = '';
//io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    console.log('Socket Event: connection...,', socket.id);

    socket.on('join', function (data) {
        console.log('Client Send Data:', data);
        socket.join(data);
        //socket.set('room', data);
        room = data
    });

    socket.on('message', function (data) {
        console.log('Socket Event: message...', data);
        //socket.get('room', function (error, room) {
            io.sockets.in(room).emit('message', data);
        //});
    });
});
