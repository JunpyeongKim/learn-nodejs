/**
 * A.3 net 모듈을 사용한 TCP 클라이언트
 *
 * connect(port, ip, callback)
 *
 */

var net = require('net');

var socket = net.connect(52273, '127.0.0.1', function () {
    console.log('Console Start');
});

socket.on('data', function (data) {
    console.log(data.toString());
});

process.stdin.resume();
process.stdin.on('data', function(chunk) {
    socket.write('ECHO: ' + chunk);
});