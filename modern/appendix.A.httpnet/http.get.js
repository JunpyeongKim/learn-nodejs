/**
 * A.1 http 모듈을 사용한 웹 페이지 다운로드
 * - 다른 사이트의 웹 페이지를 다운로드할 때 사용
 *  - get()
 *  - request()
 *
 * $ node http.get
 */

var http = require('http');
var fs = require('fs');

http.get({
    host: 'www.kma.go.kr',
    path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function (response) {
    var result = '';

    response.setEncoding('utf8');
    response.on('end', function () {
        fs.writeFile('XMLFile.xml', result);
    }).on('data', function (data) {
        console.log('Data Download:');
        result += data;
    });
});