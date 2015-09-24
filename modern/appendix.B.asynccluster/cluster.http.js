/**
 * B.3 멀티 코어 처리 - cluster 모듈
 * - 6.0 ~ : Built-in
 * - 대용량 서버 처리
 *
 * Method
 * - fork()
 *  - Worker Process 생성
 *  - Master Process가 사용 가능
 *
 * Attribute
 * - isMaster
 * - isWorker
 *
 * Event
 * - death
 *
 */

var cluster = require('cluster');
var os = require('os');
var http = require('http');
var fs = require('fs');


var cpuCount = os.cpus().length;
console.log('CPU Count:', cpuCount);

if (cluster.isMaster) {
    // Master Process
    for (var i = 0; i < cpuCount; i++) {
        console.log('[Master Process] cluster.fork()');
        cluster.fork();

        cluster.on('death', function (worker) {
            console.log('Worker', worker.pid, 'died');
        });
    }
} else {
    // Worker Process
    http.createServer(function (request, response) {
        console.log('Worker: ', cluster.worker.id);
        try {
            var data = fs.readFileSync('HTMLPage.html', 'utf8');

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        } catch (exception) {
            console.log(exception);
        }
    }).listen(52273, function () {
        console.log('[Worker Process] Server Running at http://127.0.0.1:52273');
    });
}