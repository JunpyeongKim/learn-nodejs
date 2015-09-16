/**
 * 10.3 클라이언트 정보 저장
 * - set()
 * - get()
 * - deprecated --> Check!!!
 *
 * $ npm install socket.io
 * Go to http://localhost:52273
 *
 */

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPageStore.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273);

// port: 일반적으로 웹서버와 함께 사용하므로 server 객체를 매개 변수로 입력한다.
var io = socketio.listen(server);
//io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    console.log('Socket Event: connection...');

    socket.on('setname', function (data) {
        console.log('Client Send Data:', data);
        //socket.set('name', data);
    });

    socket.on('getname', function () {
        //socket.get('name', function (error, data) {
        //    socket.emit('responsename', data);
        //});
    });
});