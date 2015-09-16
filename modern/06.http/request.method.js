/**
 * 6.4 request 객체
 * - 6.4.2 method 속성을 사용한 페이지 구분
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
 * - http://127.0.0.1:52273/OtherPage
 *
 */

var http = require('http');

http.createServer(function (request, response) {
    if (request.method === 'GET') {
        console.log('GET 요청입니다.');
    } else if (request.method === 'POST') {
        console.log('POST 요청입니다.');
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});