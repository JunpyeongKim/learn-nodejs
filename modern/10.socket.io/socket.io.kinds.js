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


// Web Server
var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPageKinds.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});


// WebSocket Server
// - port: 일반적으로 웹서버와 함께 사용하므로 server 객체를 매개 변수로 입력한다.
var io = socketio.listen(server);
var ids = []; // temporary
//io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    console.log('Socket Event: connection...', socket.id);

    //id = socket.id;
    ids.push(socket.id);

    // Public Socket
    socket.on('public.socket', function (data) {
        console.log('Client Send Data:', data);

        io.sockets.emit('smart', 'Public Socket:\n' + data);
    });

    // Broadcast Socket
    socket.on('broadcast.socket', function (data) {
        console.log('Client Send Data:', data);

        socket.broadcast.emit('smart', 'Broadcast Socket:\n' + data);
    });

    // Private Socket
    socket.on('private.socket', function (data) {
        console.log('Client Send Data:', data);

        console.log('ids:', ids);

        io.sockets.sockets.forEach(function (socket, index) {
            console.log(index, ':', socket.id);

            ids.forEach(function (id, index) {
                if (socket.id === id) {
                    socket.emit('smart', 'Private Socket:\n' + data);
                }
            });
        });
    });
});
