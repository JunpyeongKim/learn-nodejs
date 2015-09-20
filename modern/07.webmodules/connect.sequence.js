/**
 * 7.3 connect 모듈 기본
 *
 * $ npm install connect@1.8.5
 *
 * function(request, respnse, next) {}
 *
 */

var connect = require('connect');

connect.createServer(function (request, response, next) {
    console.log('first function...');

    next();
}, function (request, response, next) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Connect Module</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
