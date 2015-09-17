/**
 * 6.4 request 객체
 * - 6.4.3 GET 요청 매개 변수 추출
 *
 * request attributes
 * - method : 대문자
 * - url
 * - headers
 * - trailers
 * - httpVersion
 *
 * go to (Node.js는 기본적으로 요청시 대소문자를 구분한다.)
 * - http://127.0.0.1:52273?name=rintiantta&region=seoul
 *
 */


var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query; // {name:"rintiantta", region:"seoul"}

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});