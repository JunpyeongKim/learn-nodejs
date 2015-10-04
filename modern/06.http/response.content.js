/**
 * 6.3 response 객체
 * - 6.3.2 이미지와 음악 파일 제공
 *
 * MIME Type ('Content-Type')
 * - text/plain, text/html, text/css, text/xml
 * - image/jpeg, image/png, video/mpeg, audio/mp3
 *
 */

var fs = require('fs');
var http = require('http');

// Image Server
http.createServer(function (request, response) {

    // Image file
    fs.readFile('Chrysanthemum.jpg', function (error ,data) {
        if (error) {
            console.log('Error: readFile(),\n', error);
        } else {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.end(data);
        }
    });

}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});


// Sound Server
http.createServer(function (request, response) {

    // Sound file
    fs.readFile('Kalimba.mp3', function (error ,data) {
        if (error) {
            console.log('Error: readFile(),\n', error);
        } else {
            response.writeHead(200, {'Content-Type': 'audio/mp3'});
            response.end(data);
        }
    });

}).listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');
});
