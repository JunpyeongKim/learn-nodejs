/**
 * 10.5 웹 채팅
 * - 웹 & 모바일 채팅 구현
 * - 메시지는 모든 클라이언트에게 전달
 *
 * $ npm install socket.io
 * Go to http://localhost:52273
 *
 */

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (request, response) {
    //fs.readFile('HTMLPageMobileChat.html', function (error, data) {
    fs.readFile('HTMLPageWebChat.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273);

// port: 일반적으로 웹서버와 함께 사용하므로 server 객체를 매개 변수로 입력한다.
var io = socketio.listen(server);
var room = ''
//io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    console.log('Socket Event: connection...');

    socket.on('message', function (data) {
        console.log('Socket Event: message', data);
        io.sockets.emit('message', data);
    });
});
