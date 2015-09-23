/**
 * A.1 http 모듈을 사용한 웹 페이지 다운로드
 * - 다른 사이트의 웹 페이지를 다운로드할 때 사용
 *  - get(options[, callback])
 *      - https://nodejs.org/docs/latest-v0.12.x/api/http.html#http_http_get_options_callback
 *  - request(options[, callback])
 *      - https://nodejs.org/docs/latest-v0.12.x/api/http.html#http_http_request_options_callback
 *
 * $ node http.get
 */

var http = require('http');
var fs = require('fs');

var options = {
    host: 'www.kma.go.kr',
    path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
};


http.get(options, function (response) {
    var result = '';

    response.setEncoding('utf8');

    response.on('end', function () {
        console.log('Event: end');
        fs.writeFile('XMLFile.xml', result);
    }).on('data', function (data) {
        console.log('Data Download:');
        result += data;
    });
});