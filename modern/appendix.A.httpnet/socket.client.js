/**
 * A.3 net 모듈을 사용한 TCP 클라이언트
 *
 * connect(port[, host, connectionListener)
 * - https://nodejs.org/docs/latest-v0.12.x/api/net.html#net_net_connect_port_host_connectlistener
 *
 * connect(options[, connectionListener])
 * - https://nodejs.org/docs/latest-v0.12.x/api/net.html#net_net_connect_options_connectionlistener
 *
 * connect(path[, connectionListener])
 * - https://nodejs.org/docs/latest-v0.12.x/api/net.html#net_net_connect_path_connectlistener
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