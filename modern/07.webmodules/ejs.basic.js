/**
 * 7.1 EJS 모듈
 *
 * $ npm install ejs
 *
 * render(str [, option])
 * - EJS --> HTML
 *
 * EJS 파일 형식
 * - <% CODE %>
 * - <%= VALUE %>
 *
 * https://github.com/visionmedia/ejs
 *
 */

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response) {
    fs.readFile('EJSPage.ejs', 'utf8', function (error, data) {
        if (error) {
            console.log('Error: readFile(EJSPage.ejs),', error);
        } else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(ejs.render(data, {
                name: 'RintIanTta',
                description: 'Hello EJS With Node.js ...'
            }));
        }
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});