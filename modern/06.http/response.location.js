/**
 * 6.3 response 객체
 * - 6.3.4 페이지 강제 이동
 *
 * Response Header의 Location 속성 이용
 *
 * HTTP Status Code
 * - 1XX : Processing       e.g. 100 Continue
 * - 2XX : Success          e.g. 200 OK
 * - 3XX : Redirection      e.g. 300 Multiple Choices
 * - 4XX : Client Error     e.g. 400 Bad Request
 * - 5XX : Server Error     e.g. 500 Internal Server Error
 *
 */

var http = require('http');

// Redirection Server
http.createServer(function (request, response) {

    response.writeHead(302, {'Location': 'http://hanb.co.kr'});
    response.end();

}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});


// Unknown Server
http.createServer(function (request, response) {

    response.writeHead(400);
    response.end();

}).listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');
});