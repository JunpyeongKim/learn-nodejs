/**
 * 6.4 request 객체
 * - 6.4.1 url 속성을 사용한 페이지 구분
 *
 * request attributes
 * - method
 * - url
 * - headers
 * - trailers
 * - httpVersion
 *
 * go to (Node.js는 기본적으로 요청시 대소문자를 구분한다.)
 * - http://127.0.0.1:52273
 * - http://127.0.0.1:52273/OtherPage
 *
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname === '/') {
        fs.readFile('Index.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if (pathname ==='/OtherPage') {
        fs.readFile('OtherPage.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});