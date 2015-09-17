/**
 * 10.3 클라이언트 정보 저장 - deprecated --> Check!!!
 * - set()
 * - get()
 *
 * $ npm install socket.io
 * Go to http://localhost:52273
 *
 */

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');


// Web Server
var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPageStore.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});


// WebSocket Server
// - port: 일반적으로 웹서버와 함께 사용하므로 server 객체를 매개 변수로 입력한다.
var io = socketio.listen(server);
var name = '';  // temporary
//io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    console.log('Socket Event: connection...,', socket.id);

    socket.on('setname', function (data) {
        console.log('Client Send Data:', data);
        //socket.set('name', data);
        name = data;
    });

    socket.on('getname', function () {
        //socket.get('name', function (error, data) {
            data = name;
            socket.emit('responsename', data);
        //});
    });
});
