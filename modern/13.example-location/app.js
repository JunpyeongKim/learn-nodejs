/**
 *
 * 13. 실시간 위치 추적
 * - Connect Project
 *  - Real-time Location Tracking
 *
 * $ npm install
 * $ node app
 *
 * open http://127.0.0.1:52273/Tracker
 * open http://127.0.0.1:52273/Observe
 *
 */


var connect = require('connect');
var socketio = require('socket.io');
var fs = require('fs');
var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'root',
    //password: 'password',
    database: 'location'
});

var server = connect.createServer();

server.use(connect.query());

server.use(connect.router(function (app) {
    app.get('/Tracker', function (req, res) {
        fs.readFile('Tracker.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error: readFile(Tracker.html), ', error);
                throw error;
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    });

    app.get('/Observer', function (req, res) {
        fs.readFile('Observer.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error: readFile(Observer.html), ', error);
                throw error;
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    });

    app.get('/ShowData', function (req, res) {
        console.log('/ShowData?', req.query);

        client.query('SELECT * FROM locations WHERE name=?', [req.query.name], function (error, results) {
            if (error) {
                console.log('Error: DB Select');
            } else {
                console.log(results.length + ":", results);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(JSON.stringify(results));
            }
        });
    });
}));

server.listen(52273, function () {
    console.log('Server Running at http:/127.0.0.1:52273');
});

var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('join', function (data) {
        socket.join(data);
    });

    socket.on('location', function (data) {
        client.query('INSERT INTO locations(name, latitude, longitude, date) VALUES (?, ?, ?, NOW())',
            [data.name, data.latitude, data.longitude],
            function (error, result) {
                if (error) {
                    console.log('Error: DB Insert');
                }
            });

        io.sockets.in(data.name).emit('receive', {
            latitude: data.latitude,
            longitude: data.longitude,
            date: data.date
        });
    });
});