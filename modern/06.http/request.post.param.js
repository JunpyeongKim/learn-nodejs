/**
 * 6.4 request 객체
 * - 6.4.4 POST 요청 매개 변수 추출
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
var fs = require('fs');

http.createServer(function (request, response) {

    if (request.method === 'GET') {
        console.log('HTTP Request GET...');

        fs.readFile('HTMLPagePOST.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if (request.method === 'POST') {
        console.log('HTTP Request POST...');

        request.on('data', function (data) {
            console.log('POST data:', data);    // <Buffer 64 61 74 61 5f 61 3d 61 61 61 61 61 26 64 61 74 61 5f 62 3d 62 62 62 62>
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>' + data + '</h1>');
        });
    }

}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});