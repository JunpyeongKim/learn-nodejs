/**
 * 6.3 response 객체
 * - 6.3.3 쿠키 생성
 *
 * Cookie
 * - Key-Value pair
 * - could be stored in both Client and Server
 * - http.ServerResponse's Header
 *  - 'Set-Cookie' = ['Name=Value; Expires=날짜; Domain=도메인; Path=경로, Secure']
 *
 */

var http = require('http');

http.createServer(function (request, response) {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breakfast=toast; Expires=' + date.toUTCString(),
            'dinner=chicken'
        ]
    });

    // request.headers.cookie: 'breakfast=toast; dinner=chicken'
    response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
