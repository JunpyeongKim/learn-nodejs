/**
 * 8. 기타 유용한 확장 모듈
 *
 * forever
 * - (*) 중지되더라도 재시작으로 계속 실행되도록
 *
 * - $ sudo npm install forever -g
 *  - $ forever start app.js
 *  - $ forever list
 *  - $ forever stop PID
 *
 * - (*) $ nohup node ./server.js &
 *      - in Linux, node application 을 background 로 실행
 *
 */

var forever = require('forever');

forever.start(__dirname + '/app.js');

// 터미널을 종료하더라도 계속 실행되도록
forever.startDaemon(__dirname + '/app.js', {
    env: { NODE_ENV: 'production' },
    spawnWith: { env: process.env }
});

forever.stop(index);

forever.stopAll();