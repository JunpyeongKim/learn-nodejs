/**
 *
 * 11. 영화 예매
 * - Connect Project
 *  - Movie Reservation
 *
 */

var connect = require('connect');
var socketio = require('socket.io');
var fs = require('fs');


var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

var server = connect.createServer(connect.router(function (app) {
    app.get('/', function (req, res, next) {
        fs.readFile('HTMLPage.html', 'utf8', function (error, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    });

    app.get('/seats', function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(seats));
    });
}));

server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

var io = socketio.listen(server);
//io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    socket.on('reserve', function (data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});