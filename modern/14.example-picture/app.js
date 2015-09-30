/**
 *
 * 14. 실시간 온라인 그림판
 * - Connect Project
 *  - Real-time Online Picture Board
 *
 * $ npm install
 * $ node app
 *
 * open http://127.0.0.1:52273
 *
 */


var connect = require('connect');
var ejs = require('ejs');
var fs = require('fs');
var socketio = require('socket.io');

var roomArray = [];

var server = connect.createServer();

server.use(connect.static(__dirname + '/Resource'));

server.use(connect.router(function (app) {
    app.get('/', function (req, res) {
        fs.readFile('Lobby.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error: readFile(Lobby.html),', error);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    });

    app.get('/canvas/:room', function (req, res) {
        fs.readFile('Canvas.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error: readFile(Lobby.html),', error);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(ejs.render(data, {
                    room: req.params.room
                }));
            }
        });
    });

    app.get('/room', function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(JSON.stringify(roomArray));
    });
}));

server.listen(52273, function () {
    console.log('Server Running at http:/127.0.0.1:52273');
});

var io = socketio.listen(server);
var room = '';  //temp
io.sockets.on('connection', function (socket) {
    socket.on('join', function (data) {
        socket.join(data);
        //socket.set('room', data);
        room = data;
    });

    socket.on('draw', function (data) {
        //socket.get('room', function (error, room) {
            io.sockets.in(room).emit('line', data);
        //});
    });

    socket.on('addroom', function (data) {
        roomArray.push(data);
        io.sockets.emit('addroom', data);
    });
});