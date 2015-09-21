/**
 * A.2 net 모듈을 사용한 TCP 서버
 * - net 모듈은 소켓과 관련된 모듈
 * - http 모듈과 유사
 *
 * createServer([requestListener])
 * - function (socket) {}
 *
 * Echo Server
 *
 * $ telnet 127.0.0.1 52273
 *
 */

var net = require('net');

net.createServer(function (socket) {
    socket.on('data', function (data) {
        console.log(data.toString('utf8'));
        socket.write(data);
    });
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});
