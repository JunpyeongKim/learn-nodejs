/**
 * 10.2 소켓 통신 종류
 * - Public: io.sockets.emit()
 * - Broadcast: socket.broadcast.emit()
 * - Private: io.sockets.sockets[socket.id].emit()
 *
 * $ npm install socket.io
 * Go to http://localhost:52273
 *
 *
 */

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273);

// port: 일반적으로 웹서버와 함께 사용하므로 server 객체를 매개 변수로 입력한다.
var io = socketio.listen(server);
var id = 0;
//io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    console.log('Socket Event: connection...');

    id = socket.id;

    socket.on('rint', function (data) {
        console.log('Client Send Data:', data);

        // Public
        io.sockets.emit('smart', data);

        // Broadcast
        socket.broadcast.emit('smart', data);

        // Private
        io.sockets.sockets[id].emit('smart', data);
    });
});