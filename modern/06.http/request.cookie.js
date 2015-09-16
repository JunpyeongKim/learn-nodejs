/**
 * 6.4 request 객체
 * - 6.4.5 쿠키 추출
 *
 * request attributes
 * - method : 대문자
 * - url
 * - headers
 * - trailers
 * - httpVersion
 *
 * go to (Node.js는 기본적으로 요청시 대소문자를 구분한다.)
 * - http://127.0.0.1:52273
 *
 */


var http = require('http');

http.createServer(function (request, response) {
    var cookie = request.headers.cookie;
    cookie = !cookie ? cookie : cookie.split(';').map(function (element) {
        var element = element.split('=');
        return {
            key: element[0],
            value: element[1]
        };
    });

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name=RintIanTta', 'region=Seoul']
    });

    response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});