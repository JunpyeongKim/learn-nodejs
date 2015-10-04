/**
 * 6.3 response 객체
 * - 6.3.1 File System 모듈을 사용한 HTML 페이지 제공
 *
 */

var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {

    // HTML file
    fs.readFile('HTMLPageFS.html', 'utf8', function (error ,data) {
        if (error) {
            console.log('Error: readFile(),\n', error);
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }
    });

}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
