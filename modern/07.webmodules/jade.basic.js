/**
 * 7.2 Jade 모듈
 *
 * $ npm install jade
 *
 * compiler(str)
 * - Jade(HAML 파일 형식) --> HTML 변경하는 function 을 생성
 *
 */

var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (request, response) {
    fs.readFile('JadePage.jade', 'utf8', function (error, data) {

        if (error) {
            console.log('Error: readFile(JadePage.jade),', error);
        } else {
            var fn = jade.compile(data);

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(fn({
                name: 'RintIanTta',
                description: 'Hello EJS With Node.js .. !'
            }));
        }
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});